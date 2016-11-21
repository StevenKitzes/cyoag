var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('./logger')('MainColumnComponents.js');

var NodeComponents = require('./NodeComponents');
var VotificationComponents = require('./VotificationComponents');
var PathComponents = require('./PathComponents');

var exports = {};

// Facebook login button component
var MainColumn = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    var context = this.props.context;

    var votificationComponent;
    if(context.state.acctType != constants.acctTypeVisitor) {
      votificationComponent = <VotificationComponents.Votification context={context} />;
    }
    else {
      votificationComponent = <VotificationComponents.BegLogin context={context} />;
    }

    return(
      <div id='cyoag-main-column'>
        <NodeComponents.Node context={context} />
        {votificationComponent}
        <PathComponents.Paths context={context} />
      </div>
    );
  }
});

exports.MainColumn = MainColumn;

module.exports = exports;
