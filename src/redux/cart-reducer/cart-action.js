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

export const removeItems = item => {
  return {
    type: "REMOVE_CART_ITEMS",
    payload: item
  };
};

export const increaseItem = item => {
  return {
    type: "INCREASE_ITEM",
    payload: item
  };
};

export const decreaseItem = item => {
  return {
    type: "DECREASE_ITEM",
    payload: item
  };
};
