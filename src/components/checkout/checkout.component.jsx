import React from "react";
import { connect } from "react-redux";
import { selectCartItem } from "./../../redux/cart-reducer/cart-reselect";
import "./checkout.styles.scss";

const CheckOut = ({ cartItems }) => {
  return (
    <div>
      <div className="row">
        <div className="col-1-5">Product</div>
        <div className="col-1-5">Description</div>
        <div className="col-1-5">Quantity</div>
        <div className="col-1-5">Price</div>
        <div className="col-1-5">Remove</div>
      </div>

      {cartItems.map(item => (
        <div key={item.id} className="row">
          <div className="col-1-5">
            <img src={item.imageUrl} alt={item.name} />
          </div>
          <div className="col-1-5">
            <div className="inner-div">{item.name}</div>
          </div>
          <div className="col-1-5">
            <div className="inner-div">{item.quantity}</div>
          </div>
          <div className="col-1-5">
            <div className="inner-div">{item.price}</div>
          </div>
          <div className="col-1-5">
            <div className="inner-div">&#10008;</div>
          </div>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItem(state)
  };
};

export default connect(mapStateToProps)(CheckOut);
