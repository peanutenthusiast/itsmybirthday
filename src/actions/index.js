import axios from 'axios';
import { FETCH_EVENTS, FETCH_CITY } from './types';

export const fetchEvents = (city = "", q = "") => async dispatch => {
  let options = {params: {}}

  if (city.length > 0) {
    options.params.city = city; 
  }

  if (q.length > 0) {
    options.param.q = q;
  }

  const res = await axios.get('https://gentle-tor-30343.herokuapp.com/events', options);
  
  dispatch({type: FETCH_EVENTS, payload: res});
}
 
export const fetchCity = () => async dispatch => {
  const res = await axios.get('https://ipapi.co/json');
    
  dispatch({type: FETCH_CITY, payload: res.data.city});

};
 