import apnaMart from "../../api/apnaMart";
import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstants";

// add to cart
export const addItemsToCart =
  (_id, quantity = 1) =>
  async (dispatch, getState) => {
    const { data } = await apnaMart.get(`/app/get-product-byid/${_id}`);

    dispatch({
      type: ADD_TO_CART,
      payload: {
        productId: data.product._id,
        name: data.product.name,
        brand: data.product.brand.brandName,
        price: data.product.price,
        discount: data.product.discount,
        sellingPrice: data.product.sellingPrice,
        imageUrl: data.product.imageUrl,
        stock: data.product.stock,
        quantity,
      },
    });

    localStorage.setItem(
      "cartItems",
      JSON.stringify(getState().cart.cartItems)
    );
  };

// remove cart item
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_FROM_CART,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// empty cart
export const emptyCart = () => async (dispatch, getState) => {
  dispatch({ type: EMPTY_CART });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// save shipping info
export const saveShippingInfo = (data) => async (dispatch) => {
  dispatch({
    type: SAVE_SHIPPING_INFO,
    payload: data,
  });

  localStorage.setItem("shippingInfo", JSON.stringify(data));
};
