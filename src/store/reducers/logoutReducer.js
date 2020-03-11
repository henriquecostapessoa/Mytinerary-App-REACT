import { FETCH_LOGOUTS, NEW_LOGOUT } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_LOGOUTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}