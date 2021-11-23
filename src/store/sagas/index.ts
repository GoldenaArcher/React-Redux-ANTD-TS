import { all } from "redux-saga/effects";
import authSaga from "./auth.saga";
import categorySaga from "./category.saga";
import productSata from './product.saga'

export default function* rootSaga() {
  yield all([authSaga(), categorySaga(), productSata()]);
}
