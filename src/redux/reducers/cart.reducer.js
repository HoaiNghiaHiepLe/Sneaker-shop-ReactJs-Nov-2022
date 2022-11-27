import { createReducer } from "@reduxjs/toolkit";

import { CART_ACTION, REQUEST } from "../constants";

const initialState = {
  cartList: JSON.parse(localStorage.getItem("cart")) || [],
  checkoutInfo: {},
  checkoutPayment: {},
};

const cartReducer = createReducer(initialState, {
  [REQUEST(CART_ACTION.ADD_TO_CART)]: (state, action) => {
    let newCartList = [...state.cartList];
    const { productId, quantity } = action.payload;
    const exitProductIndex = state.cartList.findIndex(
      (item) => item.productId === productId
    );
    if (exitProductIndex !== -1) {
      newCartList.splice(exitProductIndex, 1, {
        ...state.cartList[exitProductIndex],
        quantity: state.cartList[exitProductIndex].quantity + quantity,
      });
    } else {
      newCartList = [action.payload, ...state.cartList];
    }
    localStorage.setItem("cart", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },

  [REQUEST(CART_ACTION.UPDATE_CART_ITEM)]: (state, action) => {
    const newCartList = [...state.cartList];
    const { productId, quantity } = action.payload;
    const exitProductIndex = state.cartList.findIndex(
      (item) => item.productId === productId
    );
    if (exitProductIndex !== -1) {
      newCartList.splice(exitProductIndex, 1, {
        ...state.cartList[exitProductIndex],
        quantity: quantity,
      });
    }
    localStorage.setItem("cart", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },

  [REQUEST(CART_ACTION.DELETE_CART_ITEM)]: (state, action) => {
    const { productId } = action.payload;
    const newCartList = state.cartList.filter(
      (item) => item.productId !== productId
    );

    localStorage.setItem("cart", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },

  [REQUEST(CART_ACTION.SET_CHECKOUT_INFO)]: (state, action) => {
    return {
      ...state,
      checkoutInfo: action.payload,
    };
  },

  [REQUEST(CART_ACTION.RESET_CART_LIST)]: (state, action) => {
    return {
      ...state,
      cartList: [],
    };
  },
});

export default cartReducer;
