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
          <p className='italics'>What happens next . . . ?</p>
          {paths.map(function(item) {
            var pathUid = 'node-' + item.pathUid;
            return (
              <a id={pathUid} key={pathUid} className='cyoag-path-item-link cyoag-div-link' href='#'>
                <div className='cyoag-path-item'>{item.pathSnippet}</div>
                <div className='cyoag-tooltip-progress'>Choose wisely . . .</div>
              </a>
            );
          })}
        </div>
      );
    }
  },
  componentDidUpdate: function() {
    // for links created in render, set up JS listener to trigger nav XHR and tooltip listeners
    var context = this.props.context;
    var ids = context.state.paths.map(function(path) {
      return path.pathUid;
    });

    logMgr.debug('Path components mounted, assigning listeners to ids: ' + ids);
    for(var i = 0; i < ids.length; i++) {
      var id = ids[i];
      var listItem = document.getElementById('node-' + id);
      var itemTop = listItem.getBoundingClientRect().top;
      var itemLeft = listItem.getBoundingClientRect().left;
      var tooltip = document.querySelector('#node-' + id + ' .cyoag-tooltip-progress');

      logMgr.debug('Setting up click listener for node-' + id);

      listItem.addEventListener('click', function(e) {
        context.navigate(id);
      }, false);
      listItem.addEventListener('mousemove', function(e) {
        tooltip.style.top = (e.clientY + pageYOffset) + 'px'; // ugly pageYOffset usage due to YOU GUESSED IT IE being short-bus
        tooltip.style.left = (e.clientX + pageXOffset) + 'px';
      }, false);
    }

  }
});

exports.Paths = Paths;

module.exports = exports;
