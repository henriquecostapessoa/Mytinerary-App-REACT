import { FETCH_REGISTRATIONS } from './types';
import axios from "axios"

      export const fetchRegistrations = newUser  => async dispatch => {
  
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };


        try {
          console.log(newUser)
          
          const res = await axios.post('http://localhost:5000/user', newUser, config);
      
          dispatch({
            type: FETCH_REGISTRATIONS,
            payload: res.data
          });
        } catch (err) {
            console.log(err.message)
      
        }
      };