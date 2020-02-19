import React from "react";
import CollectionItem from "./../collection-item/collection-item.component";
import "./collection-preview.styles.scss";

const CollectionPreview = ({ collection }) => {
  return (
    <div>
      {collection.map(category => (
        <div key={category.id} className="row">
          <h1 className="collection-preview-title">{category.title}</h1>
          <div>
            {category.items.map((item, idx) =>
              idx < 4 ? <CollectionItem key={item.id} item={item} /> : null
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionPreview;
