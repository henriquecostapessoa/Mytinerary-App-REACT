import { FETCH_REGISTRATIONS, NEW_REGISTRATION, LIKE_SCREAM, UNLIKE_SCREAM } from '../actions/types';

const initialState = {
    items: [],
    item: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_REGISTRATIONS:
            
            localStorage.setItem('token', action.payload.token); 
            return {
                ...state,
                items: action.payload
            }

        default:
            return state;
    }
}