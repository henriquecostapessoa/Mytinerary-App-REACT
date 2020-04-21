import { FETCH_LOGINS, FETCH_LOAD_LOGIN, FETCH_DELETE_FAVORITE, FETCH_ADD_FAVORITE, NEW_LOGIN } from './types';
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

export const deletefavorite = (body) => async dispatch => {
  
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
  const res = await axios.post("http://localhost:5000/user/fav/delete", config, body)
  console.log(res.data)
  dispatch({
    type: FETCH_DELETE_FAVORITE,
    payload: res.data
  })
} catch (err) {
  console.log(err.message)
}
}

export const addfavorite = (body) => async dispatch => {
  const body = JSON.stringify(body)
  fetch("http://localhost:5000/user/fav/add", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `bearer ${localStorage.token}`
    },
    body
  })
  .then (res => res.json())
  .then (response => dispatch({
    type: FETCH_ADD_FAVORITE,
    payload: response.data
  }))
  .catch(err => console.log(err))
}

/* export const addfavorite = (body) => async dispatch => {
  
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
console.log(config)
try {
  const res = await axios.post("http://localhost:5000/user/fav/add", config, body)
  console.log(res.data)
  dispatch({
    type: FETCH_ADD_FAVORITE,
    payload: res.data
  })
} catch (err) {
  console.log(err.message)
}
} */

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