import React, { useContext } from "react";
import StripeCheckout from "react-stripe-checkout"
// import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";

export default function Cart() {
  const { cartProducts} = useContext(CartContext);
  console.log("Cart products: ", cartProducts);
  const handleToken = (token,address) => {
    console.log({token,address});
  }
  // console.log("carProduct1:",currentProduct)
//   const handleCart = (product) => {
//     setCartProducts([...cartProducts, product]);
    
// };
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
            <h2 className="my-4">${cartItem.price.product_price}</h2>
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

  const checkoutButton = () => {
    return (
      <div className="container py-4">
        <div className="row">
        <StripeCheckout stripKey="pk_test_51Ll5J2JOYhL55ByMxw2Kx5Qs060kJbKWmDE6H0k8x4TmYo63lSgGp4MMQIklXHuTco9rOoKc4yhVYbaWvPa0znf90093Ye30K3"
        token={handleToken}
        billingAddress
        shippingAddress
        amount={cartItems.price.product_price * 100}
         />
        </div>
      </div>
    );
  };

  return (
    <>
      {cartProducts.length === 0 && emptyCart()}
      {cartProducts.length !== 0 && cartProducts.map(cartItems)}
      {checkoutButton()}
    </>
  );
}
