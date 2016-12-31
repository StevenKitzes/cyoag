var express = require('express');
var request = require('request');
var router = express.Router();

var nodemailer = require('nodemailer');

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
      res.send('The server encountered a problem communicating with Google for reCAPTCHA validation.  You might need to refresh the page.');
      return;
    }
    if(!body || body.success == undefined) {
      // if the POST returns but content is unexpected
      logMgr.error('Problem parsing body in Google Captcha validation service (unexpected response).');
      logMgr.error('Google Captcha reply body: ' + JSON.stringify(body));
      res.send('The server got an unexpected result from reCAPTCHA validation attempts.  You might need to refresh the page.');
      return;
    }
    if(!body.success) {
      // if we got a defined, but falsey, success state
      logMgr.error('Google returned a fail state in Captcha validation.');
      logMgr.error(JSON.stringify());
      res.send('reCAPTCHA validation failed.  You might need to refresh the page and try completing the reCAPTCHA challenge again.');
      return;
    }
    // if everything seems to have gone well
    logMgr.out('Got affirmative response from Google captcha validation service');
    logMgr.verbose('body: ' + JSON.stringify(body));
    sendMail(name, email, message, res);
  });
});

// largely copy pasta from nodemailer npm documentation
function sendMail(name, confirmAddress, message, res) {
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport('smtps://' + secrets.emailAcct + '@gmail.com:' + secrets.emailPass + '@smtp.gmail.com');

  var mailBody = '' +
    '[This message confirms receipt of a copyright claim filed with CYOAG.]\r\n\r\n' +

    name + ' entered email address:\r\n' +
    confirmAddress + '\r\n\r\n' +

    name + ' entered message content:\r\n' +
    message;

  // mailOptions to send the initial mail to myself
  var mailOptions = {
    from: 'Steven Kitzes <cyoag.steve@gmail.com>', // sender
    to: 'cyoag.steve@gmail.com', // list of receivers
    subject: 'CYOAG - Copyright Claim', // Subject line
    text: mailBody // plaintext body
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
    if(error){
      var errorMsg = 'Got error trying to send emails for copyright claim: ' + error;
      logMgr.error(errorMsg);
      res.send(errorMsg);
    }
    logMgr.out('Copyright complaint sent . . . info: ' + JSON.stringify(info));
    logMgr.verbose('Copyright complaint content: ' + JSON.stringify(mailOptions));

    // notify user of invalid/unacceptable email addresses
    var rejected = info.rejected;
    if(rejected.length > 0) {
      var replyMsg = 'Invalid email address(es) detected: ';
      for(var i = 0; i < rejected.length; i++) {
        replyMsg += rejected[i] + ', ';
      }
      replyMsg += 'please make sure you use a valid email address.';
      res.send(replyMsg);
    }
    var successMsg = 'Success!  Your message has been successfully delivered to the CYOAG moderation team.  If you do not receive a reply from us within a couple of business days, please confirm that you entered valid contact details, and try submitting this form again.  Thanks for your time!';
    res.send(successMsg);
  });
}

module.exports = router;
