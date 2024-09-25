import React from "react";
import "./ProductList.css";
import { productsList } from "../../mocks";
import Product from "../Product/Product";

const ProductList = () => {
  return (
    <div className="products-section">
      {productsList.map((product, index) => (
        <Product key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
