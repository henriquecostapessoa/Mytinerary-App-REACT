import { FETCH_COMMENTS, CREATE_COMMENT, DELETE_COMMENT, UPDATE_COMMENT} from './types';
import {returnErrors} from './errorActions';
import axios from 'axios';
import setToken from "../../utilities/setToken";

// SETUP CONFIG/HEADERS AND TOKEN

export const tokenConfig = () => {

    // Get token from local storage

    if(localStorage.token) {
        setToken(localStorage.token)
        }
        const token = localStorage.token;

    // Headers

    const config = {
        headers: {
            'Content-Type': 'application/json',
        }
    }

    // If token, add to headers

    if(token) {
        config.headers['Authorization'] = `bearer ${token}`;
    }

    return config;
}


// ACTION TO FETCH COMMENTS

export const fetchComments = (id) => dispatch =>  {
    
    
    fetch(`http://localhost:5000/activities/itinerary/comments/${id}`)
        .then(response => response.json())
        .then(comments => 
            dispatch({
                type: FETCH_COMMENTS,
                payload: comments
            }) 
        )
};


// ACTION TO POST A NEW COMMENT

export const postComment = (text, id) => async dispatch => {
  
    const body = JSON.stringify({text})
console.log(id)
console.log(body)
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
      console.log("teste")
    const res = await axios.post(`http://localhost:5000/activities/itinerary/comments/add/${id}`, body, config)
    console.log(res.data)
     dispatch({
      type: CREATE_COMMENT,
      payload: res.data
    }) 
  } catch (err) {
    console.log(err.message)
  }
  };


// ACTION TO DELETE A COMMENT

export const deleteComment = id => async(dispatch) => {

    console.log("about to delete comment:", id)

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

    // Delete request to API

await axios.delete(`http://localhost:5000/activities/itinerary/comments/${id}`, config)

    .then(res => dispatch({
        type: DELETE_COMMENT,
        payload: res.data
        }))

    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
    );
};


export const updateComment = (text, id) => async dispatch => {
  
    const body = JSON.stringify({text})
console.log(id)
console.log(body)
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
      console.log("teste")
    const res = await axios.patch(`http://localhost:5000/activities/itinerary/comments/update/${id}`, body, config)
    console.log(res.data)
     dispatch({
      type: UPDATE_COMMENT,
      payload: res.data
    }) 
  } catch (err) {
    console.log(err.message)
  }
  };