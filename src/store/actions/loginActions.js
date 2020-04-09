import { FETCH_LOGINS, FETCH_LOAD_LOGIN, NEW_LOGIN } from './types';
import axios from "axios"
import setToken from "../../utilities/setToken"

export const fetchloadlogin = user => async dispatch => {
  if(localStorage.token) {
  setToken(localStorage.token)
  }
  const token = localStorage.token;
  console.log(token)
  const config = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `bearer ${token}`
    }
  };

try {
  const res = await axios.get("http://localhost:5000/user/userId", user, config)
  console.log(res)
  dispatch({
    type: FETCH_LOAD_LOGIN,
    payload: res.data
  })
} catch (err) {
  console.log(err.message)
}
}

export const fetchLogins = newUser  => async dispatch => {
    
  
    const config = {
      headers: {
        'Content-Type': 'application/json',
      }
    };
  
    try {
      console.log(newUser)
     
      const res = await axios.post('http://localhost:5000/login', newUser, config);
  console.log(res.data)
      dispatch({
        type: FETCH_LOGINS,
        payload: res.data
      });
    } catch (err) {
        console.log(err.message)
  
    }
  };