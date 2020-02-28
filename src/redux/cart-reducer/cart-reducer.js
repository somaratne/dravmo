const INITIAL_STATE = {
  toggleCart: false
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "TOGGLE_SHOPPING_CART":
      return {
        ...state,
        toggleCart: action.payload
      };
    default:
      return state;
  }
};

export default cartReducer;
