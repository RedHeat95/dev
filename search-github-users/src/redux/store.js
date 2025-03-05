import { combineReducers } from "redux";
import { legacy_createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import { usersReducer } from "./reducers/usersReducer";
import { reposReducer } from "./reducers/reposReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  repos: reposReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
