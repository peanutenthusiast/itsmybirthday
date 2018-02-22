import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEvents, fetchCity } from '../actions/index';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = {q: ''};

    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(e){
    const {fetchEvents, city} = this.props;

    this.setState({q: e.target.value});
    fetchEvents(city, this.state.q);
  }

  componentDidMount() {
    const {fetchCity, fetchEvents, city} = this.props;

    fetchCity();
    fetchEvents(city);
  }

  render() {
    return (
      <input
        placeholder="What's your mood?"
        className="form-control"
        value={this.state.q}
        onChange={this.onInputChange}
      />
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

