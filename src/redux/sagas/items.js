import { put, call, takeLatest } from "redux-saga/effects";
import { getItemsApiCall, getItemByIdApiCall } from "../api";
import {
  GET_ITEMS_COMPLETE,
  GET_ITEMS_ERROR,
  GET_ITEMS_START,
  GET_ITEM_BY_ID_START,
  GET_ITEM_BY_ID_ERROR,
  GET_ITEM_BY_ID_COMPLETE
} from "../constants/actionTypes";

function* getItems({ payload }) {
  try {
    const result = yield call(getItemsApiCall, payload);
    yield put({ type: GET_ITEMS_COMPLETE, result });
  } catch (error) {
    yield put({ type: GET_ITEMS_ERROR, error });
  }
}

function* getItemById({ payload }) {
  try {
    const result = yield call(getItemByIdApiCall, payload);
    yield put({ type: GET_ITEM_BY_ID_COMPLETE, result });
  } catch (error) {
    yield put({ type: GET_ITEM_BY_ID_ERROR, error });
  }
}

export default function* items() {
    return (
        yield takeLatest(GET_ITEMS_START, getItems),
        yield takeLatest(GET_ITEM_BY_ID_START, getItemById)
    )
}
