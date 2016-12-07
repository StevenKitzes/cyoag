var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/logger')('MarginColumnComponents.js');

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
      loginComponent = <MarginLogin />;
    }

    return (
      <div id='cyoag-margin-column'>
        {loginComponent}
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
        <SocialLoginButtonComponents.FacebookButton /> <SocialLoginButtonComponents.TwitterButton />
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
  getInitialState: function() {
    return {
      nameChange: 'beg'
    };
  },
  render: function() {
    var context = this.props.context;

    if(this.state.nameChange == 'beg') {
      return (
        <div id='cyoag-name-change-ui'>
          <button id='cyoag-swap-name-change-button' onClick={this.swap}>Customize Your Name</button>
        </div>
      );
    }
    else if(this.state.nameChange == 'ui') {
      return (
        <div id='cyoag-name-change-ui'>
          <input id='cyoag-name-input' type='text' placeholder='New name'></input>
          <button id='cyoag-submit-name-change-button' onClick={this.submit}>Submit</button>
        </div>
      );
    }

    return (
      {nameChangeUi}
    );
  },
  submit: function() {
    var newName = document.getElementById('cyoag-name-input').value;
    this.props.context.nameChange(newName);
    this.swap();
  },
  swap: function() {
    if(this.state.nameChange == 'beg') {
      this.setState({
        nameChange: 'ui'
      });
    }
    else if(this.state.nameChange == 'ui') {
      this.setState({
        nameChange: 'beg'
      });
    }
  }
});

exports.MarginColumn = MarginColumn;

module.exports = exports;
