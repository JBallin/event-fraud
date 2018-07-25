import React from 'react';

const isRead = event => event.read ? 'read' : 'unread';
const isSelected = event => event.selected ? 'selected' : '';

export default ({ event }) => {
  return (
    <div className={`row event ${isRead(event)} ${isSelected(event)}`}>
      <div className="col-xs-1">
        <div className="row">
          <div className="col-xs-2">
            <input type="checkbox" />
          </div>
          <div className="col-xs-2">
            <i className="fa fa-thumbs-up"></i>
          </div>
        </div>
      </div>
      <div className="col-xs-11">
        <a href="#">{event.title}</a>
      </div>
    </div>
  )
}
