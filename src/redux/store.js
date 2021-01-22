import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import axios from "axios";
import allReducers from "./reducers/";
import loggingMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

export default createStore(
  allReducers,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({ axios }),
      loggingMiddleware
    )
  )
);
