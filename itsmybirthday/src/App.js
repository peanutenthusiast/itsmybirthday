import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header } from './components/Header';
import { Home } from './components/Home';

import * as actions from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchCity();
  }
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Header />
            <Route path="/" component={Home} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
