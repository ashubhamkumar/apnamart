import apnaMart from "../../api/apnaMart";
import {
  CLEAR_ERRORS,
  MY_ORDERS_FAIL,
  MY_ORDERS_REQUEST,
  MY_ORDERS_SUCCESS,
  NEW_ORDER_FAIL,
  NEW_ORDER_REQUEST,
  NEW_ORDER_SUCCESS,
  ORDER_DETAILS_FAIL,
  ORDER_DETAILS_REQUEST,
  ORDER_DETAILS_SUCCESS,
} from "../constants/orderConstants";

// New Order
export const newOrder = (order) => async (dispatch) => {
  try {
    dispatch({ type: NEW_ORDER_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await apnaMart.post("/api/v1/order/new", order, config);

    dispatch({
      type: NEW_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: NEW_ORDER_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get User Orders
export const myOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: MY_ORDERS_REQUEST });
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const { data } = await apnaMart.get("/app/my-orders", config);

    dispatch({
      type: MY_ORDERS_SUCCESS,
      payload: data.orders,
    });
  } catch (error) {
    dispatch({
      type: MY_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Order Details
export const getOrderDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DETAILS_REQUEST });

    const { data } = await apnaMart.get(`/api/v1/order/${id}`);

    dispatch({
      type: ORDER_DETAILS_SUCCESS,
      payload: data.order,
    });
  } catch (error) {
    dispatch({
      type: ORDER_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
