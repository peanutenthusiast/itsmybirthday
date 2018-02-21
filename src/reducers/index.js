import { combineReducers } from 'redux';

import eventsReducer from './eventsReducer';
import cityReducer from './cityReducer';

export default combineReducers({ 
  city: cityReducer,
  events: eventsReducer
})