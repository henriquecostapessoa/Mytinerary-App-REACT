import { FETCH_CITIES, NEW_CITY } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CITIES:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}