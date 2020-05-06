import { FETCH_ITINERARIES } from './types';

export const fetchItineraries = (id) => dispatch =>  {

    
    fetch(`http://localhost:5000/itineraries/${id}`)
        .then(response => response.json())
        .then(itineraries =>
            dispatch({
                type: FETCH_ITINERARIES,
                payload: itineraries
            }) 
        )
};

/* export const fetchComments = (body, itinerary) => async dispatch => {
  
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
    const res = await axios.get(`http://localhost:5000/activities/${itinerary}/comments`, body, config)
    console.log(res)
    dispatch({
      type: FETCH_COMMENTS,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
  };

  export const postComment = (body) => async dispatch => {
  
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
    const res = await axios.post(`http://localhost:5000/activities/itinerary/comments`, body, config)
    console.log(res)
    dispatch({
      type: CREATE_COMMENT,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
  };

  export const deleteComment = (body, comment) => async dispatch => {
  
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
    const res = await axios.delete(`http://localhost:5000/activities/itinerary/comments/${comment}`, body, config)
    
    dispatch({
      type: DELETE_COMMENT,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
  }; */
 
  
