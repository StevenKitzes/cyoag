var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('PathComponents.js');

var exports = {};

// Facebook login button component
var Paths = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');
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
              <a id={item.pathUid} key={item.pathUid} className='cyoag-link cyoag-path-item' href='#'>{item.pathSnippet}</a>
            );
          })}
        </div>
      );
    }
  },
  componentDidUpdate: function() {
    // for links created in render, set up JS listener to trigger nav XHR
    var context = this.props.context;
    var ids = context.state.paths.map(function(path) {
      return path.pathUid;
    });
    logMgr.debug('Path components mounted, assigning listeners to ids: ' + ids);
    for(var i = 0; i < ids.length; i++) {
      var id = ids[i];
      logMgr.debug('Setting up click listener for ' + id);
      document.getElementById(id).addEventListener('click', function(e) {
        context.navigate(id);
      }, false);
    }
  }
});

exports.Paths = Paths;

module.exports = exports;
