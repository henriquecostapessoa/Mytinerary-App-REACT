import { FETCH_CITIES } from './types';

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
