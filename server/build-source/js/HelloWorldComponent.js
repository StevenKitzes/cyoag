var React = require('react');
var ReactDOM = require('react-dom');

function renderHelloWorld() {
  // Hello World component: display a simple prop
  var HelloWorldComponent = React.createClass({
    render: function() {
      return (
        <h1 id='italic-id' className='red-class'>Hello, {this.props.name}!</h1>
      );
    }
  });

  ReactDOM.render(
    <HelloWorldComponent name='Cruel World' />,
    document.getElementById('welcome-point')
  );
}

module.exports = renderHelloWorld;
