var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var logMgr = require('../utils/serverLogger')('session.js', true);
var constants = require('../constants');
var db = require('../dbAccess')();
var generateGuid = require('../utils/uid-gen');
var responder = require('../responder');

var app = express();
app.use(cookieParser());

/* Endpoint to check if session exists, and if so, whether it is valid, and if so, what to do with it */
router.post('/', function(req, res, next) {
  logMgr.out('+ + + + + + [ New User Interaction Begins ] + + + + + +');
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
  else if(req.cookies.session_uid && req.cookies.node_uid) {
    logMgr.debug('Both cookies found!  Uh oh!');
    responder.visitorResponse(res, constants.rootNodeUid, {warning: 'Detected traces of registered and unregistered accounts together. Resetting cookies... please try logging in again if you have a registered account.'});
    return;
  }
  // presence of node_uid cookie indicates visitor
  else if(req.cookies.node_uid) {
    logMgr.out('Position cookie found.  Visitor detected.');
    // if request body includes navigation details, visitor is requesting to navigate
    if(req.body.hasOwnProperty('navigate')) {
      logMgr.out('Visitor requested navigation.');
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
      logMgr.out('Surfacing node at current visitor location.');
      responder.visitorResponse(res, req.cookies.node_uid);
      return;
    }
  }
  // If session cookie existed
  else if(req.cookies.session_uid) {
    logMgr.out('Session ID found . . .');
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
          responder.visitorResponse(res, constants.rootNodeUid, {warning: 'Detected an expired session ID.  You can try logging in again, or continue using the site as a visitor.'});
          connection.release();
          return;
        }

        // If one row was returned...
        else if(rows.length == 1) {
          logMgr.out('Found user with the given session ID.');
          var userRow = rows[0];
          logMgr.verbose('User details: ' + JSON.stringify(userRow));
          if(req.body.hasOwnProperty('navigate')) {
            require('../handlers/handleNavRequest')(req, res, connection, session_uid, userRow);
          }
          else if(req.body.hasOwnProperty('newName')) {
            require('../handlers/handleNewNameRequest')(req, res, connection, session_uid, userRow);
          }
          else if(req.body.hasOwnProperty('newNodePath')) {
            require('../handlers/handleNewNodeRequest')(req, res, connection, session_uid, userRow);
          }
          else if(req.body.hasOwnProperty('draftPath')) {
            require('../handlers/handleDraftSaveRequest')(req, res, connection, session_uid, userRow);
          }
          else if(req.body.hasOwnProperty('votify')) {
            require('../handlers/handleVotification')(req, res, connection, session_uid, userRow);
          }
          else if(req.body.hasOwnProperty('deleteTarget')) {
            require('../handlers/handleDeletionRequest')(req, res, connection, session_uid, userRow);
          }
          else {
            // If no particular request was detected, simply surface data for user at current location
            logMgr.out('User made no specific request; surfacing chapter data for the current location of the user.');
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
