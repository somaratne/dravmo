import React from "react";
import { SHOP_DATA } from "./../../data/ShopData";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import "./shop-page.styles.scss";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: []
    };
  }

  componentDidMount() {
    this.setState({ collection: SHOP_DATA });
  }

  render() {
    const { collection } = this.state;
    return (
      <div>
        <h1 className="shop-page-header">SHOP PAGE</h1>
        <CollectionPreview collection={collection} />
      </div>
    );
  }
}

export default ShopPage;
