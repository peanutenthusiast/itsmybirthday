import React, { Component } from 'react';


class Event extends Component {
  beautifyDate(date) {
    let startTime = new Date(date.local);

    return startTime.toLocaleDateString('en-US', {hour: 'numeric', timeZone: date.timeZone});
  }

  render() {
    const { name, image, url, dateObj } = this.props;

    const startTime = this.beautifyDate(dateObj);

    return ( 
      <div className="row">
        <div className="col s12 m6">
          <div className="card center-align">
            <div className="card-image responsive-image">
              <img src={image}/>
            </div>
            <div className='card-content'>
              <span className="card-title"><a href={url}>{name}</a></span>
              <p>{startTime}</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Event;