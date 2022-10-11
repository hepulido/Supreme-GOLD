import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Container, Alert } from "react-bootstrap";
// import StripeCheckout from "react-stripe-checkout"
// import { Link } from "react-router-dom";
// import Checkout from "./Checkout";
import { CartContext } from "../CartContext";


export default function Cart({ products, handleDeleted }) {
  const { cartProducts } = useContext(CartContext);
  const [count, setCount] = useState(1);
  const { user } = useContext(CartContext);

  let handleDelete = (e) => {
    fetch(`http://localhost:9292/dogs/${id}`, {
         method: "DELETE"
     })
         .then(res => res.json())
         .then(() => handleDeleted(id))
 }

  const newCartProducts = [...cartProducts];
  const total = cartProducts.reduce(function (acc, obj) {
    return acc + obj.price;
  }, 0);
  console.log("result ", total);
  const cartItems = (cartItem, i) => {
    return (
      <div key={i} className="container my-5 py-3">
        <button
          onClick={() => {
            handleDeleted(cartItem);
            // handledestroy(cartItem);
          }}
          className="btn-close float-end"
          aria-label="close"
        ></button>
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img src={cartItem.img} alt={cartItem.title} height="300px" />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{cartItem.title}</h1>
            <hr />
            <p className="lead">{cartItem.desc}</p>
            <h2 className="my-4">${cartItem.price}</h2>
            <h4>
              <span>Quantity {(cartProducts.qty = count)} </span>
            </h4>
            <div className="d-grid gap-2 col-6 d-md-flex ">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => setCount(count + 1)}
              >
                +
              </button>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => {
                  cartProducts.qty > 1 ? setCount(count - 1) : setCount(1);
                }}
              >
                -
              </button>
            </div>

            {/* <button
              onClick={() => handleCart(currentProduct)}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
              </button> */}
          </div>
        </div>
      </div>
    );
  };

  const emptyCart = () => {
    return (
      <div className="px-4 my-5 bg-light rounded-3 py-5">
        <div className="container py-4">
          <div className="row">
            <h3> Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  // const checkoutButton = () => {
  //   return (
  //     <div className="container py-4">
  //       <div className="row">
  //       <Link to="/checkout" className="btn btn-outline-primary ms-2">
  //      <span>Checkout</span>
  //      </Link>
  //       </div>
  //     </div>
  //   );
  // };

  console.log(newCartProducts);

  return (
    <>
      {cartProducts.length === 0 && emptyCart()}
      {cartProducts.length !== 0 && cartProducts.map(cartItems)}
      <div className="container py-4">
        <div className="row">
          <div className="d-lg-flex  justify-content-end">
            {total !== 0 && <h2> Total: {total}</h2>}
          </div>
        </div>
      </div>
      <div className="container py-4">
        <div className="row">
          <div className="d-grid col-6 d-md-flex justify-content-md-end">
            {user ? (
              <Link to="/checkout" className="btn btn-outline-primary btn-lg">
                <span>Checkout</span>
              </Link>
            ) : (
              <Alert variant="primary">
                To continue with your purchase, please Login.
                </Alert>
             
            )}
          </div>
        </div>
      </div>
    </>
  );
}
