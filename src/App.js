import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';

class App extends Component {

  state = {
    events: [
      {
        "id": 1,
        "title": "Superbowl Party",
        "fraud": null
      },
      {
        "id": 2,
        "title": "Fire Fest",
        "fraud": false
      },
      {
        "id": 3,
        "title": "Burning man prep",
        "fraud": true
      },
      {
        "id": 4,
        "title": "Basic JS Workshop",
        "fraud": false
      },
      {
        "id": 5,
        "title": "Smoldering Man",
        "fraud": false
      },
      {
        "id": 6,
        "title": "MAGA",
        "fraud": true
      },
      {
        "id": 7,
        "title": "Pool Party",
        "fraud": false
      },
      {
        "id": 8,
        "title": "How Weird SF",
        "fraud": null
      }
    ]
  }

  toggleFraud = (event) => {
    if (event.fraud === null) {
      event.fraud = true
    } else if (event.fraud === true) {
      event.fraud = false
    } else {
      event.fraud = null
    }
  }

  render() {
    return (
      <div className='container'>
        <h3>Fraud Monitor</h3>
        <EventList events={this.state.events} toggleFraud={this.toggleFraud} />
      </div>
    );
  }
}

export default App;
