var React = require('react');
var ReactDOM = require('react-dom');

var config = require('../../build-config');
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

    var error = this.props.error;
    var warning = this.props.warning;
    var msg = this.props.msg;
    var className, messageContent;
    var bannerObj = document.getElementById('cyoag-message-banner');

    if(error) {
      if(bannerObj) {
        bannerObj.style.display = 'block';
      }
      className = constants.messageErrorClass;
      messageContent = error;
    }
    else if(warning) {
      if(bannerObj) {
        bannerObj.style.display = 'block';
      }
      className = constants.messageWarningClass;
      messageContent = warning;
    }
    else if(msg) {
      if(bannerObj) {
        bannerObj.style.display = 'block';
      }
      className = constants.messageRegularClass;
      messageContent = msg;
    }
    else {
      return(<div id='cyoag-message-banner' style={{display: 'none'}}></div>);
    }

    return(
      <div onClick={this.closeBanner} id='cyoag-message-banner' title='Click to dismiss this message.'>
        <p className={className}><a id='cyoag-message-banner-x'>x</a>{messageContent}</p>
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
    // if we have gotten this far and the URL is still dirty, clean it by redirecting to the plain host domain
    if(location.href.indexOf('?') > -1) {
      location.href = config.hostDomain;
      return;
    }
  },
  render: function() {
    logMgr.verbose('Rendering...');

    var error = this.props.error;
    var warning = this.props.warning;
    var msg = this.props.msg;
    var modalType, messageContent;
    var modalObj = document.getElementById('cyoag-modal-message-container');

    if(error) {
      if(modalObj) {
        modalObj.style.display = 'block';
      }
      modalType = constants.modalTypeError;
      messageContent = error;
    }
    else if(warning) {
      if(modalObj) {
        modalObj.style.display = 'block';
      }
      modalType = constants.modalTypeWarning;
      messageContent = warning;
    }
    else if(msg) {
      if(modalObj) {
        modalObj.style.display = 'block';
      }
      modalType = constants.modalTypeMessage;
      messageContent = msg;
    }
    else {
      return(<div id='cyoag-message-modal' style={{display: 'none'}}></div>);
    }

    return(
      <div onClick={this.closeModal} id='cyoag-modal-message-container' title='Click to dismiss.'>
        <div id='cyoag-modal-message-overlay'></div>
        <div id='cyoag-message-modal' className={modalType}>
          <p className='cyoag-modal-message'>{messageContent}</p>
          <a className='cyoag-side-padded-link'><div className='cyoag-modal-message-button'>Click to Acknowledge</div></a>
        </div>
      </div>
    );
  }
});

exports.Banner = Banner;
exports.Modal = Modal;

module.exports = exports;
