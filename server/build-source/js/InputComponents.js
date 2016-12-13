var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/logger')('PathComponents.js');

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
          <p id='cyoag-input-blocked-message'>(You may not add paths to your own chapters, or chapters that you have already added paths to!)</p>
        </div>
      );
    }
    else if(this.props.blocking.top) {
      return (
        <div id='cyoag-input-container'>
          <p id='cyoag-input-blocked-message'>(You may not add paths to your own chapters!)</p>
        </div>
      );
    }
    else {
      return (
        <div id='cyoag-input-container'>
          <p id='cyoag-input-blocked-message'>(You may not add multiple paths to the same chapter!)</p>
        </div>
      );
    }
  }
});

// Display input fields and simple directions so users know how to contribute
var Input = React.createClass({
  getInitialState: function() {
    return {
      pathCharCount: 0,
      bodyCharCount: 0
    };
  },
  render: function() {
    return (
      <div id='cyoag-input-container'>
        <p id='cyoag-input-cta'><em>Want to add your own content following this chapter?</em></p>
        <div id='cyoag-input-path-container'>
          Enter the path teaser for your new chapter:<br />
          <textarea id='cyoag-input-path' type='text' onKeyUp={this.updatePathCharCount} placeholder='Path snippet - minimum 4 characters, maximum 100 characters.'></textarea>
          <div id='cyoag-path-char-hint'><PathHint count={this.state.pathCharCount} /></div>
        </div>
        <div id='cyoag-input-body-container'>
          Enter the body of your new chapter:<br />
          <textarea id='cyoag-input-body' type='text' onKeyUp={this.updateBodyCharCount} placeholder='Chapter content - minimum 1000 characters, maximum 5000 characters.'></textarea>
          <div id='cyoag-input-body-hints-container'>
            <div id='cyoag-body-char-hint'><BodyHint count={this.state.bodyCharCount} /></div><div className='cyoag-resize-input-hint cyoag-note'>Drag to resize! ^</div>
          </div>
        </div>
        <button id='cyoag-save-draft-submit' onClick={this.saveDraft}>Save Draft</button>
        <button id='cyoag-input-submit' onClick={this.submit}>Submit</button>
      </div>
    );
  },
  saveDraft: function() {
    var inputPath = document.getElementById('cyoag-input-path').value || '';
    var inputBody = document.getElementById('cyoag-input-body').value || '';

    if(inputBody.length > 5000) {
      this.props.context.message({warning: "Sorry, drafts of over 5,000 characters are not permitted."});
      return;
    }

    this.props.context.saveDraft(inputPath, inputBody);
  },
  submit: function() {
    var inputPath = document.getElementById('cyoag-input-path').value;
    var inputBody = document.getElementById('cyoag-input-body').value;
    var warningMsg;
    var message = this.props.context.message;

    if(inputPath.length < 4) {
      warningMsg = 'Your path teaser must be at least 4 characters long';
    }
    else if(inputPath.length > 100) {
      warningMsg = 'Your path teaser may not exceed 100 characters';
    }

    if(inputBody.length < 1000) {
      if(warningMsg) {
        warningMsg = warningMsg + ' and your chapter content must be at least 1,000 characters long';
      }
      else {
        warningMsg = 'Your chapter content must be at least 1,000 characters long';
      }
    }
    else if(inputBody.length > 5000) {
      if(warningMsg) {
        warningMsg = warningMsg + ' and your chapter content may not exceed 5,000 characters';
      }
      else {
        warningMsg = 'Your chapter content may not exceed 5,000 characters';
      }
    }

    if(warningMsg) {
      warningMsg = warningMsg + '.';
      this.props.context.message({warning: warningMsg});
      return;
    }

    this.props.context.inputSubmit(inputPath, inputBody);
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

    else {
      return (
        <span className='cyoag-note-green'>Characters: {count}</span>
      );
    }
  }
});

var BodyHint = React.createClass({
  render: function() {
    var count = this.props.count;

    if(count < 1000) {
      return (
        <span className='cyoag-note-red'>Too few characters: {count}</span>
      );
    }

    if(count > 5000) {
      return (
        <span className='cyoag-note-red'>Too many characters: {count}</span>
      );
    }

    else {
      return (
        <span className='cyoag-note-green'>Characters: {count}</span>
      );
    }
  }
});

exports.Hidden = Hidden;
exports.Blocked = Blocked;
exports.Input = Input;

module.exports = exports;
