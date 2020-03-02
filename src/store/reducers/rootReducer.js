import { combineReducers } from "redux";
import citiesReducer from "./citiesRuducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";

const rootReducer = combineReducers({cities: citiesReducer, itineraries: itineraryReducer, activities: activityReducer});

export default rootReducer;


