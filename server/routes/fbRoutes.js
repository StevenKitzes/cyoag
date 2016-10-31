/*
This is the endpoint the user will hit to initiate a Facebook login request
*/
var express = require('express');
var request = require('request'); // easy HTTP request library
var router = express.Router();
var secrets = require('../secrets');

var generateGuid = require('../build-source/js/uid-gen');
var db = require('../dbAccess')();

// Route to kick off a Facebook login event
router.get('/login', function(req, res, next) {
  var fbLoginUrl = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=' +
    secrets.FB_APP_ID +
    '&redirect_uri=http://localhost.cyoag.com:3000/fb/swap&response_type=code';
  res.redirect(302, fbLoginUrl);
});

// Route to continue a Facebook login event by swapping code for access token
router.get('/swap', function(req, res, next) {
  // Initial redirect from FB should have a "code" included as URL param; parse
  //  parse it out here, then build URL to swap "code" for user's access token
  var swapUrl = 'https://graph.facebook.com/v2.8/oauth/access_token?client_id=' +
    secrets.FB_APP_ID +
    '&redirect_uri=http://localhost.cyoag.com:3000/fb/swap&client_secret=' +
    secrets.FB_APP_SECRET +
    '&code=' +
    req.query.code;

  // make the request to FB to swap the "code" for the access token
  request(swapUrl, function(error, response, responseBody) {
    // catch errors
    if(error) { console.log(error); return; }
    if(response.statusCode != 200) { console.log('Oops!  Got status code: ' + response.statusCode); return; }

    // make a JSON object out of the response and get the token out
    var tokenObj = JSON.parse(responseBody);
    var token = tokenObj.access_token;

    // make sure we actually got the token
    if(token) {
      // another FB call, this time to get user ID from the access token
      var getUserIdUrl = 'https://graph.facebook.com/me?fields=id&access_token=' + token;
      request(getUserIdUrl, function(e, r, rb) {
        if(e) { console.log(e); return; }
        if(r.statusCode != 200) { console.log('Uh oh!  Got status code: ' + r.statusCode); return; }

        /*
         * Get the user's social ID from the response payload.  idObj.id is
         * unique to FB, we distinguish it from identical IDs from other OAuth
         * providers by prepending the provider's abreviation
         */
        var idObj = JSON.parse(rb);
        var user_uid = 'fb-' + idObj.id;

        // if this user ID already exists, assign new session ID and redirect to main page
        console.log('User identified as ' + user_uid + '; checking if this user exists.');
        db.getConnection(function(errGetConn, connectionCheckUser) {
          if(errGetConn) {
            // handle any error getting connection from pool
            var msg = 'Problem getting a database connection.  Unable to check user status.';
            console.log(msg + '\nERROR:\n' + errGetConn);
            response.msg = msg;
            response.loggedIn = false;
            res.clearCookie('session_uid');
            res.send(JSON.stringify(response));
            return;
          }

          // query DB to see if this user already exists
          var checkUserQuery = 'SELECT * FROM users WHERE uid = ' + connectionCheckUser.escape(user_uid) + ';';
          connectionCheckUser.query(checkUserQuery, function(errQuery, rows) {
            connectionCheckUser.release();
            if(errQuery) {
              // handle any error querying for users with this user ID
              var msg = 'Problem querying database for user status.';
              console.log(msg + '\nERROR:\n' + errQuery);
              response.msg = msg;
              res.clearCookie('session_uid');
              res.send(JSON.stringify(response));
              return;
            }

            // if no user was registered with this ID, create new user, write it to DB, and respond
            if(rows.length == 0) {
              console.log('No user found with this ID, creating . . .');
              createNewSocialUser(user_uid, req, res, response);
              return;
            }

            // if a user was found with this ID, just update the session ID, update DB, and respond
            if(rows.length == 1) {
              console.log('User found, updating session ID . . .');
              updateUserSession(user_uid, req, res, response);
              return;
            }

            // handle some mysterious uncaught Error
            var msg = 'Error: unexpected number of results checking user status on database.';
            console.log(msg);
            response.msg = msg;
            res.clearCookie('session_uid');
            res.send(JSON.stringify(response));
            return;
          });
        });
      });
    }
    // token not received?!
    else {
      var noTokenReceivedMsg = 'ERROR: no token received';
      console.log(noTokenReceivedMsg);
      res.send(noTokenReceivedMsg);
    }
  });
});

module.exports = router;

function createNewSocialUser(uid, req, res, response) {
  console.log('New Facebook user!  Attempting to create DB entry . . .');
  // Create new user and write it to the DB
  db.getConnection(function(errGetConn, connectionCreateFB) {
    if(errGetConn) {
      var msg = 'Problem getting a database connection to create new Facebook user.';
      console.log(msg + '\nERROR:\n' + errGetConn);
      response.msg = msg;
      res.clearCookie('session_uid');
      res.send(JSON.stringify(response));
      return;
    }

    console.log('Got database connection to create new Facebook user.');

    // Create a new user to write to DB
    var newUser = {};
    newUser.uid = uid;
    newUser.name = newUser.uid.substring(0,10);
    newUser.acct_type = 'registered';
    newUser.session_uid = generateGuid();

    var userInsertQuery = 'INSERT INTO users (uid, name, acct_type, session_uid) VALUES ("' +
      newUser.uid + '", "' +
      newUser.name + '", "' +
      newUser.acct_type + '", "' +
      newUser.session_uid + '");'

    console.log('Querying to create new Facebook user.');

    connectionCreateFB.query(userInsertQuery, function(errInsert, rows) {
      console.log('Facebook user creation query attempt complete.');
      connectionCreateFB.release();
      if(errInsert) {
        var msg = 'Problem writing new Facebook user to database.';
        console.log(msg + '\nERROR:\n' + errInsert);
        response.msg = msg;
        response.loggedIn = false;
        res.clearCookie('session_uid');
        res.send(JSON.stringify(response));
        return;
      }

      console.log('Successfully created new Facebook user!  :)');
      res.cookie('session_uid', newUser.session_uid);
      res.redirect(302, 'http://localhost.cyoag.com:3000/');
      return;
    });
  });
}
