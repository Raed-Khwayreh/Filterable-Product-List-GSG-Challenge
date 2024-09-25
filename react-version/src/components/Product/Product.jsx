import React from "react";
import "./Product.css";

const Product = ({ product }) => {
  return (
    <div className="product">
      <h2>{product.name}</h2>
      <p>Category: {product.category}</p>
      <p class="price">{`${product.price.toFixed(2)}$`}</p>
    </div>
  );
};

export default Product;
