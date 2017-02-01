var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('PathComponents.js');

var randomizeArray = require('../../utils/randomizeArray');

var exports = {};

// Dynamically generated paths if available component
var Paths = React.createClass({
  getInitialState: function() {
    return ({
      collapsed: true
    });
  },
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
      // if all paths are tied for first, then none should be marked; set highest rank 0
      // note, this implicitly includes situations where there is only one path
      if(sortedPaths[sortedPaths.length-1].pathVotification == highestRank) {
        highestRank = 0;
      }

      // gold star to be added to winner(s)
      var goldStarElement = <img className='cyoag-gold-star' src='images/gold-star.png' />
      var goldStarSpacer = <div className='cyoag-gold-star-spacer' />
      var goldStarSpacerLeft = <div className='cyoag-gold-star-spacer-left' />

      // if there are 4 or fewer paths, this is easy, just display them in order
      if(sortedPaths.length <= 4) {
        return (
          <div id='cyoag-path-list'>
            <p className='italics sans-serif'>What happens next . . . ?</p>
            {sortedPaths.map(function(item) {
              var pathUid = 'node-' + item.pathUid;
              var showGoldStar = item.pathVotification == highestRank && highestRank > 0;
              return (
                <a id={pathUid} key={pathUid} className='cyoag-path-item-link cyoag-link' onMouseMove={properThis.locateTooltip.bind(null, pathUid)}>
                  <div className='cyoag-path-item' onClick={properThis.navigate.bind(null, pathUid)}>
                    {showGoldStar ? goldStarElement : <div className='cyoag-hidden' />}
                    {showGoldStar ? goldStarSpacer : <div className='cyoag-hidden' />}
                    {item.pathSnippet}
                  </div>
                  <div className='cyoag-tooltip-progress'>
                    {showGoldStar ? 'Popular path!' : 'Choose wisely . . .'}
                  </div>
                </a>
              );
            })}
          </div>
        );
      }
      // more than 4 paths ... lots of work to do here
      else {
        // regardless whether we will need to randomize the non-ranked, we want to randomize the tied-ranked paths
        // to avoid playing favorites
        // start by counting all elements that share the highest rank
        var tiedForHighestCount = 0;
        while(sortedPaths[tiedForHighestCount].pathVotification == highestRank) {
          tiedForHighestCount++;
        }

        // set tied elements aside
        var tiedForHighestRank = sortedPaths.splice(0, tiedForHighestCount);

        // now, separately randomize rankers and others
        randomizeArray(tiedForHighestRank);

        // for collapsed state
        if(this.state.collapsed) {
          // also randomize remainder of paths in this case
          randomizeArray(sortedPaths);

          // tack everything back together and grab the first 4 off the top; this will be our final 4
          var finalFour = tiedForHighestRank.concat(sortedPaths).splice(0, 4);

          // return the UI for the final 4 with CTA to expand into full list
          return (
            <div id='cyoag-path-list'>
              <p className='italics sans-serif'>What happens next . . . ?</p>
              {finalFour.map(function(item) {
                var pathUid = 'node-' + item.pathUid;
                var showGoldStar = item.pathVotification == highestRank && highestRank > 0;
                return (
                  <a id={pathUid} key={pathUid} className='cyoag-path-item-link cyoag-link' onMouseMove={properThis.locateTooltip.bind(null, pathUid)}>
                    <div className='cyoag-path-item' onClick={properThis.navigate.bind(null, pathUid)}>
                      {showGoldStar ? goldStarElement : <div className='cyoag-hidden' />}
                      {showGoldStar ? goldStarSpacer : <div className='cyoag-hidden' />}
                      {item.pathSnippet}
                    </div>
                    <div className='cyoag-tooltip-progress'>
                      {showGoldStar ? 'Popular path!' : 'Choose wisely . . .'}
                    </div>
                  </a>
                );
              })}
              <a id='cyoag-expand-cta' className='cyoag-path-item-link cyoag-link' onMouseMove={properThis.locateTooltip.bind(null, 'cyoag-expand-cta')}>
                <div className='cyoag-expand-paths-item' onClick={properThis.swapCollapsed}>
                  Click here to reveal all possible paths!
                </div>
                <div className='cyoag-tooltip-progress'>
                  Some paths were hidden to reduce clutter.
                  Stars indicate popularity; others are random
                  selections, giving every
                  path a chance to be seen! Click to reveal all
                  paths, sorted by votes.
                </div>
              </a>
            </div>
          );
        }
        // state not collapsed
        else {
          return (
            <div id='cyoag-path-list'>
              <p className='italics sans-serif'>What happens next . . . ?</p>
              {tiedForHighestRank.concat(sortedPaths).map(function(item) {
                var pathUid = 'node-' + item.pathUid;
                var showGoldStar = item.pathVotification == highestRank && highestRank > 0;
                return (
                  <a id={pathUid} key={pathUid} className='cyoag-path-item-link cyoag-link' onMouseMove={properThis.locateTooltip.bind(null, pathUid)}>
                    <div className='cyoag-path-item' onClick={properThis.navigate.bind(null, pathUid)}>
                      {showGoldStar ? goldStarElement : goldStarSpacerLeft}
                      <div className='cyoag-votification-display'>{item.pathVotification}</div>
                      {item.pathSnippet}
                    </div>
                    <div className='cyoag-tooltip-progress'>
                      {showGoldStar ? 'Popular path!' : 'Choose wisely . . .'}
                    </div>
                  </a>
                );
              })}
              <a className='cyoag-link'>
                <div className='cyoag-expand-paths-item' onClick={properThis.swapCollapsed}>
                  Click here to collapse paths.
                </div>
              </a>
            </div>
          );
        }
      }
    }
  },
  swapCollapsed: function() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  },
  locateTooltip: function(hoverTargetId, mouseEvent) {
    var tooltip = document.querySelector('#' + hoverTargetId + ' .cyoag-tooltip-progress');
    tooltip.style.top = (mouseEvent.clientY + pageYOffset) + 'px'; // note: pageYOffset ugly usage is GUESS WHAT due to IE being short-bus
    tooltip.style.left = (mouseEvent.clientX + pageXOffset) + 'px';
  }
});

exports.Paths = Paths;

module.exports = exports;
