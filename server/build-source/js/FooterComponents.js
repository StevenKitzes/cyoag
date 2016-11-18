var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('FooterComponents.js');

var exports = {};

// Facebook login button component
var Footer = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    return(
      <div id='cyoag-footer-container'>
        <h1>Footer</h1>
        <p>Special thanks and copyright notice (C)!</p>
      </div>
    );
  }
});

exports.Footer = Footer;

module.exports = exports;
