var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('MessagingComponents.js');

var exports = {};

// a banner to display alerts of various severity to the user
var Banner = React.createClass({
  closeBanner: function(e) {
    e.preventDefault();
    document.getElementById('cyoag-message-banner').style.display = 'none';
  },
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
        <p className={className}>{messageContent}<a onClick={this.closeBanner} id='cyoag-message-banner-x' href='#'>X</a></p>
      </div>
    );
  }
});

// a modal alert to demand user attention to alerts of various severity to the user
var Modal = React.createClass({
  closeModal: function(e) {
    e.preventDefault();
    document.getElementById('cyoag-modal-message-container').style.display = 'none';
  },
  render: function() {
    logMgr.verbose('Rendering...');

    var state = this.props.context.state;
    var modalType, messageContent;

    if(state.error) {
      modalType = constants.modalTypeError;
      messageContent = state.error;
    }
    else if(state.warning) {
      modalType = constants.modalTypeWarning;
      messageContent = state.warning;
    }
    else if(state.msg) {
      modalType = constants.modalTypeMessage;
      messageContent = state.msg;
    }
    else {
      return(<div id='cyoag-message-modal' style={{display: 'none'}}></div>);
    }

    return(
      <div id='cyoag-modal-message-container'>
        <div id='cyoag-modal-message-overlay'></div>
        <div id='cyoag-message-modal' className={modalType}>
          <p className='cyoag-modal-message'>{messageContent}</p>
          <a onClick={this.closeModal} className='cyoag-link' href='#'><div className='cyoag-modal-message-button'>Click to Acknowledge</div></a>
        </div>
      </div>
    );
  }
});

exports.Banner = Banner;
exports.Modal = Modal;

module.exports = exports;
