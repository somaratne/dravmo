import React from "react";
import "./collection-item.styles.scss";

const CollectionItem = ({ item }) => {
  return (
    <div className="col-1-4">
      <div className="collection-item">
        <img src={item.imageUrl} alt={item.name} />
        <button type="submit">CHECK OUT</button>
      </div>
      <div className="collection-details">
        <span>{item.name}</span>
        <span>${item.price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
