/*
This is where Facebook redirects after handling login.
*/
var express = require('express');
var request = require('request'); // easy HTTP request library
var router = express.Router();
var secrets = require('../secrets');

router.get('/', function(req, res, next) {
  // Initial redirect from FB should have a "code" included as URL param; parse
  //  parse it out here, then build URL to swap "code" for user's access token
  var swapUrl = 'https://graph.facebook.com/v2.8/oauth/access_token?client_id=' +
    secrets.APP_ID +
    '&redirect_uri=http://localhost.cyoag.com:3000/fbrdr&client_secret=' +
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
        var userId = idObj.id;
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
