import { FETCH_GOOGLELOGINS } from '../actions/types';

const initialState = {
    items: [],
    item: {},
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_GOOGLELOGINS:
            localStorage.setItem('token', action.payload.token); 
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
};