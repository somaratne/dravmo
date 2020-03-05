export const makeToggle = cart => {
  return {
    type: "TOGGLE_SHOPPING_CART",
    payload: cart
  };
};

export const addItems = item => {
  return {
    type: "ADD_CART_ITEMS",
    payload: item
  };
};
