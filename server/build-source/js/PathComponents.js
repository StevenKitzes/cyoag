var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('PathComponents.js');

var exports = {};

// Dynamically generated paths if available component
var Paths = React.createClass({
  navigate: function(navElementUid) {
    var destinationUid = navElementUid.substring(5);
    this.props.context.navigateXhr(destinationUid);
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
      // body howdy, here goes nothin'!

      // copy array by value, then sort it
      var sortedPaths = paths.slice();
      sortedPaths.sort(function(a,b) {
        return b.pathVotification - a.pathVotification; // DESCENDING order!
      });

      // determine winner(s)
      var highestRank = sortedPaths[0].pathVotification;

      // gold star to be added to winner(s)
      var goldStarElement = <img className='cyoag-gold-star' src='images/gold-star.png' />
      var goldStarSpacer = <div className='cyoag-gold-star-spacer' />

      // if there are 4 or fewer paths, this is easy, just display them in order
      // if(sortedPaths.length <= 4) {
      if(true) {
        return (
          <div id='cyoag-path-list'>
            <p className='italics sans-serif'>What happens next . . . ?</p>
            {sortedPaths.map(function(item) {
              var pathUid = 'node-' + item.pathUid;
              return (
                <a id={pathUid} key={pathUid} className='cyoag-path-item-link cyoag-link' onMouseMove={properThis.locateTooltip.bind(null, pathUid)}>
                  <div className='cyoag-path-item' onClick={properThis.navigate.bind(null, pathUid)}>
                    {item.pathVotification == highestRank && highestRank > 0 ? goldStarElement : <div className='cyoag-hidden' />}
                    {item.pathVotification == highestRank && highestRank > 0 ? goldStarSpacer : <div className='cyoag-hidden' />}
                    {item.pathSnippet}
                  </div>
                  <div className='cyoag-tooltip-progress'>
                    {item.pathVotification == highestRank && highestRank > 0 ? 'Popular path!' : 'Choose wisely . . .'}
                  </div>
                </a>
              );
            })}
          </div>
        );
      }
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
