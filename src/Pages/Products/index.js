import React from "react";
import { Header } from "../../Components/Common/Header/Header";
import { Aside } from "../../Components/Products/Aside/Aside";
import { Products } from "../../Components/Products/Products/Products";

const ProductPage = () => {
  return (
    <div>
      <Header heading=" / Products" />
      <div className="container">
        <div className="row py-5">
          <Aside />
          <Products />
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
