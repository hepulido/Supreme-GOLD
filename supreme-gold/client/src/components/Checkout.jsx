import React, { useContext,  useState  } from "react";
// import StripeCheckout from "react-stripe-checkout"
import { CartContext } from "../CartContext";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"

const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
} 
export default function Checkout() {
  const { cartProducts} = useContext(CartContext);
  const [success, setSuccess] = useState(false)
  const stripe = useStripe()
  const elements = useElements()

  const handleSumit = async (e) => {
    e.preventDefault()
    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type:"card",
      card: elements.getElement(CardElement)
    })
  
  if(!error){
    try{
      const {id} = paymentMethod
      const response = await axios.post("http://localhost:3000/checkout",{
        amount: cartProducts.product_price,
        id
      })
      if(response.data.success){
        console.log("Success payment")
        setSuccess(true)
      }
    }catch(error){
     console.log("Error", error)
    }
  } else {
    console.log(error.message)
  }
}
  return (
    <>
     {!success?
     <form onSubmit={handleSumit}>
      <fieldset className="formGroup">
        <div className="formRow">
          <CardElement options={CARD_OPTIONS}/>
        </div>
      </fieldset>
      <button className="btn-checkout">Pay</button>
     </form>
     :
     <div>
      <h2>Congrats, you purchase is completed! </h2>
     </div>
     }
    </>
  );
}


