import React, { Component } from "react";
import PropTypes from "prop-types";
import Link from "next/link";

import Title from "./styles/Title";
import ItemStyles from "./styles/ItemStyles";
import PriceTag from "./styles/PriceTag";
import DeleteItemButton from "./DeleteItemButton";

import formatMoney from "../lib/formatMoney";

export class Item extends Component {
  static propTypes = {
    // item: PropTypes.shape({
    //   title: PropTypes.string.isRequired,
    //   price: PropTypes.number.isRequired,
    // }),
    item: PropTypes.object.isRequired,
  };

  render() {
    const { item } = this.props;

    const { id, title, price, description, image } = item;

    return (
      <ItemStyles>
        {image && <img src={image} alt="" />}

        <Link href={{ pathname: "/item", query: { id } }}>
          <a>
            <Title>{title}</Title>
          </a>
        </Link>
        <PriceTag>{formatMoney(price)}</PriceTag>
        <p>{description}</p>
        <div className="buttonList">
          <Link href={{ pathname: "/update", query: { id } }}>
            <a>Edit ✏️</a>
          </Link>
          <button>Add to cart</button>
          <DeleteItemButton id={id}>Delete this item</DeleteItemButton>
        </div>
      </ItemStyles>
    );
  }
}

export default Item;
