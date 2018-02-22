import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import EventsList from './components/EventsList';
import css from './App.css';

class App extends Component {


  render() {
    return (
      <div className="container valign-wrapper">
        <SearchBar />
        <EventsList />
      </div>
    );
  }
}

export default App;