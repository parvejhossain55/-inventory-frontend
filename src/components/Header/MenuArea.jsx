import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import { Link } from "react-router-dom";
import { cartCount } from "../../helper/cartHelper";

const LogoArea = () => {
  
  return (
    <>
      <section className="logo-area">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <a href="#">
                  <img src={logo} alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-3">
              <div className="carts-area d-flex">
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <Link to="/">HOME</Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="/shop">SHOP</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5 mb-5">
              <form action="" className="search-bar">
                <input
                  type="text"
                  name="search-bar"
                  placeholder="I'm looking for..."
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
            <div className="col-md-1">
              <div className="carts-btn text-center mt-4">
                <Link to="cart" className="cart-btn">
                  <img src={cart} alt="cart" />
                  {/* <i class="fa fa-shopping-cart" style={{fontSize: "30px"}}></i> */}
                  <span className="translate-middle badge rounded-pill">
                    {0}
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoArea;
