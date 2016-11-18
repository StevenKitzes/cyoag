var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('MarginColumnComponents.js');

var SocialLoginButtonComponents = require('./SocialLoginButtonComponents');

var exports = {};

var MarginColumn = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    var context = this.props.context;
    var loginComponent;

    if(context.state.acctType != constants.acctTypeVisitor) {
      loginComponent = <MarginLogout logoutRequest={context.logoutRequest} />;
    }
    else {
      loginComponent = <MarginLogin />;
    }

    return (
      <div id='cyoag-margin-column'>
        <h1>Margin Column</h1>
        {loginComponent}
      </div>
    );
  }
});

// Margin login button set component
var MarginLogin = React.createClass({
  render: function() {
    return (
      <div id='cyoag-margin-login'>
        <h3>Login with:</h3>
        <SocialLoginButtonComponents.FacebookButton /> <SocialLoginButtonComponents.TwitterButton />
      </div>
    );
  }
});

// Margin logout button set component
var MarginLogout = React.createClass({
  render: function() {
    return (
      <div id='cyoag-margin-logout'>
        <h3>Logged in!</h3>
        <SocialLoginButtonComponents.LogoutButton logoutRequest={this.props.logoutRequest} />
      </div>
    );
  }
});

exports.MarginColumn = MarginColumn;

module.exports = exports;
