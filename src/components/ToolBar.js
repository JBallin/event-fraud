import React from 'react';

export default props => {

  function setCheck(selected) {
    if (selected === 'none') {
      return '';
    } else if (selected === 'some') {
      return 'minus-';
    } else if (selected === 'all') {
      return 'check-';
    } else {
      throw new Error('Selected should be none, some, or all');
    }
  }

  return (
    <div className="row toolbar">
      <div className="col-md-12">
        <p className="pull-right">
          <span className="badge badge">2</span>
          unread messages
        </p>

        <button className="btn btn-default">
          <i className={`fa fa-${setCheck(props.selected)}square-o`}></i>
        </button>

        <button className="btn btn-default">
          Mark As Read
        </button>

        <button className="btn btn-default">
          Mark As Unread
        </button>

        <select className="form-control label-select">
          <option>Apply label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <select className="form-control label-select">
          <option>Remove label</option>
          <option value="dev">dev</option>
          <option value="personal">personal</option>
          <option value="gschool">gschool</option>
        </select>

        <button className="btn btn-default">
          <i className="fa fa-trash-o"></i>
        </button>
      </div>
    </div>
  )
}
