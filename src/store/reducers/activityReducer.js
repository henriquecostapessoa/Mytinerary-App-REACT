import { FETCH_ACTIVITIES, NEW_ACTIVITY } from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ACTIVITIES:
            return {
                ...state,
                items: action.payload
            }

        case NEW_ACTIVITY:
            return {
                ...state,
                item: action.payload
                }
        default:
            return state;
    }
};