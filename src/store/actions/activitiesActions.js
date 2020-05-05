import { FETCH_ACTIVITIES } from './types';

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
