import { combineReducers } from "redux";
import citiesReducer from "./citiesRuducer";
import itineraryReducer from "./itineraryReducer";
import activityReducer from "./activityReducer";
import userReducer from "./userReducer";
import likeButtonReducer from "./likeButtonReducer";
import loginReducer from "./loginReducer"

const rootReducer = combineReducers({login: loginReducer, favorites: likeButtonReducer, cities: citiesReducer, itineraries: itineraryReducer, activities: activityReducer, users: userReducer, });

export default rootReducer;


