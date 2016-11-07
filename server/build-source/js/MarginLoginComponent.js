var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('./logger')('MarginLoginComponent.js');

var SocialLoginButtonComponents = require('./SocialLoginButtonComponents');

var exports = {};

// Facebook login button component
var MarginLogin = React.createClass({
  render: function() {
    var context = this.props.context;
    var content;

    if(context.state.loggedIn) {
      content =
        <div id='cyoag-margin-logout'>
          <h3>Logged in!</h3>
          <SocialLoginButtonComponents.LogoutButton logoutRequest={context.logoutRequest} />
        </div>;
    }
    else {
      content =
        <div id='cyoag-margin-login'>
          <h3>Login with:</h3>
          <SocialLoginButtonComponents.FacebookButton />
          <SocialLoginButtonComponents.TwitterButton />
        </div>;
    }

    return (
      <div id='cyoag-margin-login-container'>
        {content}
      </div>
    );
  }
});

exports.MarginLogin = MarginLogin;

module.exports = exports;
