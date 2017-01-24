var React = require('react');
var ReactDOM = require('react-dom');

var config = require('../../build-config');
var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('NodeComponents.js');
var scrollToElementId = require('../../utils/scrollToElementId');
var uidGen = require('../../utils/uid-gen');

var exports = {};

// Facebook login button component
var Node = React.createClass({
  componentWillUpdate: function() {
    document.getElementById('cyoag-generate-link-ui').classList.add('cyoag-hidden');
  },
  navigate: function() {
    logMgr.debug('^ ^ ^ ^ ^ Navigating to parent.');
    this.props.context.navigate(this.props.context.state.parentUid, false);
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
        <GenerateLinkUi nodeUid={context.state.nodeUid} />
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
    var genLinkButtonElement = <button id='cyoag-generate-link-button' className='cyoag-side-spaced-button cyoag-tooltip-button shaded-border-blue' onClick={this.showGeneratedLink}>
      <span>Generate link</span> <img className='cyoag-question-icon' src='images/questionIcon.png' />
      <span className='cyoag-button-tooltip'>Generate a link to this chapter so that you can share it easily!</span>
    </button>;
    var fullTrajectoryButtonElement = <button id='cyoag-full-trajectory-button' className='cyoag-hidden cyoag-side-spaced-button cyoag-tooltip-button shaded-border-blue' onClick={this.fullTrajectory}>
      Full trajectory <img className='cyoag-question-icon' src='images/questionIcon.png' />
      <span className='cyoag-button-tooltip'>See the complete story trajectory leading to this chapter!</span>
    </button>;
    var allByAuthorButtonElement = <button id='cyoag-all-by-author-button' className='cyoag-hidden cyoag-side-spaced-button cyoag-tooltip-button shaded-border-blue' onClick={this.allByAuthor}>
      All by {context.state.snippet.authorName} <img className='cyoag-question-icon' src='images/questionIcon.png' />
      <span className='cyoag-button-tooltip'>See all chapters written by this author!!</span>
    </button>;
    var editButtonElement = <button id='cyoag-edit-chapter-button' className='cyoag-side-spaced-button cyoag-tooltip-button shaded-border-orange' onClick={context.editChapter}>
      Edit chapter
    </button>;
    var deleteButtonElement = <button id='cyoag-delete-chapter-button' className='cyoag-side-spaced-button cyoag-tooltip-button shaded-border-red' onClick={context.deleteChapter}>
      Delete chapter
    </button>;

    var modsAndOptsMsg;
    if(userIsModerator && userIsOwner) {
      // if the user is moderator and owner, they can do whatever they want with this node
      modsAndOptsMsg = 'You are a moderator and the owner of this chapter, so you have modification privileges.';
    }
    else if(userIsModerator) {
      // if the user is a moderator they can modify no matter what
      modsAndOptsMsg = 'As a moderator, you have modification privileges. (Original content by user ' + context.state.snippet.authorName + '.)';
    }
    else if(!userIsOwner) {
      // if the user is not the owner, just display who the owner is
      modsAndOptsMsg = 'Contribution by user ' + context.state.snippet.authorName + '.';
    }
    else if(pathCount > 0) {
      // if the user is the owner but someone already appended to this chapter, let the owner know
      modsAndOptsMsg = 'You authored this chapter, but it cannot be modified or deleted because another chapter has already been added to it, or a draft is pending on it.';
    }
    else {
      // if the user is the author and modification is permitted
      modsAndOptsMsg = 'You authored this chapter, and have modification privileges.';
    }

    modsAndOptsMsgElement = <p id='cyoag-mods-and-opts-message' className='cyoag-note'>{modsAndOptsMsg}</p>;

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
  },
  showGeneratedLink: function() {
    var generateLinkUi = document.getElementById('cyoag-generate-link-ui');
    generateLinkUi.classList.remove('cyoag-hidden');
    document.getElementById('cyoag-generated-link-textarea').select();
    scrollToElementId('cyoag-generate-link-button');
  }
});

var GenerateLinkUi = React.createClass({
  render: function () {
    return (
      <div id='cyoag-generate-link-ui' className='cyoag-hidden'>
        <textarea readOnly id='cyoag-generated-link-textarea' value={config.hostDomain.substring(0,config.hostDomain.length-1) + '?id=' + this.props.nodeUid} />
      </div>
    );
  }
});

exports.Node = Node;

module.exports = exports;
