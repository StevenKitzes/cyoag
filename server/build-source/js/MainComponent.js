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
      paths: []
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
      // do something with response
      logMgr.debug('Response message: ' + response.msg);
      properThis.setState({
        loggedIn: response.loggedIn
      });
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
      // do something with response
      logMgr.debug('Response message: ' + response.msg);
      properThis.setState({
        loggedIn: response.loggedIn
      });
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
