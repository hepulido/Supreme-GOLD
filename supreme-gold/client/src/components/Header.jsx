import { React, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import CartBtn from "./buttons/CartBtn";
import Login from "./buttons/Login";
import Signup from "./buttons/Signup";
import MyOrderBtn from "./buttons/MyOrderBtn";

export default function Header({ handleLogout }) {
  const { user } = useContext(CartContext);
  
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid py-2">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <Link className="navbar-brand mx-auto fw-bold" to="/">
              <h1>SupremeGOLD</h1>
            </Link>
            {!user && <Login handleLogout={handleLogout} />}
            {!user && <Signup />}
            <CartBtn />
            <MyOrderBtn />
            {user && <button className="btn btn-outline-primary ms-2" onClick={handleLogout}>
            <span className="fa fa-user-plus me-1"></span>  Logout
            </button>}
          </div>
        </div>
      </nav>
    </>
  );
}
