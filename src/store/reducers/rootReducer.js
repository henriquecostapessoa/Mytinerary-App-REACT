import { combineReducers } from "redux";
import citiesReducer from "./citiesRuducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import userReducer from "./userReducer";

const rootReducer = combineReducers({cities: citiesReducer, itineraries: itineraryReducer, activities: activityReducer, users: userReducer});

export default rootReducer;


