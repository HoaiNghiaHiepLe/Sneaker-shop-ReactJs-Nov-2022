import { createAction } from "@reduxjs/toolkit";

import { REQUEST, FAVORITE_ACTION } from "../constants";

export const getFavoriteList = createAction(
  REQUEST(FAVORITE_ACTION.GET_FAVORITE_LIST)
);
export const favoriteProductAction = createAction(
  REQUEST(FAVORITE_ACTION.FAVORITE_PRODUCT)
);
export const unFavoriteProductAction = createAction(
  REQUEST(FAVORITE_ACTION.UN_FAVORITE_PRODUCT)
);
