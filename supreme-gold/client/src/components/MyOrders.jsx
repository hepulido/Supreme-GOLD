import React, { useContext } from "react";
import { CartContext } from "../CartContext";

export default function Myorders() {
    const { cartProducts} = useContext(CartContext);
   
      const cartItems = (cartItem) => {
       return (
          <div className="container my-5 py-3">
           <button
                // onclik={() => handleClose(cartItem)}
                className="btn-close float-end"
                aria-label="close"
              ></button>
            <div className="row">
            <div className="col-md-6 d-flex justify-content-center mx-auto product">
                <img
                  src={cartItem.img}
                  alt={cartItem.title}
                  height="300px"
                />
              </div>
              <div className="col-md-6 d-flex flex-column justify-content-center">
                <h1 className="display-5 fw-bold">{cartItem.title}</h1>
                <hr />
                <p className="lead">{cartItem.desc}</p>
                <h2 className="my-4">${cartItem.product.price}</h2>
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
    
      
    
      return (
        <>
          {cartProducts.length === 0 && emptyCart()}
          {cartProducts.length !== 0 && cartProducts.map(cartItems)}
        </>
  )
}
