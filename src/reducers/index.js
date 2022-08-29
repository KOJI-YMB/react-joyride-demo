import { combineReducers } from "redux";
import guideTour from "./guideTour";

export const rootReducer = combineReducers({
  UI: guideTour
})
