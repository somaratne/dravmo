import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import "./cart-dropdown.styles.scss";

const CartDropDown = ({ cartItems, history }) => {
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
        <CustomButton onClick={() => history.push("/checkout")}>
          GO TO CHECKOUT
        </CustomButton>
      ) : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: state.cart.cartItems
  };
};

export default withRouter(connect(mapStateToProps)(CartDropDown));
