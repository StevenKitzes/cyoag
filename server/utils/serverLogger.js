var DEBUG = require('../build-config').DEBUG;
var VERBOSE = require('../build-config').VERBOSE;

var fs = require('fs');
var getTimeStampString = require('./timeStamp');

// where we will log output to file
var logFile = './logs/log-' + getTimeStampString() + '.txt';
// ensure log output directory exists
try {
  fs.mkdirSync('./logs', 777);
} catch(err) {
  if(err.toString().indexOf('EEXIST') < 0) {
    console.log('ERROR trying to create log file output directory: ' + err);
  }
  else {
    console.log('Found log output folder already existed (this is good).');
  }
}

function appendLog(msg) {
  // get stats on the file at the current target log file location
  fs.stat(logFile, function(err, stat) {
    // if an error occurs getting the stat, other than ENOENT, report and quit thie function
    if(err) {
      if(err.toString().indexOf('ENOENT') < 0) {
        console.log(err);
        return;
      }
      console.log('+ + + Note: fs.stat failed due to missing log file (this is not necessarily an error)');
      return;
    }

    // if current log file exists and size > 100k, start a new log file
    if(stat.size > 100000) {
      logFile = './logs/log-' + getTimeStampString() + '.txt';
    }
  });

  // do the actual appending
  fs.appendFile(logFile, msg + '\n', function(err) {
    if(err) {
      console.log('ERROR: could not write to log file.');
    }
  });
}

module.exports = function(sourceName) {
  return {
    logSource: sourceName ? sourceName : 'Unknown source',

    out: function(msg) {
      var output = msg + ' (' + this.logSource + ')';
      logWithTimestamp(output);
    },

    debug: function(msg) {
      if(DEBUG) {
        var output = "DEBUG: " + msg + ' (' + this.logSource + ')';
        logWithTimestamp(output);
      }
    },

    warn: function(warning) {
      var output = "! ! ! WARNING ! ! ! : " + warning + ' (' + this.logSource + ')';
      logWithTimestamp(output);
    },

    error: function(error) {
      var output = 'X X X ERROR X X X : ' + error + ' (' + this.logSource + ')';
      logWithTimestamp(output);
    },

    verbose: function(msg) {
      if(DEBUG && VERBOSE) {
        var output = "VERBOSE: " + msg + ' (' + this.logSource + ')';
        logWithTimestamp(output);
      }
    }
  };
};

function logWithTimestamp(msg) {
  msg = '[' + getTimeStampString() + '] ' + msg;

  console.log(msg);
  appendLog(msg);
}
