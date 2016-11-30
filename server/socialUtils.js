var db = require('./dbAccess')();
var generateGuid = require('./build-source/js/uid-gen');
var responder = require('./responder');

var constants = require('./constants');

function socialLoginById(user_uid, req, res) {
  var response = {};

  // if this user ID already exists, assign new session ID and redirect to main page
  console.log('User identified as ' + user_uid + '; checking if this user exists.');
  db.getConnection(function(errGetConn, connectionCheckUser) {
    if(errGetConn) {
      // handle any error getting connection from pool
      responder.respondError(res, 'Problem getting a database connection.  Unable to check user status.');
      return;
    }

    // query DB to see if this user already exists
    var checkUserQuery = 'SELECT * FROM users WHERE uid = ' + connectionCheckUser.escape(user_uid) + ';';
    connectionCheckUser.query(checkUserQuery, function(errQuery, rows) {
      connectionCheckUser.release();
      if(errQuery) {
        // handle any error querying for users with this user ID
        responder.respondError(res, 'Problem querying database for user status.');
        return;
      }

      // if no user was registered with this ID, create new user, write it to DB, and respond
      if(rows.length == 0) {
        console.log('No user found with this ID, creating . . .');
        registerUser(user_uid, req.cookies.session_uid, res, response);
        return;
      }

      // if a user was found with this ID, just update the session ID, update DB, and respond
      if(rows.length == 1) {
        console.log('User found, updating session ID . . .');
        updateUserSession(user_uid, res, response);
        return;
      }

      // handle some mysterious uncaught Error
      responder.respondError(res, 'Error: unexpected number of results checking user status on database.');
      return;
    });
  });
}

function registerUser(uid, session_uid, res, response) {
  console.log('New registered user!  Attempting to create based on current visitor . . .');
  // Create new user and write it to the DB
  db.getConnection(function(errConnection, connection) {
    if(errConnection) {
      responder.respondError(res, 'Problem getting a database connection for user registration.');
      return;
    }

    console.log('Got database connection to register new user.');

    // the first thing to do is get the position of the current session
    var getPosQuery = 'SELECT positions.node_uid FROM positions INNER JOIN users ON users.uid=positions.user_uid WHERE users.session_uid=' + connection.escape(session_uid) + ';';
    connection.query(getPosQuery, function(errGetPos, rows) {
      if(errGetPos) {
        responder.respondError(res, 'Problem getting current session position from database.');
        connection.release();
        return;
      }
      if(rows.length == 0) {
        responder.respondError(res, 'Found no results for current session position!');
        connection.release();
        return;
      }
      if(rows.length > 1) {
        responder.respond(res, session_uid, {warning: 'Found multiple results for current session position.'});
        connection.release();
        return;
      }

      var position_uid = rows[0]['node_uid'];

      // figure out what type of social account this is going to be
      var abbrev = uid.substring(0,3);

      // Create a new user to write to DB
      var newUser = {};
      newUser.uid = uid;
      newUser.name = abbrev + generateGuid().substring(0,7);
      newUser.acct_type = 'registered';
      newUser.session_uid = generateGuid();

      var userInsertQuery = 'INSERT INTO users (uid, name, acct_type, session_uid) VALUES ("' +
        newUser.uid + '", "' +
        newUser.name + '", "' +
        newUser.acct_type + '", "' +
        newUser.session_uid + '");'

      console.log('Querying to register new user.');

      connection.query(userInsertQuery, function(errInsert) {
        if(errInsert) {
          responder.respondError(res, 'Problem writing new user to database.');
          connection.release();
          return;
        }

        console.log('Query to write new user to database complete, trying to set position.');

        var setPosQuery = 'INSERT INTO positions (user_uid, node_uid) VALUES (' + connection.escape(newUser.uid) + ', ' + connection.escape(position_uid) + ');';

        connection.query(setPosQuery, function(errSetPos) {
          if(errSetPos) {
            responder.respondError(res, 'Problem writing new user position to database.');
            connection.release();
            return;
          }

          console.log('Successfully registered new registered user!  :)');
          connection.release();
          res.cookie('session_uid', newUser.session_uid, constants.cookieExpiry);
          res.redirect(302, 'http://localhost.cyoag.com:3000/');
          return;
        });
      });
    });
  });
}

function updateUserSession(uid, res, response) {
  console.log('Registered user detected, updating session ID . . .');
  // Create new user and write it to the DB
  db.getConnection(function(errGetConn, connectionUpdateSession) {
    if(errGetConn) {
      responder.respondError(res, 'Problem getting a database connection to update registered user session.');
      connectionUpdateSession.release();
      return;
    }

    console.log('Got database connection to update registered user session.');

    // Create a new user to write to DB
    var userStatus = {};
    userStatus.uid = uid;
    userStatus.session_uid = generateGuid();

    var userInsertQuery = 'UPDATE users SET session_uid="' +
      userStatus.session_uid + '" WHERE uid="' +
      userStatus.uid + '";';

    console.log('Querying to update registered user session ID.');

    connectionUpdateSession.query(userInsertQuery, function(errInsert, rows) {
      console.log('Registered user session update query attempt complete.');
      connectionUpdateSession.release();
      if(errInsert) {
        responder.respondError(res, 'Problem writing new registered user session ID.');
        return;
      }

      console.log('Successfully updated registered user session!');
      res.cookie('session_uid', userStatus.session_uid, constants.cookieExpiry);
      res.redirect(302, 'http://localhost.cyoag.com:3000/');
      return;
    });
  });
}

var exports = {};

exports.socialLoginById = socialLoginById;

module.exports = exports;
