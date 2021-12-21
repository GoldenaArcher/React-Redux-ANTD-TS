import { put, takeEvery } from "redux-saga/effects";
import {
  FilterProductAction,
  filterProductSuccess,
  FILTER_PRODUCT,
  getPoductByIdSuccess,
  GetProductAction,
  GetProductByIdAction,
  getProductSuccess,
  GET_PRODUCT,
  GET_PRODUCT_BY_ID,
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

function* handleFilterProduct(action: FilterProductAction): any {
  let response = yield axios.post(`${API}/products/filter`, action.payload);
  yield put(filterProductSuccess(response.data, action.payload.skip as number));
}

function* handleGetProductById({ payload }: GetProductByIdAction): any {
  let response = yield axios.get(`${API}/product/${payload.productId}`);
  yield put(getPoductByIdSuccess(response.data));
}

export default function* productSaga() {
  yield takeEvery(GET_PRODUCT, handleGetProduct);
  yield takeEvery(SEARCH_PRODUCT, handleSearchProduct);
  yield takeEvery(FILTER_PRODUCT, handleFilterProduct);
  yield takeEvery(GET_PRODUCT_BY_ID, handleGetProductById);
}
