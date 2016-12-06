var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('../../utils/logger')('SocialLoginButtonComponents.js');

var exports = {};

// Facebook login button component
var FacebookButton = React.createClass({
  render: function() {
    return (
      <div className='cyoag-fb-login cyoag-inline-block'>
        <a className='cyoag-link' href='/fb/login'>Facebook</a>
      </div>
    );
  }
});

// Twitter login button component
var TwitterButton = React.createClass({
  render: function() {
    return (
      <div className='cyoag-tw-button cyoag-inline-block'>
        <a className='cyoag-link' href='/tw/login'>Twitter</a>
      </div>
    );
  }
});

// Logout button component
var LogoutButton = React.createClass({
  render: function() {
    return (
      <button onClick={this.props.logoutRequest}>Log Out</button>
    );
  }
});

exports.FacebookButton = FacebookButton;
exports.TwitterButton = TwitterButton;
exports.LogoutButton = LogoutButton;

module.exports = exports;
