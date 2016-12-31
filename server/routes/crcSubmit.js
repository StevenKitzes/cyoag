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

  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  var captcha = req.body.captcha;

  if(!name) {
    res.send('Please provide a contact name!');
    return;
  }
  if(!/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}/i.test(email)) {
    res.send('Please provide a valid email address!');
    return;
  }
  if(!message) {
    res.send('Please provide a message!');
    return;
  }
  if(!captcha) {
    res.send('Please make sure you have completed reCAPTCHA verification before submitting your message!');
    return;
  }

  // call Google's captcha validation service
  // ... their docs claim they want POST but it only accepts URL params ... shrug?
  var verificationUrl =
    'https://www.google.com/recaptcha/api/siteverify?' +
    'secret=' + secrets.captchaSecretKey + '&response=' + captcha;
  request.post(verificationUrl, function(error, response, unparsedBody) {
    var body = JSON.parse(unparsedBody);
    if(error) {
      // if the POST request itself experiences an error
      logMgr.error('Problem getting response from Google Captcha validation service.');
      logMgr.error(error);
      return;
    }
    if(!body || body.success == undefined) {
      // if the POST returns but content is unexpected
      logMgr.error('Problem parsing body in Google Captcha validation service (unexpected response).');
      logMgr.error('Google Captcha reply body: ' + JSON.stringify(body));
      return;
    }
    if(!body.success) {
      // if we got a defined, but falsey, success state
      logMgr.error('Google returned a fail state in Captcha validation.');
      logMgr.error(JSON.stringify());
      return;
    }
    // if everything seems to have gone well
    logMgr.out('Got affirmative response from Google captcha validation service');
    logMgr.verbose('body: ' + JSON.stringify(body));
    res.send('Success!  You should receive a confirmation email shortly.');
  });
});

module.exports = router;
