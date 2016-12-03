/*
This is the endpoint the user will hit to initiate a Facebook login request
*/
var express = require('express');
var request = require('request'); // easy HTTP request library
var router = express.Router();

var logMgr = require('../utils/logger')('fbRoutes.js', true);

var responder = require('../responder');
var secrets = require('../secrets');
var socialUtils = require('../socialUtils');

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
    if(error) { logMgr.error(error); return; }
    if(response.statusCode != 200) { logMgr.warning('Oops!  Got status code: ' + response.statusCode); return; }

    // make a JSON object out of the response and get the token out
    var tokenObj = JSON.parse(responseBody);
    var token = tokenObj.access_token;

    // make sure we actually got the token
    if(token) {
      // another FB call, this time to get user ID from the access token
      var getUserIdUrl = 'https://graph.facebook.com/me?fields=id&access_token=' + token;
      request(getUserIdUrl, function(e, r, rb) {
        if(e) { logMgr.error(e); return; }
        if(r.statusCode != 200) { logMgr.warning('Uh oh!  Got status code: ' + r.statusCode); return; }

        /*
         * Get the user's social ID from the response payload.  idObj.id is
         * unique to FB, we distinguish it from identical IDs from other OAuth
         * providers by prepending the provider's abreviation
         */
        var idObj = JSON.parse(rb);
        var user_uid = 'fb-' + idObj.id;

        socialUtils.socialLoginById(user_uid, req, res);
      });
    }
    // token not received?!
    else {
      responder.respondError(res, 'There was a problem retrieving account information from Facebook.');
    }
  });
});

module.exports = router;
