var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var logMgr = require('../utils/logger')('session.js', true);
var constants = require('../constants');
var db = require('../dbAccess')();
var generateGuid = require('../utils/uid-gen');
var responder = require('../responder');

var app = express();
app.use(cookieParser());

/* Endpoint to check if session exists, and if so, whether it is valid, and if so, what to do with it */
router.post('/', function(req, res, next) {
  if(req.body) {
    logMgr.verbose('> > > > > req.body: ' + JSON.stringify(req.body));
  }
  else {
    logMgr.verbose('> > > > > no req body');
  }

  // If session ID is entirely missing, visitor is here for the first time!
  if (!req.cookies.session_uid || req.cookies.session_uid == '') {
    createNewUser(req, res);
  }
  else {
    // If session cookie existed, do simple validation
    logMgr.out('Session ID found, validating . . .');

    var session_uid = req.cookies.session_uid;

    // Get a db connection from the pool
    db.getConnection(function(err, connection) {
      logMgr.verbose('Got DB connection from pool to check if any user has this session.');
      // If there's an error getting DB connection to check users with this session ID
      if(err) {
        responder.respondError(res, 'There was a problem getting a database connection.  Cannot validate session ID.');
        logMgr.error(err);
        return;
      }

      // Build query and callback to check for users with the current session_uid
      logMgr.out('Executing query to search for users with the current session_uid.');

      var query = 'SELECT * FROM users WHERE session_uid=?;'
      connection.query(query, [session_uid], function(err, rows) {
        if(err) {
          responder.respondError(res, 'Problem getting response from database checking session ID.');
          logMgr.error(err);
          connection.release();
          return;
        }

        // If multiple rows were returned, clear all session_uid entries
        // with this value to '0' and clear the current user's cookie
        if(rows.length > 1) {
          logMgr.warning('Found ' + rows.length + ' matching rows.  Removing duplicate session IDs in DB.');
          query = 'UPDATE users SET session_uid="0" WHERE session_uid=?;'
          connection.query(query, [session_uid], function(err, rows) {
            if(err) {
              responder.respondError(res, 'Database error trying to clear duplicate session IDs.');
              logMgr.error(err);
              connection.release();
              return;
            }

            responder.respond(res, session_uid);
            connection.release();
            return;
          });
        } // end clearing matched session_uid values

        // If no rows returned, no user was found with that session ID, so create and surface a new user
        else if(rows.length == 0) {
          createNewUser(req, res);
          connection.release();
          return;
        }

        // If one row was returned...
        else if(rows.length == 1) {
          var userRow = rows[0];
          var user_uid = userRow['uid'];
          if(req.body.hasOwnProperty('navigate')) {
            var destination = req.body.navigate;
            if(destination==constants.defaultParentUid) {
              responder.respondMsgOnly(res, {msg: "You are already at the first chapter."});
              connection.release();
              return;
            }

            query = 'UPDATE positions SET node_uid=? WHERE user_uid=?;';
            connection.query(query, [destination, user_uid], function(err, result) {
              if(err) {
                responder.respondError(res, 'Database error attempting to set new user position.');
                logMgr.error(err);
                connection.release();
                return;
              }

              responder.respond(res, session_uid);
              connection.release();
              return;
            });
          }
          else if(req.body.hasOwnProperty('votify')) {
            // start with extra validation that this user is allowed to votify!
            if(userRow['acct_type'] == constants.acctTypeVisitor) {
              responder.respondMsgOnly(res, {warning: 'Unregistered visitors may not participate in votification!'});
              connection.release();
              return;
            }

            var node_uid = req.body.votify;
            var newVote = req.body.newVote;

            var oldValue, newValue, voteValueDiff;
            switch(newVote) {
              case constants.votificationDown:
                newValue = -1;
                break;
              case constants.votificationNone:
                newValue = 0;
                break;
              case constants.votificationUp:
                newValue = 1;
                break;
              default:
                responder.respondError(res, 'Illegal votification value for old vote.');
                connection.release();
                return;
            }

            // now we will have to query the DB to learn if we must update existing votes, or create a new row
            var query =
              'SELECT nodes.uid, votes.sentiment AS sentiment ' +
                'FROM nodes ' +
                  'LEFT JOIN votes ' +
                    'ON nodes.uid=votes.node_uid AND votes.user_uid=? AND votes.node_uid=? ' +
                  'WHERE nodes.uid=?;';
            connection.query(query, [user_uid, node_uid, node_uid], function(error, rows) {
              if(rows.length > 1) {
                // too many rows back, indicates node duplicity
                responder.respondError(res, 'More than one vote detected for this user at this node.');
                connection.release();
                return;
              }
              else if(rows.length == 0) {
                // zero rows indicates node does not exist, can't vote on non-existent node
                responder.respondError(res, 'The node being voted on does not exist.  It may have been recently deleted.');
                connection.release();
                return;
              }

              var row = rows[0];

              if(row.sentiment == null) {
                // node existed so row returned, but no vote on that node for this user
                // create vote, and don't forget to update node's votification count

                // begin messy transaction code required by NPM mysql module:
                //
                query = 'START TRANSACTION; ' +
                  'INSERT INTO votes (user_uid, node_uid, sentiment) VALUES (?, ?, ?); ' +
                  'UPDATE nodes SET votification=votification+? WHERE uid=?;' +
                  'COMMIT;'
                logMgr.verbose('Trying vote creation query: ' + query);
                connection.query(query, [user_uid, node_uid, newValue, newValue, node_uid], function(error, rows) {
                  if(error) {
                    responder.respondMsgOnly(res, {error: 'Database error creating a vote for this user on this node.'});
                    logMgr.error('Database error: ' + error);
                    connection.release();
                    return;
                  }

                  res.cookie(constants.sessionCookie, session_uid, constants.cookieExpiry);
                  res.send(
                    JSON.stringify({
                      votification: newVote
                    })
                  );
                  connection.release();
                  return;
                });
                //
                // end messy transaction code required by NPM mysql module:
              }
              else {
                // node and vote existed, so instead of creating we will need to update both
                oldValue = row.sentiment;
                voteValueDiff = newValue - oldValue;
                query = 'UPDATE votes, nodes ' +
                  'SET votes.sentiment=?, nodes.votification=nodes.votification+? ' +
                  'WHERE votes.user_uid=? AND votes.node_uid=? AND nodes.uid=?;'
                connection.query(query, [newValue, voteValueDiff, user_uid, node_uid, node_uid], function(error, rows) {
                  if(error) {
                    responder.respondError(res, 'Database error updating existing vote for this user on this node.');
                    logMgr.error('Database error: ' + error);
                    connection.release();
                    return;
                  }

                  res.cookie(constants.sessionCookie, session_uid, constants.cookieExpiry);
                  res.send(
                    JSON.stringify({
                      votification: newVote
                    })
                  );
                  connection.release();
                  return;
                });
              }
            });
          }
          else {
            // If no navigation requested, surface data for user at current location
            responder.respond(res, session_uid);
            connection.release();
            return;
          }
        }
      });
    });
  }
});
// whew

/* Endpoint to log a user out from a social account */
router.get('/logout', function(req, res, next) {
  var response = {};
  createNewUser(req, res);
});

module.exports = router;

function createNewUser(req, res) {
  logMgr.out('New visitor!  Attempting to create DB entry . . .');
  // Create new user and write it to the DB
  db.getConnection(function(err, connection) {
    if(err) {
      responder.respondError(res, 'There was a problem getting a database connection.  New user cannot be created at this time.');
      logMgr.error(err);
      connection.release();
      return;
    }

    logMgr.out('Got DB connection to create new user.');
    // Create a new user to write to DB
    newUserUid = generateGuid();
    newUserName = 'User_' + newUserUid.substring(0,10);
    newUserAcctType = constants.acctTypeVisitor;
    newUserSessionUid = generateGuid();

    var query =
      'START TRANSACTION; ' +
        'INSERT INTO users (uid, name, acct_type, session_uid) VALUES (?, ?, ?, ?);' +
        'INSERT INTO positions (user_uid, node_uid) VALUES (?, ?);' +
      'COMMIT;';
    connection.query(query, [newUserUid, newUserName, newUserAcctType, newUserSessionUid, newUserUid, constants.rootNodeUid], function(err) {
      if(err) {
        responder.respondError(res, 'Database error creating new user.');
        logMgr.error(err);
        connection.release();
        return;
      }

      logMgr.out('Query completed to create user and set initial position.');
      responder.respond(res, newUserSessionUid);
      connection.release();
      return;
    });
  });
}
