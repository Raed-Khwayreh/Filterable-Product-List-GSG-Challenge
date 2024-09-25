import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";

const ProductList = ({ list }) => {
  return (
    <div className="products-section">
      {list.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
