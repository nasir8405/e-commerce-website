import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export const Header = ({ heading, product }) => {
  return (
    <section className="header-container">
      <div className="container">
        <h3>
          <Link className="header-link" to="/">
            Home
          </Link>
          <Link className="header-link" to="/products">
            {product}
          </Link>
          {heading}
        </h3>
      </div>
    </section>
  );
};
