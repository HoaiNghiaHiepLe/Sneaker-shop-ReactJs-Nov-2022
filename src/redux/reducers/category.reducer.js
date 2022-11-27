import { createReducer } from "@reduxjs/toolkit";
import { REQUEST, SUCCESS, FAIL, CATEGORY_ACTION } from "../constants";

const initialState = {
  categoryList: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  categoryDetail: {
    data: {},
    loading: false,
    error: "",
  },
  createCategoryData: {
    loading: false,
    error: "",
  },
  updateCategoryData: {
    loading: false,
    error: "",
  },
  deleteCategoryData: {
    loading: false,
    error: "",
  },
};

const categoryReducer = createReducer(initialState, {
  [REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        data: more ? [...state.productList.data, ...data] : data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(CATEGORY_ACTION.GET_CATEGORY_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      categoryList: {
        ...state.categoryList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(CATEGORY_ACTION.GET_CATEGORY_DETAIL)]: (state, action) => {
    return {
      ...state,
      categoryDetail: {
        ...state.categoryDetail,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.GET_CATEGORY_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      categoryDetail: {
        ...state.categoryDetail,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(CATEGORY_ACTION.GET_CATEGORY_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      categoryDetail: {
        ...state.categoryDetail,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(CATEGORY_ACTION.CREATE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      createCategoryData: {
        ...state.createCategoryData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.CREATE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      createCategoryData: {
        ...state.createCategoryData,
        loading: false,
      },
    };
  },
  [FAIL(CATEGORY_ACTION.CREATE_CATEGORY)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createCategoryData: {
        ...state.createCategoryData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(CATEGORY_ACTION.UPDATE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      updateCategoryData: {
        ...state.updateCategoryData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.UPDATE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      updateCategoryData: {
        ...state.updateCategoryData,
        loading: false,
      },
    };
  },
  [FAIL(CATEGORY_ACTION.UPDATE_CATEGORY)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateCategoryData: {
        ...state.updateCategoryData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(CATEGORY_ACTION.DELETE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      deleteCategoryData: {
        ...state.deleteCategoryData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(CATEGORY_ACTION.DELETE_CATEGORY)]: (state, action) => {
    return {
      ...state,
      deleteCategoryData: {
        ...state.deleteCategoryData,
        loading: false,
      },
    };
  },
  [FAIL(CATEGORY_ACTION.DELETE_CATEGORY)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteCategoryData: {
        ...state.deleteCategoryData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(CATEGORY_ACTION.CLEAR_CATEGORY_DETAIL)]: (state, action) => {
    return {
      ...state,
      categoryDetail: {
        data: {},
        loading: false,
        error: "",
      },
    };
  },
});

export default categoryReducer;
