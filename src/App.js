import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import EventsList from './components/EventsList';

class App extends Component {


  render() {
    return (
      <div className="App">
        <SearchBar />
        <EventsList />
      </div>
    );
  }
}

export default App;