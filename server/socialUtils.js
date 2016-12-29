var db = require('./dbAccess')();
var generateGuid = require('./utils/uid-gen');
var responder = require('./responder');
var logMgr = require('./utils/serverLogger')('socialUtils.js');

var config = require('./build-config');
var constants = require('./constants');

function socialLoginById(user_uid, req, res) {
  // if this user ID already exists, assign new session ID and redirect to main page
  logMgr.out('User identified by UID ' + user_uid + '; checking if this user exists.');
  db.getConnection(function(err, connection) {
    if(err) {
      // handle any error getting connection from pool
      responder.respondError(res, 'Problem getting a database connection.  Unable to check user status at this time.');
      return;
    }

    // query DB to see if this user already exists
    var query = 'SELECT * FROM users WHERE uid=?;';
    connection.query(query, [user_uid], function(err, rows) {
      if(err) {
        // handle any error querying for users with this user ID
        responder.respondError(res, 'Database error retrieving user status.');
        logMgr.error(err);
        connection.release();
        return;
      }

      // if no user was registered with this ID, create new user, write it to DB, and respond
      if(rows.length == 0) {
        logMgr.out('No registered user found with this ID, creating account . . .');
        registerUser(user_uid, (req.cookies.node_uid ? req.cookies.node_uid : constants.rootNodeUid), res);
        connection.release();
        return;
      }

      // if a user was found with this ID, just update the session ID, update DB, and respond
      if(rows.length == 1) {
        logMgr.out('Registered user found, updating session ID . . .');
        updateUserSession(user_uid, res);
        connection.release();
        return;
      }

      // handle some mysterious uncaught Error
      responder.respondError(res, 'Found multiple users with the same user ID.  Aborting operation.');
      connection.release();
      return;
    });
  });
}

function registerUser(uid, node_uid, res) {
  logMgr.out('New registered user!  Attempting to create based on current visitor position . . .');
  // Create new user and write it to the DB
  db.getConnection(function(err, connection) {
    if(err) {
      responder.respondError(res, 'Problem getting a database connection for user registration.');
      return;
    }

    logMgr.out('Got database connection to register new user.');

    // figure out what type of social account this is going to be
    var abbrev = uid.substring(0,3);

    // Create a new user to write to DB
    newUserUid = uid;
    newUserName = abbrev + generateGuid().substring(0,13);
    newUserAcctType = 'registered';
    newUserSessionUid = generateGuid();

    query =
      'START TRANSACTION; ' +
        'INSERT INTO users (uid, name, acct_type, session_uid) VALUES (?, ?, ?, ?); ' +
        'INSERT INTO positions (user_uid, node_uid) VALUES (?, ?);' +
      'COMMIT;';
    logMgr.out('Querying to register new user.');
    logMgr.debug('Query attempt: ' + query);
    connection.query(query, [newUserUid, newUserName, newUserAcctType, newUserSessionUid, newUserUid, node_uid], function(err) {
      if(err) {
        responder.respondError(res, 'Database error writing new user to database.');
        logMgr.error(err);
        connection.release();
        return;
      }

      logMgr.out('Successfully registered new registered user and set initial position.');
      connection.release();
      res.clearCookie(constants.cookieNode);
      res.cookie(constants.cookieSession, newUserSessionUid, constants.cookieExpiry);
      res.redirect(302, config.hostDomain);
      return;
    });

  });
}

function updateUserSession(uid, res) {
  logMgr.out('Attempting to update session ID for current user . . .');
  // Update the user with a new session and respond thusly
  db.getConnection(function(err, connection) {
    if(err) {
      responder.respondError(res, 'Problem getting a database connection to update registered user session.');
      connection.release();
      return;
    }

    logMgr.out('Got database connection to update registered user session.');

    // Create a new user to write to DB
    userUid = uid;
    sessionUid = generateGuid();

    var query = 'UPDATE users SET session_uid=? WHERE uid=?;';
    logMgr.out('Querying to update registered user session ID.');
    logMgr.verbose('Query attempted: ' + query);
    connection.query(query, [sessionUid, userUid], function(err, rows) {
      if(err) {
        responder.respondError(res, 'Database error writing updated session ID.');
        logMgr.error(err);
        connection.release();
        return;
      }

      logMgr.out('Updated registered user session.');
      res.clearCookie(constants.cookieNode);
      res.cookie(constants.cookieSession, sessionUid, constants.cookieExpiry);
      res.redirect(302, config.hostDomain);
      return;
    });
  });
}

var exports = {};

exports.socialLoginById = socialLoginById;

module.exports = exports;
