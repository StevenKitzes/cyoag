var DEBUG = require('./build-config').DEBUG;
var VERBOSE = require('./build-config').VERBOSE;

/*var logManager = {

  logSource: 'Unknown source',

  out: function(msg) {
    console.log(this.logSource + ": " + msg);
  },

  debug: function(msg) {
    if(DEBUG) {
      console.log("[DEBUG] " + this.logSource + ": " + msg);
    }
  },

  verbose: function(msg) {
    if(DEBUG && VERBOSE) {
      console.log("[VERBOSE] " + this.logSource + ": " + msg);
    }
  },

  setLogSource: function(name) {
    this.logSource = name;
    console.log('= = = Set logSource: ' + name);
    return this;
  }

};*/

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

    verbose: function(msg) {
      if(DEBUG && VERBOSE) {
        console.log("[VERBOSE] " + this.logSource + ": " + msg);
      }
    }
  };
};
