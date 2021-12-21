import { put, takeEvery } from "redux-saga/effects";
import {
  GetProductAction,
  getProductSuccess,
  GET_PRODUCT,
  SearchProductAction,
  searchProductSuccess,
  SEARCH_PRODUCT,
} from "../actions/product.action";
import axios from "axios";
import { API } from "../../config";
import { Product } from "../models/product";

function* handleGetProduct({ sortBy, order, limit }: GetProductAction): any {
  let response = yield axios.get<Product[]>(`${API}/products`, {
    params: { sortBy, order, limit },
  });

  yield put(getProductSuccess(response.data, sortBy));
}

function* handleSearchProduct({
  payload: { search, category },
}: SearchProductAction): any {
  let response = yield axios.get<Product[]>(`${API}/products/search`, {
    params: {
      search,
      category,
    },
  });

  yield put(searchProductSuccess(response.data));
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct);
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct);
}