import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Alert } from "react-bootstrap";

import { CartContext } from "../CartContext";

export default function Cart({ products, handleDeleted }) {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  const { user } = useContext(CartContext);
  let {id, qty} = products;
  
  let handleUpdate = async (product) => {
    const newCartProducts = cartProducts.map((item) => {
      return item.id === product.id ? product : item
    })
    setCartProducts(newCartProducts)
    // debugger
    await fetch(`/carts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        newCartProducts,
        qty: qty
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  let handleDeleteProduct = async (product) => {
    let deleteProductCart = cartProducts.filter((productId) => {
      return product.id !== productId
    })
    console.log("destroy ",deleteProductCart)
      setCartProducts(deleteProductCart)
      await fetch(`/carts/${id}/delete_product`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        newCartProducts,
       
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  // let deleteProductCart = (productId) => {
  //   cartProducts.filter((product) => product.id !== productId);
    
  // };

  let handleDelete = (products) => {
    products.splice(0, products.length)
    fetch(`/carts/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => handleDeleted(products));
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
  // ar.splice(0, ar.length);
  
  
  console.log("result ", total);

  const cartItems = (cartItem, i) => {
    return (
      <div key={i} className="container my-5 py-3">
        <button
          onClick={() => {
            handleDeleteProduct(cartItem);
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
                  cartItem.qty++
                  handleUpdate(cartItem);
                }}
              >
                +
              </button>
              <button
                className="btn btn-outline-primary btn-sm"
                onClick={() => {
                  if (cartItem.qty > 0){
                    cartItem.qty--
                    handleUpdate(cartItem ) 
                  }
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
     <div className="container ">
        <div className="d-lg-flex  justify-content-end">
          {cartProducts.length !== 0 &&
          <button onClick={() => {
                 handleDelete(cartProducts);
                }} 
                className="btn btn-outline-primary my-5 "
            
            >
              Delete All The Products On Cart
            </button>
          }
          </div>
        </div>
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
