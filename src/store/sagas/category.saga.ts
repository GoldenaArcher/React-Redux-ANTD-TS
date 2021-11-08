import { put, takeEvery } from "@redux-saga/core/effects";
import axios from "axios";
import { API } from "../../config";
import { getCategorySuccess, GET_CATEGORY } from "../actions/category.action";
import { Category } from "../models/category";

function* handleGetCategory(): any {
  try {
    let response = yield axios.get<Category[]>(`${API}/categories`);
    yield put(getCategorySuccess(response.data));
  } catch (error) {}
}

export default function* categorySaga() {
  // 获取分类列表
  yield takeEvery(GET_CATEGORY, handleGetCategory);
}
