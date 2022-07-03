import * as actionTypes from "../constants/productConstant";
import apnaMart from "../../../api/apnaMart";

export const getProducts = () => async (dispatch) => {
  try {
    const response = await apnaMart.get(`/app/products`);
    const data = response.data.products;

    dispatch({ type: actionTypes.GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: actionTypes.GET_PRODUCTS_FAIL, payload: error.response });
  }
};

export const getProductDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_REQUEST });
    const response = await apnaMart.get(`/app/product-details?slug=${slug}`);
    const data = response.data.Products;

    dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCT_DETAILS_FAIL,
      payload: error.response,
    });
  }
};

export const removeProductDetails = () => (dispatch) => {
  dispatch({ type: actionTypes.GET_PRODUCT_DETAILS_RESET });
};
