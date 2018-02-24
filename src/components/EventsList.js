import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './Event';

class EventsList extends Component{
  renderEvents() {
    const {events} = this.props;
    if (events.length > 0) {
      console.log(events);
      return events.map((event) => {
        return(
          <Event
            key={event.id}
            name={event.name.text}
            image={event.logo.url}
            url={event.url}
            startObj={event.start}
            endObj={event.end}
          />
        )
      })} else {
      return(
        <p>Loading...</p>
      )
    }
  }

  render() {
    return (
      <div className="event-list row">
        {this.renderEvents()}
      </div>
    )
  }
}

function mapStateToProps({events}) {
  return {events};
}

export default connect(mapStateToProps)(EventsList);

