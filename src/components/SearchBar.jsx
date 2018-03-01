import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents, fetchCity } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {q: ''};

    this.updateQ = this.updateQ.bind(this);
  }

  updateQ(e){
    const { value } = e.target;
    const { city, fetchEvents } = this.props;
    this.setState({q: e.target.value});
    fetchEvents(city, value);
  }

  componentDidMount() {
    this.props.fetchCity();
  }

  componentWillReceiveProps(nextProps) {
    const {city, fetchEvents} = nextProps;

    fetchEvents(city);
  }


  render() {
    return (
      <nav>
        <div className="nav-wrapper orange accent-2">
          <div className="input-field">
            <input 
              id="search" type="search" required
              className="black-text"
              placeholder="What's your mood?"
              className="form-control"
              value={this.state.q}
              onChange={this.updateQ}
            />
          </div>
        </div>
      </nav>
    )
  }
}

function mapStateToProps({city}) {
    return {city};
}

export default connect(
  mapStateToProps, {
    fetchCity,
    fetchEvents
  }
)(SearchBar);

