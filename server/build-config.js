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
    config.httpsCertKeyLocation = secrets.httpsCertKeyLocation_local;
    config.httpsCertLocation = secrets.httpsCertLocation_local;
    break;
  case constants.envProd:
    config.hostDomain = constants.hostDomainProd;
    config.httpPort = 80;
    config.httpsCertKeyLocation = secrets.httpsCertKeyLocation;
    config.httpsCertLocation = secrets.httpsCertLocation;
    break;
  default:
    config.hostDomain = constants.hostDomainLocal;
    config.httpPort = 3000;
    config.httpsCertKeyLocation = secrets.httpsCertKeyLocation_local;
    config.httpsCertLocation = secrets.httpsCertLocation_local;
    break;
}

module.exports = config;
