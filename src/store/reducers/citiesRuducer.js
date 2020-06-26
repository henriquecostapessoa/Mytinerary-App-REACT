import { FETCH_CITIES, GET_ONE_CITY } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_CITIES:
            return {
                ...state,
                items: action.payload
            }
        case GET_ONE_CITY:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
};