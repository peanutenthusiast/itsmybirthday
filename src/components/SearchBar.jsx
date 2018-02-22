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
    
    const { q } = this.state;

    if (q.length > 0) {
      fetchEvents(city, q);
    }
  }

  componentDidMount() {
    this.props.fetchCity();
  }

  componentDidUpdate() {
    const {city, fetchEvents} = this.props;
    fetchEvents(city);
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <form>
            <div className="input-field">
              <input 
                id="search" type="search" required 
                placeholder="What's your mood?"
                className="form-control"
                value={this.state.q}
                onChange={this.onInputChange}
              />
            </div>
          </form>
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

