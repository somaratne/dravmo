import React from "react";
import "./cart-item.styles.scss";

const CartItem = ({ item }) => {
  return (
    <div className="row">
      <div className="col-1-2">
        <div>
          <img className="cart-item-img" src={item.imageUrl} alt={item.name} />
        </div>
      </div>
      <div className="col-1-2">
        <div>
          <p>{item.name}</p>
          <p>
            {item.quantity} X ${item.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
