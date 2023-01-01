import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authReducer";

let reducers = combineReducers({
  auth: authReducer,
});

let store = createStore(reducers);

export default store;