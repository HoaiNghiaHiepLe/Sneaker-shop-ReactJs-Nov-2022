import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";
import { CATEGORY_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getCategoryListSaga(action) {
  try {
    const { params, more } = action.payload;
    const result = yield axios.get("http://localhost:4000/categories", {
      params: {
        _page: params.page,
        _limit: params.limit,
        ...(params.keyword && {
          q: params.keyword,
        }),
        ...(params.order && {
          _sort: params.order.split(".")[0],
          _order: params.order.split(".")[1],
        }),
        _embed: ["products"],
      },
    });
    yield put({
      type: SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST),
      payload: {
        data: result.data,
        meta: {
          total: parseInt(result.headers["x-total-count"]),
          page: params.page,
          limit: params.limit,
        },
        more: more,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* getCategoryDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/categories/${id}`);
    yield put({
      type: SUCCESS(CATEGORY_ACTION.GET_CATEGORY_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.GET_CATEGORY_DETAIL),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* createCategorySaga(action) {
  try {
    const { values, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/categories", values);
    yield put({
      type: SUCCESS(CATEGORY_ACTION.CREATE_CATEGORY),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.CREATE_CATEGORY),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* updateCategorySaga(action) {
  try {
    const { values, id, callback } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/categories/${id}`,
      values
    );

    yield put({
      type: SUCCESS(CATEGORY_ACTION.UPDATE_CATEGORY),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.UPDATE_CATEGORY),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* deleteCategorySaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`http://localhost:4000/categories/${id}`);
    yield put({ type: SUCCESS(CATEGORY_ACTION.DELETE_CATEGORY) });
  } catch (e) {
    yield put({
      type: FAIL(CATEGORY_ACTION.DELETE_CATEGORY),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* categorySaga() {
  yield takeEvery(
    REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST),
    getCategoryListSaga
  );
  yield takeEvery(
    REQUEST(CATEGORY_ACTION.GET_CATEGORY_DETAIL),
    getCategoryDetailSaga
  );
  yield takeEvery(REQUEST(CATEGORY_ACTION.CREATE_CATEGORY), createCategorySaga);
  yield takeEvery(REQUEST(CATEGORY_ACTION.UPDATE_CATEGORY), updateCategorySaga);
  yield takeEvery(REQUEST(CATEGORY_ACTION.DELETE_CATEGORY), deleteCategorySaga);
}
