import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchBar from './components/SearchBar';

import * as actions from './actions';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SearchBar />
      </div>
    );
  }
}



export default connect(null, actions)(App);
