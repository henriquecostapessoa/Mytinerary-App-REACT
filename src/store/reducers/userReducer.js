import { FETCH_REGISTRATIONS } from '../actions/types';

const initialState = {
    items: [],
    item: {},
};

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
};