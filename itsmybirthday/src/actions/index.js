import axios from 'axios';
import { FETCH_EVENTS, FETCH_CITY } from './types';

export const fetchEvents = () => async dispatch => {
  const res = await axios.get('localhost:3000/events');
  
  dispatch({type: FETCH_EVENTS, payload: res.eventsList});
}
 
export const fetchCity = () => async dispatch => {
  const res = await axios.get('https://ipapi.co/json');
    
  dispatch({type: FETCH_CITY, payload: res.data.city});

};
 