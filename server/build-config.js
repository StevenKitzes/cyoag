var constants = require('./constants');

var config = {};

config.DEBUG = true;
config.VERBOSE = true;

config.env = constants.envProd;

switch(config.env) {
  case constants.envLocal:
    config.hostDomain = constants.hostDomainLocal;
    break;
  case constants.envProd:
    config.hostDomain = constants.hostDomainProd;
    break;
  default:
    config.hostDomain = constants.hostDomainLocal;
    break;
}

module.exports = config;
