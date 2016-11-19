var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('NodeComponents.js');

var exports = {};

// Facebook login button component
var Node = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    var context = this.props.context;
    var snippet = context.state.snippet;

    return(
      <div id='cyoag-node-container'>
        <p id='cyoag-trailing-snippet'>{snippet.trailingSnippet}</p>
        <p id='cyoag-last-path'>{snippet.lastPath}</p>
        <p id='cyoag-node-snippet'>{snippet.nodeSnippet}</p>
      </div>
    );
  }
});

exports.Node = Node;

module.exports = exports;
