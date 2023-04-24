import React, { useEffect, useState } from "react";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";
import { Link, useNavigate } from "react-router-dom";
import { loadCart } from "../../apiRequest";
import { useGlobalContext } from "../../context/gobalContext";

const LogoArea = () => {
  const navigate = useNavigate();
  const { countCart } = useGlobalContext();

  const handleSearch = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search");
    navigate("/search", { state: search });
  };

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
              <form onSubmit={handleSearch} className="search-bar">
                <input
                  type="text"
                  name="search"
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
                  <span className="translate-middle badge rounded-pill">
                    {countCart}
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
