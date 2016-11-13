var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('MainComponent.js');

var MarginLoginComponent = require('./MarginLoginComponent');
var VotificationComponents = require('./VotificationComponents');

// Hello World component: display a simple prop
var MainComponent = React.createClass({
  componentDidMount: mountXhrHandler,
  getInitialState: function() {
    return {
      nodeUid: null,
      userName: null,
      acctType: constants.acctTypeVisitor,
      votification: constants.votificationNone,
      snippet: {
        trailingSnippet: null,
        lastPath: null,
        nodeSnippet: null,
      },
      paths: [],
      error: null
    };
  },
  logoutRequest: logoutXhrHandler,
  render: function() {
    logMgr.verbose('Rendering MainComponent.');

    var context = {};
    context.state = this.state;
    context.logoutRequest = this.logoutRequest;
    context.voteDown = this.voteDown;
    context.voteUp = this.voteUp;

    var votificationComponent;
    if(this.state.acctType != constants.acctTypeVisitor) {
      votificationComponent = <VotificationComponents.Votification context={context} />;
    }
    else {
      votificationComponent = <VotificationComponents.BegLogin context={context} />;
    }

    return (
      <div id='cyoag-main'>
        <MarginLoginComponent.MarginLogin context={context} />
        {votificationComponent}
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
  xhr.timeout = 3000;
  xhr.ontimeout = function() {
    xhr.abort();
    alert('Server response timed out; unable to detect your login status.');
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
  xhr.timeout = 3000;
  xhr.ontimeout = function() {
    xhr.abort();
    alert('Logout request took to long, server unresponsive; you are still logged in!');
  }
  xhr.send();
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
  logMgr.debug('Attempting to validate response from server . . .');
  if(!response) {
    // wow... if you don't even get a response, something is nightmarishly wrong
    logMgr.out('Got no valid response object from server.');
  }
  if(response.error) {
    // set an error state based on the returned error
    logMgr.out(response.error);
  }
  if(!response.hasOwnProperty('nodeUid')) {
    // can't even determine where we are; set error state, display error content
    logMgr.out('Got no node UID from server.');
  }
  if(!response.hasOwnProperty('acctType')) {
    // can't determine account type; set err, display err content
    logMgr.out('Got no user account type from server.');
  }
  if(!response.hasOwnProperty('userName')) {
    // can't figure out user's name; set err, display err content
    logMgr.out('Got no user name from server.');
  }
  if(
    !response.hasOwnProperty('votification') ||
    (response.votification != constants.votificationNone &&
     response.votification != constants.votificationUp &&
     response.votification != constants.votificationDown)) {
    // can't determine votification status; set err, display err content
    logMgr.out('Got no votification information from server.');
  }
  if(!response.hasOwnProperty('paths')) {
    // no paths given, set error state and display error content
    logMgr.out('Got no pathing information from server.');
  }
  if(!response.hasOwnProperty('snippet')) {
    // no snippet to display, set error state and display error content
    logMgr.out('Got no snippet data from server.');
  }
  if(
    !response.snippet.hasOwnProperty('trailingNodeSnippet') ||
    !response.snippet.hasOwnProperty('trailingPathSnippet') ||
    !response.snippet.hasOwnProperty('nodeSnippet')) {
    // snippet information missing, set error state and display error content
    logMgr.out('Some snippet details were missing in response from server.');
  }
  // if message or warning was bundled, handle that
  if(response.msg) {
    logMgr.debug(response.msg);
  }
  if(response.warning) {
    logMgr.warn(response.warning);
  }
  logMgr.verbose('Trying to set state after validation . . .');
  properThis.setState({
    nodeUid: response.nodeUid,
    userName: response.userName,
    acctType: response.acctType,
    votification: response.votification,
    nodeSnippet: response.nodeSnippet,
    paths: response.paths,
    error: null
  });
  logMgr.verbose('State was set successfully after validation!');
}
