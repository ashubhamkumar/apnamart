import apnaMart from "../../api/apnaMart";
import {
  ALL_PRODUCTS_FAIL,
  ALL_PRODUCTS_REQUEST,
  ALL_PRODUCTS_SUCCESS,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  CLEAR_ERRORS,
  SLIDER_PRODUCTS_REQUEST,
  SLIDER_PRODUCTS_SUCCESS,
  SLIDER_PRODUCTS_FAIL,
} from "../constants/productConstants";

// Get All Products --- Filter/Search/Sort
export const getProducts =
  (keyword = "", category, price = [0, 200000], ratings = 0, currentPage = 1) =>
  async (dispatch) => {
    try {
      dispatch({ type: ALL_PRODUCTS_REQUEST });

      let url = `/app/search-products?keyword=${keyword}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      if (category) {
        url = `/app/search-products?keyword=${keyword}&category=${category}&price[gte]=${price[0]}&price[lte]=${price[1]}&ratings[gte]=${ratings}`;
      }
      const { data } = await apnaMart.get(url);

      dispatch({
        type: ALL_PRODUCTS_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: ALL_PRODUCTS_FAIL,
        payload: error.response.data.message,
      });
    }
  };

// Get All Products Of Same Category
export const getSimilarProducts = (category) => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCTS_REQUEST });

    const { data } = await apnaMart.get(
      `/app/search-products?category=${category}`
    );

    dispatch({
      type: ALL_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ALL_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get Product Details
export const getProductDetails = (slug) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });

    const { data } = await apnaMart.get(`/app/get-product-details/${slug}`);
    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Get All Products ---PRODUCT SLIDER
export const getSliderProducts = () => async (dispatch) => {
  try {
    dispatch({ type: SLIDER_PRODUCTS_REQUEST });

    const { data } = await apnaMart.get("/app/get-all-products");
    dispatch({
      type: SLIDER_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    dispatch({
      type: SLIDER_PRODUCTS_FAIL,
      payload: error.response.data.message,
    });
  }
};

// Clear All Errors
export const clearErrors = () => (dispatch) => {
  dispatch({ type: CLEAR_ERRORS });
};
