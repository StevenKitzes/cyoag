var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var fbRoutes = require('./routes/fbRoutes');
var twRoutes = require('./routes/twRoutes');
var testPost = require('./routes/testPost');
var session = require('./routes/session');
var navigate = require('./routes/navigate');

var app = express();

// view engine setup
app.set('view engine', null);

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/index', index);
app.use('/fb', fbRoutes);
app.use('/tw', twRoutes);
app.use('/testPost', testPost);
app.use('/session', session);
app.use('/navigate', navigate);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
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
