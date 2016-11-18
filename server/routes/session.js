var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var generateGuid = require('../build-source/js/uid-gen');
var db = require('../dbAccess')();
var responder = require('../responder');

var app = express();
app.use(cookieParser());

/* Endpoint to check if session exists, and if so, whether it is valid */
router.post('/', function(req, res, next) {
  // This is the CYOAG response payload
  var response = {};

  // If session ID is entirely missing, visitor is here for the first time!
  if (!req.cookies.session_uid || req.cookies.session_uid == '') {
    var successMsg = 'New visitor account created for browser with no session ID.';
    createNewUser(req, res, response, successMsg);
  }
  else {
    // If session cookie existed, do simple validation
    console.log('Session ID found, validating . . .');

    var session_uid = req.cookies.session_uid;
    if(session_uid.length != 40) {
      responder.respond(res, session_uid);
      return;
    }

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
        connection.release();
        if(err) {
          responder.respondError(res, 'Problem getting response from database checking session ID.');
          return;
        }

        // If multiple rows were returned, clear all session_uid entries
        // with this value to '0' and clear the current user's cookie
        if(rows.length > 1) {
          console.log('Found ' + rows.length + ' matching rows.  Removing duplicate session IDs in DB.');
          db.getConnection(function(e, conn) {
            if(e) {
              responder.respondError(res, 'Error getting a connection to the database to clear matching session IDs.');
              return;
            }

            var clearDupesQuery = 'UPDATE users SET session_uid="0" WHERE session_uid=' + innerConnection.escape(session_uid) + ';'
            conn.query(clearDupesQuery, function(innerErr, r) {
              conn.release();
              if(innerErr) {
                responder.respondError(res, 'Error clearing matching session IDs at the database level.');
                return;
              }

              responder.respond(res, session_uid);
              return;
            });
          });
        } // end clearing matched session_uid values

        // If no rows returned, no user was found with that session ID, so create and surface a new user
        else if(rows.length == 0) {
          var successMsg = 'No user found with browser session Id.  Created new visitor account.';
          createNewUser(req, res, response, successMsg);
          return;
        }

        // If one row was returned, surface the found user
        else if(rows.length == 1) {
          var uid = rows[0]['uid'];
          var loginStatus = (uid.indexOf('fb-') > -1 || uid.indexOf('tw-') > -1) ? true : false;
          responder.respond(res, session_uid);
          return;
        }
      });
    });
  }
});

/* Endpoint to log a user out from a social account */
router.get('/logout', function(req, res, next) {
  var response = {};
  var successMsg = 'Logged out user and overwrote session ID with that of a new visitor account.';
  createNewUser(req, res, response, successMsg);
});

module.exports = router;

function createNewUser(req, res, response, successMsg) {
  console.log('New visitor!  Attempting to create DB entry . . .');
  // Create new user and write it to the DB
  db.getConnection(function(err, connection) {
    if(err) {
      responder.respondError(res, 'There was a problem getting a database connection.  New user cannot be created.');
      return;
    }

    console.log('Got DB connection to create new user.');
    // Create a new user to write to DB
    var newUser = {};
    newUser.uid = generateGuid();
    newUser.name = 'User_' + newUser.uid.substring(0,10);
    newUser.acct_type = 'visitor';
    newUser.session_uid = generateGuid();

    var userInsertQuery = 'INSERT INTO users (uid, name, acct_type, session_uid) VALUES ("' +
      newUser.uid + '", "' +
      newUser.name + '", "' +
      newUser.acct_type + '", "' +
      newUser.session_uid + '");'

    connection.query(userInsertQuery, function(errUserQuery) {
      if(errUserQuery) {
        responder.respondError(res, 'Problem getting response from database creating new user.');
        return;
      }

      console.log('Query completed to create user, now setting new user position to "start" node.');

      var positionInsertQuery = 'INSERT INTO positions (user_uid, node_uid) VALUES (' +
        connection.escape(newUser.uid) + ', "start");';

      connection.query(positionInsertQuery, function(errPosQuery) {
        if(errPosQuery) {
          responder.respond(res, 'Problem getting response from database setting position of new user.');
          return;
        }

        connection.release();
        responder.respond(res, newUser.session_uid);
        return;
      });
    });
  });
}
