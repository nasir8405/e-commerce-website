import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ProductCard } from "../Products/ProductCard/ProductCard";
import header from "../../Assets/Images/header.jpeg";
import header1 from "../../Assets/Images/header1.jpeg";
import "./Home.css";

export const Home = () => {
  const featuredProducts = useSelector(
    (state) => state.reducer.featuredProducts
  );
  return (
    <>
      <section className="section-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-12 col-lg-6 my-5 d-flex align-items-center">
              <div>
                <h1>
                  Design Your
                  <br /> Comfort Zone
                </h1>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Iusto, at sed omnis corporis doloremque possimus velit!
                  Repudiandae nisi odit, aperiam odio ducimus, obcaecati libero
                  et quia tempora excepturi quis alias?
                </p>
                <Link to="/products" className="my-btn anchor">
                  SHOP NOW
                </Link>
              </div>
            </div>
            <div className="col-sm-12 col-md-10 col-lg-6 my-5 img-container">
              <div className="accent-img1">
                <img src={header} alt="header" height="550px" width="100%" />
              </div>
              <div className="accent-img2">
                <img src={header1} alt="header" width="250px" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-2">
        <div className="container">
          <div className="py-5 text-center">
            <h1 className="my-5">Featured Products</h1>
            <div className="row">
              {featuredProducts.map((product) => {
                return (
                  <div className="col-sm-12 col-md-4 col-lg-4" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                );
              })}
            </div>
            <div className="my-3">
              <Link to="/products" className="my-btn py-2">
                ALL PRODUCTS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
