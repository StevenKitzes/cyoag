var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var constants = require('../constants');
var db = require('../dbAccess')();
var generateGuid = require('../build-source/js/uid-gen');
var responder = require('../responder');

var app = express();
app.use(cookieParser());

/* Endpoint to check if session exists, and if so, whether it is valid, and if so, what to do with it */
router.post('/', function(req, res, next) {
  if(req.body) {
    console.log('> > > > > req.body: ' + JSON.stringify(req.body));
  }
  else {
    console.log('> > > > > no req body');
  }

  // If session ID is entirely missing, visitor is here for the first time!
  if (!req.cookies.session_uid || req.cookies.session_uid == '') {
    createNewUser(req, res);
  }
  else {
    // If session cookie existed, do simple validation
    console.log('Session ID found, validating . . .');

    var session_uid = req.cookies.session_uid;

    // Get a db connection from the pool
    db.getConnection(function(err, connection) {
      console.log('Got DB connection from pool to check if any user has this session.');
      // If there's an error getting DB connection to check users with this session ID
      if(err) {
        responder.respondError(res, 'There was a problem getting a database connection.  Cannot validate session ID.');
        return;
      }

      // Build query and callback to check for users with the current session_uid
      console.log('Executing query to search for users with the current session_uid.');

      var findSessionUidQuery = 'SELECT * FROM users WHERE session_uid = ' + connection.escape(session_uid) + ';'
      connection.query(findSessionUidQuery, function(err, rows) {
        if(err) {
          responder.respondError(res, 'Problem getting response from database checking session ID.');
          connection.release();
          return;
        }

        // If multiple rows were returned, clear all session_uid entries
        // with this value to '0' and clear the current user's cookie
        if(rows.length > 1) {
          console.log('Found ' + rows.length + ' matching rows.  Removing duplicate session IDs in DB.');
          var clearDupesQuery = 'UPDATE users SET session_uid="0" WHERE session_uid=' + innerConnection.escape(session_uid) + ';'
          connection.query(clearDupesQuery, function(innerErr, r) {
            if(innerErr) {
              responder.respondError(res, 'Error clearing matching session IDs at the database level.');
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
          var user_uid = rows[0]['uid'];
          if(req.body.hasOwnProperty('navigate')) {
            var destination = req.body.navigate;
            if(destination==constants.defaultParentUid) {
              responder.respondMsgOnly(res, {msg: "You are already at the first chapter."});
              connection.release();
              return;
            }

            var navQuery = 'UPDATE positions SET node_uid=' +
              connection.escape(destination) +
              ' WHERE user_uid=' +
              connection.escape(user_uid) +
              ';';

            connection.query(navQuery, function(err, result) {
              if(err) {
                responder.respondError(res, 'Error attempting to set new user position in the database: ' + err);
                connection.release();
                return;
              }

              responder.respond(res, session_uid);
              connection.release();
              return;
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

/* Endpoint to log a user out from a social account */
router.get('/logout', function(req, res, next) {
  var response = {};
  createNewUser(req, res);
});

module.exports = router;

function createNewUser(req, res) {
  console.log('New visitor!  Attempting to create DB entry . . .');
  // Create new user and write it to the DB
  db.getConnection(function(err, connection) {
    if(err) {
      responder.respondError(res, 'There was a problem getting a database connection.  New user cannot be created.');
      connection.release();
      return;
    }

    console.log('Got DB connection to create new user.');
    // Create a new user to write to DB
    var newUser = {};
    newUser.uid = generateGuid();
    newUser.name = 'User_' + newUser.uid.substring(0,10);
    newUser.acct_type = constants.acctTypeVisitor;
    newUser.session_uid = generateGuid();

    var userInsertQuery = 'INSERT INTO users (uid, name, acct_type, session_uid) VALUES ("' +
      newUser.uid + '", "' +
      newUser.name + '", "' +
      newUser.acct_type + '", "' +
      newUser.session_uid + '");'

    connection.query(userInsertQuery, function(errUserQuery) {
      if(errUserQuery) {
        responder.respondError(res, 'Problem getting response from database creating new user.');
        connection.release();
        return;
      }

      console.log('Query completed to create user, now setting new user position to "start" node.');

      var positionInsertQuery = 'INSERT INTO positions (user_uid, node_uid) VALUES (' +
        connection.escape(newUser.uid) + ', ' + connection.escape(constants.rootNodeUid) + ');';

      connection.query(positionInsertQuery, function(errPosQuery) {
        if(errPosQuery) {
          responder.respond(res, 'Problem getting response from database setting position of new user.');
          connection.release();
          return;
        }

        responder.respond(res, newUser.session_uid);
        connection.release();
        return;
      });
    });
  });
}
