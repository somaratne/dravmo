import React from "react";
import { connect } from "react-redux";
import { selectCartItem } from "./../../redux/cart-reducer/cart-reselect";
import {
  removeItems,
  increaseItem,
  decreaseItem
} from "./../../redux/cart-reducer/cart-action";
import "./checkout.styles.scss";

const CheckOut = ({ cartItems, removeItems, increaseItem, decreaseItem }) => {
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
            <div className="inner-div">
              <span
                style={{ cursor: "pointer" }}
                onClick={() => decreaseItem(item)}
              >
                &#10094;
              </span>{" "}
              {item.quantity}
              <span
                style={{ cursor: "pointer" }}
                onClick={() => increaseItem(item)}
              >
                {" "}
                &#10095;
              </span>
            </div>
          </div>
          <div className="col-1-5">
            <div className="inner-div">{item.price}</div>
          </div>
          <div className="col-1-5">
            <div
              className="inner-div"
              style={{ cursor: "pointer" }}
              onClick={() => removeItems(item)}
            >
              &#10008;
            </div>
          </div>
        </div>
      ))}
      <div className="row">
        {cartItems.length !== 0 ? (
          <div className="total col-1-1">
            Total Price $
            {cartItems
              .map(item => item.quantity * item.price)
              .reduce((acc, c) => acc + c, 0)}
          </div>
        ) : (
          <p>There are no items to show</p>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cartItems: selectCartItem(state)
  };
};

const mapDispatchToProps = dispatch => {
  return {
    removeItems: item => dispatch(removeItems(item)),
    increaseItem: item => dispatch(increaseItem(item)),
    decreaseItem: item => dispatch(decreaseItem(item))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CheckOut);
