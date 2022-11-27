import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import productReducer from "./redux/reducers/product.reducer";
import categoryReducer from "./redux/reducers/category.reducer";
import userReducer from "./redux/reducers/user.reducer";
import cartReducer from "./redux/reducers/cart.reducer";
import locationReducer from "./redux/reducers/location.reducer";
import blogReducer from "./redux/reducers/blog.reducer";
import reviewReducer from "./redux/reducers/review.reducer";
import orderReducer from "./redux/reducers/order.reducer";

import rootSaga from "./redux/sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
    category: categoryReducer,
    cart: cartReducer,
    location: locationReducer,
    blog: blogReducer,
    review: reviewReducer,
    order: orderReducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      thunk: false,
      serializableCheck: false,
    }),
    sagaMiddleware,
  ],
});

sagaMiddleware.run(rootSaga);

export { store };
