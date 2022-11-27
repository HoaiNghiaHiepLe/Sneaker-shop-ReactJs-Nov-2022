import { createReducer } from "@reduxjs/toolkit";

import {
  PRODUCT_ACTION,
  FAVORITE_ACTION,
  REQUEST,
  SUCCESS,
  FAIL,
} from "../constants";

const initialState = {
  productList: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  productDetail: {
    data: {},
    loading: false,
    error: "",
  },
  createProductData: {
    loading: false,
    error: "",
  },
  updateProductData: {
    loading: false,
    error: "",
  },
  deleteProductData: {
    loading: false,
    error: "",
  },
};

const productReducer = createReducer(initialState, {
  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;

    return {
      ...state,
      productList: {
        ...state.productList,
        data: more ? [...state.productList.data, ...data] : data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productList: {
        ...state.productList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.GET_PRODUCT_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.CREATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createProductData: {
        ...state.createProductData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.UPDATE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateProductData: {
        ...state.updateProductData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        loading: false,
      },
    };
  },
  [FAIL(PRODUCT_ACTION.DELETE_PRODUCT)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteProductData: {
        ...state.deleteProductData,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(PRODUCT_ACTION.CLEAR_PRODUCT_DETAIL)]: (state, action) => {
    return {
      ...state,
      productDetail: {
        data: {},
        loading: false,
        error: "",
      },
    };
  },

  [SUCCESS(FAVORITE_ACTION.FAVORITE_PRODUCT)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: {
          ...state.productDetail.data,
          favorites: [...state.productDetail.data.favorites, data],
        },
      },
    };
  },

  [SUCCESS(FAVORITE_ACTION.UN_FAVORITE_PRODUCT)]: (state, action) => {
    const { id } = action.payload;
    const newFavorites = state.productDetail.data.favorites?.filter(
      (item) => item.id !== id
    );
    return {
      ...state,
      productDetail: {
        ...state.productDetail,
        data: {
          ...state.productDetail.data,
          favorites: newFavorites,
        },
      },
    };
  },
});

export default productReducer;
