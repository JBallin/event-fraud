import React from 'react'
import Event from './Event'

export default ({ events }) => {
  return events.map(event => <Event event={event} key={event.id} />)
}
