import { FETCH_FAVORITES, NEW_FAVORITE } from './types';
import axios from "axios"

      export const fetchFavorites = async dispatch => {
  
        const config = {
          headers: {
            'Content-Type': 'application/json'
          }
        };


        try {
          
          const res = await axios.get('http://localhost:5000/user/userId', config);
      
          dispatch({
            type: FETCH_FAVORITES,
            payload: res.data
          });
        } catch (err) {
            console.log(err.message)
      
        }
      };
