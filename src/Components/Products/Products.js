import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../Common/Products/ProductCard";
import { Action } from "../../Redux/Action/action";
import { useParams } from "react-router-dom";
export const Products = () => {
  const selectedProducts = useSelector(
    (state) => state.reducer.selectedProducts
  );
  const dispatch = useDispatch();
  const params = useParams();
  useEffect(() => {
    dispatch(Action({ type: params.type }));
  }, [dispatch, params.type]);

  return (
    <div className="col-sm-12 col-md-12 col-lg-9">
      <div className="row">
        {selectedProducts.map((product) => {
          return <ProductCard product={product} key={product.id} />;
        })}
      </div>
    </div>
  );
};
