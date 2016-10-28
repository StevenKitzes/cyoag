var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('./logger')('MainComponent.js');

var FacebookButton = require('./SocialLoginButtonComponents').FacebookButton;
var TwitterButton = require('./SocialLoginButtonComponents').TwitterButton;

// Hello World component: display a simple prop
var MainComponent = React.createClass({
  componentWillMount: function() {
    logMgr.debug('Checking session status . . .');
    var xhr = new XMLHttpRequest();
    // xmlHttp.onreadystatechange = () => {...}
    xhr.onreadystatechange = () => {
      if( xhr.readyState == 4 && xhr.status == 200 ) {
        logMgr.debug('Status 200!');
        logMgr.verbose('Cookie check response payload: ' + xhr.responseText);
        var response = JSON.parse(xhr.responseText);
        // do something with response
        logMgr.debug('Response message: ' + response.msg);
        this.setState({
          loggedIn: response.loggedIn
        });
      }
      else {
        logMgr.debug('Initial cookie check yielded HTTP response status: ' + xhr.status);
      }
    }
    xhr.open('POST', '/session');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send();
  },
  getInitialState: function() {
    return {
      loggedIn: false
    };
  },
  render: function() {
    logMgr.verbose('Rendering MainComponent.');
    var loggedStatus;
    if(this.state.loggedIn) {
      loggedStatus = <h3>Logged in!</h3>;
    }
    else {
      loggedStatus = <div><FacebookButton /><TwitterButton /></div>;
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
