import React from "react";
import { Link } from "react-router-dom";
import { HeaderSection } from "../Common/HeaderSection";

export const Cart = () => {
  return (
    <div>
      <HeaderSection heading=" / Cart " />
      <section className="cart-container">
        <div>
          <h2>Your cart is empty</h2>
          <div className="d-flex align-center justify-content-center">
            <Link to="/products" className="my-btn anchor my-2">
              FILL IT
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
