import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

import { CartContext } from "../CartContext";

export default function Cart({ products, handleDeleted }) {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const { user } = useContext(CartContext);

  let handleUpdate = async (product, id) => {
    const newCartProducts = [...cartProducts, { ...product, qty: 0 }];
    await fetch(`/cart/${product.id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        newCartProducts,
        product_quantity: newCartProducts.qty,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  let handleDelete = (product, id) => {
    fetch(`/cart/${product.id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => handleDeleted(product.id));
  };

  const newCartProducts = [...cartProducts];
  const handlePostOrder = async () => {
    await fetch("/orders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({ newCartProducts }),
    }).then((r) => {
      if (r.ok) {
        r.json().then((data) => {
          console.log("data", [data]);
          console.log([...cartProducts]);
        });
      } else {
        r.json().then((err) => console.error(err));
      }
    });
  };

  const total = cartProducts.reduce(function (acc, obj) {
    return acc + obj.price;
  }, 0);
  console.log("result ", total);

  const cartItems = (cartItem, i) => {
    return (
      <div key={i} className="container my-5 py-3">
        <button
          onClick={() => {
            handleDelete(cartItem);
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
              <span>Quantity: {cartItem.qty} </span>
            </h4>
            <div className="d-grid gap-2 col-6 d-md-flex ">
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => {
                  handleUpdate(
                    setCartProducts((cart) =>
                      cart.map((item) =>
                        cartItem.title === item.title
                          ? { ...item, qty: item.qty + 1 }
                          : item
                      )
                    )
                  );
                }}
              >
                +
              </button>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => {
                  handleUpdate(
                    setCartProducts((cart) =>
                      cart.map((item) =>
                        cartItem.title === item.title
                          ? { ...item, qty: item.qty - 1 }
                          : item
                      )
                    )
                  );
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
  console.log("cartProducts", cartProducts);
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
              <Link
                onClick={() => {
                  // handleCart(currentProduct)
                  handlePostOrder();
                }}
                to="/checkout"
                className="btn btn-outline-primary btn-lg"
              >
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
