import { FETCH_LOGOUTS, NEW_LOGOUT } from './types';
import axios from "axios"

export const fetchLogouts = newUser  => async dispatch => {
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      console.log(newUser)
      const res = await axios.post('http://localhost:5000/logout', newUser, config);
  
      dispatch({
        type: FETCH_LOGOUTS,
        payload: res.data
      });
    } catch (err) {
        console.log(err.message)
  
    }
  };