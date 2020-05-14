import { REQUEST_COMMENTS, FETCH_COMMENTS, FAILURE_FETCHING_COMMENTS, CREATE_COMMENT, FAILURE_CREATE_COMMENT, DELETE_COMMENT} from './types';
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

/* export const fetchComments = (id) => {

    console.log("about get comments from the backend with fetch", id)

        return function (dispatch) {

            dispatch({type: REQUEST_COMMENTS})

            axios
                .get(`http://localhost:5000//itinerary/comments/${id}`, tokenConfig())
                .then(res => {
                    console.log(res);
                         
                        return dispatch({
                            type: FETCH_COMMENTS,
                            payload: res.data,
                            
                        })
                     } )
            .catch(err => {
                dispatch(returnErrors(err.response.data, err.response.status, 'FAILURE_FETCHING_COMMENTS'));
                dispatch({
                    type: FAILURE_FETCHING_COMMENTS,
                    error: err.data
                })
            })

    }
};
 */
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

/* export const postComment = (newComment, id) => async(dispatch) => {

    console.log("about to send the new comment to the backend with fetch", newComment)

    // Request body

    const body = JSON.stringify(newComment);

    // Post request to API

    return await axios.post(`http://localhost:5000//itinerary/comments/${id}`, body, tokenConfig())

        .then(res => dispatch({
            type: CREATE_COMMENT,
            payload: res.data
        }))

        .catch(err => {
            dispatch({
                type: FAILURE_CREATE_COMMENT
            })
        })
} */

// ACTION TO DELETE A COMMENT

export const deleteComment = comment => async(dispatch) => {

    console.log("about to delete comment:", comment)

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

    return await axios.delete(`http://localhost:5000/activities/itinerary/comments/${comment}`, config)

    .then(comment => dispatch({
        type: DELETE_COMMENT,
        payload: comment
        }))

    .catch(err =>
        dispatch(returnErrors(err.response.data, err.response.status))
    );
};