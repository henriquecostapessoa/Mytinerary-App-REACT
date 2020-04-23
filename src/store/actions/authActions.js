import { FETCH_GOOGLELOGINS } from './types';
import axios from "axios"

export const fetchGoogleLogins = newUser  => async dispatch => {
    
    const config = {
      headers: {
        'Content-Type': 'application/json'
      }
    };
  
    try {
      console.log(newUser)
     
      const res = await axios.post('http://localhost:5000/login', newUser, config);
  
      dispatch({
        type: FETCH_GOOGLELOGINS,
        payload: res.data
      });
    } catch (err) {
        console.log(err.message)
  
    }
  };