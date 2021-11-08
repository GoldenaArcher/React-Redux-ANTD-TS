import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
import { combineReducers } from "redux";
import authReducer, { AuthState } from "./auth.reducer";
import categoryReducer, { CategoryState } from "./category.reducer";
// import testReducer from "./test.reducer";

export interface AppState {
  router: RouterState;
  auth: AuthState;
  category: CategoryState;
}

const createRootReaducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    // test: testReducer, temp test reducer
    auth: authReducer,
    category: categoryReducer,
  });

export default createRootReaducer;
