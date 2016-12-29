var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('MessagingComponents.js');

var exports = {};

// a banner to display alerts of various severity to the user
var Banner = React.createClass({
  closeBanner: function(e) {
    e.preventDefault();
    var bannerObj = document.getElementById('cyoag-message-banner');
    if(bannerObj) {
      bannerObj.style.display = 'none';
    }
  },
  render: function() {
    logMgr.verbose('Rendering...');

    var state = this.props.context.state;
    var className, messageContent;
    var bannerObj = document.getElementById('cyoag-message-banner');

    if(state.error) {
      if(bannerObj) {
        bannerObj.style.display = 'block';
      }
      className = constants.messageErrorClass;
      messageContent = state.error;
    }
    else if(state.warning) {
      if(bannerObj) {
        bannerObj.style.display = 'block';
      }
      className = constants.messageWarningClass;
      messageContent = state.warning;
    }
    else if(state.msg) {
      if(bannerObj) {
        bannerObj.style.display = 'block';
      }
      className = constants.messageRegularClass;
      messageContent = state.msg;
    }
    else {
      return(<div id='cyoag-message-banner' style={{display: 'none'}}></div>);
    }

    return(
      <div id='cyoag-message-banner'>
        <p className={className}><a onClick={this.closeBanner} id='cyoag-message-banner-x' href='#'>x</a>{messageContent}</p>
      </div>
    );
  }
});

// a modal alert to demand user attention to alerts of various severity to the user
var Modal = React.createClass({
  closeModal: function(e) {
    e.preventDefault();
    var modalObj = document.getElementById('cyoag-modal-message-container');
    if(modalObj) {
      modalObj.style.display = 'none';
    }
  },
  render: function() {
    logMgr.verbose('Rendering...');

    var state = this.props.context.state;
    var modalType, messageContent;
    var modalObj = document.getElementById('cyoag-modal-message-container');

    if(state.error) {
      if(modalObj) {
        modalObj.style.display = 'block';
      }
      modalType = constants.modalTypeError;
      messageContent = state.error;
    }
    else if(state.warning) {
      if(modalObj) {
        modalObj.style.display = 'block';
      }
      modalType = constants.modalTypeWarning;
      messageContent = state.warning;
    }
    else if(state.msg) {
      if(modalObj) {
        modalObj.style.display = 'block';
      }
      modalType = constants.modalTypeMessage;
      messageContent = state.msg;
    }
    else {
      return(<div id='cyoag-message-modal' style={{display: 'none'}}></div>);
    }

    return(
      <div onClick={this.closeModal} id='cyoag-modal-message-container'>
        <div id='cyoag-modal-message-overlay'></div>
        <div id='cyoag-message-modal' className={modalType}>
          <p className='cyoag-modal-message'>{messageContent}</p>
          <a className='cyoag-link' href='#'><div className='cyoag-modal-message-button'>Click to Acknowledge</div></a>
        </div>
      </div>
    );
  }
});

exports.Banner = Banner;
exports.Modal = Modal;

module.exports = exports;
