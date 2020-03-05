import React from "react";
import { connect } from "react-redux";
import CustomButton from "../custom-button/custom-button.component";
import { addItems } from "../../redux/cart-reducer/cart-action";
import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItems }) => {
  return (
    <div className="col-1-4">
      <div className="collection-item">
        <img src={item.imageUrl} alt={item.name} />
        <CustomButton onClick={() => addItems(item)}>ADD TO CART</CustomButton>
      </div>

      <div className="collection-details">
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItems: item => dispatch(addItems(item))
  };
};

export default connect(null, mapDispatchToProps)(CollectionItem);
