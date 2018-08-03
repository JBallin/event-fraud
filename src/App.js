import React, { Component } from 'react';
import './App.css';
import EventList from './components/EventList';
import Spinner from './components/Spinner';

const { host } = window.location;
const apiHost = host.includes('heroku') ? 'fraud-api.herokuapp.com' : 'localhost:8082';
const api = `http://${apiHost}/events`;

class App extends Component {

  state = {
    events: [],
    loading: true
  }

  componentDidMount = async () => {
    let events;
    const eventsJSON = await fetch(api);
    eventsJSON.json().then(data => events = data);
    setTimeout(() => {
      while (!events) {};
      this.setState({
        events: this.state.events.concat(events),
        loading: false
      })
    }, 500)
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
