import React from "react";
import { HeaderSection } from "../../Components/Common/HeaderSection";
import { Aside } from "../../Components/Products/Aside";
import { Products } from "../../Components/Products/Products";

const ProductPage = () => {
  return (
    <div>
      <HeaderSection heading=" / Products" />
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
