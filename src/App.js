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

  toggleFraud = (event) => {
    if (event.fraud === null) {
      event.fraud = true
    } else if (event.fraud === true) {
      event.fraud = false
    } else {
      event.fraud = null
    }
    this.setState({...this.state.events, event})
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
