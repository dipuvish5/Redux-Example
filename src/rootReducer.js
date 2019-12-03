import { combineReducers } from "redux";
import products from "./productReducer";
import incr from "./incrementReducer";

export default combineReducers({
  products,
  incr
});
