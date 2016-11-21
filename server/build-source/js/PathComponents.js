var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('PathComponents.js');

var exports = {};

// Facebook login button component
var Paths = React.createClass({
  render: function() {
    var paths = this.props.context.state.paths;

    if(paths.length == 0) {
      return (
        <div id='cyoag-path-list'>No paths yet lead from this chapter.  Create your own...?</div>
      );
    }
    else {
      return (
        <div id='cyoag-path-list'>
          <p className='italics'>What happens next...?</p>
          {paths.map(function(item) {
            return (
              <a id={item.pathUid} className='cyoag-link cyoag-path-item' href='#'>{item.pathSnippet}</a>
            );
          })}
        </div>
      );
    }
  },
  componentDidMount: function() {
    // for links created in render, set up JS listener to trigger nav XHR

  }
});

exports.Paths = Paths;

module.exports = exports;
