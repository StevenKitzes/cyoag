var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('NodeComponents.js');

var exports = {};

// Facebook login button component
var Node = React.createClass({
  navigate: function() {
    logMgr.debug('^ ^ ^ ^ ^ Navigating to parent.');
    this.props.context.navigate(this.props.context.state.parentUid);
  },
  render: function() {
    logMgr.verbose('Rendering...');

    var context = this.props.context;
    var snippet = context.state.snippet;

    var trailingSnippetId = 'node-' + context.state.parentUid;

    return(
      <div id='cyoag-node-container'>
        <a id={trailingSnippetId} className='cyoag-trailing-snippet-link cyoag-div-link' href='#' onMouseMove={this.locateTooltip}>
          <div className='cyoag-path-item cyoag-trailing-snippet' onClick={this.navigate}>{snippet.trailingSnippet}</div>
          <div id='cyoag-tooltip-regress'>Back whence you came . . . ?</div>
        </a>
        <p id='cyoag-last-path'>{snippet.lastPath}</p>
        <p id='cyoag-node-snippet'>{snippet.nodeSnippet}</p>
      </div>
    );
  },
  locateTooltip: function(mouseEvent) {
    var tooltip = document.querySelector('#cyoag-tooltip-regress');
    tooltip.style.top = (mouseEvent.clientY + pageYOffset) + 'px'; // note: pageYOffset ugly usage is GUESS WHAT due to IE being short-bus
    tooltip.style.left = (mouseEvent.clientX + pageXOffset) + 'px';
  }
});

exports.Node = Node;

module.exports = exports;
