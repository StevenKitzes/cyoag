/*
This is the endpoint the user will hit to initiate a Twitter login request
*/
var express = require('express');
var qs = require('querystring');  // help build and parse URL query strings
var request = require('request'); // easy HTTP request library
var router = express.Router();
var responder = require('../responder');

var secrets = require('../secrets');
var socialUtils = require('../socialUtils');
var logMgf = require('../utils/serverLogger')('twRoutes.js', true);
var config = require('../build-config');

// Route to kick off a Twitter login event
router.get('/login', function(req, res, next) {
  /*/
  / From NPM request library sample
  / https://github.com/request/request#oauth-signing
  /*/

  /*/
  / OAuth Step 1:
  / Build request from CYOAG to Twitter to get a authentication token,
  / including building the authentication header for that request.
  / CYOAG uses this token to prove its own validity as a source for
  / future requests.
  /*/

  // This 'oauth' object defines our authentication header and callback location
  var oauth = {
    callback: config.hostDomain + 'tw/swap/',
    consumer_key: secrets.TW_KEY,
    consumer_secret: secrets.TW_SECRET
  };
  // Twitter URL to request an app authentication token
  var url = 'https://api.twitter.com/oauth/request_token';

  // Make the call
  request.post({url:url, oauth:oauth}, function (e, r, body) {

    /*/
    / OAuth Step 2:
    / Once we get our OAuth token back from Twitter in the response to our
    / initial request, we build this temporarily valid token (which
    / authenticates our app) into a URL to a Twitter page that will allow the
    / user to decide whether they want to login to our app (authorize it) with
    / their Twitter account.
    /*/

    // Get the body of the response
    var req_data = qs.parse(body);
    // Build user authorization URL
    var userAuthorizationUrl = 'https://api.twitter.com/oauth/authenticate' +
      '?' +
      qs.stringify({oauth_token: req_data.oauth_token});

    // Redirect the user to the URL where Twitter asks them to authorize CYOAG
    res.redirect(302, userAuthorizationUrl);
  });
});

router.get('/swap', function(req, res, next) {
  /*/
  / OAuth Step 3
  / This is the endpoint to redirect to after the user authorizes CYOAG to
  / login using their Twitter account.  Here, we receive several OAuth items
  / including OAuth token, secret, and verifier; all of which we can now
  / swap for an access token, which will finally allow us to grab user info
  / from Twitter, such as the user's userId.
  /*/

  // For this particular call, we are fielding using ExpressJS so we can access
  // query string KVPs through the Express framework
  // (e.g. 'req.query.[propName]')
  var oauth = {
    consumer_key: secrets.TW_KEY,
    consumer_secret: secrets.TW_SECRET,
    token: req.query.oauth_token,
    token_secret: req.query.oauth_token_secret,
    verifier: req.query.oauth_verifier
  };
  var twAccessTokenUrl = 'https://api.twitter.com/oauth/access_token';

  // Make a call to exchange updated OAuth credentials for an access token
  request.post({url:twAccessTokenUrl, oauth:oauth}, function (e, r, body) {
    // In the callback, we are finally ready to make Twitter API calls
    // specifically relating to a user, e.g. to retrieve a userId.
    var perm_data = qs.parse(body);
    // var oauth = {
    //   consumer_key: secrets.TW_KEY,
    //   consumer_secret: secrets.TW_SECRET,
    //   token: perm_data.oauth_token,
    //   token_secret: perm_data.oauth_token_secret,
    // };
    // var userDataUrl = 'https://api.twitter.com/1.1/users/show.json';
    // Note that for this query string, the property names are defined strictly
    // by Twitter, so we can't change them.
    // console.log('HEY SO if user ID is already here, what is the point of the rest? ' + perm_data.user_id);
    // var queryStringObject = {
    //   screen_name: perm_data.screen_name,
    //   user_id: perm_data.user_id
    // };

    // If I've understood this right, here's where we actually query for
    // user data, and where we handle it in a callback.
    // request.get({url:userDataUrl, oauth:oauth, qs:queryStringObject, json:true}, function (e, r, user) {
    //   console.log('user:');
    //   console.log(JSON.stringify(user));
    // })

    if(perm_data.user_id) {
      var user_uid = 'tw-' + perm_data.user_id;
      socialUtils.socialLoginById(user_uid, req, res);
    }
    else {
      responder.respondError(res, "Got a bad Twitter account ID.  Cannot identify user.");
    }
  });
});

module.exports = router;
