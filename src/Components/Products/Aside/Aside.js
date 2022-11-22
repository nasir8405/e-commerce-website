import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { Action } from "../../../Redux/Action/action";
import "./Aside.css";

export const Aside = () => {
  const productType = useSelector((state) => state.reducer.productType);
  const params = useParams();
  const dispatch = useDispatch();
  const onChangeHandle = (e) => {
    dispatch(Action({ type: params.type }));
    dispatch(Action({ type: "SEARCH", payload: e.target.value }));
    if (e.target.value === "") {
      dispatch(Action({ type: params.type }));
    }
  };
  return (
    <div className="col-sm-12 col-md-12 col-lg-3">
      <input
        placeholder="search"
        onChange={(e) => onChangeHandle(e)}
        className="search-input"
      />
      <div className="mt-3">
        <strong>Category</strong>
      </div>
      <ul className="p-2">
        {productType.map((productType) => {
          return (
            <li key={productType.id} className="py-1">
              <Link
                to={`/products/${productType.type}`}
                className="anchor text-dark"
              >
                {productType.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
