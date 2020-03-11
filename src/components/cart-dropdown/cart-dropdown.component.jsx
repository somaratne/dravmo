import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";
import { makeToggle } from "./../../redux/cart-reducer/cart-action";

const CartDropDown = ({ cartItems, history, makeToggle, toggleCart }) => {
  const handleButton = () => {
    history.push("/checkout");
    makeToggle(!toggleCart);
  };
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>There are no items to show</p>
        ) : (
          cartItems.map(item => <CartItem key={item.id} item={item} />)
        )}
      </div>
      {cartItems.length !== 0 ? (
        <CustomButton onClick={handleButton}>GO TO CHECKOUT</CustomButton>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems,
    toggleCart: state.cart.toggleCart
  };
};

const mapDispatchToProps = dispatch => {
  return {
    makeToggle: toggle => dispatch(makeToggle(toggle))
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
