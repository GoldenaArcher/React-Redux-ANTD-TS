import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import testReducer from "./test.reducer";

export interface AppState {
  router: RouterState;
}

const createRootReaducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    test: testReducer,
  });

export default createRootReaducer;
