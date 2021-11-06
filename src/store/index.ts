import { applyMiddleware, createStore } from "redux";
import createRootReaducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./sagas";

export const history = createHashHistory();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReaducer(history),
  applyMiddleware(routerMiddleware(history), sagaMiddleware)
);

sagaMiddleware.run(rootSaga)

export default store;
