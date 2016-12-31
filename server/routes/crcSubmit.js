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
    sendMail(name, email, message, res);
  });
});

// largely copy pasta from nodemailer npm documentation
function sendMail(name, confirmAddress, message, res) {
  // create reusable transporter object using the default SMTP transport
  var transporter = nodemailer.createTransport('smtps://' + secrets.emailAcct + '@gmail.com:' + secrets.emailPass + '@smtp.gmail.com');

  var mailBody = '' +
    '[This message is a confirmation of receipt of a copyright claim filed with CYOAG.  If you did not file such a claim, ' +
    'please disregard this message.]\r\n\r\n' +

    'Hi ' + name + ', and thanks for getting in touch.\r\n\r\n' +

    'This email is simply to confirm receipt of your message.  I will be getting in touch with you as soon as I can so ' +
    'that we can resolve any issues you may have found with content on CYOAG.\r\n\r\n' +

    'For confirmation purposes, your email address is ' + confirmAddress + ' and the message I received from you is:\r\n' +
    message + '\r\n\r\n' +

    'Thanks for your time and understanding,\r\n' +
    '- Steven Kitzes';

  // mailOptions to send the initial mail to myself
  var mailOptions = {
    from: 'Steven Kitzes <cyoag.steve@gmail.com>',
    to: confirmAddress, // list of receivers
    bcc: 'cyoag.steve@gmail.com', // list of BCC receivers
    subject: 'CYOAG - Copyright Claim Confirmation', // Subject line
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
    var successMsg = 'Success!  You should receive a confirmation email shortly.  If you do not receive an email confirmation within a few minutes, please double check that you entered your email address correctly, and try again.  Thanks for your time!';
    res.send(successMsg);
  });
}

module.exports = router;
