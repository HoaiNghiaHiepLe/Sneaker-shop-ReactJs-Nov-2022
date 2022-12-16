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
    const { productId, quantity, optionId } = action.payload;
    if (optionId) {
      const existOptionIndex = state.cartList.findIndex(
        (item) => item.optionId === optionId
      );
      if (existOptionIndex !== -1) {
        newCartList.splice(existOptionIndex, 1, {
          ...state.cartList[existOptionIndex],
          quantity: state.cartList[existOptionIndex].quantity + quantity,
        });
      } else {
        newCartList = [action.payload, ...state.cartList];
      }
    } else {
      const existProductIndex = state.cartList.findIndex(
        (item) => item.productId === productId
      );
      if (existProductIndex !== -1) {
        newCartList.splice(existProductIndex, 1, {
          ...state.cartList[existProductIndex],
          quantity: state.cartList[existProductIndex].quantity + quantity,
        });
      } else {
        newCartList = [action.payload, ...state.cartList];
      }
    }
    localStorage.setItem("cart", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },

  [REQUEST(CART_ACTION.UPDATE_CART_ITEM)]: (state, action) => {
    const newCartList = [...state.cartList];
    const { productId, quantity, optionId } = action.payload;

    const existProductIndex = state.cartList.findIndex(
      (item) =>
        item.productId === productId &&
        (optionId ? item.optionId === optionId : true)
    );
    if (existProductIndex !== -1) {
      newCartList.splice(existProductIndex, 1, {
        ...state.cartList[existProductIndex],
        quantity: quantity,
      });
    }
    localStorage.setItem("cart", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },

  [REQUEST(CART_ACTION.CHANGE_CART_ITEM)]: (state, action) => {
    const newCartList = [...state.cartList];
    const {
      productId,
      quantity,
      optionId,
      size,
      sizeQuantity,
      optionName,
      onClickId,
    } = action.payload;
    const changeProductOptions = state.cartList.findIndex(
      (item) =>
        item.productId === productId &&
        (optionId ? item.optionId !== optionId : true) &&
        (onClickId ? item.optionId === onClickId : true)
    );
    if (changeProductOptions !== -1) {
      newCartList.splice(changeProductOptions, 1, {
        ...state.cartList[changeProductOptions],
        quantity: quantity,
        optionId: optionId,
        size: size,
        sizeQuantity: sizeQuantity,
        optionName: optionName,
        onClickId: onClickId,
      });
    }

    localStorage.setItem("cart", JSON.stringify(newCartList));
    return {
      ...state,
      cartList: newCartList,
    };
  },

  [REQUEST(CART_ACTION.DELETE_CART_ITEM)]: (state, action) => {
    const { productId, optionId } = action.payload;
    const newCartList = state.cartList.filter((item) =>
      optionId ? item.optionId !== optionId : item.productId !== productId
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
