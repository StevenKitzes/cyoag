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
    console.log('New visitor!  Attempting to create DB entry . . .');
    // Write this new user to the DB
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
      var dbCallback = function(err, rows) {
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
      }

      connection.query(userInsertQuery, dbCallback);
    });
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

    // Check if any existing user has this session
    db.getConnection(function(err, connection) {
      if(err) {
        var msg = 'There was a problem getting a database connection.  Cannot validate session ID.';
        console.log(msg + '\nERROR:\n' + err);
        response.msg = msg;
        response.loggedIn = false;
        res.cookie(req.cookies.session_uid);
        res.send(JSON.stringify(response));
        return;
      }

      var userInsertQuery = 'SELECT * FROM users WHERE session_uid = "' + connection.escape(session_uid) + '";'
      var dbCallback = function(err, rows) {
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

        // If multiple rows were returned, the universe should explore

        // If no rows returned, no user was found with that session ID, so create and surface a new user

        // If one row was returned, surface the found user
      }

      connection.query(userInsertQuery, dbCallback);
    });
  }
});

module.exports = router;
