import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, SUCCESS, FAIL, ORDER_ACTION } from "../constants";

const initialState = {
  orderList: {
    data: [],
    loading: false,
    error: "",
  },
  changeOrderData: {
    loading: false,
    error: "",
  },
};

const orderReducer = createReducer(initialState, {
  [REQUEST(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(ORDER_ACTION.GET_ORDER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      orderList: {
        ...state.orderList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(ORDER_ACTION.CHANGE_ORDER_STATUS)]: (state, action) => {
    return {
      ...state,
      changeOrderData: {
        ...state.changeOrderData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(ORDER_ACTION.CHANGE_ORDER_STATUS)]: (state, action) => {
    return {
      ...state,
      changeOrderData: {
        ...state.changeOrderData,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(ORDER_ACTION.CHANGE_ORDER_STATUS)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      changeOrderData: {
        ...state.changeOrderData,
        loading: false,
        error: error,
      },
    };
  },
});

export default orderReducer;
