import { FETCH_LOGINS, NEW_LOGIN } from '../actions/types';

const initialState = {
    items: [],
    item: {},
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGINS:
            localStorage.setItem('token', action.payload.token); 
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}