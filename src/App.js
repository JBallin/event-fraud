import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import Spinner from './components/Spinner';

const api = 'https://fraud-api.herokuapp.com/events'

class App extends Component {

  state = {
    events: [],
    loading: true
  }

  componentDidMount = async () => {
    const eventsJSON = await fetch(api);
    const events = await eventsJSON.json();
    setTimeout(() => this.setState({
      events: this.state.events.concat(events),
      loading: false
    }), 500)
  }

  toggleFraud = async (event) => {
    if (event.fraud === null) {
      event.fraud = true
    } else if (event.fraud === true) {
      event.fraud = false
    } else {
      event.fraud = null
    }
    await fetch(api + '/' + event.id, {
      headers: {  'Content-Type': 'application/json' },
      method: "PATCH",
      body: JSON.stringify(event)
    })
    this.setState({})
  }

  render() {
    return (
      <div className='container'>
        <h3>Fraud Monitor</h3>
        {
          this.state.loading ? <Spinner /> :
          <EventList
            events={this.state.events}
            toggleFraud={this.toggleFraud}
          />
        }
      </div>
    );
  }
}

export default App;
