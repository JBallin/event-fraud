import React from 'react';
import Label from './Label'

const isPending = event => event.fraud === null ? 'unread' : 'read';
const setThumb = event => {
  if (event.fraud === null) return 'question';
  if (event.fraud === true) return 'thumbs-down';
  if (event.fraud === false) return 'thumbs-up';
}

export default ({ event, toggleFraud }) => {
  return (
    <div className={`row event ${isPending(event)}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <i className={`fa fa-${setThumb(event)}`} onClick={() => toggleFraud(event)}></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <Label label={event.prob} />
        <a href="#">{event.title}</a>
      </div>
    </div>
  )
}
