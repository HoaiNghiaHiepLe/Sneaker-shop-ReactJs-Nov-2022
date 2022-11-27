import { createAction } from "@reduxjs/toolkit";
import { REQUEST, CATEGORY_ACTION } from "../constants";

export const getCategoryListAction = createAction(
  REQUEST(CATEGORY_ACTION.GET_CATEGORY_LIST)
);
export const getCategoryDetailAction = createAction(
  REQUEST(CATEGORY_ACTION.GET_CATEGORY_DETAIL)
);
export const createCategoryAction = createAction(
  REQUEST(CATEGORY_ACTION.CREATE_CATEGORY)
);
export const updateCategoryAction = createAction(
  REQUEST(CATEGORY_ACTION.UPDATE_CATEGORY)
);
export const deleteCategoryAction = createAction(
  REQUEST(CATEGORY_ACTION.DELETE_CATEGORY)
);
export const clearCategoryDetailAction = createAction(
  REQUEST(CATEGORY_ACTION.CLEAR_CATEGORY_DETAIL)
);
