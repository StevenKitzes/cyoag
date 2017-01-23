var React = require('react');
var ReactDOM = require('react-dom');

var config = require('../../build-config');
var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('MainComponent.js');

var HeaderComponents = require('./HeaderComponents');
var MessagingComponents = require('./MessagingComponents');
var MainColumnComponents = require('./MainColumnComponents');
var MarginColumnComponents = require('./MarginColumnComponents');
var FooterComponents = require('./FooterComponents');

// Hello World component: display a simple prop
var MainComponent = React.createClass({
  cancelEdit: cancelEdit,
  componentDidMount: mountXhrHandler,
  componentDidUpdate: function() {
    if(this.state.editMode) {
      // scroll window to the editing area - thanks to basil: http://stackoverflow.com/questions/5598743/finding-elements-position-relative-to-the-document
      var box = document.getElementById('cyoag-input-container').getBoundingClientRect();

      var body = document.body;
      var docEl = document.documentElement;

      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft;

      var clientTop = docEl.clientTop || body.clientTop || 0;
      var clientLeft = docEl.clientLeft || body.clientLeft || 0;

      var top  = box.top +  scrollTop - clientTop;
      var left = box.left + scrollLeft - clientLeft;

      window.scrollTo(left, top);
    }
    else {
      restoreScroll(this.state.windowScroll);
    }
  },
  componentWillMount: function() {
    // this takes place before render
    this.editsPending = false;
    window.onbeforeunload = null;
  },
  deleteChapter: deleteChapter,
  editChapter: editChapter,
  getInitialState: getDefaultStateObject,
  logoutRequest: logoutXhrHandler,
  message: function(msg) {
    logMgr.debug('incoming message object: ' + JSON.stringify(msg));
    this.setState({
      msg: msg.msg ? msg.msg : null,
      warning: msg.warning ? msg.warning : null,
      error: msg.error ? msg.error : null,
      windowScroll: getWindowPosition()
    });
  },
  nameChange: nameChange,
  navigate: navigateXhrHandler,
  render: function() {
    logMgr.verbose('Rendering...');

    var context = {};
    context.state = this.state;
    context.deleteChapter = this.deleteChapter;
    context.cancelEdit = this.cancelEdit;
    context.editChapter = this.editChapter;
    context.logoutRequest = this.logoutRequest;
    context.message = this.message;
    context.nameChange = this.nameChange;
    context.navigate = this.navigate;
    context.setEditsPending = this.setEditsPending;
    context.saveDraft = this.saveDraft;
    context.submitEdits = this.submitEdits;
    context.submitInput = this.submitInput;
    context.votify = this.votify;

    var debugStateDisplay = (function(){
      if(config.DEBUG) {
        return (
          <div id="cyoag-debug-state-display"><br /><hr /><h4>Debug mode enabled! Current app state:</h4><hr />
            {JSON.stringify(context.state)}
          </div>
        );
      }
      else {
        return (
          <div id='cyoag-debug-state-display'></div>
        );
      }
    })();

    return (
      <div id='cyoag-react-container'>
        <HeaderComponents.Header />
        <MessagingComponents.Banner error={this.state.error} warning={this.state.warning} msg={this.state.msg} />
        <div id='cyoag-columns'>
          <MarginColumnComponents.MarginColumn context={context} />
          <MainColumnComponents.MainColumn context={context} />
        </div>
        <FooterComponents.Footer />
        {debugStateDisplay}
        <MessagingComponents.Modal error={this.state.error} warning={this.state.warning} msg={this.state.msg} />
      </div>
    );
  },
  setEditsPending: function(b) {
    this.editsPending = b;
  },
  saveDraft: saveDraft,
  submitInput: submitInput,
  submitEdits: submitEdits,
  votify: votify
});

module.exports = MainComponent;

// returns true if user DOES want to RETAIN pending edits (and cancel requested action)
// returns false if user wants to DISCARD pending edits (and continue with requested action) or if there are no pending edits
function checkPendingEdits(editsPending, context, altConfirmationMessage) {
  logMgr.verbose('Confirming whether user wants to discard pending edits.');
  // if no edits are pending, return false
  if(!editsPending) {
    logMgr.verbose('But no edits were pending!');
    // since no edits were actually pending, ensure window.onbeforeunload is null
    window.onbeforeunload = null;
    return false;
  }

  var confMsg = altConfirmationMessage ? altConfirmationMessage : constants.confirmDiscardUnsavedEdits;
  // if the user says they want to DISCARD saved edits
  if(confirm(confMsg)) {
    logMgr.verbose('User confirmed they are prepared to discard pending edits.');
    // since user is discarding changes, ensure window.onbeforeunload is null, editsPending is false, and messages are cleared
    context.editsPending = false;
    window.onbeforeunload = null;
    context.message({});
    return false;
  }

  // edits are pending, and the user does NOT want to discard them
  logMgr.verbose('Edits are pending and the user does not want to discard them.');
  return true;
}

function mountXhrHandler() {
  if(checkPendingEdits(this.editsPending, this)) {
    return;
  }
  else {
    this.editsPending = false;
    window.onbeforeunload = null;
  }

  var savedWindowPosition = getWindowPosition();
  logMgr.debug('Checking session status . . .');
  var xhr = new XMLHttpRequest();
  var properThis = this;
  // xmlHttp.onreadystatechange = () => {...}
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Cookie check response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response, constants.windowScrollTop);
    }
    else {
      logMgr.debug('Initial cookie check yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({
      error: 'Server response timed out; unable to detect your login status.',
      windowScroll: savedWindowPosition
    });
  }
  xhr.send();
}

function logoutXhrHandler() {
  if(checkPendingEdits(this.editsPending, this)) {
    return;
  }
  else {
    this.editsPending = false;
    window.onbeforeunload = null;
  }

  var savedWindowPosition = getWindowPosition();
  logMgr.debug('Logging out current user . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Logout response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response, constants.windowScrollTop);
    }
    else {
      logMgr.debug('Logout attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('GET', '/session/logout');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({
      error: 'Server response timed out; unable to detect your login status.',
      windowScroll: savedWindowPosition
    });
  }
  xhr.send();
}

function navigateXhrHandler(nodeUid) {
  if(checkPendingEdits(this.editsPending, this)) {
    return;
  }
  else {
    this.editsPending = false;
    window.onbeforeunload = null;
  }

  var savedWindowPosition = getWindowPosition();
  if(nodeUid == null) {
    this.message({error: 'Missing node ID in navigation attempt.'});
    return;
  }
  logMgr.debug('User attempting to navigate story nodes . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Navigation response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response, constants.windowScrollTop);
    }
    else {
      logMgr.debug('Navigation attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({
      error: 'Server response timed out; unable to detect your login status.',
      windowScroll: savedWindowPosition
    });
  }
  var xhrPayload = JSON.stringify({navigate: nodeUid});
  xhr.send(xhrPayload);
}

function deleteChapter() {
  if(!confirm('Are you positive you want to delete this chapter?  This can only be undone by a CYOAG administrator ' +
  '(not even by a moderator)!'))
  {
    return;
  }

  if(checkPendingEdits(this.editsPending, this)) {
    return;
  }
  else {
    this.editsPending = false;
    window.onbeforeunload = null;
  }

  var savedWindowPosition = getWindowPosition();
  logMgr.debug('User attempting to delete a story node . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Deletion response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response, constants.windowScrollTop);
    }
    else {
      logMgr.debug('Deletion attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({
      error: 'Server response timed out; unable to detect result of deletion attempt.',
      windowScroll: savedWindowPosition
    });
  }
  var xhrPayload = JSON.stringify({deleteTarget: properThis.state.nodeUid});
  xhr.send(xhrPayload);
}

function editChapter() {
  this.message({}); // clear any existing messages when swapping between editMode
  if(checkPendingEdits(this.editsPending, this, 'You already have work pending on a new chapter!  Do you want to proceed to ' +
    'discard this work, or cancel your request to edit the existing chapter?'))
  {
    return;
  }
  else {
    this.editsPending = false;
    window.onbeforeunload = null;
  }

  this.setState({
    editMode: true,
    windowScroll: getWindowPosition()
  });
}
function cancelEdit() {
  if(checkPendingEdits(this.editsPending, this)) {
    return;
  }

  window.onbeforeunload = null;
  this.editsPending = false;

  this.setState({
    editMode: false,
    windowScroll: getWindowPosition()
  });
}

function votify(nodeUid, newVote) {
  if(checkPendingEdits(this.editsPending, this,
    'Voting can cause pending edits to be lost ... you might want to vote after your edits are submitted! ' +
    'Do you still want to vote now (dangerous), or would you like to cancel your vote until you are done editing (safe)?'))
  {
    return;
  }
  else {
    this.editsPending = false;
    window.onbeforeunload = null;
    resetNewChapterInputs();  // don't keep unsaved changes lying around once listeners are disabled
  }

  var savedWindowPosition = getWindowPosition();
  if(nodeUid == null || newVote == null) {
    logMgr.error('Relevant parameters missing in votification call.');
    return;
  }
  logMgr.debug('User attempting to votify a story node . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Votification response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response, savedWindowPosition);
    }
    else {
      logMgr.debug('Votification attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({
      error: 'Server response timed out; unable to detect result of votification attempt.',
      windowScroll: savedWindowPosition
    });
  }
  var xhrPayload = JSON.stringify({votify: nodeUid, newVote: newVote});
  xhr.send(xhrPayload);
}

function nameChange(newName) {
  if(checkPendingEdits(this.editsPending, this, 'Changing your name will trigger a page reload ... you might want to change your ' +
    'name after submitting your edits!  Do you want to proceed with changing your name and discarding your unsaved work?'))
  {
    return;
  }
  else {
    this.editsPending = false;
    window.onbeforeunload = null;
    resetNewChapterInputs();  // don't keep unsaved changes lying around once listeners are disabled
  }

  var savedWindowPosition = getWindowPosition();
  logMgr.debug('User attempting to update their name . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Name change response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response, savedWindowPosition);
    }
    else {
      logMgr.debug('Name change attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({
      error: 'Server response timed out; unable to detect result of name change attempt.',
      windowScroll: savedWindowPosition
    });
  }
  var xhrPayload = JSON.stringify({newName: newName});
  xhr.send(xhrPayload);
}

function submitEdits(path, body) {
  var savedWindowPosition = getWindowPosition();
  logMgr.debug('User attempting to edit existing node . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Edit submission response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response, constants.windowScrollTop);
    }
    else {
      logMgr.debug('Edit submission attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({
      error: 'Server response timed out; unable to detect result of edit submission attempt.',
      windowScroll: savedWindowPosition
    });
  }
  var xhrPayload = JSON.stringify({editTarget: properThis.state.nodeUid, updatedPath: path, updatedBody: body});
  xhr.send(xhrPayload);
}

function submitInput(path, body) {
  var savedWindowPosition = getWindowPosition();
  logMgr.debug('User attempting to submit new node . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Node submission response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response, constants.windowScrollTop);
    }
    else {
      logMgr.debug('Node submission attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({
      error: 'Server response timed out; unable to detect result of node submission attempt.',
      windowScroll: savedWindowPosition
    });
  }
  var xhrPayload = JSON.stringify({newNodePath: path, newNodeBody: body});
  xhr.send(xhrPayload);
}

function saveDraft(path, body) {
  var savedWindowPosition = getWindowPosition();
  logMgr.debug('User attempting to save draft . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  var properThis = this;
  xhr.onreadystatechange = function() {
    if( xhr.readyState == 4 && (xhr.status == 200 || xhr.status == 304) ) {
      logMgr.debug('Status 200 (or 304)!');
      logMgr.verbose('Draft salvation response payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      validateResponse(properThis, response, constants.windowScrollTop);
    }
    else {
      logMgr.debug('Draft salvation attempt yielded HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.timeout = 5000;
  xhr.ontimeout = function() {
    xhr.abort();
    properThis.setState({
      error: 'Server response timed out; unable to verify that your draft was saved.',
      windowScroll: savedWindowPosition
    });
  }
  var xhrPayload = JSON.stringify({draftPath: path, draftBody: body});
  xhr.send(xhrPayload);
}

// scrollTop tells us whether we want to scroll the window to the top after validating and initializing a React re-render
function validateResponse(properThis, response, newWindowPosition) {
  if(validateMessageResponse(properThis, response, newWindowPosition)) {
    return;
  }

  logMgr.debug('Attempting to validate response from server . . .');
  if(!response) {
    // wow... if you don't even get a response, something is nightmarishly wrong
    var errorMessage = 'Got no valid response object from server whatsoever.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(response.error) {
    // set an error state based on the returned error
    logMgr.out(response.error);
    properThis.setState(getErrorStateObject(response.error));
    return;
  }
  if(!response.hasOwnProperty('nodeUid')) {
    // can't even determine where we are; set error state, display error content
    var errorMessage = 'Could not get story node data from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('parentUid')) {
    // can't determine current node's parent; set error state, display error content
    var errorMessage = 'Could not retrieve node lineage data from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('acctType')) {
    // can't determine account type; set err, display err content
    var errorMessage = 'Could not get user account type from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('userName')) {
    // can't figure out user's name; set err, display err content
    var errorMessage = 'Could not get user data from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(
    !response.hasOwnProperty('votification') ||
    (response.votification != constants.votificationNone &&
     response.votification != constants.votificationUp &&
     response.votification != constants.votificationDown)) {
    // can't determine votification status; set err, display err content
    var errorMessage = 'Could not retrieve votification status from the server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('paths')) {
    // no paths given, set error state and display error content
    var errorMessage = 'Could not retrieve pathing information from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('snippet')) {
    // no snippet to display, set error state and display error content
    var errorMessage = 'Could not retrieve snippet data from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(
    !response.snippet.hasOwnProperty('trailingSnippet') ||
    !response.snippet.hasOwnProperty('lastPath') ||
    !response.snippet.hasOwnProperty('nodeSnippet') ||
    !response.snippet.hasOwnProperty('authorName')) {
    // snippet information missing, set error state and display error content
    var errorMessage = 'Some snippet details were missing in response from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(!response.hasOwnProperty('inputBlocking')) {
    // no verification of current node's authorship, set error state and display error content
    var errorMessage = 'Could not retrieve input permissions from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  if(
    !response.inputBlocking.hasOwnProperty('top') ||
    !response.inputBlocking.hasOwnProperty('side')) {
    // path authorship information missing, set error state and display error content
    var errorMessage = 'Path authorship details were missing in response from server.';
    logMgr.out(errorMessage);
    properThis.setState(getErrorStateObject(errorMessage));
    return;
  }
  logMgr.verbose('Trying to set state after validation: ' + JSON.stringify(response));
  properThis.setState({
    nodeUid: response.nodeUid,
    parentUid: response.parentUid,
    userName: response.userName,
    acctType: response.acctType,
    votification: response.votification,
    snippet: response.snippet,
    paths: response.paths,
    inputBlocking: response.inputBlocking,
    editMode: false,  // always reset this to false when taking in response from server
    msg: response.msg ? response.msg : null,
    warning: response.warning ? response.warning : null,
    error: response.error ? response.error : null,
    windowScroll: newWindowPosition || constants.windowScrollTop
  });
  logMgr.verbose('State was set successfully after validation!');
  logMgr.verbose('New state: ' + JSON.stringify(properThis.state));
}

// don't do a full response validation if we are told to expect only an alert message
function validateMessageResponse(context, response, newWindowPosition) {
  if(response.messageOnly) {
    logMgr.verbose('Got message-only response.');
    context.setState({
      msg: null,
      warning: null,
      error: null
    });
    context.setState({
      msg: response.msg ? response.msg : null,
      warning: response.warning ? response.warning : null,
      error: response.error ? response.error : null,
      windowScroll: newWindowPosition || constants.windowScrollTop
    });
    return true;
  }
  return false;
}

function getDefaultStateObject() {
  return {
    nodeUid: constants.defaultNodeUid,
    parentUid: constants.defaultParentUid,
    userName: constants.defaultUserName,
    acctType: constants.acctTypeVisitor,
    votification: constants.votificationNone,
    snippet: {
      trailingSnippet: constants.defaultTrailingSnippet,
      lastPath: constants.defaultLastPath,
      nodeSnippet: constants.defaultNodeSnippet,
      authorName: constants.displayNameUnknown
    },
    paths: [],
    inputBlocking: constants.inputBlockingHide,
    editMode: false,
    msg: null,
    warning: null,
    error: null,
    windowScroll: constants.windowScrollTop
  };
}

function getErrorStateObject(errorMessage) {
  return {
    nodeUid: constants.errorNodeUid,
    parentUid: constants.errorNodeUid,
    userName: constants.errorUserName,
    acctType: constants.acctTypeVisitor,
    votification: constants.votificationNone,
    snippet: {
      trailingSnippet: constants.errorTrailingSnippet,
      lastPath: constants.errorLastPath,
      nodeSnippet: constants.errorNodeSnippet + '  ' + errorMessage,
      authorName: constants.displayNameUnknown
    },
    paths: [],
    inputBlocking: constants.inputBlockingHide,
    editMode: false,
    msg: null,
    warning: null,
    error: errorMessage,
    windowScroll: constants.windowScrollTop
  };
}

function resetNewChapterInputs() {
  var inputPathElement = document.getElementById('cyoag-input-path');
  var inputBodyElement = document.getElementById('cyoag-input-body');
  if(inputPathElement) {
    inputPathElement.value = '';
  }
  if(inputBodyElement) {
    inputBodyElement.value = '';
  }
}

// this function returns a JSON object consisting of window scroll position as {x: #, y: #}
function getWindowPosition() {
  // modified from http://stackoverflow.com/questions/3464876/javascript-get-window-x-y-position-for-scroll
  var doc = document.documentElement;
  logMgr.verbose('window.pageXOffset: ' + window.pageXOffset);
  logMgr.verbose('window.pageYOffset: ' + window.pageYOffset);
  logMgr.verbose('doc.scrollLeft: ' + doc.scrollLeft);
  logMgr.verbose('doc.scrollTop: ' + doc.scrollTop);
  logMgr.verbose('doc.clientLeft: ' + doc.clientLeft);
  logMgr.verbose('doc.clientTop: ' + doc.clientTop);
  var pos = {
    x: (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0),
    y: (window.pageYOffset || doc.scrollTop)  - (doc.clientTop || 0)
  }
  logMgr.verbose('Got window scroll position: ' + JSON.stringify(pos));
  return pos;
}

function restoreScroll(scrollCoord) {
  var x = scrollCoord.x, y = scrollCoord.y;
  logMgr.verbose('Attempting to restore scroll position: ' + x + ', ' + y);
  window.scrollTo(x, y);
}
