import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  allOrdersReducer,
  myOrdersReducer,
  newOrderReducer,
  orderDetailsReducer,
  orderReducer,
  paymentStatusReducer,
} from "./reducers/orderReducer";
import { cartReducer } from "./reducers/cartReducer";
import {
  getProductDetailsReducer,
  getProductReducer,
} from "./reducers/productReducer";

const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductReducer,
  getProductDetails: getProductDetailsReducer,
  newOrder: newOrderReducer,
  myOrders: myOrdersReducer,
  paymentStatus: paymentStatusReducer,
  orderDetails: orderDetailsReducer,
  allOrders: allOrdersReducer,
  order: orderReducer,
});
let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
