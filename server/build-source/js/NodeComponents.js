var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('NodeComponents.js');
var uidGen = require('../../utils/uid-gen');

var exports = {};

// Facebook login button component
var Node = React.createClass({
  componentDidUpdate: function() {
    window.scrollTo(0,0);
  },
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
          <div className='cyoag-path-item cyoag-trailing-snippet' onClick={this.navigate}>
            {snippet.trailingSnippet.split("\n").map(function(i) {return <p key={uidGen()} className='cyoag-snippet-paragraph'>{i}</p>;})}
          </div>
          <div id='cyoag-tooltip-regress'>Back whence you came . . . ?</div>
        </a>
        <p id='cyoag-last-path'>{snippet.lastPath}</p>
        <div id='cyoag-node-snippet'>{snippet.nodeSnippet.split("\n").map(function(i) {return <p key={uidGen()} className='cyoag-snippet-paragraph'>{i}</p>;})}</div>
        <p id='cyoag-author-attribution' className='cyoag-note'>Contribution by user {snippet.authorName}</p>
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
