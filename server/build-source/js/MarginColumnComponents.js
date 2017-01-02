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
      loginComponent = <MarginLogin context={context}/>;
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
      <div id='cyoag-name-change-ui'></div>
    );
  },
  submit: function() {
    if(!this.validate()) {
      return;
    }
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

exports.MarginColumn = MarginColumn;

module.exports = exports;
