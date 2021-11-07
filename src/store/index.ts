import { applyMiddleware, createStore } from "redux";
import createRootReaducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import logger from "redux-logger";

export const history = createHashHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReaducer(history),
  applyMiddleware(routerMiddleware(history), logger, sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

export default store;
