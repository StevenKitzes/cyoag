var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('VotificationComponents.js');

var SocialLoginButtonComponents = require('./SocialLoginButtonComponents');

var exports = {};

var BegLogin = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');
    var context = this.props.context;

    if(context.state.acctType == constants.acctTypeVisitor) {
      return(
        <div id='cyoag-votification-container'>
          <h4>Register an account to save your position, contribute your own story snippets, and gain voting rights!</h4>
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
    var upClickResult, downClickResult;

    switch(context.state.votification) {
      case 'up':
        upImgPath = 'images/upLit.png';
        downImgPath = 'images/down.png';
        upClickResult = constants.votificationNone;
        downClickResult = constants.votificationDown;
        break;
      case 'down':
        upImgPath = 'images/up.png';
        downImgPath = 'images/downLit.png';
        upClickResult = constants.votificationUp;
        downClickResult = constants.votificationNone;
        break;
      default:
        upImgPath = 'images/up.png';
        downImgPath = 'images/down.png';
        upClickResult = constants.votificationUp;
        downClickResult = constants.votificationDown;
        break;
    }

    var voteUp = function() {
      logMgr.verbose('Client trying to upvote ' + context.state.nodeUid);
      context.votifyXhr(context.state.nodeUid, upClickResult);
    }
    var voteDown = function() {
      logMgr.verbose('Client trying to downvote ' + context.state.nodeUid);
      context.votifyXhr(context.state.nodeUid, downClickResult);
    }

    return (
      <div id='cyoag-votification-container'>
        <h4 id='cyoag-votification-prompt'>How did you like this chapter?</h4>
        <a><img id='cyoag-upvote-button' onClick={voteUp} src={upImgPath} /></a>
        <a><img id='cyoag-downvote-button' onClick={voteDown} src={downImgPath} /></a>
      </div>
    );
  }
});

var Hidden = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');
    return(
        <div id='cyoag-votification-container' className='cyoag-hidden'>
        </div>
    );
  }
});

exports.BegLogin = BegLogin;
exports.Votification = Votification;
exports.Hidden = Hidden;

module.exports = exports;
