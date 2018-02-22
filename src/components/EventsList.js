import React, { Component } from 'react';
import { connect } from 'react-redux';
import Event from '.Event';

class EventsList extends Component{


  render() {
    return (
      <div className="event-list">
        {this.props.events.map((event) => {
          return (
            <Event
              key={event.id}
              name={event.name.text}
              url={event.url}
              date={event.start.local}
            />
          )
        })}
      </div>
    )
  }
}

function mapStateToProps({events}) {
    return {events};
}

export default connect(mapStateToProps)(SearchBar);

