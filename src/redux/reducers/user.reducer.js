import { createReducer } from "@reduxjs/toolkit";

import { USER_ACTION, REQUEST, SUCCESS, FAIL } from "../constants";

const initialState = {
  userInfo: {
    data: {},
    loading: true,
    error: "",
  },
  userList: {
    data: {},
    meta: {},
    loading: true,
    error: "",
  },
  userDetail: {
    data: {},
    loading: false,
    error: "",
  },
  updateUserData: {
    loading: false,
    error: "",
  },
  deleteUserData: {
    loading: false,
    error: "",
  },
  loginData: {
    loading: false,
    error: "",
  },
  registerData: {
    loading: false,
    error: "",
  },
};

const userReducer = createReducer(initialState, {
  [REQUEST(USER_ACTION.LOGIN)]: (state) => {
    return {
      ...state,
      loginData: {
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.LOGIN)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: data,
        loading: false,
      },
      loginData: {
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(USER_ACTION.LOGIN)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      loginData: {
        ...state.loginData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      registerData: {
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.REGISTER)]: (state, action) => {
    return {
      ...state,
      registerData: {
        loading: false,
        error: "",
      },
    };
  },
  [FAIL(USER_ACTION.REGISTER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      registerData: {
        ...state.registerData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.LOGOUT)]: (state) => {
    localStorage.removeItem("accessToken");
    return {
      ...state,
      userInfo: {
        data: {},
        loading: true,
        error: "",
      },
    };
  },

  [REQUEST(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_INFO)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userInfo: {
        ...state.userInfo,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    const { data, meta, more } = action.payload;
    return {
      ...state,
      userList: {
        ...state.userList,
        data: more ? [...state.userList.data, ...data] : data,
        meta: meta,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_LIST)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userList: {
        ...state.userList,
        loading: false,
        error: error,
      },
    };
  },
  [REQUEST(USER_ACTION.GET_USER_DETAIL)]: (state, action) => {
    return {
      ...state,
      userDetail: {
        ...state.userDetail,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.GET_USER_DETAIL)]: (state, action) => {
    const { data } = action.payload;
    return {
      ...state,
      userDetail: {
        ...state.userDetail,
        data: data,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.GET_USER_DETAIL)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      userDetail: {
        ...state.userDetail,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.UPDATE_USER)]: (state, action) => {
    return {
      ...state,
      updateUserData: {
        ...state.updateUserData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.UPDATE_USER)]: (state, action) => {
    return {
      ...state,
      updateUserData: {
        ...state.updateUserData,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.UPDATE_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      updateUserData: {
        ...state.updateUserData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.DELETE_USER)]: (state, action) => {
    return {
      ...state,
      deleteUserData: {
        ...state.deleteUserData,
        loading: true,
        error: "",
      },
    };
  },
  [SUCCESS(USER_ACTION.DELETE_USER)]: (state, action) => {
    return {
      ...state,
      deleteUserData: {
        ...state.deleteUserData,
        loading: false,
      },
    };
  },
  [FAIL(USER_ACTION.DELETE_USER)]: (state, action) => {
    const { error } = action.payload;
    return {
      ...state,
      deleteUserData: {
        ...state.deleteUserData,
        loading: false,
        error: error,
      },
    };
  },

  [REQUEST(USER_ACTION.CLEAR_USER_DETAIL)]: (state, action) => {
    return {
      ...state,
      userList: {
        data: {},
        loading: false,
        error: "",
      },
    };
  },
});

export default userReducer;
