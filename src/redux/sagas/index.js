import { fork } from "redux-saga/effects";

import productSaga from "./product.saga";
import categorySaga from "./category.saga";
import userSaga from "./user.saga";
import locationSaga from "./location.saga";
import blogSaga from "./blog.saga";
import favoriteSaga from "./favorite.saga";
import reviewSaga from "./review.saga";
import orderSaga from "./order.saga";

export default function* rootSaga() {
  yield fork(productSaga);
  yield fork(categorySaga);
  yield fork(userSaga);
  yield fork(locationSaga);
  yield fork(blogSaga);
  yield fork(favoriteSaga);
  yield fork(reviewSaga);
  yield fork(orderSaga);
}
