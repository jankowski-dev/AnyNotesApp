import { combineReducers, legacy_createStore as createStore } from "redux";
import { authReducer } from "./reducers/authReducer";
import { modalReducer } from "./reducers/modalReducer";

let reducers = combineReducers({
  modal: modalReducer,
  auth: authReducer,
});

let store = createStore(reducers);

export default store;