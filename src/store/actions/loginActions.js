import { FETCH_LOGINS, FETCH_LOAD_LOGIN, FETCH_DELETE_LOGIN, FETCH_ADD_LOGIN, NEW_LOGIN } from './types';
import axios from "axios"
import setToken from "../../utilities/setToken"

export const fetchloadlogin = () => async dispatch => {
  
  if(localStorage.token) {
  setToken(localStorage.token)
  }
  const token = localStorage.token;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `bearer ${token}`
    }
  };

try {
  const res = await axios.get("http://localhost:5000/user/userId", config)
  console.log(res.data)
  dispatch({
    type: FETCH_LOAD_LOGIN,
    payload: res.data
  })
} catch (err) {
  console.log(err.message)
}
}

export const deletefavorite = () => async dispatch => {
  
  if(localStorage.token) {
  setToken(localStorage.token)
  }
  const token = localStorage.token;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `bearer ${token}`
    }
  };

try {
  const res = await axios.post("http://localhost:5000/user/id/delete", config)
  console.log(res.data)
  dispatch({
    type: FETCH_DELETE_LOGIN,
    payload: res.data
  })
} catch (err) {
  console.log(err.message)
}
}

export const addfavorite = () => async dispatch => {
  
  if(localStorage.token) {
  setToken(localStorage.token)
  }
  const token = localStorage.token;
  
  const config = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `bearer ${token}`
    }
  };

try {
  const res = await axios.post("http://localhost:5000/user/id/add", config)
  console.log(res.data)
  dispatch({
    type: FETCH_ADD_LOGIN,
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
      dispatch(fetchloadlogin())
    } catch (err) {
        console.log(err.message)
  
    }
  };