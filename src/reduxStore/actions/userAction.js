import apnaMart from "../../api/apnaMart";
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
  USER_DETAILS_RESET,
  USER_LIST_RESET,
  FILL_USER_ADDRESS_REQUEST,
  FILL_USER_ADDRESS_SUCCESS,
  FILL_USER_ADDRESS_FAIL,
} from "../constants/userConstants";

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await apnaMart.post(
      "/auth/user/signin",
      { email, password },
      config
    );

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data.user,
    });

    localStorage.setItem("userInfo", JSON.stringify(data.user));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const logout = () => (dispatch) => {
  localStorage.clear();
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
  dispatch({ type: USER_LIST_RESET });
  document.location.href = "/";
};

export const register = (name, email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_REGISTER_REQUEST,
    });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await apnaMart.post(
      "/auth/user/signup",
      { name, email, password },
      config
    );

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: data.user,
    });

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });

    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateUserProfile = (user) => async (dispatch, getState) => {
  try {
    dispatch({
      type: USER_UPDATE_PROFILE_REQUEST,
    });

    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await apnaMart.put(`/api/users/profile`, user, config);

    dispatch({
      type: USER_UPDATE_PROFILE_SUCCESS,
      payload: data,
    });
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem("userInfo", JSON.stringify(data));
  } catch (error) {
    const message =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    if (message === "Not authorized, token failed") {
      dispatch(logout());
    }
    dispatch({
      type: USER_UPDATE_PROFILE_FAIL,
      payload: message,
    });
  }
};
// Fill User Address/ Shipping info
export const fillUserAddress =
  (streetAddress, city, state, country, zip) => async (dispatch, getState) => {
    try {
      dispatch({
        type: FILL_USER_ADDRESS_REQUEST,
      });

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await apnaMart.put(
        `/app/fill-user-address`,
        { streetAddress, city, state, country, zip },
        config
      );

      dispatch({
        type: FILL_USER_ADDRESS_SUCCESS,
        payload: data.address,
      });
      localStorage.setItem("shippingInfo", JSON.stringify(data.address));
    } catch (error) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      dispatch({
        type: FILL_USER_ADDRESS_FAIL,
        payload: message,
      });
    }
  };
