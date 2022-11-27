import { createAction } from "@reduxjs/toolkit";
import { USER_ACTION, REQUEST } from "../constants";

export const loginAction = createAction(REQUEST(USER_ACTION.LOGIN));
export const registerAction = createAction(REQUEST(USER_ACTION.REGISTER));
export const logoutAction = createAction(REQUEST(USER_ACTION.LOGOUT));
export const getUserInfoAction = createAction(
  REQUEST(USER_ACTION.GET_USER_INFO)
);
export const getUserListAction = createAction(
  REQUEST(USER_ACTION.GET_USER_LIST)
);
export const getUserDetailAction = createAction(
  REQUEST(USER_ACTION.GET_USER_DETAIL)
);
export const updateUserAction = createAction(REQUEST(USER_ACTION.UPDATE_USER));
export const deleteUserAction = createAction(REQUEST(USER_ACTION.DELETE_USER));
export const clearUserDetailAction = createAction(
  REQUEST(USER_ACTION.CLEAR_USER_DETAIL)
);
