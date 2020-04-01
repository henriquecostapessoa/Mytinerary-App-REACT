import { FETCH_FAVORITES, NEW_FAVORITE } from '../actions/types';

const initialState = {
    items: [],
    item: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_FAVORITES:
            return {
                ...state,
                items: action.payload
            }
            
        default:
            return state;
    }
}