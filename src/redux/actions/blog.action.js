import { createAction } from "@reduxjs/toolkit";

import { BLOG_ACTION, REQUEST } from "../constants";

export const getBlogListAction = createAction(
  REQUEST(BLOG_ACTION.GET_BLOG_LIST)
);
export const getBlogListFeatureAction = createAction(
  REQUEST(BLOG_ACTION.GET_BLOG_LIST_FEATURE)
);
export const getBlogDetailAction = createAction(
  REQUEST(BLOG_ACTION.GET_BLOG_DETAIL)
);
export const createBlogAction = createAction(REQUEST(BLOG_ACTION.CREATE_BLOG));
export const updateBlogAction = createAction(REQUEST(BLOG_ACTION.UPDATE_BLOG));
export const deleteBlogAction = createAction(REQUEST(BLOG_ACTION.DELETE_BLOG));
export const clearBlogDetailAction = createAction(
  REQUEST(BLOG_ACTION.CLEAR_BLOG_DETAIL)
);
