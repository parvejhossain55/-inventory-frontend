import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { checkAuth } from "../../apiRequest";

const TopBar = () => {
  const [login, setLogin] = useState(false);
  const naviagate = useNavigate();

  useEffect(() => {
    const data = localStorage.getItem("auth");
    if (data) {
      checkLogin();
    }
  });

  const checkLogin = async () => {
    const { ok } = await checkAuth();
    setLogin(ok);
  };

  const logout = async () => {
    localStorage.clear();
    setLogin(false);
  };

  return (
    <>
      <section className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-3">
              <div className="top-left d-flex">
                <div className="call-us">
                  <p>
                    <i
                      className="fa fa-regular fa-phone"
                      style={{ marginRight: "5px" }}
                    ></i>
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
                      <i className="fa fa-light fa-truck"></i>
                      Track My Order
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="wishlist">
                      <i className="fa fa-light fa-heart"></i>
                      Wishlist
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link to="checkout">
                      <i className="fa fa-light fa-share"></i>
                      Checkout
                    </Link>
                  </li>
                  {!login && (
                    <>
                      <li className="list-inline-item">
                        <Link to="login">
                          <i
                            className="fa fa-light fa-lock"
                            style={{ fontSize: "16px" }}
                          ></i>
                          My Account
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link to="register">
                          <i className="fa fa-light fa-user"></i>
                          Register
                        </Link>
                      </li>
                    </>
                  )}
                  {login && (
                    <>
                      <li className="list-inline-item">
                        <Link
                          onClick={() => {
                            window.location.replace(`/dashboard`);
                          }}
                        >
                          <i className="fa fa-light fa-dashboard"></i>
                          Dashboard
                        </Link>
                      </li>
                      <li className="list-inline-item">
                        <Link onClick={logout}>
                          <i className="fa fa-light fa-sign-out"></i>
                          Logout
                        </Link>
                      </li>
                    </>
                  )}
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
