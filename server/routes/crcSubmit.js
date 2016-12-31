var express = require('express');
var request = require('request');
var router = express.Router();

var logMgr = require('../utils/serverLogger')('crcSubmit.js', true);
var constants = require('../constants');
var secrets = require('../secrets');

var app = express();

/* Endpoint to accept copyright claims */
router.post('/', function(req, res, next) {
  logMgr.out('Got a copyright claim.');
  logMgr.verbose('Copyright claim details: ' + JSON.stringify(req.body));

  // call Google's captcha validation service
  var verificationUrl =
    'https://www.google.com/recaptcha/api/siteverify?' +
    'secret=' + secrets.captchaSecretKey + '&response=' + req.body['g-recaptcha-response'];
  request.post(verificationUrl, function(error, response, unparsedBody) {
    var body = JSON.parse(unparsedBody);
    if(error) {
      logMgr.error('Problem getting response from Google Captcha validation service.');
      logMgr.error(error);
      return;
    }
    if(!body || body.success == undefined) {
      logMgr.error('Problem parsing body in Google Captcha validation service.');
      logMgr.error(JSON.stringify(body['error-codes']));
      return;
    }
    if(!body.success) {
      logMgr.error('Google returned a fail state in Captcha validation.');
      logMgr.error(JSON.stringify(body['error-codes']));
      return;
    }
    logMgr.out('Got response from Google captcha validation service:');
    logMgr.out('body: ' + JSON.stringify(body));
  });
});

module.exports = router;
