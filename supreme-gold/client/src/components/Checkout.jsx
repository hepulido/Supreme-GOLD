import { React, useState, useEffect, useContext } from "react";
import { CartContext } from "../CartContext";

export default function Checkout() {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  
  const handleCheckout = async(e) => {
    e.preventDefault();
    await fetch('/create-checkout-session', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    
      body: JSON.stringify(
        {cartProduct: cartProducts}
      ),
    })
      .then((r) => {
        if(r.ok){
          r.json() 
          .then((data) => {
            console.log(data)
            console.log(cartProducts)
            setCartProducts([...cartProducts])
          })
        }else {
          r.json().then((err) => console.error(err))
        }
      })
     
  }
  
  
  const productDisplay = (cartItem) => (
    <section>
      <div className="product">
        <img src={cartItem.img} alt={cartItem.title} height="300px" />
        <div className="description">
          <h3>{cartItem.title}</h3>
          <h5>{cartItem.price}</h5>
        </div>
      </div>
    </section>
  );

  const Message = ({ message }) => (
    <section>
      <p>{message}</p>
    </section>
  );

  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  return message ? (
    <Message message={message} />
  ) : (
    <>
      {cartProducts.map(productDisplay)}
      {cartProducts.length > 0 &&  <form onSubmit={handleCheckout}>
        <button type="submit">Checkout</button>
      </form>}
    </>
  );
}
