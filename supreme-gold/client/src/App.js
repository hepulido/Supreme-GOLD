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
import Checkout from "./components/Checkout";
import { React, useState, useEffect } from "react";
import { CartContext } from "./CartContext";


function App() {
  const [products, setProducts] = useState([]);
  const [currentProduct, setCurrentProduct] = useState({});
  const [cartProducts, setCartProducts] = useState([]);
  
  
  
  console.log("Products: ", products);
  useEffect(() => {
    fetch("/products")
      .then((res) => res.json())
      .then((productsArr) => {
        setProducts([...productsArr]);
      });
  }, []);
  
  
 

 
  console.log("Products: ", products);
  const handleOnProduct = (product) => setCurrentProduct({ ...product });

  return (
    <>
      
      <CartContext.Provider value={{ cartProducts, setCartProducts }}>
      <Header   />
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
          <Route exact path="/cart" element={<Cart currentProduct={currentProduct}/>} />
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
