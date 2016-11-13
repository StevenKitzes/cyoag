var DEBUG = require('./build-config').DEBUG;
var VERBOSE = require('./build-config').VERBOSE;

module.exports = function(sourceName) {
  return {
    logSource: sourceName ? sourceName : 'Unknown source',

    out: function(msg) {
      console.log(this.logSource + ": " + msg);
    },

    debug: function(msg) {
      if(DEBUG) {
        console.log("[DEBUG] " + this.logSource + ": " + msg);
      }
    },

    warn: function(warning) {
      if(DEBUG) {
        console.log("[WARNING] " + this.logSource + ": " + warning);
      }
    },

    verbose: function(msg) {
      if(DEBUG && VERBOSE) {
        console.log("[VERBOSE] " + this.logSource + ": " + msg);
      }
    }
  };
};
