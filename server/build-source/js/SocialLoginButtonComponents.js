var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('./logger')('SocialLoginButtonComponents.js');

var exports = {};

// Facebook login button component
var FacebookButton = React.createClass({
  render: function() {
    return (
      <div className='fb-button'>
        <p><a href='/fb/login'>Facebook Login</a></p>
      </div>
    );
  }
});

// Twitter login button component
var TwitterButton = React.createClass({
  render: function() {
    return (
      <div className='tw-button'>
        <p><a href='/tw/login'>Twitter Login</a></p>
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
