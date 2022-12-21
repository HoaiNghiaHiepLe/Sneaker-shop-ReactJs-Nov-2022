import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, FAIL, SUCCESS, FAVORITE_ACTION } from "../constants";

const initialValue = {
  favoriteList: {
    data: [],
    loading: false,
    error: "",
  },
};

const favoriteListReducer = createReducer(initialValue, {
  [REQUEST(FAVORITE_ACTION.GET_FAVORITE_LIST)]: (state, action) => {
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(FAVORITE_ACTION.GET_FAVORITE_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        data: data,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(FAVORITE_ACTION.GET_FAVORITE_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(FAVORITE_ACTION.FAVORITE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(FAVORITE_ACTION.FAVORITE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(FAVORITE_ACTION.FAVORITE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(FAVORITE_ACTION.UN_FAVORITE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(FAVORITE_ACTION.UN_FAVORITE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(FAVORITE_ACTION.UN_FAVORITE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      favoriteList: {
        ...state.favoriteList,
        loading: false,
        error: error,
      },
    };
  },
});

export default favoriteListReducer;
