import { applyMiddleware, createStore } from "redux";
import createRootReaducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";

export const history = createHashHistory();

const store = createStore(
  createRootReaducer(history),
  applyMiddleware(routerMiddleware(history))
);

export default store;
