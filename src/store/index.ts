import { applyMiddleware, createStore } from "redux";
import createRootReaducer from "./reducers";
import { createHashHistory } from "history";
import { routerMiddleware } from "connected-react-router";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";
import logger from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

export const history = createHashHistory();

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  createRootReaducer(history),
  composeWithDevTools(
    applyMiddleware(routerMiddleware(history), logger, sagaMiddleware)
  )
);

// execute the saga middleware
sagaMiddleware.run(rootSaga);

export default store;
