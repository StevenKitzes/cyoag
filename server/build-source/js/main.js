var React = require('react');
var ReactDOM = require('react-dom');

var logMgr = require('./logger').setLogSource('main.js');

function checkSession() {
  logMgr.debug('+ + + Checking session status . . .');
  var xhr = new XMLHttpRequest();
  // xmlHttp.onreadystatechange = () => {...}
  xhr.onreadystatechange = function () {
    if( xhr.readyState == 4 && xhr.status == 200 ) {
      logMgr.debug('Good status!');
      logMgr.verbose('Payload: ' + xhr.responseText);
      var response = JSON.parse(xhr.responseText);
      // do something with response
      if(response.msg) {
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend','<div>'+ response.msg +'</div>');
      }
      else {
        document.getElementsByTagName('body')[0].insertAdjacentHTML('beforeend','<div>ERROR: response message missing.</div>');
      }
    }
    else {
      logMgr.debug('Tried initial cookie check.  Got HTTP response status: ' + xhr.status);
    }
  }
  xhr.open('POST', '/session');
  xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
  xhr.send();
}

// Hello World component: display a simple prop
var MainComponent = React.createClass({
  componentWillMount: checkSession,
  render: function() {
    return (
      <h1>Ready {this.props.name}!</h1>
    );
  }
});

ReactDOM.render(
  <MainComponent name='Player 1' />,
  document.getElementById('mount-main')
);

/* Everything past here is old sample code

var React = require('react');
var ReactDOM = require('react-dom');

// Hello World component: display a simple prop
var HelloWorldComponent = React.createClass({
  componentWillMount: function() {
    console.log('+ + +Starting off with a cookie check.');
    var xhr = new XMLHttpRequest();
    // xmlHttp.onreadystatechange = () => {...}
    xhr.onreadystatechange = function () {
      if( xhr.readyState == 4 && xhr.status == 200 ) {
        console.log('Performed initial cookie check.  Got response: ' + xhr.responseText);
        document.getElementById('body').insertAdjacentHTML('beforeend','<div>'+xhr.responseText+'</div>');
      }
      else {
        console.log('Tried initial cookie check.  Got HTTP response status: ' + xhr.status);
      }
    }
    xhr.open('POST', '/cookieCheck');
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send();
    console.log('+ + + Cookie check done.');
  },
  render: function() {
    return (
      <h1 id='italic-id' className='red-class'>Hello, {this.props.name}!</h1>
    );
  }
});

// State component to display simple state
var StateComponent = React.createClass({
  // ReactJS Event
  incrementCount: function() {
    this.setState({
      count: this.state.count + 1
    });
  },
  getInitialState: function() {
    return {
      count: 0
    }
  },
  render: function() {
    return (
      <div className='increment-component'>
        <h3 className='red-class'>Count: {this.state.count}.</h3>
        <button onClick={this.incrementCount}>Boing!</button>
      </div>
    );
  }
});

var FilteredList = React.createClass({
  getInitialState: function() {
    return {
      initialItems: [
        'apple',
        'banana',
        'crocodile',
        'duck',
        'elephant',
        'falafel',
        'gnocci',
        'hummus',
        'ice',
        'jelly',
        'kahlua',
        'lime',
        'mango',
        'nyoromien',
        'orange',
        'plane',
        'quarantine',
        'range',
        'steve',
        'turing',
        'uranus',
        'voldemort',
        'watermelon',
        'xenomorph',
        'yucatan',
        'zealot'
      ],
      items: []
    };
  },
  componentWillMount: function() {
    this.setState({items: this.state.initialItems});
  },
  render: function() {
    return (
      <div className='filtered-list'>
        <input type='text' placeholder='Search' onChange={this.filterList} />
        <DisplayList items={this.state.items}/>
      </div>
    );
  },
  filterList: function(event) {
    var updatedList = this.state.initialItems;
    updatedList = updatedList.filter(function(item) {
      return item.toLowerCase().search( event.target.value.toLowerCase() ) !== -1;
    });
    this.setState({items: updatedList});
  }
});
var DisplayList = React.createClass({
  render: function() {
    return (
      <ul>
        {
          this.props.items.map(function(item) {
            return <li key={item}>{item}</li>
          })
        }
      </ul>
    );
  }
});

var ButtonHolder = React.createClass({
  getInitialState: function() {
    return {
      content: ''
    };
  },
  componentWillMount: function() {
    this.setState({content: this.state.content});
  },
  serverPost: function() {
    var xmlHttp = new XMLHttpRequest();
    var shadowThis = this;  // cross-browser alternative t0 ...
    // xmlHttp.onreadystatechange = () => {...}
    xmlHttp.onreadystatechange = function () {
      if( xmlHttp.readyState == 4 && xmlHttp.status == 200 ) {
        shadowThis.setState({content: xmlHttp.responseText});
        console.log('used shadowThis!!');
      }
      else {
        console.log('HTTP response status: ' + xmlHttp.status);
      }
    }
    xmlHttp.open('POST', '/testPost');
    xmlHttp.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xmlHttp.send(JSON.stringify({foo: "bar"}));
  },
  render: function() {
    if (!this.state.content || this.state.content == '') {
      return (
        <div>
          No content<br/>
          <button onClick={this.serverPost}>Touch Server</button>
        </div>
      );
    }
    return (
      <div>
        Content: {this.state.content}<br/>
        <button onClick={this.serverPost}>Touch Server</button>
      </div>
    );
  }
});

ReactDOM.render(
  <HelloWorldComponent name='Cruel World' />,
  document.getElementById('welcome-point')
);
ReactDOM.render(
  <StateComponent/>,
  document.getElementById('state-point')
);
ReactDOM.render(
  <FilteredList/>,
  document.getElementById('list-point')
);
ReactDOM.render(
  <ButtonHolder/>,
  document.getElementById('button-point')
);

*/
