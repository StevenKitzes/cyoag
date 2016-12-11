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

  if(req.cookies) {
    logMgr.verbose('> > > > > req.cookies: ' + JSON.stringify(req.cookies));
  }
  else {
    logMgr.verbose('> > > > > no req cookies');
  }

  // If we don't see a session ID or a node ID in the cookie, a new visitor is here for the first time!
  if(!req.cookies.session_uid && !req.cookies.node_uid) {
    logMgr.debug('No cookies found.');
    responder.visitorResponse(res, constants.rootNodeUid);
    return;
  }
  // should not have both cookie types together
  if(req.cookies.session_uid && req.cookies.node_uid) {
    logMgr.debug('Both cookies found!  Uh oh!');
    responder.visitorResponse(res, constants.rootNodeUid, {warning: 'Detected traces of registered and unregistered accounts together. Resetting.'});
    return;
  }
  // presence of node_uid cookie indicates visitor
  if(req.cookies.node_uid) {
    logMgr.debug('Position cookie found.  Visitor detected.');
    // if request body includes navigation details, visitor is requesting to navigate
    if(req.body.hasOwnProperty('navigate')) {
      logMgr.debug('Visitor requested navigation.');
      var destination = req.body.navigate;
      if(destination == constants.defaultParentUid) {
        responder.respondMsgOnly(res, {msg: "You are already at the first chapter."});
        return;
      }

      responder.visitorResponse(res, destination);
      return;
    }
    // if navigation not requested, show the user the node at their current position
    else {
      logMgr.debug('Surfacing node at current visitor location.');
      responder.visitorResponse(res, req.cookies.node_uid);
      return;
    }
  }
  // If session cookie existed
  if(req.cookies.session_uid) {
    logMgr.out('Session ID found . . .');
    var session_uid = req.cookies.session_uid;

    // Get a db connection from the pool
    db.getConnection(function(err, connection) {
      logMgr.verbose('Got DB connection from pool to check if any user has this session.');
      // If there's an error getting DB connection to check users with this session ID
      if(err) {
        responder.respondError(res, 'There was a problem getting a database connection.  Cannot validate session ID.');
        logMgr.error(err);
        connection.release();
        return;
      }

      // Build query and callback to check for users with the current session_uid
      var query = 'SELECT * FROM users LEFT JOIN positions ON users.uid=positions.user_uid WHERE session_uid=?;'
      logMgr.out('Executing query to search for users with the current session_uid.');
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

        // If no rows returned, no user was found with that session ID, so surface a visitor with appropriate message
        else if(rows.length == 0) {
          responder.visitorResponse(res, constants.rootNodeUid, {warning: 'Got an expired session ID.  You can try logging in again, or continue using the site as a visitor.'});
          connection.release();
          return;
        }

        // If one row was returned...
        else if(rows.length == 1) {
          var userRow = rows[0];
          var user_uid = userRow['uid'];
          var user_position = userRow['node_uid'];
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
          else if(req.body.hasOwnProperty('newName')) {
            var newName = req.body.newName;
            if(newName.length < 3) {
              responder.respondMsgOnly(res, {warning: "Your name may not have fewer than 3 characters in it."});
              connection.release();
              return;
            }
            if(newName.length > 16) {
              responder.respondMsgOnly(res, {warning: "Your name may not have more than 16 characters in it."});
              connection.release();
              return;
            }
            if(newName.match(/-{2,}/)) {
              responder.respondMsgOnly(res, {warning: "Your name may not contain consecutive dashes."});
              connection.release();
              return;
            }
            if(newName.match(/[^a-zA-Z0-9-]/)) {
              responder.respondMsgOnly(res, {warning: "Your name may only contain letters, numbers, and dashes."});
              connection.release();
              return;
            }

            query = 'UPDATE users SET name=? WHERE session_uid=?;';
            connection.query(query, [newName, session_uid], function(err, result) {
              if(err) {
                if(err.toString().toLowerCase().indexOf('duplicate')) {
                  responder.respondMsgOnly(res, {warning: 'That name is already taken.  Please try another!'});
                  logMgr.error(err);
                  connection.release();
                  return;
                }
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
          else if(req.body.hasOwnProperty('newNodePath')) {
            var inputPath = req.body.newNodePath;
            var inputBody = req.body.newNodeBody;
            var warningMsg;

            if(!user_position) {
              responder.respondError(res, 'Unable to establish link between existing chapter and new chapter.');
              connection.release();
              return;
            }

            if(!inputPath || !inputBody) {
              responder.respondError(res, 'Crucial data was missing from the chapter authoring request.');
              connection.release();
              return;
            }

            if(inputPath.length < 4) {
              warningMsg = 'Your path teaser must be at least 4 characters long';
            }
            else if(inputPath.length > 100) {
              warningMsg = 'Your path teaser may not exceed 100 characters';
            }

            if(inputBody.length < 1000) {
              if(warningMsg) {
                warningMsg = warningMsg + ' and your chapter content must be at least 1,000 characters long';
              }
              else {
                warningMsg = 'Your chapter content must be at least 1,000 characters long';
              }
            }
            else if(inputBody.length > 5000) {
              if(warningMsg) {
                warningMsg = warningMsg + ' and your chapter content may not exceed 5,000 characters';
              }
              else {
                warningMsg = 'Your chapter content may not exceed 5,000 characters';
              }
            }

            if(warningMsg) {
              warningMsg = warningMsg + '.';
              responder.respondMsgOnly(res, {warning: warningMsg});
              connection.release();
              return;
            }

            // insert new chapter!!

            connection.release();
            return;
          }
          else if(req.body.hasOwnProperty('draftPath')) {
            responder.respondMsgOnly(res, {warning: 'Draft salvation not yet implemented on backend, but FYI got path ' + req.body.draftPath +
              ' and body ' + req.body.draftBody + ' to be added with parent node ' + user_position + '.'});
            connection.release();
            return;
          }
          else if(req.body.hasOwnProperty('votify')) {
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

                  res.clearCookie(constants.cookieNode);
                  res.cookie(constants.cookieSession, session_uid, constants.cookieExpiry);
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

                  res.clearCookie(constants.cookieNode);
                  res.cookie(constants.cookieSession, session_uid, constants.cookieExpiry);
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
  responder.visitorResponse(res, constants.rootNodeUid);
});

module.exports = router;
