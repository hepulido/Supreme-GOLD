import React, { useContext } from "react";
import {Link} from 'react-router-dom'
import { CartContext } from "../../CartContext";

export default function CartBtn() {
  const { cartProducts } = useContext(CartContext);
  return (
    <>
       <Link to="/cart" className="btn btn-outline-primary ms-2">
       <span className="fa fa-shopping-cart me-1">Cart({cartProducts.length})</span> 
       </Link>
    </>
  )
}
