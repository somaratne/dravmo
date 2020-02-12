import React from "react";
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl }) => {
  return (
    <div className="menu-item">
      <img src={imageUrl} alt={title} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default MenuItem;
