import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './Event';

class EventsList extends Component{
  renderEvents() {
    const {events} = this.props;

    if (events.length > 0) {
      return events.map((e) => {
        return(
          <Event
            key={e.id}
            name={e.name.text}
            image={e.logo.url}
            url={e.url}
            startObj={e.start}
            endObj={e.end}
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

