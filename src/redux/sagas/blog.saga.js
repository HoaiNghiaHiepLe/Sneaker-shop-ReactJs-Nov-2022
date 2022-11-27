import { takeEvery, put, debounce } from "redux-saga/effects";
import axios from "axios";

import { BLOG_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* getBlogListSaga(action) {
  try {
    const { params, more } = action.payload;
    const result = yield axios.get("http://localhost:4000/blogs", {
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
        _embed: ["blogImages"],
      },
    });
    yield put({
      type: SUCCESS(BLOG_ACTION.GET_BLOG_LIST),
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
      type: FAIL(BLOG_ACTION.GET_BLOG_LIST),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* getBlogListFeatureSaga(action) {
  try {
    const { params, more } = action.payload;
    const result = yield axios.get("http://localhost:4000/blogs", {
      params: {
        _page: params.page,
        _limit: params.limit,
        _embed: ["blogImages"],
      },
    });
    yield put({
      type: SUCCESS(BLOG_ACTION.GET_BLOG_LIST_FEATURE),
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
      type: FAIL(BLOG_ACTION.GET_BLOG_LIST_FEATURE),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* getBlogDetailSaga(action) {
  try {
    const { id } = action.payload;
    const result = yield axios.get(`http://localhost:4000/blogs/${id}`, {
      params: {
        _embed: ["blogImages"],
      },
    });
    yield put({
      type: SUCCESS(BLOG_ACTION.GET_BLOG_DETAIL),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(BLOG_ACTION.GET_BLOG_DETAIL),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* createBlogSaga(action) {
  try {
    const { values, callback, blogImages } = action.payload;
    const result = yield axios.post("http://localhost:4000/blogs", values);
    for (let i = 0; i < blogImages.length; i++) {
      yield axios.post("http://localhost:4000/blogImages", {
        ...blogImages[i],
        blogId: result.data.id,
      });
    }
    yield put({
      type: SUCCESS(BLOG_ACTION.CREATE_BLOG),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    yield put({
      type: FAIL(BLOG_ACTION.CREATE_BLOG),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* updateBlogSaga(action) {
  try {
    const { values, id, blogImages, initialImageIds, callback } =
      action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/blogs/${id}`,
      values
    );
    for (let i = 0; i < blogImages.length; i++) {
      if (!blogImages[i].id) {
        yield axios.post("http://localhost:4000/blogImages", {
          ...blogImages[i],
          blogId: result.data.id,
        });
      }
    }
    for (let j = 0; j < initialImageIds.length; j++) {
      const keepImage = blogImages.find(
        (item) => item.id && item.id === initialImageIds[j]
      );
      if (!keepImage) {
        yield axios.delete(
          `http://localhost:4000/blogImages/${initialImageIds[j]}`
        );
      }
    }
    yield put({
      type: SUCCESS(BLOG_ACTION.UPDATE_BLOG),
      payload: {
        data: result.data,
      },
    });
    yield callback.goToList();
  } catch (e) {
    yield put({
      type: FAIL(BLOG_ACTION.UPDATE_BLOG),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

function* deleteBlogSaga(action) {
  try {
    const { id } = action.payload;
    yield axios.delete(`http://localhost:4000/blogs/${id}`);
    yield put({ type: SUCCESS(BLOG_ACTION.DELETE_BLOG) });
  } catch (e) {
    yield put({
      type: FAIL(BLOG_ACTION.DELETE_BLOG),
      payload: {
        error: "Đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* blogSaga() {
  yield debounce(500, REQUEST(BLOG_ACTION.GET_BLOG_LIST), getBlogListSaga);
  yield takeEvery(
    REQUEST(BLOG_ACTION.GET_BLOG_LIST_FEATURE),
    getBlogListFeatureSaga
  );
  yield takeEvery(REQUEST(BLOG_ACTION.GET_BLOG_DETAIL), getBlogDetailSaga);
  yield takeEvery(REQUEST(BLOG_ACTION.CREATE_BLOG), createBlogSaga);
  yield takeEvery(REQUEST(BLOG_ACTION.UPDATE_BLOG), updateBlogSaga);
  yield takeEvery(REQUEST(BLOG_ACTION.DELETE_BLOG), deleteBlogSaga);
}
