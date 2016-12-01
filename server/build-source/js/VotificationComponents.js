var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/logger')('VotificationComponents.js');

var SocialLoginButtonComponents = require('./SocialLoginButtonComponents');

var exports = {};

// Facebook login button component
var BegLogin = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');
    var context = this.props.context;

    if(context.state.acctType == constants.acctTypeVisitor) {
      return(
        <div id='cyoag-votification-container'>
          <h4>Register to save your position, contribute your own story snippets, and gain voting rights!</h4>
          <SocialLoginButtonComponents.FacebookButton />
          <SocialLoginButtonComponents.TwitterButton />
        </div>
      );
    }
  }
});

var Votification = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');
    var context = this.props.context;
    var upImgPath, downImgPath;

    switch(context.state.votification) {
      case 'up':
        upImgPath = 'images/upLit.png';
        downImgPath = 'images/down.png';
        break;
      case 'down':
        upImgPath = 'images/up.png';
        downImgPath = 'images/downLit.png';
        break;
      default:
        upImgPath = 'images/up.png';
        downImgPath = 'images/down.png';
        break;
    }

    return (
      <div id='cyoag-votification-container'>
        <h4>How did you like this chapter?</h4>
        <a href='#'><img id='cyoag-upvote-button' onClick={context.voteUp} src={upImgPath} /></a>
        <a href='#'><img id='cyoag-downvote-button' onClick={context.voteDown} src={downImgPath} /></a>
      </div>
    );
  }
});

exports.BegLogin = BegLogin;
exports.Votification = Votification;

module.exports = exports;
