import React from "react";
import { Link } from "react-router-dom";

export const ProductCard = ({ product }) => {
  return (
    <div className="col-sm-12 col-md-4 col-lg-4">
      <Link to={`/products/${product.id}`} className="anchor text-dark">
        <div>
          <img
            width="100%"
            height="225px"
            src={product.url}
            alt={product.alt}
          />
        </div>
        <div className="d-flex justify-content-between py-3">
          <span>{product.title}</span>
          <span>{product.price}</span>
        </div>
      </Link>
    </div>
  );
};