import React from 'react'
import Event from './Event'

export default ({ events, toggleFraud }) => {
  return events.map(event => <Event event={event} key={event.id} toggleFraud={toggleFraud} />)
}
