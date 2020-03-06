import { put, call, takeLatest } from "redux-saga/effects";

import { getBerriesApiCall } from "../api";
import {
  GET_BERRIES_COMPLETE,
  GET_BERRIES_ERROR,
  GET_BERRIES_START
} from "../constants/actionTypes";

function* getBerries() {
  try {
    const result = yield call(getBerriesApiCall);
    yield put({ type: GET_BERRIES_COMPLETE, result });
  } catch (error) {
    yield put({ type: GET_BERRIES_ERROR, error });
  }
}

export default function* berries() {
  yield takeLatest(GET_BERRIES_START, getBerries);
}
