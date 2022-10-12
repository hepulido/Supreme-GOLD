import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { CartContext } from "../CartContext";

export default function ProductDetail({ currentProduct }) {
  const [cartBtn, setCartBtn] = useState("Add to Cart");
  const { cartProducts, setCartProducts } = useContext(CartContext);

  useEffect(() => {
    console.log("setCartProducts", cartProducts);
  });

  const handlePostCart = async (product) => {
    const newCartProducts = [...cartProducts, { ...product, qty: 0 }];
    console.log("newCartProducts ", newCartProducts);
    if (cartBtn === "Add to Cart") {
      setCartProducts(newCartProducts);
      setCartBtn("Remove from Cart");
    } else {
      setCartBtn("Add to Cart");
    }

    await fetch("/show-add-cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        newCartProducts,
      }),
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

  return (
    <>
      <div className="container my-5 py-3">
        <div className="row">
          <div className="col-md-6 d-flex justify-content-center mx-auto product">
            <img
              src={currentProduct.img}
              alt={currentProduct.title}
              height="500px"
            />
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            <h1 className="display-5 fw-bold">{currentProduct.title}</h1>
            <hr />
            <p className="lead">{currentProduct.desc}</p>
            <h2 className="my-4">${currentProduct.price}</h2>
            <button
              onClick={() => {
                // handleCart(currentProduct)
                handlePostCart(currentProduct);
              }}
              className="btn btn-outline-primary my-5"
            >
              {cartBtn}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
