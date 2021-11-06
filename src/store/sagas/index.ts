import { all } from "@redux-saga/core/effects";
import authSaga from "./auth.saga";

export default function* roogSaga() {
  yield all([authSaga]);
}
