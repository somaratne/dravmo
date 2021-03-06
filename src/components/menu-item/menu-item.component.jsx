import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.styles.scss";

const MenuItem = ({ title, linkUrl, imageUrl, history }) => {
  return (
    <div className="menu-item" onClick={() => history.push(`${linkUrl}`)}>
      <img src={imageUrl} alt={title} />
      <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
