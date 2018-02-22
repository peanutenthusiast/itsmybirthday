import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from './Event';

class EventsList extends Component{
  renderEvents() {
    const {events} = this.props;

    return events.map((e) => {
      return(
        <Event
          key={e.id}
          name={e.name.text}
          image={e.logo.url}
          url={e.url}
          date={e.start.local}
        />
      )
    })
  }

  render() {
    return (
      <div className="event-list">
        {this.renderEvents()}
      </div>
    )
  }
}

function mapStateToProps({events}) {
  return {events};
}

export default connect(mapStateToProps)(EventsList);

