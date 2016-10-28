var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('./logger')('SocialLoginButtonComponents.js');

var exports = {};

// Facebook login button component
var FacebookButton = React.createClass({
  render: function() {
    return (
      <div className='fb-button'>
        <p><a href='http://www.facebook.com'>Facebook Login</a></p>
      </div>
    );
  }
});

// Twitter login button component
var TwitterButton = React.createClass({
  render: function() {
    return (
      <div className='tw-button'>
        <p><a href='http://www.twitter.com'>Twitter Login</a></p>
      </div>
    );
  }
});

exports.FacebookButton = FacebookButton;
exports.TwitterButton = TwitterButton;

module.exports = exports;
