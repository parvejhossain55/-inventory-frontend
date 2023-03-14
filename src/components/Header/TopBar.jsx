import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <>
      <section className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3">
              <div className="top-left d-flex">
                <div class="call-us">
                  <p>
                    <i className="fa fa-regular fa-phone" style={{marginRight: "5px"}}></i>
                    +880 1303027603
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-8 col-md-9">
              <div className="top-right" style={{ textAlign: "right" }}>
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <Link to="track-order">
                      <i class="fa fa-light fa-truck"></i>
                      Track My Order
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="login">
                      <i
                        class="fa fa-light fa-lock"
                        style={{ fontSize: "16px" }}
                      ></i>
                      My Account
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="wishlist">
                      <i class="fa fa-light fa-heart"></i>
                      Wishlist
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="checkout">
                      <i class="fa fa-light fa-share"></i>
                      Checkout
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="register">
                      <i class="fa fa-light fa-user"></i>
                      Register
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TopBar;
