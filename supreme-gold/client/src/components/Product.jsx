import React from 'react'
import { Link } from 'react-router-dom';

export default function Product({products, handleOnProduct}) {
  
  
  const cardItem = (products) => {
    return (
      <div className="card my-5 py-4" key={products.id} style={{width: "18rem"}}>
      <img src={products.img} className="card-img-top" alt={products.title}/>
      <div className="card-body text-center">
        <h5 className="card-title">{products.title}</h5>
        <p className="lead">${products.price}</p>
        <Link to={`/products/${products.id}`} onClick={() =>{handleOnProduct(products)}} className="btn btn-outline-primary">Buy Now</Link>
      </div>
    </div>
    );
  }
  
  return (
   <div>
    <div className="container my-5 py-5">
     <div className="row ">
      <div className="col-12 text-center ">
        <h1>Product</h1>
        <hr/>
      </div>
     </div>
    </div>
     <div className = "container">
        <div className="row ">
          {products.map(cardItem)}
        </div>
     </div>
   </div>
  )
}
