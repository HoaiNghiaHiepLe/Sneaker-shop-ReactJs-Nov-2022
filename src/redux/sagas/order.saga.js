import { takeEvery, put } from "redux-saga/effects";
import axios from "axios";

import { ORDER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

function* orderProductSaga(action) {
  try {
    const { products, ...orderData } = action.payload;
    const result = yield axios.post("http://localhost:4000/orders", orderData);
    for (let i = 0; i < products.length; i++) {
      yield axios.post("http://localhost:4000/orderProducts", {
        orderId: result.data.id,
        ...products[i],
      });
    }
    yield put({
      type: SUCCESS(ORDER_ACTION.ORDER_PRODUCT),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.ORDER_PRODUCT),
      payload: {
        error: "Fail!",
      },
    });
  }
}

function* guestOrderProductSaga(action) {
  try {
    const { products, ...orderData } = action.payload;
    const result = yield axios.post(
      "http://localhost:4000/guestOrders",
      orderData
    );
    for (let i = 0; i < products.length; i++) {
      yield axios.post("http://localhost:4000/guestOrderProducts", {
        guestOrderId: result.data.id,
        ...products[i],
      });
    }
    yield put({
      type: SUCCESS(ORDER_ACTION.GUEST_ORDER_PRODUCT),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.GUEST_ORDER_PRODUCT),
      payload: {
        error: "Fail!",
      },
    });
  }
}

function* getOrderListSaga(action) {
  try {
    const { userId } = action.payload;
    const result = yield axios.get("http://localhost:4000/orders", {
      params: {
        userId: userId,
        _embed: "orderProducts",
      },
    });
    yield put({
      type: SUCCESS(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        data: result.data,
      },
    });
  } catch (e) {
    yield put({
      type: FAIL(ORDER_ACTION.GET_ORDER_LIST),
      payload: {
        error: "Fail!",
      },
    });
  }
}

function* changeOrderStatusSaga(action) {
  try {
    const { id, data, callback, userId } = action.payload;
    const result = yield axios.patch(
      `http://localhost:4000/orders/${id}`,
      data
    );
    yield put({
      type: `${SUCCESS(ORDER_ACTION.CHANGE_ORDER_STATUS)}`,
      payload: {
        data: result.data,
      },
    });
    // if (data.status === "done" && callback.updateUserInfo)
    //   yield callback.updateUserInfo();
    if (callback.updateUserInfo) yield callback.updateUserInfo();
    if (callback.goToList) yield callback.goToList();
    if (callback.getOrderList) yield callback.getOrderList();
  } catch (e) {
    yield put({
      type: `${FAIL(ORDER_ACTION.CHANGE_ORDER_STATUS)}`,
      payload: {
        error: "đã có lỗi xảy ra!",
      },
    });
  }
}

export default function* orderSaga() {
  yield takeEvery(REQUEST(ORDER_ACTION.ORDER_PRODUCT), orderProductSaga);
  yield takeEvery(
    REQUEST(ORDER_ACTION.GUEST_ORDER_PRODUCT),
    guestOrderProductSaga
  );
  yield takeEvery(
    REQUEST(ORDER_ACTION.CHANGE_ORDER_STATUS),
    changeOrderStatusSaga
  );
  yield takeEvery(REQUEST(ORDER_ACTION.GET_ORDER_LIST), getOrderListSaga);
}
