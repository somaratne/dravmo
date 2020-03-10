import { createSelector } from "reselect";

const selectCart = state => state.cart;

export const selectCartItem = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartItemQuantity = createSelector(
  [selectCartItem],
  cartItems =>
    cartItems.map(item => item.quantity).reduce((acc, c) => acc + c, 0)
);
