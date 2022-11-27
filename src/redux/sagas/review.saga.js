import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import { REVIEW_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getReviewListSaga(action) {
  try {
    const { productId } = action.payload;
    const result = yield axios.get("http://localhost:4000/reviews", {
      params: {
        productId: productId,
        _expand: "user",
        _sort: "id",
        _order: "desc",
      },
    });
    yield put({
      type: SUCCESS(REVIEW_ACTION.GET_REVIEW_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(REVIEW_ACTION.GET_REVIEW_LIST),
      payload: {
        error: "Fail!",
      },
    });
  }
}

function* postReviewSaga(action) {
  try {
    const { productId } = action.payload;
    const result = yield axios.post(
      "http://localhost:4000/reviews",
      action.payload
    );
    yield put({
      type: SUCCESS(REVIEW_ACTION.POST_REVIEW),
      payload: {
        data: result.data,
      },
    });
    yield put({
      type: REQUEST(REVIEW_ACTION.GET_REVIEW_LIST),
      payload: {
        productId: productId,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(REVIEW_ACTION.POST_REVIEW),
      payload: {
        error: e.response.data,
      },
    });
  }
}

export default function* reviewSaga() {
  yield takeEvery(REQUEST(REVIEW_ACTION.GET_REVIEW_LIST), getReviewListSaga);
  yield takeEvery(REQUEST(REVIEW_ACTION.POST_REVIEW), postReviewSaga);
}
