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

    var trailingSnippetId = 'node-' + context.state.parentUid;

    return(
      <div id='cyoag-node-container'>
        <a id={trailingSnippetId} className='cyoag-trailing-snippet-link cyoag-div-link' href='#'>
          <div className='cyoag-path-item cyoag-trailing-snippet'>{snippet.trailingSnippet}</div>
          <div id='cyoag-tooltip-regress'>Back whence you came . . . ?</div>
        </a>
        <p id='cyoag-last-path'>{snippet.lastPath}</p>
        <p id='cyoag-node-snippet'>{snippet.nodeSnippet}</p>
      </div>
    );
  },
  componentDidUpdate: function() {
    // for link created in render, set up JS listener to trigger nav XHR and tooltip listeners
    logMgr.debug('Node components mounted, assigning listeners to trailing snippet');
    var context = this.props.context;
    var parentUid = context.state.parentUid;

    var trailingSnippet = document.querySelector('#node-' + parentUid);
    var trailingSnippetTop = trailingSnippet.getBoundingClientRect().top;
    var trailingSnippetLeft = trailingSnippet.getBoundingClientRect().left;
    var tooltip = document.querySelector('#cyoag-tooltip-regress');

    logMgr.debug('Setting up click listener for trailing snippet');

    trailingSnippet.addEventListener('click', function(e) {
      context.navigate(parentUid);
    }, false);
    trailingSnippet.addEventListener('mousemove', function(e) {
      tooltip.style.top = (e.clientY + pageYOffset) + 'px'; // note: pageYOffset ugly usage is GUESS WHAT due to IE being short-bus
      tooltip.style.left = (e.clientX + pageXOffset) + 'px';
      logMgr.verbose('Shifted tooltip on trailing snippet.');
    }, false);
  }
});

exports.Node = Node;

module.exports = exports;
