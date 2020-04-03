import { FETCH_LOGINS, NEW_LOGIN } from './types';
import axios from "axios"

export const fetchLogins = newUser  => async dispatch => {
    
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
  
    try {
      console.log(newUser)
     
      const res = await axios.post('http://localhost:5000/login', newUser, config);
  
      dispatch({
        type: FETCH_LOGINS,
        payload: res.data
      });
    } catch (err) {
        console.log(err.message)
  
    }
  };