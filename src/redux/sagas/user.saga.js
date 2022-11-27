import { takeEvery, put, debounce } from "redux-saga/effects";
import axios from "axios";

import { USER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* loginSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/login", data);
    localStorage.setItem("accessToken", result.data.accessToken);
    yield put({
      type: SUCCESS(USER_ACTION.LOGIN),
      payload: {
        data: result.data.user,
      },
    });
    if (result.data?.user?.role === "admin") {
      yield callback.goToDashboard();
    } else {
      yield callback.goToHome();
    }
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.LOGIN),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* registerSaga(action) {
  try {
    const { data, callback } = action.payload;
    const result = yield axios.post("http://localhost:4000/register", data);
    yield put({
      type: SUCCESS(USER_ACTION.REGISTER),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToLogin();
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.REGISTER),
      payload: {
        error:
          e.response.data === "Email already exists"
            ? "Email đã tồn tại"
            : e.response.data,
      },
    });
  }
}

function* getUserInfoSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users/${id}`);
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_INFO),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_INFO),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* getUserListSaga(action) {
  try {
    const { params, more } = action.payload;
    const result = yield axios.get("http://localhost:4000/users", {
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
      },
    });
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_LIST),
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
      type: FAIL(USER_ACTION.GET_USER_LIST),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* getUserDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/users/${id}`);
    yield put({
      type: SUCCESS(USER_ACTION.GET_USER_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.GET_USER_DETAIL),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* updateUserSaga(action) {
  try {
    const { values, id } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/users/${id}`,
      values
    );

    yield put({
      type: SUCCESS(USER_ACTION.UPDATE_USER),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.UPDATE_USER),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* deleteUserSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`http://localhost:4000/users/${id}`);
    yield put({ type: SUCCESS(USER_ACTION.DELETE_USER) });
  } catch (e) {
    yield put({
      type: FAIL(USER_ACTION.DELETE_USER),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* userSaga() {
  yield takeEvery(REQUEST(USER_ACTION.LOGIN), loginSaga);
  yield takeEvery(REQUEST(USER_ACTION.REGISTER), registerSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_INFO), getUserInfoSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_LIST), getUserListSaga);
  yield takeEvery(REQUEST(USER_ACTION.GET_USER_DETAIL), getUserDetailSaga);
  yield takeEvery(REQUEST(USER_ACTION.UPDATE_USER), updateUserSaga);
  yield takeEvery(REQUEST(USER_ACTION.DELETE_USER), deleteUserSaga);
}
