var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('MarginColumnComponents.js');

var SocialLoginButtonComponents = require('./SocialLoginButtonComponents');

var exports = {};

var MarginColumn = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    var context = this.props.context;
    var loginComponent;

    if(context.state.acctType != constants.acctTypeVisitor) {
      loginComponent = <MarginLogout context={context} logoutRequest={context.logoutRequest} />;
    }
    else {
      loginComponent = <MarginLogin context={context} />;
    }

    return (
      <div id='cyoag-margin-column'>
        {loginComponent}
        <Drafts context={context} />
      </div>
    );
  }
});

// Margin login button set component
var MarginLogin = React.createClass({
  render: function() {
    return (
      <div id='cyoag-margin-login-container'>
        <h4>Login with:</h4>
        <SocialLoginButtonComponents.FacebookButton context={this.props.context}/> <SocialLoginButtonComponents.TwitterButton context={this.props.context}/>
        <label id='cyoag-tos-label'>Agree to <a className='cyoag-link' href='tos.html'>Terms and Conditions</a>: <input id='cyoag-tos-checkbox' type="checkbox"></input></label>
        <a href='priv-pol.html'><div id='cyoag-social-note-container'>
          <img id='cyoag-info-badge' src='images/info-gray.png' />
          <div id='cyoag-social-note-column'><p id='cyoag-social-note' className='cyoag-note-green'>Learn about social media account integration in the CYOAG Privacy Policy!</p></div>
        </div></a>
      </div>
    );
  }
});

// Margin logout button set component
var MarginLogout = React.createClass({
  render: function() {
    var context = this.props.context;
    var htmlUserName = context.state.userName;
    htmlUserName = htmlUserName.replace('-', '\u2011'); // replace hyphen with unicode non-breaking dash
    return (
      <div id='cyoag-margin-login-container'>
        <h4>Logged in!</h4>
        <p>Welcome, {htmlUserName}!</p>
        <NameChangeComponent context={context} />
        <SocialLoginButtonComponents.LogoutButton logoutRequest={this.props.logoutRequest} />
      </div>
    );
  }
});

// Component to provide UI for and control user name changes
var NameChangeComponent = React.createClass({
  componentDidUpdate: function() {
    var input = document.getElementById('cyoag-name-input');
    if(input) {
      input.focus();
    }
  },
  getInitialState: function() {
    return {
      nameChangeUiStatus: 'beg'
    };
  },
  render: function() {
    var context = this.props.context;

    if(this.state.nameChangeUiStatus == 'beg') {
      return (
        <div id='cyoag-name-change-ui'>
          <button id='cyoag-swap-name-change-button' className='shaded-border-blue' onClick={this.swap}>Customize Your Pen Name</button>
        </div>
      );
    }
    else if(this.state.nameChangeUiStatus == 'ui') {
      return (
        <div id='cyoag-name-change-ui'>
          <input id='cyoag-name-input' type='text' placeholder='New name'></input><br />
          <button id='cyoag-swap-name-change-button' className='cyoag-side-spaced-button shaded-border-red' onClick={this.swap}>Cancel</button>
          <button id='cyoag-submit-name-change-button' className='cyoag-side-spaced-button shaded-border-green' onClick={this.submit}>Submit</button>
        </div>
      );
    }

    return (
      <div id='cyoag-name-change-ui'></div>
    );
  },
  submit: function() {
    if(!this.validate()) {
      return;
    }
    var newName = document.getElementById('cyoag-name-input').value;
    this.props.context.nameChangeXhr(newName);
    this.swap();
  },
  swap: function() {
    if(this.state.nameChangeUiStatus == 'beg') {
      this.setState({
        nameChangeUiStatus: 'ui'
      });
    }
    else if(this.state.nameChangeUiStatus == 'ui') {
      this.setState({
        nameChangeUiStatus: 'beg'
      });
    }
  },
  validate: function() {
    var newName = document.getElementById('cyoag-name-input').value;
    var context = this.props.context;
    if(newName.length < 3) {
      context.message({warning: "User names cannot be shorter than 3 characters."});
      return false;
    }
    else if(newName.length > 16) {
      context.message({warning: "User names cannot be longer than 16 characters."});
      return false;
    }
    else if(newName.match(/-{2,}/)) {
      context.message({warning: "User names cannot contain consecutive dashes."});
      return false;
    }
    else if(newName.match(/[^a-zA-Z0-9-]/)) {
      context.message({warning: "User names may only contain letters and numbers."});
      return false;
    }
    return true;
  }
});

var Drafts = React.createClass({
  navigate: function(navElementUid) {
    var destinationUid = navElementUid.substring(5);
    this.props.context.navigateXhr(destinationUid);
  },
  render: function() {
    var state = this.props.context.state;

    // if not a registered user of any kind, don't show any kind of draft data
    if(state.acctType != constants.acctTypeRegistered && state.acctType != constants.acctTypeModerator) {
      return (
        <div id='cyoag-drafts-container' className='cyoag-hidden'></div>
      );
    }
    else {
      var draftsTitle = state.drafts.length > 0 ?
        'These are your saved drafts. Click one to resume editing.' :
        'You do not have any saved drafts yet.';
      var properThis = this;

      return (
        <div id='cyoag-drafts-container'>
          <h4>{draftsTitle}</h4>
          {state.drafts.map(function(draft) {
            var draftParentUid = 'node-' + draft.parentUid;
            return (
              <a id={draftParentUid} key={draftParentUid} className='cyoag-draft-link cyoag-link' onMouseMove={properThis.locateTooltip.bind(null, draftParentUid)}>
                <div className='cyoag-draft-item' onClick={properThis.navigate.bind(null, draftParentUid)}>{draft.pathSnippet ? draft.pathSnippet : '[no path teaser for this draft]'}</div>
                <div className='cyoag-tooltip-draft'>Resume editing . . .</div>
              </a>
            );
          })}
        </div>
      );
    }
  },
  locateTooltip: function(hoverTargetId, mouseEvent) {
    var tooltip = document.querySelector('#' + hoverTargetId + ' .cyoag-tooltip-draft');
    tooltip.style.top = (mouseEvent.clientY + pageYOffset) + 'px'; // note: pageYOffset ugly usage is GUESS WHAT due to IE being short-bus
    tooltip.style.left = (mouseEvent.clientX + pageXOffset) + 'px';
  }
});

exports.MarginColumn = MarginColumn;

module.exports = exports;
