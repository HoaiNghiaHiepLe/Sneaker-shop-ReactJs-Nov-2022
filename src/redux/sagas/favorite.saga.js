import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import {
  FAVORITE_ACTION,
  PRODUCT_ACTION,
  REQUEST,
  SUCCESS,
  FAIL,
} from "../constants";

function* favoriteProductSaga(action) {
  try {
    // const { productId } = action.payload;
    const result = yield axios.post(
      "http://localhost:4000/favorites",
      action.payload
    );
    yield put({
      type: SUCCESS(FAVORITE_ACTION.FAVORITE_PRODUCT),
      payload: {
        data: result.data,
      },
    });
    // yield put({
    //   type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
    //   payload: { id: productId },
    // });
  } catch (e) {
    yield put({
      type: FAIL(FAVORITE_ACTION.FAVORITE_PRODUCT),
      payload: {
        error: "Fail!",
      },
    });
  }
}

function* unFavoriteProductSaga(action) {
  try {
    const { id, productId } = action.payload;
    yield axios.delete(`http://localhost:4000/favorites/${id}`);
    yield put({
      type: SUCCESS(FAVORITE_ACTION.UN_FAVORITE_PRODUCT),
      payload: {
        id: id,
      },
    });
    // yield put({
    //   type: REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL),
    //   payload: { id: productId },
    // });
  } catch (e) {
    yield put({
      type: FAIL(FAVORITE_ACTION.UN_FAVORITE_PRODUCT),
      payload: {
        error: e.response.data,
      },
    });
  }
}

function* getFavoriteListSaga(action) {
  try {
    const result = yield axios.get("http://localhost:4000/favorites");
    yield put({
      type: SUCCESS(FAVORITE_ACTION.GET_FAVORITE_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(FAVORITE_ACTION.GET_FAVORITE_LIST),
      payload: {
        error: e.response.data,
      },
    });
  }
}

export default function* favoriteSaga() {
  yield takeEvery(
    REQUEST(FAVORITE_ACTION.FAVORITE_PRODUCT),
    favoriteProductSaga
  );
  yield takeEvery(
    REQUEST(FAVORITE_ACTION.UN_FAVORITE_PRODUCT),
    unFavoriteProductSaga
  );
  yield takeEvery(
    REQUEST(FAVORITE_ACTION.GET_FAVORITE_LIST),
    getFavoriteListSaga
  );
}
