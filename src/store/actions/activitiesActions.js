import { FETCH_ACTIVITIES, NEW_ACTIVITY } from './types';

export const fetchActivities = (id) => dispatch =>  {
    console.log(id)
    
    fetch(`http://localhost:5000/activities/${id}`)
        .then(response => response.json())
        .then(activities => 
            dispatch({
                type: FETCH_ACTIVITIES,
                payload: activities
            }) 
        )
}
