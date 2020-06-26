import { FETCH_CITIES, GET_ONE_CITY } from './types';

export const fetchCities = () => dispatch =>  {
    fetch('http://localhost:5000/cities/all')
        .then(response => response.json())
        .then(cities => 
            dispatch({
                type: FETCH_CITIES,
                payload: cities
            })
        )
};

export const fetchOneCity = (id) => dispatch =>  {
    fetch(`http://localhost:5000/cities/${id}`)
        .then(response => response.json())
        .then(cities => 
            dispatch({
                type: GET_ONE_CITY,
                payload: cities
            })
        )
};