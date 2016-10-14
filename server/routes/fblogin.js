/*
This is the endpoint the user will hit to initiate a Facebook login request
*/
var express = require('express');
var router = express.Router();
var secrets = require('../secrets');

router.get('/', function(req, res, next) {
  var fbLoginUrl = 'https://www.facebook.com/v2.8/dialog/oauth?client_id=' +
    secrets.APP_ID +
    '&redirect_uri=http://localhost.cyoag.com:3000/fbrdr&response_type=code';
  res.redirect(302, fbLoginUrl);
});

module.exports = router;
