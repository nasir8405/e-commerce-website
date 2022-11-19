import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Action } from "../../Redux/Action/action";
import { CLEARCART } from "../../Redux/type";
import { HeaderSection } from "../Common/HeaderSection";

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
        type: CLEARCART,
      })
    );
  };
  let subtotal = 0;
  for (let index = 0; index < cartData.length; index++) {
    subtotal = subtotal + cartData[index].subtotal;
  }
  return (
    <div>
      <HeaderSection heading=" / Cart " />
      <section className="cart-container">
        {cartData.length === 0 ? (
          <div className="height d-flex align-items-center">
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
          <div className="container py-5">
            <table className="w-100 cart-table">
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
                {cartData.map((product, index) => {
                  return (
                    <tr key={product.id}>
                      <td>
                        <span className="me-3">
                          <img
                            src={product.url}
                            width="80px"
                            alt={product.tilte}
                          />
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
            </table>
            <hr />
            <div className="d-flex justify-content-between mb-4">
              <Link to="/products" className="my-btn cart-btn-1 anchor">
                Continue Shopping
              </Link>
              <button className="my-btn cart-btn-2" onClick={() => clearCart()}>
                Clear Shopping Cart
              </button>
            </div>
            <div className="row d-flex justify-content-end">
              <div className="col-4 p-4 border">
                <div className="p-2 align-text-space">
                  <span>
                    <strong>Subtotal : </strong>
                  </span>
                  <span>{subtotal}</span>
                </div>
                <div className="p-2 align-text-space">
                  <span>
                    <strong>Shipping Fee : </strong>
                  </span>
                  <span>5.34</span>
                </div>
                <hr />
                <div>
                  <h3 className="p-2 align-text-space">
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
            <div className="row d-flex justify-content-end my-3">
              <div className="col-4 p-0">
                <button className="my-btn checkout-btn">Checkout</button>
              </div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
};
