import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductCard } from "../ProductCard/ProductCard";
import { Action } from "../../../Redux/Action/action";
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
          return (
            <div key={product.id} className="col-sm-12 col-md-4 col-lg-4">
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>
    </div>
  );
};
