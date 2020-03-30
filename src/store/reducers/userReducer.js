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
        case LIKE_SCREAM:
            return {
                ...state,
                likes: [
                    ...state.likes,
                    {
                        userHandle: state.credentials.handle,
                        screamId: action.payload.screamId
                    }
                ]
            }    
        case UNLIKE_SCREAM:
            return {
                ...state,
                likes: state.likes.filter(
                    (like) => like.screamId === action.payload.screamId)
            }
        default:
            return state;
    }
}