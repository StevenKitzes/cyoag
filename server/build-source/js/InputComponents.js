var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('PathComponents.js');

var exports = {};

// Display an empty div when prompted
var Hidden = React.createClass({
  render: function() {
    return (
      <div id='cyoag-input-container' className='cyoag-hidden'></div>
    );
  }
});

// Display an appropriate message when the user is forbidden by rules from input
var Blocked = React.createClass({
  render: function() {
    if(this.props.blocking.top && this.props.blocking.side) {
      return (
        <div id='cyoag-input-container'>
          <p id='cyoag-input-blocked-message'>You may not add paths to your own chapters, or chapters that you have already added paths to!</p>
        </div>
      );
    }
    else if(this.props.blocking.top) {
      return (
        <div id='cyoag-input-container'>
          <p id='cyoag-input-blocked-message'>You may not add paths to your own chapters!</p>
        </div>
      );
    }
    else {
      return (
        <div id='cyoag-input-container'>
          <p id='cyoag-input-blocked-message'>You may not add multiple paths to the same chapter!</p>
        </div>
      );
    }
  }
});

// Display input fields and simple directions so users know how to contribute
var Input = React.createClass({
  checkForEdits: function(e) {
    logMgr.debug('Checking for edits . . .');
    if(document.getElementById('cyoag-input-path').value.length == 0 &&
       document.getElementById('cyoag-input-body').value.length == 0) {
      // if no changes are detected, set editsPending false and onbeforeunload listener null
      logMgr.debug('Path and body inputs were both length 0, so no edits are detected.');
      this.props.context.setEditsPending(false);
      window.onbeforeunload = null;
    }
    else {
      // if changes detected, set editsPending true and onbeforeunload to a listener
      logMgr.debug('Path or body input had length > 0, so edits were detected.');
      this.props.context.setEditsPending(true);
      window.onbeforeunload = warnBeforeUnload;
    }
  },
  componentDidMount: function() {
    var inputPathElement = document.getElementById('cyoag-input-path');
    var inputBodyElement = document.getElementById('cyoag-input-body');

    // all browsers excpet short bus IE
    if(inputPathElement.addEventListener) {
      // attempt to remove listeners from input elements to prevent duplicate listener firing
      logMgr.debug('Removing existing event listeners to input fields for all browsers except O.G. IE . . .');
      inputPathElement.removeEventListener('input', this.checkForEdits);
      inputBodyElement.removeEventListener('input', this.checkForEdits);
      // now add the listeners for changes to these input elements
      inputPathElement.addEventListener('input', this.checkForEdits, false);
      inputBodyElement.addEventListener('input', this.checkForEdits, false);
      logMgr.debug('. . . then added them back on.');
    }
    // short bus IE
    else {
      // attempt to remove listeners from input elements to prevent duplicate listener firing
      logMgr.debug('Removing existing event listeners to input fields for O.G. IE . . .');
      inputPathElement.detachEvent('onpropertychange', this.checkForEdits);
      inputBodyElement.detachEvent('onpropertychange', this.checkForEdits);
      // now add the listeners for changes to these input elements
      inputPathElement.attachEvent('onpropertychange', this.checkForEdits);
      inputBodyElement.attachEvent('onpropertychange', this.checkForEdits);
      logMgr.debug('. . . then added them back on.');
    }

  },
  componentWillReceiveProps: function(nextProps) {
    var draftPath = nextProps.context.state.draftPath ? nextProps.context.state.draftPath : '';
    var draftBody = nextProps.context.state.draftBody ? nextProps.context.state.draftBody : '';
    this.setState({
      draftPath: draftPath,
      draftBody: draftBody,
      pathCharCount: draftPath.length,
      bodyCharCount: draftBody.length
    });
  },
  getInitialState: function() {
    var draftPath = this.props.context.state.draftPath ? this.props.context.state.draftPath : '';
    var draftBody = this.props.context.state.draftBody ? this.props.context.state.draftBody : '';
    return {
      draftPath: draftPath,
      draftBody: draftBody,
      pathCharCount: draftPath.length,
      bodyCharCount: draftBody.length
    };
  },
  handleDraftPathChange: function(event) {
    this.setState({
      draftPath: event.target.value,
      pathCharCount: event.target.value.length
    });
  },
  handleDraftBodyChange: function(event) {
    this.setState({
      draftBody: event.target.value,
      bodyCharCount: event.target.value.length
    });
  },
  render: function() {
    var inputHeader = (this.state.draftPath || this.state.draftBody) ?
      <strong>Your previously saved draft was loaded.</strong>:
      <em>Want to add your own content following this chapter?</em>;

    return (
      <div id='cyoag-input-container'>
        <p id='cyoag-input-cta'>{inputHeader}</p>
        <div id='cyoag-input-path-container'>
          Enter the path teaser for your new chapter:<br />
          <textarea id='cyoag-input-path' type='text'
            placeholder='Path snippet - minimum 4 characters, maximum 100 characters.'
            value={this.state.draftPath} onChange={this.handleDraftPathChange} >
          </textarea>
          <div id='cyoag-path-char-hint'><PathHint count={this.state.pathCharCount} /></div>
        </div>
        <div id='cyoag-input-body-container'>
          Enter the body of your new chapter:<br />
          <textarea id='cyoag-input-body' type='text'
            placeholder='Chapter content - minimum 500 characters, maximum 2,500 characters.'
            value={this.state.draftBody} onChange={this.handleDraftBodyChange} >
          </textarea>
          <div id='cyoag-input-body-hints-container'>
            <div id='cyoag-body-char-hint'><BodyHint count={this.state.bodyCharCount} /></div><div className='cyoag-resize-input-hint cyoag-note'>Drag to resize! ^</div>
          </div>
        </div>
        <button id='cyoag-save-draft-submit' className='shaded-border-blue' onClick={this.saveDraft}>Save Draft</button>
        <button id='cyoag-input-submit' className='shaded-border-green' onClick={this.submit}>Submit</button>
        <InputValidationModal onClick={hideInputValidationModal} />
      </div>
    );
  },
  saveDraft: function() {
    var inputPath = document.getElementById('cyoag-input-path').value || '';
    var inputBody = document.getElementById('cyoag-input-body').value || '';

    var warningMsg = '';

    if(inputPath.length > 100) {
      warningMsg += 'Draft paths of over 100 characters are not permitted.  ';
    }
    if(inputBody.length > 2500) {
      warningMsg += 'Drafts of over 2,500 characters are not permitted.  ';
    }

    if(warningMsg) {
      revealInputValidationModal(warningMsg + '(These rules apply to drafts as well as new chapters.)');
      return;
    }

    this.props.context.saveDraftXhr(inputPath, inputBody);
    this.props.context.setEditsPending(false);
    window.onbeforeunload = null;
  },
  submit: function() {
    var inputPath = document.getElementById('cyoag-input-path').value;
    var inputBody = document.getElementById('cyoag-input-body').value;

    if(validateInput(inputPath, inputBody)) {
      this.props.context.setEditsPending(false);
      window.onbeforeunload = null;
      this.props.context.submitInputXhr(inputPath, inputBody);
    }
  }
});

// Display input fields with hints so users can edit an existing post
var Edit = React.createClass({
  cancel: function() {
    this.props.context.cancelEdit();
  },
  checkForEdits: function(e) {
    if(this.state.originalLastPath == document.getElementById('cyoag-input-path').value &&
       this.state.originalNodeSnippet == document.getElementById('cyoag-input-body').value) {
      // if no changes are detected, set editsPending false and onbeforeunload listener null
      this.props.context.setEditsPending(false);
      window.onbeforeunload = null;
    }
    else {
      // if changes detected, set editsPending true and onbeforeunload to a listener
      this.props.context.setEditsPending(true);
      window.onbeforeunload = warnBeforeUnload;
    }
  },
  componentDidMount: function() {
    var snippet = this.props.context.state.snippet;

    var inputPathElement = document.getElementById('cyoag-input-path');
    var inputBodyElement = document.getElementById('cyoag-input-body');

    // set the snippet contents as the initial input field contents
    inputPathElement.value = snippet.lastPath;
    inputBodyElement.value = snippet.nodeSnippet;

    // all browsers excpet short bus IE
    if(inputPathElement.addEventListener) {
      // attempt to remove listeners from input elements to prevent duplicate listener firing
      logMgr.debug('Removing existing event listeners to input fields for all browsers except O.G. IE . . .');
      inputPathElement.removeEventListener('input', this.checkForEdits);
      inputBodyElement.removeEventListener('input', this.checkForEdits);
      // now add the listeners for changes to these input elements
      inputPathElement.addEventListener('input', this.checkForEdits, false);
      inputBodyElement.addEventListener('input', this.checkForEdits, false);
      logMgr.debug('. . . then added them back on.');
    }
    // short bus IE
    else {
      // attempt to remove listeners from input elements to prevent duplicate listener firing
      logMgr.debug('Removing existing event listeners to input fields for O.G. IE . . .');
      inputPathElement.detachEvent('onpropertychange', this.checkForEdits);
      inputBodyElement.detachEvent('onpropertychange', this.checkForEdits);
      // now add the listeners for changes to these input elements
      inputPathElement.attachEvent('onpropertychange', this.checkForEdits);
      inputBodyElement.attachEvent('onpropertychange', this.checkForEdits);
      logMgr.debug('. . . then added them back on.');
    }
  },
  getInitialState: function() {
    var snippet = this.props.context.state.snippet;
    return {
      pathCharCount: snippet.lastPath.length,
      bodyCharCount: snippet.nodeSnippet.length,
      originalLastPath: snippet.lastPath,
      originalNodeSnippet: snippet.nodeSnippet
    };
  },
  render: function() {
    return (
      <div id='cyoag-input-container'>
        <p id='cyoag-input-cta'><em>Editing chapter</em></p>
        <div id='cyoag-input-path-container'>
          Path teaser for this chapter:<br />
          <textarea id='cyoag-input-path' type='text' onKeyUp={this.updatePathCharCount} placeholder='Path snippet - minimum 4 characters, maximum 100 characters.'></textarea>
          <div id='cyoag-path-char-hint'><PathHint count={this.state.pathCharCount} /></div>
        </div>
        <div id='cyoag-input-body-container'>
          Body content for this chapter:<br />
          <textarea id='cyoag-input-body' type='text' onKeyUp={this.updateBodyCharCount} placeholder='Chapter content - minimum 500 characters, maximum 2,500 characters.'></textarea>
          <div id='cyoag-input-body-hints-container'>
            <div id='cyoag-body-char-hint'><BodyHint count={this.state.bodyCharCount} /></div><div className='cyoag-resize-input-hint cyoag-note'>Drag to resize! ^</div>
          </div>
        </div>
        <button id='cyoag-input-cancel' className='cyoag-side-spaced-button shaded-border-red' onClick={this.cancel}>Cancel</button>
        <button id='cyoag-input-submit' className='cyoag-side-spaced-button shaded-border-green' onClick={this.submit}>Save changes</button>
        <InputValidationModal onClick={hideInputValidationModal} />
      </div>
    );
  },
  submit: function() {
    var inputPath = document.getElementById('cyoag-input-path').value;
    var inputBody = document.getElementById('cyoag-input-body').value;

    if(validateInput(inputPath, inputBody)) {
      // once validated, submit edits, set editsPending false (no longer pending, but rather submitted) and onbeforeunload null
      this.props.context.setEditsPending(false);
      window.onbeforeunload = null;
      this.props.context.submitEditsXhr(inputPath, inputBody);
    }
  },
  updateBodyCharCount: function() {
    this.setState({
      bodyCharCount: document.getElementById('cyoag-input-body').value.length
    });
  },
  updatePathCharCount: function() {
    this.setState({
      pathCharCount: document.getElementById('cyoag-input-path').value.length
    });
  }
});

var PathHint = React.createClass({
  render: function() {
    var count = this.props.count;

    if(count < 4) {
      return (
        <span className='cyoag-note-red'>Too few characters: {count}</span>
      );
    }

    if(count > 100) {
      return (
        <span className='cyoag-note-red'>Too many characters: {count}</span>
      );
    }

    return (
      <span className='cyoag-note-green'>Characters: {count}</span>
    );
  }
});

var BodyHint = React.createClass({
  render: function() {
    var count = this.props.count;

    if(count < 500) {
      return (
        <span className='cyoag-note-red'>Too few characters: {count}</span>
      );
    }

    if(count > 2500) {
      return (
        <span className='cyoag-note-red'>Too many characters: {count}</span>
      );
    }

    return (
      <span className='cyoag-note-green'>Characters: {count}</span>
    );
  }
});

var InputValidationModal = React.createClass({
  componentDidMount: hideInputValidationModal,
  render: function() {
    logMgr.verbose('Rendering input validation modal...');

    return(
      <div onClick={hideInputValidationModal} id='cyoag-input-validation-modal-message-container' title='Click to dismiss.'>
        <div id='cyoag-input-validation-modal-message-overlay'></div>
        <div id='cyoag-input-validation-message-modal' className={constants.modalTypeWarning}>
          <p className='cyoag-modal-message' id='cyoag-input-validation-message'></p>
          <a className='cyoag-side-padded-link'><div className='cyoag-modal-message-button'>Click to Acknowledge</div></a>
        </div>
      </div>
    );
  }
});

function hideInputValidationModal() {
  var modal = document.getElementById('cyoag-input-validation-modal-message-container');
  if(modal) {
    modal.style.display = 'none';
  }
}
function revealInputValidationModal(content) {
  var modal = document.getElementById('cyoag-input-validation-modal-message-container');
  var message = document.getElementById('cyoag-input-validation-message');
  if(modal && message) {
    modal.style.display = 'block';
    message.innerHTML = content;
  }
}

function validateInput(inputPath, inputBody) {
  var warningMsg = '';

  var whiteSpaceRegex = /\S*[\s]{3,}\S*/g;

  // check new path content for too many consecutive white space chars
  if(whiteSpaceRegex.test(inputPath)) {
    var matches = inputPath.match(whiteSpaceRegex);
    var problems = 'Found the following problems: ';
    for(var i = 0; i < matches.length; i++) {
      if(/\S*[\s]{3,}\S*/.test(matches[i])) {
        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
      }
    }
    revealInputValidationModal('Groups of more than two consecutive spaces, tabs, hard returns, and other ' +
      'white space characters are forbidden in path teasers.  Please correct any errors and try again!  ' +
      problems);
    return false;
  }

  // check new body content for too many consecutive white space chars
  if(whiteSpaceRegex.test(inputBody)) {
    var matches = inputBody.match(whiteSpaceRegex);
    var problems = 'Found the following problems: ';
    for(var i = 0; i < matches.length; i++) {
      if(/\S*[\s]{3,}\S*/.test(matches[i])) {
        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
      }
    }
    revealInputValidationModal('Groups of more than two consecutive spaces, tabs, hard returns, and other ' +
      'white space characters are forbidden in chapter body content.  Please correct any errors and try again!  ' +
      problems);
    return false;
  }

  var startingWhiteSpaceRegex = /^\s/;
  var endingWhiteSpaceRegex = /\s$/;

  // check new path or body for starting white space
  if(startingWhiteSpaceRegex.test(inputPath)) {
    revealInputValidationModal('Path teasers may not begin with white space.  Please try again!');
    return false;
  }
  else if(startingWhiteSpaceRegex.test(inputBody)) {
    revealInputValidationModal('Chapter body content may not begin with white space.  Please try again!');
    return false;
  }

  // check new path or body for ending white space
  if(endingWhiteSpaceRegex.test(inputPath)) {
    revealInputValidationModal('Path teasers may not end with white space.  Please try again!');
    return false;
  }
  else if(endingWhiteSpaceRegex.test(inputBody)) {
    revealInputValidationModal('Chapter body content may not end with white space.  Please try again!');
    return false;
  }

  var repeatCharRegex = /\S*(.)\1{3,}\S*/g;

  // check new path content for too many consecutive same characters
  if(repeatCharRegex.test(inputPath)) {
    var matches = inputPath.match(repeatCharRegex);
    var problems = 'Found the following problems: ';
    for(var i = 0; i < matches.length; i++) {
      if(/(.)\1{3,}/.test(matches[i])) {
        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
      }
    }
    revealInputValidationModal('Consecutive sets of 4 or more of the same character are forbidden in path teasers.  ' +
      'Please correct any errors and try again!  ' + problems);
    return false;
  }

  // check new body content for too many consecutive same characters
  if(repeatCharRegex.test(inputBody)) {
    var matches = inputBody.match(repeatCharRegex);
    var problems = 'Found the following problems: ';
    for(var i = 0; i < matches.length; i++) {
      if(/(.)\1{3,}/.test(matches[i])) {
        problems += matches[i].replace(/\s/g, ' _ ') + '; ';
      }
    }
    revealInputValidationModal('Consecutive sets of 4 or more of the same character are forbidden in chapter body content.  ' +
      'Please correct any errors and try again!  ' + problems);
    return false;
  }

  // check input path length restrictions
  if(inputPath.length < 4) {
    warningMsg += 'Your path teaser must be at least 4 characters long. ';
  }
  else if(inputPath.length > 100) {
    warningMsg += 'Your path teaser may not exceed 100 characters. ';
  }

  // check input body length restrictions
  if(inputBody.length < 500) {
    warningMsg += 'Chapter body content must be at least 500 characters long. ';
  }
  else if(inputBody.length > 2500) {
    warningMsg += 'Chapter body content may not exceed 2,500 characters. ';
  }

  if(warningMsg) {
    revealInputValidationModal(warningMsg);
    return false;
  }

  return true;
}

function warnBeforeUnload(e) {
  // If we haven't been passed the event get the window.event
  e = e || window.event;

  var message = constants.confirmDiscardUnsavedEdits;

  // For IE6-8 and Firefox prior to version 4
  if (e)
  {
      e.returnValue = message;
  }

  // For Chrome, Safari, IE8+ and Opera 12+
  return message;
}

exports.Hidden = Hidden;
exports.Blocked = Blocked;
exports.Input = Input;
exports.Edit = Edit;

module.exports = exports;
