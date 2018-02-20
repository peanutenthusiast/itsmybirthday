import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './App';

const store = createStore(() => [], {}, applyMiddleWare());
ReactDOM.render(<App />, document.getElementById('root'));
