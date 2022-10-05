import React from 'react'
import {Link} from 'react-router-dom'

export default function MyOrderBtn() {
   
    return (
      <>
         <Link to="/MyOrders" className="btn btn-outline-primary ms-2">
       <span className="fa fa-shopping-cart me-1">My Orders</span> 
       </Link>
      </>
  )
}
