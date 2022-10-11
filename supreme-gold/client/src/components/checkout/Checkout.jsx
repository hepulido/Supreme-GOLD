import { React, useState, useEffect, useContext } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CartContext } from "../../CartContext";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe("pk_test_51Ll5J2JOYhL55ByMxw2Kx5Qs060kJbKWmDE6H0k8x4TmYo63lSgGp4MMQIklXHuTco9rOoKc4yhVYbaWvPa0znf90093Ye30K3");

export default function Checkout() {
  const { cartProducts } = useContext(CartContext);
  const [clientSecret, setClientSecret] = useState("");

  const total = cartProducts.reduce(function (acc, obj) { return acc + obj.price; }, 0);
  console.log("result ",total)
  
  useEffect(() => {
    
  fetch('/create-checkout-session', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
    
      body: JSON.stringify(
       {total: total}
      ),
    })
      .then((r) => {
        if(r.ok){
          r.json() 
          .then((data) => {
            console.log(data)
            console.log(cartProducts)
            setClientSecret(data.clientSecret)
          })
        }else {
          r.json().then((err) => console.error(err))
        }
      })
     
    }, []);
  
  
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

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className="App">
    {cartProducts.map(productDisplay)}
    <div className="justify-content">
        {total !== 0 && <h2> Total: {total}</h2>}
      </div>
      {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )}
     
    </div>
  );
}

  
