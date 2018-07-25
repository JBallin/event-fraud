import React from 'react';

const isRead = message => message.read ? 'read' : 'unread';
const isSelected = message => message.selected ? 'selected' : '';

export default ({ message }) => {
  return (
    <div className={`row message ${isRead(message)} ${isSelected(message)}`}>
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
        <a href="#">{message.subject}</a>
      </div>
    </div>
  )
}
