var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('PathComponents.js');

var exports = {};

// Dynamically generated paths if available component
var Paths = React.createClass({
  navigate: function(navElementUid) {
    var destinationUid = navElementUid.substring(5);
    this.props.context.navigate(destinationUid);
  },
  render: function() {
    logMgr.verbose('Rendering...');

    var properThis = this;
    var context = this.props.context;
    var paths = context.state.paths;

    if(paths.length == 0) {
      return (
        <div id='cyoag-path-list'>No paths yet lead from this chapter.</div>
      );
    }
    else {
      return (
        <div id='cyoag-path-list'>
          <p className='italics sans-serif'>What happens next . . . ?</p>
          {paths.map(function(item) {
            var pathUid = 'node-' + item.pathUid;
            return (
              <a id={pathUid} key={pathUid} className='cyoag-path-item-link cyoag-link' onMouseMove={properThis.locateTooltip.bind(null, pathUid)}>
                <div className='cyoag-path-item' onClick={properThis.navigate.bind(null, pathUid)}>{item.pathSnippet}</div>
                <div className='cyoag-tooltip-progress'>Choose wisely . . .</div>
              </a>
            );
          })}
        </div>
      );
    }
  },
  locateTooltip: function(hoverTargetId, mouseEvent) {
    var tooltip = document.querySelector('#' + hoverTargetId + ' .cyoag-tooltip-progress');
    tooltip.style.top = (mouseEvent.clientY + pageYOffset) + 'px'; // note: pageYOffset ugly usage is GUESS WHAT due to IE being short-bus
    tooltip.style.left = (mouseEvent.clientX + pageXOffset) + 'px';
  }
});

exports.Paths = Paths;

module.exports = exports;
