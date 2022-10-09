import { React, useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Product from "./components/Product";
import Contact from "./components/Contact";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import Cart from "./components/Cart";
import MyOrders from "./components/MyOrders";
import Checkout from "./components/Checkout";
import { CartContext } from "./CartContext";



function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  
  
  console.log("Products: ", products);
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((productsArr) => {
        setProducts([...productsArr]);
      });
  }, []);
  
  useEffect (() => {
  fetch("/me").then((response) => {
    if (response.ok) {
      response.json().then((user) => {
        setUser(user)
        })
    } else {
      response.json().then((err) => console.error(err))
    }
  })
  
}, []);

useEffect ((product) =>  {
  // const newCartProducts = [...cartProducts, product]
  // setCartProducts(newCartProducts)
  fetch("/user-cart").then((response) => {
    if (response.ok) {
      response.json().then((data) => {
        console.log(data)
      })
    } else {
      response.json().then((err) => console.error(err))
    }
  })
} , []);

const handleLogout = () => {
  fetch("/logout", {
    method: 'DELETE',
  }).then((response) => {
    if (response.ok) setUser(null)
  })
}
  
let addCart = (newCart) => {
  let newCartArr = [...cart, newCart]
  setCart(newCartArr)
  }
  
  
  let updateCart = (updatedCart) => {
    let updatedDogsArr = cart.map(cart => {
       if(cart.id === updatedCart.id){
         return updateCart
      } else {
        return Cart
    }
  })
   setCart(updatedDogsArr)
}
 
let deleteProductCart = (productId) => {
  let deleted = cartProducts.filter(product=> product.id !== productId)
  setCart(deleted)
}
  
const handleOnProduct = (product) => setCurrentProduct({ ...product });

  return (
    <>
      
      <CartContext.Provider value={{ cartProducts, setCartProducts, user , setUser, cart, setCart}}>
      <Header  handleLogout={handleLogout}  />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home products={products} handleOnProduct={handleOnProduct} />
            }
          />
          <Route
            path="/products"
            element={
              <Product products={products} handleOnProduct={handleOnProduct} />
            }
          />
          <Route
            exact
            path="/products/:id"
            element={<ProductDetail currentProduct={currentProduct} />}
          />
          <Route exact path="/cart" element={<Cart products={products} currentProduct={currentProduct} handleDeleted={deleteProductCart}/>} />
          <Route exact path="/MyOrders" element={<MyOrders/>} />
          <Route exact path="/checkout" element={<Checkout />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </CartContext.Provider>
      <Footer />
    </>
  );
}

export default App;
