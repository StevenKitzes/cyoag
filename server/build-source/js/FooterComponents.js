var React = require('react');
var ReactDOM = require('react-dom');

var constants = require('../../constants');
var logMgr = require('../../utils/browserLogger')('FooterComponents.js');

var exports = {};

// Facebook login button component
var Footer = React.createClass({
  render: function() {
    logMgr.verbose('Rendering...');

    return(
      <div id='cyoag-footer-container'>
        <hr />
        <p className='cyoag-note'>All software written to support the CYOAG project is protected under the <a className='cyoag-link' href='http://www.gnu.org/licenses/gpl.html'>GNU GPL v3.0</a> license.  For additional copyright information, please see the <a className='cyoag-link' href='usage.html'>CYOAG Usage and Copyright</a> page.</p>
      </div>
    );
  }
});

exports.Footer = Footer;

module.exports = exports;
