import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';

class App extends Component {

  state = {
    events: []
  }

  componentDidMount = async () => {
    const eventsJSON = await fetch('http://10.3.34.145:8080/api/v1/getdata?page=1');
    const eventsUnfiltered = await eventsJSON.json();
    const randProbs = [];
    for (let i = 0; i < 10; i++) {
      randProbs.push(Math.floor((Math.random() * 100) + 1))
    }
    const events = eventsUnfiltered.map((event, i) => ({ id: event._id, title: event.name, fraud: null, prob: randProbs[i] }))
    this.setState({...this.state, events});
  }

  toggleFraud = async (event) => {
    if (event.fraud === null) {
      event.fraud = true
    } else if (event.fraud === true) {
      event.fraud = false
    } else {
      event.fraud = null
    }
    await fetch(`http://localhost:8082/events/${event.id}`, {
      method: "PATCH",
      body: JSON.stringify(event)
    })
    this.setState({})
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
