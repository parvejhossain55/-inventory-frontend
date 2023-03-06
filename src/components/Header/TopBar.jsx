import React from "react";
import england from "../../assets/images/fl-eng.png";
import france from "../../assets/images/fl-fra.png";
import germany from "../../assets/images/fl-ger.png";
import brazil from "../../assets/images/fl-bra.png";

const TopBar = () => {
  return (
    <>
      <section className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-4">
              <div className="top-left d-flex">
                <div className="lang-box">
                  <span>
                    <img src={england} alt="england" />
                    English<i className="fa fa-angle-down"></i>
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <img src={england} alt="england" />
                      English
                    </li>
                    <li>
                      <img src={france} alt="france" />
                      French
                    </li>
                    <li>
                      <img src={germany} alt="germany" />
                      German
                    </li>
                    <li>
                      <img src={brazil} alt="brazil" />
                      Brazilian
                    </li>
                  </ul>
                </div>
                <div className="mny-box">
                  <span>
                    USD<i className="fa fa-angle-down"></i>
                  </span>
                  <ul className="list-unstyled">
                    <li>USD</li>
                    <li>GBP</li>
                    <li>EUR</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-8">
              <div className="top-right" style={{textAlign: "right"}}>
                <ul className="list-unstyled list-inline">
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="images/user.png" alt="" />
                      My Account
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="images/wishlist.png" alt="" />
                      Wishlist
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="images/checkout.png" alt="" />
                      Checkout
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#">
                      <img src="images/login.png" alt="" />
                      Login
                    </a>
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
