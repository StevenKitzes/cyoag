var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/logger')('MarginColumnComponents.js');

var SocialLoginButtonComponents = require('./SocialLoginButtonComponents');

var exports = {};

var MarginColumn = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    var context = this.props.context;
    var loginComponent;

    if(context.state.acctType != constants.acctTypeVisitor) {
      loginComponent = <MarginLogout userName={context.state.userName} logoutRequest={context.logoutRequest} />;
    }
    else {
      loginComponent = <MarginLogin />;
    }

    return (
      <div id='cyoag-margin-column'>
        {loginComponent}
      </div>
    );
  }
});

// Margin login button set component
var MarginLogin = React.createClass({
  render: function() {
    return (
      <div id='cyoag-margin-login-container'>
        <h4>Login with:</h4>
        <SocialLoginButtonComponents.FacebookButton /> <SocialLoginButtonComponents.TwitterButton />
      </div>
    );
  }
});

// Margin logout button set component
var MarginLogout = React.createClass({
  render: function() {
    return (
      <div id='cyoag-margin-login-container'>
        <h4>Logged in!</h4>
        <p>Welcome, {this.props.userName}!</p>
        <SocialLoginButtonComponents.LogoutButton logoutRequest={this.props.logoutRequest} />
      </div>
    );
  }
});

exports.MarginColumn = MarginColumn;

module.exports = exports;
