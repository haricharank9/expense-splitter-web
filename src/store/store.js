import { combineReducers, compose, createStore } from "redux";
import * as reducerList from "./reducers/index";

const composeEnhancers =
  process.env.NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : null || compose;

const rootReducer = combineReducers({
  ldr: reducerList.loaderIndicatorReducer,
  auth: reducerList.authReducer,
});

const store = createStore(rootReducer, composeEnhancers());

export default store;
