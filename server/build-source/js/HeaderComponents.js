var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('HeaderComponents.js');

var exports = {};

// Facebook login button component
var Header = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    return(
      <div id='cyoag-header-container'>
        <h1>Header</h1>
        <a href='https://stevenkitzes.github.io/cyoag/docs/functional-requirements.html'>Docs</a> | <a href='http://www.google.com'>Google</a>
      </div>
    );
  }
});

exports.Header = Header;

module.exports = exports;
