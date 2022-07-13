import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  forgotPasswordReducer,
  profileReducer,
  userReducer,
  allUsersReducer,
  userDetailsReducer,
} from "./reducers/userReducer";
import {
  newProductReducer,
  productDetailsReducer,
  productReducer,
  productsReducer,
} from "./reducers/productReducer";
import { cartReducer } from "./reducers/cartReducer";

import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
} from "./reducers/orderReducer";

const reducer = combineReducers({
  user: userReducer,
  profile: profileReducer,
  forgotPassword: forgotPasswordReducer,
  products: productsReducer,
  productDetails: productDetailsReducer,
  cart: cartReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
  newProduct: newProductReducer,
  product: productReducer,
  users: allUsersReducer,
  userDetails: userDetailsReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
    shippingInfo: localStorage.getItem("shippingInfo")
      ? JSON.parse(localStorage.getItem("shippingInfo"))
      : {},
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
