var constants = require('./constants');
var secrets = require('./secrets');

var config = {};

config.DEBUG = true;
config.VERBOSE = true;

config.env = constants.envProd;

switch(config.env) {
  case constants.envLocal:
    config.hostDomain = constants.hostDomainLocal;
    config.httpPort = 3000;
    config.httpsPrivKeyLocation = secrets.httpsPrivKeyLocation_local;
    config.httpsFullChainLocation = secrets.httpsFullChainLocation_local;
    config.httpsChainLocation = secrets.httpsChainLocation_local;
    break;
  case constants.envProd:
    config.hostDomain = constants.hostDomainProd;
    config.httpPort = 80;
    config.httpsPrivKeyLocation = secrets.httpsPrivKeyLocation;
    config.httpsFullChainLocation = secrets.httpsFullChainLocation;
    config.httpsChainLocation = secrets.httpsChainLocation;
    break;
  default:
    config.hostDomain = constants.hostDomainLocal;
    config.httpPort = 3000;
    config.httpsPrivKeyLocation = secrets.httpsPrivKeyLocation_local;
    config.httpsFullChainLocation = secrets.httpsFullChainLocation_local;
    config.httpsChainLocation = secrets.httpsChainLocation_local;
    break;
}

module.exports = config;
