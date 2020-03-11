import {
  addCartItems,
  removeCartItems,
  increaseItems,
  decreaseItems
} from "./../../utils/cartItems";

const INITIAL_STATE = {
  toggleCart: false,
  cartItems: []
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_SHOPPING_CART":
      return {
        ...state,
        toggleCart: action.payload
      };
    case "ADD_CART_ITEMS":
      return {
        ...state,
        cartItems: addCartItems(state.cartItems, action.payload)
      };

    case "REMOVE_CART_ITEMS":
      return {
        ...state,
        cartItems: removeCartItems(state.cartItems, action.payload)
      };

    case "INCREASE_ITEM":
      return {
        ...state,
        cartItems: increaseItems(state.cartItems, action.payload)
      };
    case "DECREASE_ITEM":
      return {
        ...state,
        cartItems: decreaseItems(state.cartItems, action.payload)
      };
    default:
      return state;
  }
};

export default cartReducer;
