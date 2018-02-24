import React, { Component } from 'react';


class Event extends Component {
  beautifyDate(date) {
    let time = new Date(date.local);

    return time.toLocaleDateString('en-US', {hour: 'numeric', timeZone: date.timeZone});
  }

  render() {
    const { name, image, url, startObj, endObj } = this.props;

    const startTime = this.beautifyDate(startObj);
    const endTime = this.beautifyDate(endObj);

    return ( 
        <div className="col s12 m4">
          <div className="card hoverable">
            <div className="card-image responsive-image">
              <img src={image}/>
            </div>
            <div className='card-content'>
              <h4 className="card-title truncate"><a href={url}>{name}</a></h4>
              <p>{startTime}-{endTime}</p>
            </div>
          </div>
        </div>
    )
  }
}

export default Event;