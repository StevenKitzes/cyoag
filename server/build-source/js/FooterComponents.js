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
        <p className='cyoag-note'>Your use of this site implies your understanding of and consent to abide by the CYOAG <a className='cyoag-link' href='tos.html'>Terms, Conditions, and User Agreement</a> and <a className='cyoag-link' href='priv-pol.html'>Privacy Policy</a>.  All software written to support the CYOAG project is protected under the <a className='cyoag-link' href='http://www.gnu.org/licenses/gpl.html'>GNU GPL v3.0</a> license.  For additional information, please see the <a className='cyoag-link' href='usage.html'>CYOAG Usage and Copyright</a> page.</p>
      </div>
    );
  }
});

exports.Footer = Footer;

module.exports = exports;
