var React = require('react');
var ReactDOM = require('react-dom');

var MainComponent = require('./MainComponent');

var logMgr = require('../../utils/browserLogger')('main.js');

logMgr.verbose('Kicking off initial render!');

ReactDOM.render(
  <MainComponent />,
  document.getElementById('mount-main')
);
