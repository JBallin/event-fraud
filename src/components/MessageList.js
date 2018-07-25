import React from 'react'
import Message from './Message'

export default ({ messages }) => {
  return messages.map(message => <Message message={message} key={message.id} />)
}
