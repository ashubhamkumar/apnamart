import apnaMart from "../../../api/apnaMart";

import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
  SAVE_SHIPPING_INFO,
} from "../constants/cartConstant";

// add to cart
export const addItemsToCart =
  (id, quantity = 1) =>
  async (dispatch, getState) => {
    const response = await apnaMart.get(`/app/product-by-id?id=${id}`);
    const data = response.data.Products;
    dispatch({
      type: ADD_TO_CART,
      payload: {
        product: data.id,
        name: data.title,
        seller: "apnaMart",
        brand: data.brand,
        price: data.costPrice,
        cuttedPrice: data.price,
        image: data.imageUrl,
        stock: data.stock,
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
