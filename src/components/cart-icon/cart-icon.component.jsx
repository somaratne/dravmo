import React from "react";
import { connect } from "react-redux";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import { makeToggle } from "./../../redux/cart-reducer/cart-action";
import "./cart-icon.styles.scss";

const CartIcon = ({ toggleCart, makeToggle, cartItems }) => {
  return (
    <div className="cart-icon" onClick={() => makeToggle(!toggleCart)}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">
        {cartItems.map(item => item.quantity).reduce((acc, c) => acc + c, 0)}
      </span>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    makeToggle: cart => dispatch(makeToggle(cart))
  };
};

const mapStateToProps = state => {
  return {
    toggleCart: state.cart.toggleCart,
    cartItems: state.cart.cartItems
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
