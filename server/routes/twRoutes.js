/*
This is the endpoint the user will hit to initiate a Twitter login request
*/
var express = require('express');
var qs = require('querystring');  // help build and parse URL query strings
var request = require('request'); // easy HTTP request library
var router = express.Router();
var secrets = require('../secrets');

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
    callback: 'http://localhost.cyoag.com:3000/tw/swap/',
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
    var userAuthUrl = 'https://api.twitter.com/oauth/authenticate' +
      '?' +
      qs.stringify({oauth_token: req_data.oauth_token});

    // Redirect the user to the URL where Twitter asks them to authorize CYOAG
    res.redirect(302, userAuthUrl);
  });
});
/*
    // step 3
    // after the user is redirected back to your server
    var auth_data = qs.parse(body)
      , oauth =
        { consumer_key: CONSUMER_KEY
        , consumer_secret: CONSUMER_SECRET
        , token: auth_data.oauth_token
        , token_secret: req_data.oauth_token_secret
        , verifier: auth_data.oauth_verifier
        }
      , url = 'https://api.twitter.com/oauth/access_token'
      ;
    request.post({url:url, oauth:oauth}, function (e, r, body) {
      // ready to make signed requests on behalf of the user
      var perm_data = qs.parse(body)
        , oauth =
          { consumer_key: CONSUMER_KEY
          , consumer_secret: CONSUMER_SECRET
          , token: perm_data.oauth_token
          , token_secret: perm_data.oauth_token_secret
          }
        , url = 'https://api.twitter.com/1.1/users/show.json'
        , qs =
          { screen_name: perm_data.screen_name
          , user_id: perm_data.user_id
          }
        ;
      request.get({url:url, oauth:oauth, qs:qs, json:true}, function (e, r, user) {
        console.log(user)
      })
    })
  })
});
*/
// Route to continue a Facebook login event by swapping code for access token
router.get('/swap', function(req, res, next) {
  // Initial redirect from FB should have a "code" included as URL param; parse
  //  parse it out here, then build URL to swap "code" for user's access token
  var swapUrl = 'https://graph.facebook.com/v2.8/oauth/access_token?client_id=' +
    secrets.APP_ID +
    '&redirect_uri=http://localhost.cyoag.com:3000/fb/swap&client_secret=' +
    secrets.APP_SECRET +
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

        var idObj = JSON.parse(rb);
        var userId = 'fb-' + idObj.id;
        res.send('got user id: ' + userId);
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
