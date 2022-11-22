import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Action } from "../../../Redux/Action/action";
import { Header } from "../../Common/Header/Header";
import "./Cart.css";

export const Cart = () => {
  const cartData = useSelector((state) => state.reducer.cartData);
  const dispatch = useDispatch();
  const increaseProduct = (id) => {
    dispatch(
      Action({
        type: "INCREASEPRODUCT",
        payload: id,
      })
    );
  };
  const decreaseProduct = (id, noOfProducts) => {
    if (noOfProducts > 1) {
      dispatch(
        Action({
          type: "DECREASEPRODUCT",
          payload: id,
        })
      );
    } else {
      removeProduct(id);
    }
  };
  const removeProduct = (id) => {
    dispatch(
      Action({
        type: "REMOVEPRODUCT",
        payload: id,
      })
    );
  };
  const clearCart = () => {
    dispatch(
      Action({
        type: "CLEARCART",
      })
    );
  };
  let subtotal = 0;
  for (let index = 0; index < cartData.length; index++) {
    subtotal = subtotal + cartData[index].subtotal;
  }
  return (
    <div>
      <Header heading=" / Cart " />
      {cartData.length === 0 ? (
        <div className="height d-flex align-items-center justify-content-center">
          <div>
            <h2>Your cart is empty</h2>
            <div className="d-flex align-center justify-content-center">
              <Link to="/products" className="my-btn anchor my-2">
                FILL IT
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div>
            <Table responsive="sm md lg">
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cartData.map((product) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <span className="me-3">
                          <Link to={`/product/${product.id}`}>
                            <img
                              src={product.url}
                              width="80px"
                              height="50px"
                              alt={product.tilte}
                            />
                          </Link>
                        </span>
                        <span>{product.title}</span>
                      </td>
                      <td>{product.price}</td>
                      <td>
                        <span>
                          <button
                            className="counter-btn"
                            onClick={() =>
                              decreaseProduct(product.id, product.noOfProducts)
                            }
                          >
                            -
                          </button>
                        </span>
                        <span>
                          <span className="mx-1 counter-btn">
                            {product.noOfProducts}
                          </span>
                        </span>
                        <span>
                          <button
                            className="counter-btn"
                            onClick={() => increaseProduct(product.id)}
                          >
                            +
                          </button>
                        </span>
                      </td>
                      <td>{product.subtotal}</td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => removeProduct(product.id)}
                        >
                          Remove
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-6 my-3">
                <Link
                  to="/products"
                  className="my-btn cart-btn-1 anchor text-center"
                >
                  Continue Shopping
                </Link>
              </div>
              <div className="col-6 my-3 d-flex justify-content-end">
                <button
                  className="my-btn cart-btn-2"
                  onClick={() => clearCart()}
                >
                  Clear Shopping Cart
                </button>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-end">
              <div className="col-sm-12 col-md-4 col-md-4 p-4 border">
                <div className="p-2 d-flex justify-content-between">
                  <span>
                    <strong>Subtotal : </strong>
                  </span>
                  <span>{subtotal}</span>
                </div>
                <div className="p-2 d-flex justify-content-between">
                  <span>
                    <strong>Shipping Fee : </strong>
                  </span>
                  <span>5.34</span>
                </div>
                <hr />
                <div>
                  <h3 className="p-2 d-flex justify-content-between">
                    <span>
                      <strong>Order Total : </strong>
                    </span>
                    <span>
                      <strong>{subtotal + 5.34}</strong>
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row d-flex justify-content-end my-3">
              <div className="col-sm-12 col-md-4 col-lg-4 p-0">
                <button className="my-btn checkout-btn">Checkout</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
