var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('HeaderComponents.js');

var exports = {};

// Facebook login button component
var Header = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    return(
      <div id='cyoag-header-container'>
        <h1 id='cyoag-header-title'>Welcome to CYOAG!</h1>
        <p id='cyoag-header-subtitle'>Create Your Own Adventure Game</p>
        <a className='cyoag-link cyoag-button' href='about.html'>What is CYOAG?</a> | <a className='cyoag-link cyoag-button' href='usage.html'>Usage and Copyright</a> | <a className='cyoag-link cyoag-button' href='steve.html'>About the Creator</a> | <a className='cyoag-link cyoag-button' href='https://github.com/stevenkitzes/cyoag'>Project on GitHub</a>
        <hr />
      </div>
    );
  }
});

exports.Header = Header;

module.exports = exports;
