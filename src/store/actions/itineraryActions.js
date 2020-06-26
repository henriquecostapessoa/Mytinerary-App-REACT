import { FETCH_ITINERARIES, NEW_ITINERARY } from './types';
import axios from "axios";
import setToken from "../../utilities/setToken";

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
  
export const additinerary = (body, id) => async dispatch => {

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
    const res = await axios.post(`http://localhost:5000/itineraries/${id}/add`, body, config)
    
    dispatch({
      type: NEW_ITINERARY,
      payload: res.data
    })
  } catch (err) {
    console.log(err.message)
  }
  };
