import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { auth } from "./../../firebase/firebase.utils";
import CartIcon from "./../cart-icon/cart-icon.component";
import CartDropDown from "./../cart-dropdown/cart-dropdown.component";
import "./header.styles.scss";

const NavBar = ({ currentUser, toggleCart }) => {
  return (
    <div className="nav-bar">
      <div className="logo">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="options">
        <Link to="/shop">SHOP</Link>
        <Link to="/contact">CONTACT</Link>
        {currentUser ? (
          <div
            style={{ cursor: "pointer", display: "inline" }}
            onClick={() => auth.signOut()}
          >
            SIGN OUT
          </div>
        ) : (
          <Link to="/signin">SIGN IN</Link>
        )}
      </div>
      <CartIcon />
      {toggleCart ? <CartDropDown /> : null}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    currentUser: state.user.currentUser,
    toggleCart: state.cart.toggleCart
  };
};

export default connect(mapStateToProps)(NavBar);
