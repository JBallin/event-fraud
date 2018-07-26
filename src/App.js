import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';

class App extends Component {

  state = {
    events: []
  }

  componentDidMount = async () => {
    const eventsJSON = await fetch('http://localhost:8082/events');
    const events = await eventsJSON.json();
    this.setState({...this.state.events, events});
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
