var express = require('express');
var router = express.Router();
var cookieParser = require('cookie-parser');

var generateGuid = require('../build-source/js/uid-gen');

var app = express();
app.use(cookieParser());

/* Endpoint to check if session exists, and if so, whether it is valid */
router.post('/', function(req, res, next) {
  var response = {};

  // Check if session ID is missing
  if (!req.cookies.sessionId) {
    // If missing, create and return
    var newGuid = generateGuid();
    response.msg = 'Session ID not found.  Created: ' + newGuid;
    response.loggedIn = false;
    res.cookie('sessionId', newGuid);
  }
  else {
    // If session cookie existed, validate it
    response.msg = 'Session ID already existed: ' + req.cookies.sessionId;
    response.loggedIn = true;
  }

  res.send(JSON.stringify(response));
});

module.exports = router;
