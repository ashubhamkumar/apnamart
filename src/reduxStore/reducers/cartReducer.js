import {
  ADD_TO_CART,
  EMPTY_CART,
  REMOVE_FROM_CART,
} from "../constants/cartConstants";

export const cartReducer = (
  state = { cartItems: [], shippingInfo: {} },
  { type, payload }
) => {
  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const isItemExist = state.cartItems.find(
        (el) => el.productId === item.productId
      );

      if (isItemExist) {
        return {
          ...state,
          cartItems: state.cartItems.map((el) =>
            el.productId === isItemExist.productId ? item : el
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    case REMOVE_FROM_CART:
      return {
        ...state,
        cartItems: state.cartItems.filter((el) => el.productId !== payload),
      };
    case EMPTY_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};
