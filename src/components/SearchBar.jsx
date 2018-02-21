import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchEvents } from '../actions/index';

class SearchBar extends Component{
  constructor(props) {
    super(props);

    this.state = {q: ''};
  }

  render() {
    return (
      <input
        placeholder="What's your mood?"
        className="form-control"
        value={this.state.q}
      />
    )
  }
}

export default SearchBar;