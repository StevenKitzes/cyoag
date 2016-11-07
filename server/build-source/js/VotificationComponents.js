var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('./logger')('VotificationComponents.js');

var SocialLoginButtonComponents = require('./SocialLoginButtonComponents');

var exports = {};

// Facebook login button component
var BegLogin = React.createClass({
  render: function() {
    var context = this.props.context;

    if(!context.state.loggedIn) {
      return(
        <div id='cyoag-beg-login'>
          <h3>Register to have your position in the story automagically bookmarked!</h3>
          <SocialLoginButtonComponents.FacebookButton />
          <SocialLoginButtonComponents.TwitterButton />
        </div>
      );
    }
  }
});

var Votification = React.createClass({
  render: function() {
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
      <div id='votification-container'>
        <h4>How did you like this chapter?</h4>
        <img id='cyoag-upvote-button' onClick={context.voteUp} src={upImgPath} />
        <img id='cyoag-downvote-button' onClick={context.voteDown} src={downImgPath} />
      </div>
    );
  }
});

exports.BegLogin = BegLogin;
exports.Votification = Votification;

module.exports = exports;
