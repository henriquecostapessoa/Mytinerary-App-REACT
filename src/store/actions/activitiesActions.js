import { FETCH_ACTIVITIES, NEW_ACTIVITY } from './types';
import axios from "axios";
import setToken from "../../utilities/setToken";

export const fetchActivities = (id) => dispatch =>  {
    
    
    fetch(`http://localhost:5000/activities/${id}`)
        .then(response => response.json())
        .then(activities => 
            dispatch({
                type: FETCH_ACTIVITIES,
                payload: activities
            }) 
        )
};

export const addactivity = (body, id) => async dispatch => {

    console.log(id)
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
      const res = await axios.post(`http://localhost:5000/activities/${id}/add`, body, config)
      
      dispatch({
        type: NEW_ACTIVITY,
        payload: res.data
      })
    } catch (err) {
      console.log(err.message)
    }
    };