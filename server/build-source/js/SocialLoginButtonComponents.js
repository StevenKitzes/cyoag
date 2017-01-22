var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('../../utils/browserLogger')('SocialLoginButtonComponents.js');

var exports = {};

// Facebook login button component
var FacebookButton = React.createClass({
  render: function() {
    return (
      <div className='cyoag-fb-login cyoag-inline-block'>
        <a className='cyoag-side-padded-link cyoag-button' onClick={this.validateTos} href='/fb/login'>Facebook</a>
      </div>
    );
  },
  validateTos: validateTos
});

// Twitter login button component
var TwitterButton = React.createClass({
  render: function() {
    return (
      <div className='cyoag-tw-button cyoag-inline-block'>
        <a className='cyoag-side-padded-link cyoag-button' onClick={this.validateTos} href='/tw/login'>Twitter</a>
      </div>
    );
  },
  validateTos: validateTos
});

// Logout button component
var LogoutButton = React.createClass({
  render: function() {
    return (
      <button id='cyoag-logout-button' className='shaded-border-red' onClick={this.props.logoutRequest}>Log Out</button>
    );
  }
});

function validateTos(e) {
  if(!document.getElementById('cyoag-tos-checkbox').checked) {
    if(e.preventDefault) {
      e.preventDefault();
    }
    if(e.stopPropagation) {
      e.stopPropagation();
    }
    this.props.context.message({warning: 'You must accept the Terms and Conditions to register or login with your account.'});
    return false;
  }
}

exports.FacebookButton = FacebookButton;
exports.TwitterButton = TwitterButton;
exports.LogoutButton = LogoutButton;

module.exports = exports;
