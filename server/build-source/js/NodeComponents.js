var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('NodeComponents.js');
var uidGen = require('../../utils/uid-gen');

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
    var modificationsComponent =
      context.state.editMode ?
        <div id='cyoag-modification-container'></div> :
        <div id='cyoag-modification-container'><ModificationsComponent context={context} /></div>;

    return(
      <div id='cyoag-node-container'>
        <a id={trailingSnippetId} className='cyoag-trailing-snippet-link cyoag-link' href='#' onMouseMove={this.locateTooltip}>
          <div className='cyoag-path-item cyoag-trailing-snippet' onClick={this.navigate}>
            {snippet.trailingSnippet.split("\n").map(function(i) {return <p key={uidGen()} className='cyoag-snippet-paragraph'>{i}</p>;})}
          </div>
          <div id='cyoag-tooltip-regress'>Back whence you came . . . ?</div>
        </a>
        <p id='cyoag-last-path'>{snippet.lastPath}</p>
        <div id='cyoag-node-snippet'>{snippet.nodeSnippet.split("\n").map(function(i) {return <p key={uidGen()} className='cyoag-snippet-paragraph'>{i}</p>;})}</div>
        {modificationsComponent}
      </div>
    );
  },
  locateTooltip: function(mouseEvent) {
    var tooltip = document.querySelector('#cyoag-tooltip-regress');
    tooltip.style.top = (mouseEvent.clientY + pageYOffset) + 'px'; // note: pageYOffset ugly usage is GUESS WHAT due to IE being short-bus
    tooltip.style.left = (mouseEvent.clientX + pageXOffset) + 'px';
  }
});

var ModificationsComponent = React.createClass({
  render: function() {
    var context = this.props.context;
    var userIsOwner = context.state.inputBlocking.top;
    var userIsModerator = (context.state.acctType == constants.acctTypeModerator);
    var paths = context.state.paths;
    var pathCount = paths.length;

    if(userIsModerator && userIsOwner) {
      // if the user is moderator and owner, they can do whatever they want with this node
      return (
        <div id='cyoag-moderator-and-owner-ui'>
          <p id='cyoag-modification-permitted' className='cyoag-note'>You are a moderator and the owner of this chapter, so you have modification privileges.</p>
          <button id='cyoag-edit-chapter-button' className='cyoag-side-spaced-button' onClick={context.editChapter}>Edit this chapter</button>
          <button id='cyoag-delete-chapter-button' className='cyoag-side-spaced-button' onClick={context.deleteChapter}>Delete this chapter</button>
        </div>
      );
    }
    if(userIsModerator) {
      // if the user is a moderator they can modify no matter what
      return (
        <div id='cyoag-moderator-ui'>
          <p id='cyoag-modification-permitted' className='cyoag-note'>As a moderator, you have modification privileges. (Original content by user {context.state.snippet.authorName})</p>
          <button id='cyoag-edit-chapter-button' className='cyoag-side-spaced-button' onClick={context.editChapter}>Edit this chapter</button>
          <button id='cyoag-delete-chapter-button' className='cyoag-side-spaced-button' onClick={context.deleteChapter}>Delete this chapter</button>
        </div>
      );
    }
    if(!userIsOwner) {
      // if the user is not the owner, just display who the owner is
      return (
        <div id='cyoag-owner-ui'>
          <p id='cyoag-author-attribution' className='cyoag-note'>Contribution by user {context.state.snippet.authorName}</p>
        </div>
      );
    }
    if(pathCount > 0) {
      // if the user is the owner but someone already appended to this chapter, let the owner know
      return (
        <div id='cyoag-owner-ui'>
          <p id='cyoag-deletion-forbidden' className='cyoag-note'>You authored this chapter, but it cannot be modified because
            another chapter has already been added to it, or a draft is pending on it.</p>
        </div>
      );
    }
    else {
      // if the user is the author and modification is permitted
      return (
        <div id='cyoag-owner-ui'>
          <p id='cyoag-modification-permitted' className='cyoag-note'>You authored this chapter, and have modification privileges.</p>
          <button id='cyoag-edit-chapter-button' className='cyoag-side-spaced-button' onClick={context.editChapter}>Edit this chapter</button>
          <button id='cyoag-delete-chapter-button' className='cyoag-side-spaced-button' onClick={context.deleteChapter}>Delete this chapter</button>
        </div>
      );
    }
  }
});

exports.Node = Node;

module.exports = exports;
