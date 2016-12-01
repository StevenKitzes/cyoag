var DEBUG = require('../build-config').DEBUG;
var VERBOSE = require('../build-config').VERBOSE;

module.exports = function(sourceName, withTimestamp) {
  return {
    logSource: sourceName ? sourceName : 'Unknown source',
    withTimestamp: withTimestamp,

    out: function(msg) {
      var output = msg + ' (' + this.logSource + ')';
      logWithTimestamp(output, this.withTimestamp);
    },

    debug: function(msg) {
      if(DEBUG) {
        var output = "DEBUG: " + msg + ' (' + this.logSource + ')';
        logWithTimestamp(output, this.withTimestamp);
      }
    },

    warn: function(warning) {
      var output = "! ! ! WARNING ! ! ! : " + warning + ' (' + this.logSource + ')';
      logWithTimestamp(output, this.withTimestamp);
    },

    error: function(error) {
      var output = 'X X X ERROR X X X : ' + error + ' (' + this.logSource + ')';
      logWithTimestamp(output, this.withTimestamp);
    },

    verbose: function(msg) {
      if(DEBUG && VERBOSE) {
        var output = "VERBOSE: " + msg + ' (' + this.logSource + ')';
        logWithTimestamp(output, this.withTimestamp);
      }
    }
  };
};

function logWithTimestamp(msg, withTimestamp) {
  if(!withTimestamp) {
    console.log(msg);
    return;
  }

  var date = new Date();

  var
    year = date.getFullYear(),
    month = date.getMonth() + 1,
    day = date.getDate(),
    hour = date.getHours(),
    minute = date.getMinutes(),
    second = date.getSeconds();

  console.log('[' + year + '.' + month + '.' + day + '.' + hour + '.' + minute + '.' + second + '] ' + msg);
}
