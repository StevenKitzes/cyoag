var React = require('react');
var ReactDOM = require('react-dom');

// Hello World component: display a simple prop
var HelloWorldComponent = React.createClass({
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
        <h3 className='red-class'>Such and many count: {this.state.count}.</h3>
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
