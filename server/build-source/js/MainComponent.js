var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('./logger')('MainComponent.js');

var MarginLoginComponent = require('./MarginLoginComponent');
var VotificationComponents = require('./VotificationComponents');

// Hello World component: display a simple prop
var MainComponent = React.createClass({
  componentDidMount: mountXhrHandler,
  getInitialState: function() {
    return {
      currentNode: null,
      loggedIn: false,
      votification: 'none',
      snippet: {
        trailing: null,
        lastPath: null,
        current: null,
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
    if(this.state.loggedIn) {
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
    votification: 'up'
  });
}
function castDownVote() {
  logMgr.debug('Setting votification DOWN');
  this.setState({
    votification: 'down'
  });
}

function validateResponse(properThis, response) {
  if(!response) {
    // wow... if you don't even get a response, something is nightmarishly wrong
  }
  if(response.error) {
    // set an error state based on the returned error
  }
  if(!response.hasOwnProperty('currentNode')) {
    // can't even determine where we are; set error state, display error content
  }
  if(!response.hasOwnProperty('loggedIn')) {
    // can't determine whether user is logged in; set err, display err content
  }
  if(
    !response.hasOwnProperty('votification') ||
    (response.votification != 'none' && response.votification != 'up' && response.votification != 'down')) {
    // can't determine votification status; set err, display err content
  }
  if(!response.hasOwnProperty('snippet')) {
    // no snippet to display, set error state and display error content
  }
  if(
    !response.snippet.hasOwnProperty('trailing') ||
    !response.snippet.hasOwnProperty('lastPath') ||
    !response.snippet.hasOwnProperty('current')) {
    // snippet information missing, set error state and display error content
  }
  if(!response.hasOwnProperty('paths')) {
    // no paths given, set error state and display error content
  }
  // if no errors were caught, we can set our state!
  if(response.msg) {
    logMgr.debug(response.msg);
  }
  var newState = {};
  properThis.setState(
    currentNode: response.currentNode,
    loggedIn: response.loggedIn,
    votification: response.votification,
    snippet: response.snippet,
    paths: response.paths,
    error: null
  );
}
