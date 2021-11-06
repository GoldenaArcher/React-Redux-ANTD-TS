import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import authReducer, { AuthState } from "./auth.reducer";
// import testReducer from "./test.reducer";

export interface AppState {
  router: RouterState;
  auth: AuthState;
}

const createRootReaducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    // test: testReducer, temp test reducer
    auth: authReducer,
  });

export default createRootReaducer;
