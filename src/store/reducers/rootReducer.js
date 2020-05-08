import { combineReducers } from "redux";
import citiesReducer from "./citiesRuducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import userReducer from "./userReducer";
import loginReducer from "./loginReducer";
import commentsReducer from "./commentsReducer";

const rootReducer = combineReducers({login: loginReducer, cities: citiesReducer, itineraries: itineraryReducer, activities: activityReducer, users: userReducer, comments: commentsReducer });

export default rootReducer;