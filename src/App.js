import React, { Component } from 'react';
import './App.css';
import ToolBar from './components/ToolBar';
import EventList from './components/EventList';

class App extends Component {

  state = {
    selected: 'none',
    events: [
      {
        "id": 1,
        "title": "Superbowl Party",
        "read": false,
        "fraud": true
      },
      {
        "id": 2,
        "title": "Fire Fest",
        "read": false,
        "fraud": false,
        "selected": true
      },
      {
        "id": 3,
        "title": "Burning man prep",
        "read": false,
        "fraud": true
      },
      {
        "id": 4,
        "title": "Basic JS Workshop",
        "read": true,
        "fraud": false,
        "selected": true
      },
      {
        "id": 5,
        "title": "Smoldering Man",
        "read": false,
        "fraud": false
      },
      {
        "id": 6,
        "title": "MAGA",
        "read": true,
        "fraud": true
      },
      {
        "id": 7,
        "title": "Pool Party",
        "read": true,
        "fraud": false
      },
      {
        "id": 8,
        "title": "How Weird SF",
        "read": true,
        "fraud": true
      }
    ]
  }

  render() {
    return (
      <div className='container'>
        <ToolBar selected={this.state.selected} />
        <EventList events={this.state.events} />
      </div>
    );
  }
}

export default App;
