var http = require('http');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('./utils/serverLogger')('cyoag.js');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var helmet = require('helmet');

var buildConfig = require('./build-config');
var constants = require('./constants');

var crcSubmit = require('./routes/crcSubmit');
var index = require('./routes/index');
var fbRoutes = require('./routes/fbRoutes');
var twRoutes = require('./routes/twRoutes');
var testPost = require('./routes/testPost');
var session = require('./routes/session');

var app = express();

// view engine setup
app.set('view engine', null);

// NOTE: port is set in ../cyoag/bin/www

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(helmet());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/crcSubmit', crcSubmit);
app.use('/index', index);
app.use('/fb', fbRoutes);
app.use('/tw', twRoutes);
app.use('/testPost', testPost);
app.use('/session', session);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found (not the most glorious 404 message ever crafted, I guess)');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('ERROR: ' + err.message);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('ERROR: ' + err.message);
});

module.exports = app;
