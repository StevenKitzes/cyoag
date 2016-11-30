var React = require('react');
var ReactDOM = require('react-dom');

var config = require('./build-config');
var constants = require('../../constants');
var logMgr = require('./logger')('MainComponent.js');

var HeaderComponents = require('./HeaderComponents');
var MessagingComponents = require('./MessagingComponents');
var MainColumnComponents = require('./MainColumnComponents');
var MarginColumnComponents = require('./MarginColumnComponents');
var FooterComponents = require('./FooterComponents');

// Hello World component: display a simple prop
var MainComponent = React.createClass({
  componentDidMount: mountXhrHandler,
  getInitialState: getDefaultStateObject,
  logoutRequest: logoutXhrHandler,
  navigate: navigateXhrHandler,
  render: function() {
    logMgr.verbose('Rendering...');

    var context = {};
    context.state = this.state;
    context.logoutRequest = this.logoutRequest;
    context.navigate = this.navigate;
    context.voteDown = this.voteDown;
    context.voteUp = this.voteUp;

    var debugStateDisplay = (function(){
      if(config.DEBUG) {
        return (
          <div id="cyoag-debug-state-display"><br /><hr /><h4>Debug mode enabled! Current app state:</h4><hr />
            {JSON.stringify(context.state)}
          </div>
        );
      }
      else {
        return (
          <div id='cyoag-debug-state-display'></div>
        );
      }
    })();

    return (
      <div id='cyoag-react-container'>
        <HeaderComponents.Header />
        <MessagingComponents.Banner context={context} />
        <div id='cyoag-columns'>
          <MarginColumnComponents.MarginColumn context={context} />
          <MainColumnComponents.MainColumn context={context} />
        </div>
        <FooterComponents.Footer />
        {debugStateDisplay}
        <MessagingComponents.Modal context={context} />
      </div>
    );
  },
  voteDown: castDownVote,
  voteUp: castUpVote
});

module.exports = MainComponent;

function mountXhrHandler() {
  logMgr.debug('Checking session status . . .');
  var xhr = new XMLHttpRequest();
  var properThis = this;
  // xmlHttp.onreadystatechange = () => {...}
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Cookie check response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response);
    }
    else {
      logMgr.debug('Initial cookie check yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({error: 'Server response timed out; unable to detect your login status.'});
  }
  xhr.send();
}

function logoutXhrHandler() {
  logMgr.debug('Logging out current user . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Logout response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response);
    }
    else {
      logMgr.debug('Logout attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('GET', '/session/logout');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({error: 'Server response timed out; unable to detect your login status.'});
  }
  xhr.send();
}

function navigateXhrHandler(nodeUid) {
  logMgr.debug('User attempting to navigate story nodes . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Navigation response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response);
    }
    else {
      logMgr.debug('Navigation attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({error: 'Server response timed out; unable to detect your login status.'});
  }
  var xhrPayload = JSON.stringify({navigate: nodeUid});
  xhr.send(xhrPayload);
}

function castUpVote() {
  logMgr.debug('Setting votification UP');
  this.setState({
    votification: constants.votificationUp
  });
}
function castDownVote() {
  logMgr.debug('Setting votification DOWN');
  this.setState({
    votification: constants.votificationDown
  });
}

function validateResponse(properThis, response) {
  // don't do a full response validation if we are told to expect only an alert message
  if(response.messageOnly) {
    properThis.setState({
      msg: null,
      warning: null,
      error: null
    });
    properThis.setState({
      msg: response.msg ? response.msg : null,
      warning: response.warning ? response.warning : null,
      error: response.error ? response.error : null
    });
    return;
  }

  logMgr.debug('Attempting to validate response from server . . .');
  if(!response) {
    // wow... if you don't even get a response, something is nightmarishly wrong
    var errorMessage = 'Got no valid response object from server whatsoever.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(response.error) {
    // set an error state based on the returned error
    logMgr.out(response.error);
    properThis.setState(getErrorStateObject(response.error));
    return;
  }
  if(!response.hasOwnProperty('nodeUid')) {
    // can't even determine where we are; set error state, display error content
    var errorMessage = 'Could not get story node data from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('parentUid')) {
    // can't determine current node's parent; set error state, display error content
    var errorMessage = 'Could not retrieve node lineage data from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('acctType')) {
    // can't determine account type; set err, display err content
    var errorMessage = 'Could not get user account type from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('userName')) {
    // can't figure out user's name; set err, display err content
    var errorMessage = 'Could not get user data from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(
    !response.hasOwnProperty('votification') ||
    (response.votification != constants.votificationNone &&
     response.votification != constants.votificationUp &&
     response.votification != constants.votificationDown)) {
    // can't determine votification status; set err, display err content
    var errorMessage = 'Could not retrieve votification status from the server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('paths')) {
    // no paths given, set error state and display error content
    var errorMessage = 'Could not retrieve pathing information from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('snippet')) {
    // no snippet to display, set error state and display error content
    var errorMessage = 'Could not retrieve snippet data from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(
    !response.snippet.hasOwnProperty('trailingSnippet') ||
    !response.snippet.hasOwnProperty('lastPath') ||
    !response.snippet.hasOwnProperty('nodeSnippet')) {
    // snippet information missing, set error state and display error content
    var errorMessage = 'Some snippet details were missing in response from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  logMgr.verbose('Trying to set state after validation: ' + JSON.stringify(response));
  properThis.setState({
    nodeUid: response.nodeUid,
    parentUid: response.parentUid,
    userName: response.userName,
    acctType: response.acctType,
    votification: response.votification,
    snippet: response.snippet,
    paths: response.paths,
    msg: response.msg ? response.msg : null,
    warning: response.warning ? response.warning : null,
    error: response.error ? response.error : null
  });
  logMgr.verbose('State was set successfully after validation!');
  logMgr.verbose('New state: ' + JSON.stringify(properThis.state));
}

function getDefaultStateObject() {
  return {
    nodeUid: constants.defaultNodeUid,
    parentUid: constants.defaultParentUid,
    userName: constants.defaultUserName,
    acctType: constants.acctTypeVisitor,
    votification: constants.votificationNone,
    snippet: {
      trailingSnippet: constants.defaultTrailingSnippet,
      lastPath: constants.defaultLastPath,
      nodeSnippet: constants.defaultNodeSnippet
    },
    paths: [],
    msg: null,
    warning: null,
    error: null
  };
}

function getErrorStateObject(errorMessage) {
  return {
    nodeUid: constants.errorNodeUid,
    parentUid: constants.errorNodeUid,
    userName: constants.errorUserName,
    acctType: constants.acctTypeVisitor,
    votification: constants.votificationNone,
    snippet: {
      trailingSnippet: constants.errorTrailingSnippet,
      lastPath: constants.errorLastPath,
      nodeSnippet: constants.errorNodeSnippet + '  ' + errorMessage
    },
    paths: [],
    msg: null,
    warning: null,
    error: errorMessage
  };
}
