import { combineReducers } from "redux";
import { cartReducer } from "./redux/reducer/reducer";
import { createStore } from "redux";

const store=createStore(combineReducers({
    cartReducer
}))
export default store;