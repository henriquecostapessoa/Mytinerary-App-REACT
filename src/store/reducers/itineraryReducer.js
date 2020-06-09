import { FETCH_ITINERARIES, NEW_ITINERARY} from '../actions/types';

const initialState = {
    items: [],
    item: {}
};

export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_ITINERARIES:
            return {
                ...state,
                items: action.payload
            }
        case NEW_ITINERARY:
            return {
                ...state,
                items: action.payload
                }

        default:
            return state;
    }
};

