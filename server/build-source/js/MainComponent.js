var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('./logger')('MainComponent.js');

var ReactComponents = require('./SocialLoginButtonComponents');

// Hello World component: display a simple prop
var MainComponent = React.createClass({
  componentDidMount: mountXhrHandler,
  getInitialState: function() {
    return {
      loggedIn: false
    };
  },
  logout: logoutXhrHandler,
  render: function() {
    logMgr.verbose('Rendering MainComponent.');
    var loggedStatus;
    if(this.state.loggedIn) {
      loggedStatus = <div><h3>Logged in!</h3><ReactComponents.LogoutButton logoutRequest={this.logout} /></div>;
    }
    else {
      loggedStatus = <div><ReactComponents.FacebookButton /><ReactComponents.TwitterButton /></div>;
    }
    return (
      <div>
        <h1>Ready {this.props.name}!</h1>
        {loggedStatus}
      </div>
    );
  }
});

module.exports = MainComponent;

function mountXhrHandler() {
  logMgr.debug('Checking session status . . .');
  var xhr = new XMLHttpRequest();
  var context = this;
  // xmlHttp.onreadystatechange = () => {...}
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Cookie check response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      // do something with response
      logMgr.debug('Response message: ' + response.msg);
      context.setState({
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
  var context = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Logout response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      // do something with response
      logMgr.debug('Response message: ' + response.msg);
      context.setState({
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
