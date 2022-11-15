import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductCard } from "../Common/Products/ProductCard";
import header from "../../Assets/Images/header.jpeg";
import header1 from "../../Assets/Images/header1.jpeg";
export const Home = () => {
  const featuredProducts = useSelector(
    (state) => state.reducer.featuredProducts
  );
  return (
    <>
      <section className="container">
        <div className="row header-content-container">
          <div className="col-sm-12 col-md-12 my-5 col-lg-6">
            <h1>
              Design Your
              <br /> Comfort Zone
            </h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto,
              at sed omnis corporis doloremque possimus velit! Repudiandae nisi
              odit, aperiam odio ducimus, obcaecati libero et quia tempora
              excepturi quis alias?
            </p>
            <Link to="/products" className="my-btn anchor">
              SHOP NOW
            </Link>
          </div>
          <div className="col-sm-12 col-md-10 col-lg-6 my-5 img-container">
            <div className="accent-img1">
              <img src={header} alt="header" height="550px" />
            </div>
            <div className="accent-img2">
              <img src={header1} alt="header" width="250px" />
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container py-5 text-center">
          <h1 className="my-5">Featured Products</h1>
          <div className="row">
            {featuredProducts.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
          <div className="my-3">
            <Link to="/products" className="my-btn anchor py-2">
              ALL PRODUCTS
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
