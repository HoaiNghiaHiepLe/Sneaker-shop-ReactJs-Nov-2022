import { createReducer } from "@reduxjs/toolkit";

import { BLOG_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  blogList: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  blogListFeature: {
    data: [],
    meta: {},
    loading: false,
    error: "",
  },
  blogDetail: {
    data: {},
    loading: false,
    error: "",
  },
  createBlogData: {
    loading: false,
    error: "",
  },
  updateBlogData: {
    loading: false,
    error: "",
  },
  deleteBlogData: {
    loading: false,
    error: "",
  },
};

const blogReducer = createReducer(initialState, {
  [REQUEST(BLOG_ACTION.GET_BLOG_LIST)]: (state, action) => {
    return {
      ...state,
      blogList: {
        ...state.blogList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.GET_BLOG_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;

    return {
      ...state,
      blogList: {
        ...state.blogList,
        data: more ? [...state.blogList.data, ...data] : data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(BLOG_ACTION.GET_BLOG_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      blogList: {
        ...state.blogList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(BLOG_ACTION.GET_BLOG_LIST_FEATURE)]: (state, action) => {
    return {
      ...state,
      blogListFeature: {
        ...state.blogList,
        ...state.blogListFeature,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.GET_BLOG_LIST_FEATURE)]: (state, action) => {
    const { data, meta, more } = action.payload;

    return {
      ...state,
      blogListFeature: {
        ...state.blogListFeature,
        ...state.blogList,
        data: more ? [...state.blogListFeature.data, ...data] : data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(BLOG_ACTION.GET_BLOG_LIST_FEATURE)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      blogListFeature: {
        ...state.blogListFeature,
        ...state.blogList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(BLOG_ACTION.GET_BLOG_DETAIL)]: (state, action) => {
    return {
      ...state,
      blogDetail: {
        ...state.blogDetail,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.GET_BLOG_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      blogDetail: {
        ...state.blogDetail,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(BLOG_ACTION.GET_BLOG_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      blogDetail: {
        ...state.blogDetail,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(BLOG_ACTION.CREATE_BLOG)]: (state, action) => {
    return {
      ...state,
      createBlogData: {
        ...state.createBlogData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.CREATE_BLOG)]: (state, action) => {
    return {
      ...state,
      createBlogData: {
        ...state.createBlogData,
        loading: false,
      },
    };
  },
  [FAIL(BLOG_ACTION.CREATE_BLOG)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      createBlogData: {
        ...state.createBlogData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(BLOG_ACTION.UPDATE_BLOG)]: (state, action) => {
    return {
      ...state,
      updateBlogData: {
        ...state.updateBlogData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.UPDATE_BLOG)]: (state, action) => {
    return {
      ...state,
      updateBlogData: {
        ...state.updateBlogData,
        loading: false,
      },
    };
  },
  [FAIL(BLOG_ACTION.UPDATE_BLOG)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateBlogData: {
        ...state.updateBlogData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(BLOG_ACTION.DELETE_BLOG)]: (state, action) => {
    return {
      ...state,
      deleteBlogData: {
        ...state.deleteBlogData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(BLOG_ACTION.DELETE_BLOG)]: (state, action) => {
    return {
      ...state,
      deleteBlogData: {
        ...state.deleteBlogData,
        loading: false,
      },
    };
  },
  [FAIL(BLOG_ACTION.DELETE_BLOG)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteBlogData: {
        ...state.deleteBlogData,
        loading: false,
        error: error,
      },
    };
  },
  
  [REQUEST(BLOG_ACTION.CLEAR_BLOG_DETAIL)]: (state, action) => {
    return {
      ...state,
      blogDetail: {
        data: {},
        loading: false,
        error: "",
      },
    };
  },
});

export default blogReducer;
