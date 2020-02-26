import { combineReducers } from "redux";
import citiesReducer from "./citiesRuducer";
const rootReducer = combineReducers({cities: citiesReducer});
export default rootReducer;