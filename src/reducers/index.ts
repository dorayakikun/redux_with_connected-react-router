import { connectRouter } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import { reducer as contactReducer } from "./contact";

export const reducer = (history: History) =>
  combineReducers({
    contact: contactReducer,
    form: formReducer,
    router: connectRouter(history)
  });
