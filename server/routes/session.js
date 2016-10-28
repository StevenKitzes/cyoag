var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var generateGuid = require('../build-source/js/uid-gen');
var db = require('../dbAccess')();

var app = express();
app.use(cookieParser());

/* Endpoint to check if session exists, and if so, whether it is valid */
router.post('/', function(req, res, next) {
  // This is the CYOAG response payload
  var response = {};

  // If session ID is missing, visitor is here for the first time!
  if (!req.cookies.session_uid || req.cookies.session_uid == '') {
    createNewUser(req, res, response);
  }
  else {
    // If session cookie existed, do simple validation
    console.log('Session ID found, validating . . .');

    var session_uid = req.cookies.session_uid;
    if(session_uid.length != 40) {
      console.log('Session ID length was not 40.  User sent:\n' + session_uid);
      response.msg = 'Could not validate your session.  Sorry!';
      response.loggedIn = false;
      res.clearCookie('session_uid');
      res.send(JSON.stringify(response));
      return;
    }

    // Get a db connection from the pool
    db.getConnection(function(err, connection) {
      console.log('Got DB connection from pool to check if any user has this session.');
      // If there's an error getting DB connection to check users with this session ID
      if(err) {
        var msg = 'There was a problem getting a database connection.  Cannot validate session ID.';
        console.log(msg + '\nERROR:\n' + err);
        response.msg = msg;
        response.loggedIn = false;
        res.cookie(req.cookies.session_uid);
        res.send(JSON.stringify(response));
        return;
      }

      // Build query and callback to check for users with the current session_uid
      console.log('Executing query to search for users with the current session_uid.');

      var findSessionUidQuery = 'SELECT * FROM users WHERE session_uid = ' + connection.escape(session_uid) + ';'
      connection.query(findSessionUidQuery, function(err, rows) {
        connection.release();
        if(err) {
          var msg = 'Problem getting response from database checking session ID.';
          console.log(msg + '\nERROR:\n' + err);
          response.msg = msg;
          response.loggedIn = false;
          res.cookie('session_uid', req.cookies.session_uid);
          res.send(JSON.stringify(response));
          return;
        }

        // If multiple rows were returned, clear all session_uid entries
        // with this value to '0' and clear the current user's cookie
        if(rows.length > 1) {
          console.log('Found ' + rows.length + ' matching rows.  Removing duplicate session IDs in DB.');
          db.getConnection(function(e, conn) {
            if(e) {
              var msg = 'Error getting a connection to the database to clear matching session IDs.';
              console.log(msg + '\nERROR:\n' + e);
              response.msg = msg;
              response.loggedIn = false;
              res.cookie('session_uid', req.cookies.session_uid);
              res.send(JSON.stringify(response));
              return;
            }

            var clearDupesQuery = 'UPDATE users SET session_uid="0" WHERE session_uid=' + innerConnection.escape(session_uid) + ';'
            conn.query(clearDupesQuery, function(innerErr, r) {
              conn.release();
              if(innerErr) {
                var msg = 'Error clearing matching session IDs at the database level.';
                console.log(msg + '\nERROR:\n' + innerErr);
                response.msg = msg;
                response.loggedIn = false;
                res.cookie('session_uid', req.cookies.session_uid);
                res.send(JSON.stringify(response));
                return;
              }

              var msg = 'Multiple users detected with the same session ID.  Cleared matching session IDs.';
              console.log(msg);
              response.msg = msg;
              response.loggedIn = false;
              res.cookie('session_uid', req.cookies.session_uid);
              res.send(JSON.stringify(response));
              return;
            });
          });
        } // end clearing matched session_uid values

        // If no rows returned, no user was found with that session ID, so create and surface a new user
        else if(rows.length == 0) {
          createNewUser(req, res, response);
        }

        // If one row was returned, surface the found user
        else if(rows.length == 1) {
          console.log('Found user with this session ID!');
        }
      });
    });
  }
});

module.exports = router;

function createNewUser(req, res, response) {
  console.log('New visitor!  Attempting to create DB entry . . .');
  // Create new user and write it to the DB
  db.getConnection(function(err, connection) {
    if(err) {
      var msg = 'There was a problem getting a database connection.  New user cannot be created.';
      console.log(msg + '\nERROR:\n' + err);
      response.msg = msg;
      response.loggedIn = false;
      res.clearCookie('session_uid');
      res.send(JSON.stringify(response));
      return;
    }

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

    connection.query(userInsertQuery, function(err, rows) {
      connection.release();
      if(err) {
        var msg = 'Problem getting response from database creating new user.';
        console.log(msg + '\nERROR:\n' + err);
        response.msg = msg;
        response.loggedIn = false;
        res.clearCookie('session_uid');
        res.send(JSON.stringify(response));
        return;
      }

      var msg = 'Successfully created new user.  :)';
      console.log(msg);
      response.msg = msg;
      response.loggedIn = false;
      res.cookie('session_uid', newUser.session_uid);
      res.send(JSON.stringify(response));
      return;
    });
  });
}
