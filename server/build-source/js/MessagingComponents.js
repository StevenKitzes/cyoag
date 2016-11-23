var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('MessagingComponents.js');

var exports = {};

// Facebook login button component
var Banner = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    var state = this.props.context.state;
    var className, messageContent;
    if(state.error) {
      className = constants.messageErrorClass;
      messageContent = state.error;
    }
    else if(state.warning) {
      className = constants.messageWarningClass;
      messageContent = state.warning;
    }
    else if(state.msg) {
      className = constants.messageRegularClass;
      messageContent = state.msg;
    }
    else {
      return(<div id='cyoag-message-banner' style={{display: 'none'}}></div>);
    }

    return(
      <div id='cyoag-message-banner'>
        <p className={className}>{messageContent}</p>
      </div>
    );
  }
});

exports.Banner = Banner;

module.exports = exports;
