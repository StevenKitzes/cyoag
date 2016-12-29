var DEBUG = require('../build-config').DEBUG;
var VERBOSE = require('../build-config').VERBOSE;

module.exports = function(sourceName) {
  return {
    logSource: sourceName ? sourceName : 'Unknown source',

    out: function(msg) {
      var output = msg + ' (' + this.logSource + ')';
      console.log(output);
    },

    debug: function(msg) {
      if(DEBUG) {
        var output = "DEBUG: " + msg + ' (' + this.logSource + ')';
        console.log(output);
      }
    },

    warn: function(warning) {
      var output = "! ! ! WARNING ! ! ! : " + warning + ' (' + this.logSource + ')';
      console.log(output);
    },

    error: function(error) {
      var output = 'X X X ERROR X X X : ' + error + ' (' + this.logSource + ')';
      console.log(output);
    },

    verbose: function(msg) {
      if(DEBUG && VERBOSE) {
        var output = "VERBOSE: " + msg + ' (' + this.logSource + ')';
        console.log(output);
      }
    }
  };
};
