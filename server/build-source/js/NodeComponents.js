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

    return(
      <div id='cyoag-node-container'>
        <a id={trailingSnippetId} className='cyoag-trailing-snippet-link cyoag-link' onMouseMove={this.locateTooltip}>
          <div className='cyoag-path-item cyoag-trailing-snippet' onClick={this.navigate}>
            {snippet.trailingSnippet.split("\n").map(function(i) {return <p key={uidGen()} className='cyoag-snippet-paragraph'>{i}</p>;})}
          </div>
          <div id='cyoag-tooltip-regress'>Back whence you came . . . ?</div>
        </a>
        <p id='cyoag-last-path'>{snippet.lastPath}</p>
        <div id='cyoag-node-snippet'>{snippet.nodeSnippet.split("\n").map(function(i) {return <p key={uidGen()} className='cyoag-snippet-paragraph'>{i}</p>;})}</div>
        <ModificationsAndOptionsComponent context={context} />
      </div>
    );
  },
  locateTooltip: function(mouseEvent) {
    var tooltip = document.querySelector('#cyoag-tooltip-regress');
    tooltip.style.top = (mouseEvent.clientY + pageYOffset) + 'px'; // note: pageYOffset ugly usage is GUESS WHAT due to IE being short-bus
    tooltip.style.left = (mouseEvent.clientX + pageXOffset) + 'px';
  }
});

var ModificationsAndOptionsComponent = React.createClass({
  render: function() {
    var context = this.props.context;
    var editMode = this.props.context.state.editMode;
    var userIsOwner = context.state.inputBlocking.top;
    var userIsModerator = (context.state.acctType == constants.acctTypeModerator);
    var paths = context.state.paths;
    var pathCount = paths.length;

    var modsAndOptsMsgElement;
    var genLinkButtonElement = <button id='cyoag-generate-link-button' className='cyoag-side-spaced-button cyoag-tooltip-button shaded-border-blue' onClick={this.generateLink}>
      <span>Generate link</span> <img className='cyoag-question-icon' src='images/questionIcon.png' />
      <span className='cyoag-button-tooltip'>Generate a link to this chapter so that you can share it easily!</span>
    </button>;
    var fullTrajectoryButtonElement = <button id='cyoag-full-trajectory-button' className='cyoag-side-spaced-button cyoag-tooltip-button shaded-border-blue' onClick={this.fullTrajectory}>
      Full trajectory <img className='cyoag-question-icon' src='images/questionIcon.png' />
      <span className='cyoag-button-tooltip'>See the complete story trajectory leading to this chapter!</span>
    </button>;
    var allByAuthorButtonElement = <button id='cyoag-all-by-author-button' className='cyoag-side-spaced-button cyoag-tooltip-button shaded-border-blue' onClick={this.allByAuthor}>
      All by {context.state.snippet.authorName} <img className='cyoag-question-icon' src='images/questionIcon.png' />
      <span className='cyoag-button-tooltip'>See all chapters written by this author!!</span>
    </button>;
    var editButtonElement = <button id='cyoag-edit-chapter-button' className='cyoag-side-spaced-button cyoag-tooltip-button shaded-border-orange' onClick={context.editChapter}>
      Edit chapter
    </button>;
    var deleteButtonElement = <button id='cyoag-delete-chapter-button' className='cyoag-side-spaced-button cyoag-tooltip-button shaded-border-red' onClick={context.deleteChapter}>
      Delete chapter
    </button>;

    if(userIsModerator && userIsOwner) {
      // if the user is moderator and owner, they can do whatever they want with this node
      modsAndOptsMsgElement = <p id='cyoag-modification-permitted' className='cyoag-note'>You are a moderator and the owner of this chapter, so you have modification privileges.</p>;
    }
    else if(userIsModerator) {
      // if the user is a moderator they can modify no matter what
      modsAndOptsMsgElement = <p id='cyoag-modification-permitted' className='cyoag-note'>As a moderator, you have modification privileges. (Original content by user {context.state.snippet.authorName})</p>;
    }
    else if(!userIsOwner) {
      // if the user is not the owner, just display who the owner is
      modsAndOptsMsgElement = <p id='cyoag-author-attribution' className='cyoag-note'>Contribution by user {context.state.snippet.authorName}</p>;
    }
    else if(pathCount > 0) {
      // if the user is the owner but someone already appended to this chapter, let the owner know
      modsAndOptsMsgElement = <p id='cyoag-deletion-forbidden' className='cyoag-note'>You authored this chapter, but it cannot be modified or deleted because another chapter has already been added to it, or a draft is pending on it.</p>;
    }
    else {
      // if the user is the author and modification is permitted
      modsAndOptsMsgElement = <p id='cyoag-modification-permitted' className='cyoag-note'>You authored this chapter, and have modification privileges.</p>;
    }

    var showModButtons = userIsModerator || (userIsOwner && pathCount < 1);

    return (
      <div id='cyoag-mods-and-opts-container'>
        {editMode ? <div className='cyoag-hidden' /> : modsAndOptsMsgElement}
        {genLinkButtonElement}
        {fullTrajectoryButtonElement}
        {allByAuthorButtonElement}
        {editMode || !showModButtons ? <div className='cyoag-hidden' /> : editButtonElement}
        {editMode || !showModButtons ? <div className='cyoag-hidden' /> : deleteButtonElement}
      </div>
    );
  }
});

exports.Node = Node;

module.exports = exports;
