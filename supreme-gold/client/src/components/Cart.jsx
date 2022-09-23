import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

export default function Cart() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  console.log("Cart products: ", cartProducts);

  const cartItems = (cartItem) => {
    return (
      <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
        <div className="container py-4">
          <button
            // onclik={() => handleClose(cartItem)}
            className="btn-close float-end"
            aria-label="close"
          ></button>
          <div className="row justify-content-center">
            <div className="col-md-4">
              <img
                src={cartItem.img}
                alt={cartItem.title}
                height="500px"
                width="500px"
              />
            </div>
            <div className="col-md-4">
              <h3>{cartItem.title}</h3>
              <p className="lead fw bold">${cartItem.price}</p>
            </div>
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

  const checkoutButton = () => {
    return (
      <div className="container py-4">
        <div className="row">
          <button>Proceed to checkout</button>
        </div>
      </div>
    );
  };

  return (
    <>
      {emptyCart()}
      {cartItems}
      {checkoutButton()}
    </>
  );
}
