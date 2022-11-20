import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="anchor text-dark">
      <div>
        <img width="100%" height="225px" src={product.url} alt={product.alt} />
      </div>
      <div className="d-flex justify-content-between py-3">
        <span>{product.title}</span>
        <span>{product.price}</span>
      </div>
    </Link>
  );
};
