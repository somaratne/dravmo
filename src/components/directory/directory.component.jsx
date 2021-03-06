import React from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "shop/hats"
        },
        {
          title: "jackets",
          imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
          id: 2,
          linkUrl: "shop/jackets"
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
          id: 3,
          linkUrl: "shop/sneakers"
        }
      ],
      sex: [
        {
          title: "womens",
          imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
          size: "large",
          id: 4,
          linkUrl: "shop/womens"
        },
        {
          title: "mens",
          imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
          size: "large",
          id: 5,
          linkUrl: "shop/mens"
        }
      ]
    };
  }

  render() {
    const { sections, sex } = this.state;
    return (
      <div className="directory">
        <div className="row">
          {sections.map(({ title, imageUrl, id, linkUrl }) => (
            <div className="col-1-3" key={title}>
              <MenuItem
                key={id}
                linkUrl={linkUrl}
                imageUrl={imageUrl}
                title={title}
              />
            </div>
          ))}
        </div>
        <div className="row">
          {sex.map(({ title, imageUrl, id, linkUrl }) => (
            <div className="col-1-2" key={title}>
              <MenuItem
                key={id}
                title={title}
                linkUrl={linkUrl}
                imageUrl={imageUrl}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Directory;
