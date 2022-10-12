import { createStore, combineReducers, applyMiddleware } from "redux";

import userReducer from "./userReducer";

import logger from "redux-logger";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  user: userReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger, thunk));

export default store;
