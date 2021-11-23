import { put, takeEvery } from "redux-saga/effects";
import {
  GetProductAction,
  getProductSuccess,
  GET_PRODUCT,
} from "../actions/product.action";
import axios, { AxiosResponse } from "axios";
import { API } from "../../config";
import { Product } from "../models/product";

function* handleGetProduct({ sortBy, order, limit }: GetProductAction): any {
  let response = yield axios.get<Product[]>(`${API}/products`, {
    params: { sortBy, order, limit },
  });

  try {
    yield put(getProductSuccess(response.data, sortBy));
  } catch (error) {}
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct);
}
