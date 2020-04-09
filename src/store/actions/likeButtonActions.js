/* import { FETCH_FAVORITES, NEW_FAVORITE } from './types';
import axios from "axios"

      export const fetchFavorites = async dispatch => {
  
        const config = {
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlN2UxMWExYWZlMDQ5MmY1NGEwYjgyYiIsInVzZXJuYW1lIjoiYW50b25pbyIsInBpY3R1cmUiOiJzZ3NnYWd3Z3dnIiwiaWF0IjoxNTg1NjA2ODQwLCJleHAiOjE1ODgxOTg4NDB9.4gP2EZ3RgCoAftP00_2BtIWSG2jacq6uBDVhBcdAiAw"
          }
        };


        try {
          
          const res = await axios.get('http://localhost:5000/user/userId/', config);
      
          dispatch({
            type: FETCH_FAVORITES,
            payload: res.data
          });
        } catch (err) {
            console.log(err.message)
      
        }
      }; */

import { FETCH_FAVORITES, NEW_FAVORITE } from './types';

export const fetchFavorites = () => dispatch =>  {
    
  const token = localStorage.token;
  console.log(token)
  const config = {
    headers: {
      'Content-Type': 'application/json',
      "Authorization": `bearer ${token}`,
      'Access-Control-Allow-Origin': '*'
    }
  };


    fetch(`http://localhost:5000/user/userId`, config)
        .then(response => response.json())
        .then(favorites =>
            dispatch({
                type: FETCH_FAVORITES,
                payload: favorites
            }) 
        )
} 
