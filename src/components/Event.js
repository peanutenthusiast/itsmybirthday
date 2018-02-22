import React, { Component } from 'react';

class Event extends Component {
  beautifyDate(date) {
    let startTime = new Date(date);

    return startTime.toLocaleDateString();
  }

  render() {
    const { name, image, url, date } = this.props;
    const startTime = this.beautifyDate(date);

    return ( 
      <div className="col-md-3">
        <h4><a href={url}>{name}</a></h4>

        <div className="embed-responsive embed-responsive-16by9">
            <img src={image} type="event/jpg" />
        </div>
        <div className="Event-info">
          <p>Starts time: {startTime}</p>
        </div>
      </div>
    )
  }
}

export default Event;