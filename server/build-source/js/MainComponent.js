var React = require('react');
var ReactDOM = require('react-dom');

var config = require('../../build-config');
var constants = require('../../constants');
var logMgr = require('../../utils/logger')('MainComponent.js');

var HeaderComponents = require('./HeaderComponents');
var MessagingComponents = require('./MessagingComponents');
var MainColumnComponents = require('./MainColumnComponents');
var MarginColumnComponents = require('./MarginColumnComponents');
var FooterComponents = require('./FooterComponents');

// Hello World component: display a simple prop
var MainComponent = React.createClass({
  componentDidMount: mountXhrHandler,
  getInitialState: getDefaultStateObject,
  inputSubmit: inputSubmit,
  logoutRequest: logoutXhrHandler,
  message: function(msg) {
    this.setState({
      msg: msg.msg ? msg.msg : null,
      warning: msg.warning ? msg.warning : null,
      error: msg.error ? msg.error : null
    });
  },
  nameChange: nameChange,
  navigate: navigateXhrHandler,
  render: function() {
    logMgr.verbose('Rendering...');

    var context = {};
    context.state = this.state;
    context.inputSubmit = this.inputSubmit;
    context.logoutRequest = this.logoutRequest;
    context.message = this.message;
    context.nameChange = this.nameChange;
    context.navigate = this.navigate;
    context.saveDraft = this.saveDraft;
    context.votify = this.votify;

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
  saveDraft: saveDraft,
  votify: votify
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
  if(nodeUid == null) {
    logMgr.error('Missing node ID in navigation attempt.');
    return;
  }
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

function votify(nodeUid, newVote) {
  if(nodeUid == null || newVote == null) {
    logMgr.error('Relevant parameters missing in votification call.');
    return;
  }
  logMgr.debug('User attempting to votify a story node . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Votification response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateVotificationResponse(properThis, response);
    }
    else {
      logMgr.debug('Votification attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({error: 'Server response timed out; unable to detect result of votification attempt.'});
  }
  var xhrPayload = JSON.stringify({votify: nodeUid, newVote: newVote});
  xhr.send(xhrPayload);
}

function nameChange(newName) {
  logMgr.debug('User attempting to update their name . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Name change response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response);
    }
    else {
      logMgr.debug('Name change attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({error: 'Server response timed out; unable to detect result of name change attempt.'});
  }
  var xhrPayload = JSON.stringify({newName: newName});
  xhr.send(xhrPayload);
}

function inputSubmit(path, body) {
  logMgr.debug('User attempting to submit new node . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Node submission response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response);
    }
    else {
      logMgr.debug('Node submission attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({error: 'Server response timed out; unable to detect result of node submission attempt.'});
  }
  var xhrPayload = JSON.stringify({newNodePath: path, newNodeBody: body});
  xhr.send(xhrPayload);
}

function saveDraft(path, body) {
  logMgr.debug('User attempting to save draft . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Draft salvation response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response);
    }
    else {
      logMgr.debug('Draft salvation attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({error: 'Server response timed out; unable to verify that your draft was saved.'});
  }
  var xhrPayload = JSON.stringify({draftPath: path, draftBody: body});
  xhr.send(xhrPayload);
}

function validateVotificationResponse(properThis, response) {
  if(validateMessageResponse(properThis, response)) {
    return;
  }

  logMgr.debug('Attempting to validate votification response from server . . .');
  if(!response) {
    // wow... if you don't even get a response, something is nightmarishly wrong
    var errorMessage = 'Got no valid response object from server whatsoever.';
    logMgr.error(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(response.error) {
    // set an error state based on the returned error
    logMgr.error(response.error);
    properThis.setState(getErrorStateObject(response.error));
    return;
  }
  if(
    !response.hasOwnProperty('votification') ||
    (response.votification != constants.votificationNone &&
     response.votification != constants.votificationUp &&
     response.votification != constants.votificationDown)) {
    // can't determine votification status; set err, display err content
    var errorMessage = 'Could not retrieve new votification status from the server.';
    logMgr.error(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  logMgr.verbose('Trying to set state after validation: ' + JSON.stringify(response));
  properThis.setState({
    votification: response.votification,
    msg: response.msg ? response.msg : null,
    warning: response.warning ? response.warning : null,
    error: response.error ? response.error : null
  });
  logMgr.verbose('State was set successfully after validation!');
  logMgr.verbose('New state: ' + JSON.stringify(properThis.state));
}
function validateResponse(properThis, response) {
  if(validateMessageResponse(properThis, response)) {
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
    !response.snippet.hasOwnProperty('nodeSnippet') ||
    !response.snippet.hasOwnProperty('authorName')) {
    // snippet information missing, set error state and display error content
    var errorMessage = 'Some snippet details were missing in response from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('inputBlocking')) {
    // no verification of current node's authorship, set error state and display error content
    var errorMessage = 'Could not retrieve input permissions from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(
    !response.inputBlocking.hasOwnProperty('top') ||
    !response.inputBlocking.hasOwnProperty('side')) {
    // path authorship information missing, set error state and display error content
    var errorMessage = 'Path authorship details were missing in response from server.';
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
    inputBlocking: response.inputBlocking,
    msg: response.msg ? response.msg : null,
    warning: response.warning ? response.warning : null,
    error: response.error ? response.error : null
  });
  logMgr.verbose('State was set successfully after validation!');
  logMgr.verbose('New state: ' + JSON.stringify(properThis.state));
}
function validateMessageResponse(context, response) {
  // don't do a full response validation if we are told to expect only an alert message
  if(response.messageOnly) {
    logMgr.verbose('Got message-only response.');
    context.setState({
      msg: null,
      warning: null,
      error: null
    });
    context.setState({
      msg: response.msg ? response.msg : null,
      warning: response.warning ? response.warning : null,
      error: response.error ? response.error : null
    });
    return true;
  }
  return false;
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
      nodeSnippet: constants.defaultNodeSnippet,
      authorName: constants.displayNameUnknown
    },
    paths: [],
    inputBlocking: constants.inputBlockingHide,
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
      nodeSnippet: constants.errorNodeSnippet + '  ' + errorMessage,
      authorName: constants.displayNameUnknown
    },
    paths: [],
    inputBlocking: constants.inputBlockingHide,
    msg: null,
    warning: null,
    error: errorMessage
  };
}
