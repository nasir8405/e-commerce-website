import React from "react";
import { Link } from "react-router-dom";

export const HeaderSection = ({ heading, product }) => {
  return (
    <section className="about-section-1">
      <div className="container about-header">
        <h3>
          <Link className="anchor header-ancor text-dark" to="/">
            Home
          </Link>
          <Link className="anchor header-ancor text-dark" to="/products">
            {product}
          </Link>
          {heading}
        </h3>
      </div>
    </section>
  );
};
