var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('MainColumnComponents.js');

var NodeComponents = require('./NodeComponents');
var VotificationComponents = require('./VotificationComponents');
var PathComponents = require('./PathComponents');
var InputComponents = require('./InputComponents');

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

    var inputComponent;
    if(context.state.acctType == constants.acctTypeVisitor || context.state.inputBlocking == constants.inputBlockingHide) {
      inputComponent = <InputComponents.Hidden />
    }
    else if(context.state.inputBlocking.top || context.state.inputBlocking.side) {
      inputComponent = <InputComponents.Blocked blocking={context.state.inputBlocking} />
    }
    else {
      inputComponent = <InputComponents.Input context={context} />
    }

    return(
      <div id='cyoag-main-column'>
        <NodeComponents.Node context={context} />
        {votificationComponent}
        <PathComponents.Paths context={context} />
        {inputComponent}
      </div>
    );
  }
});

exports.MainColumn = MainColumn;

module.exports = exports;
