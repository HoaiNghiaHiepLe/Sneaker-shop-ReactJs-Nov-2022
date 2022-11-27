import { createReducer } from "@reduxjs/toolkit";

import { REQUEST, SUCCESS, FAIL, REVIEW_ACTION } from "../constants";

const initialState = {
  reviewList: {
    data: [],
    loading: false,
    error: "",
  },
  postReviewData: {
    loading: false,
    error: "",
  },
};

const reviewReducer = createReducer(initialState, {
  [REQUEST(REVIEW_ACTION.GET_REVIEW_LIST)]: (state, action) => {
    return {
      ...state,
      reviewList: {
        ...state.reviewList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(REVIEW_ACTION.GET_REVIEW_LIST)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      reviewList: {
        ...state.reviewList,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(REVIEW_ACTION.GET_REVIEW_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      reviewList: {
        ...state.reviewList,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(REVIEW_ACTION.POST_REVIEW)]: (state, action) => {
    return {
      ...state,
      postReviewData: {
        ...state.postReviewData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(REVIEW_ACTION.POST_REVIEW)]: (state, action) => {
    return {
      ...state,
      postReviewData: {
        ...state.postReviewData,
        loading: false,
      },
    };
  },
  [FAIL(REVIEW_ACTION.POST_REVIEW)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      postReviewData: {
        ...state.postReviewData,
        loading: false,
        error: error,
      },
    };
  },
});

export default reviewReducer;
