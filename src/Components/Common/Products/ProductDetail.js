import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { HeaderSection } from "../HeaderSection";

export const ProductDetail = () => {
  const products = useSelector((state) => state.reducer.products);
  const params = useParams();
  const product = products.find((item) => {
    return item.id === params.id;
  });
  const [url, setImageUrl] = useState(product.url);
  const setUrl = (e, url) => {
    setImageUrl(url);
  };
  return (
    <>
      <HeaderSection heading={`/ Products / ${product.title}`} />
      <section className="container">
        <div className="row py-5">
          <div className="col-6">
            <div>
              <img src={url} alt="about" width="100%" height="500px" />
            </div>
            <div className="row">
              {product.moreurl.map((url, index) => {
                return (
                  <div className="col-3 my-3" key={index}>
                    <button
                      onClick={(e) => setUrl(e, url)}
                      className={`imageUrlBtn`}
                    >
                      <img src={url} width="100%" height="80px" alt="url" />
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="col-6 d-flex align-items-center">
            <div>
              <div>
                <h1>{product.title}</h1>
                <p>
                  Cloud bread VHS hell of banjo bicycle rights jianbing umami
                  mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr
                  dreamcatcher waistcoat, authentic chillwave trust fund. Viral
                  typewriter fingerstache pinterest pork belly narwhal. Schlitz
                  venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki
                  trust fund hashtag kinfolk microdosing gochujang live-edge
                </p>
                <p>
                  <strong>Available : </strong>
                  {product.stocks}
                </p>
                <p>
                  <strong>SKU : </strong>
                  {product.sku}
                </p>
                <p>
                  <strong>Brand : </strong>
                  {product.brand}
                </p>
                <hr />
              </div>
              <div>
                <p>
                  <strong>price : </strong>
                  {product.price}
                </p>
              </div>
              <div>
                <div>
                  <button>-</button>1<button>+</button>
                </div>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
