import React from "react";
import logo from "../../assets/images/logo.png";
import cart from "../../assets/images/cart.png";

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
            <div className="col-md-5 padding-fix">
              <form action="#" className="search-bar">
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
            <div className="col-md-4">
              <div className="carts-area d-flex">
                <div className="call-box d-flex">
                  <div className="call-ico">
                    <img src="images/call.png" alt="" />
                  </div>
                  <div className="call-content">
                    <span>Call Us</span>
                    <p>+1 (111) 426 6573</p>
                  </div>
                </div>
                <div className="cart-box text-center" style={{marginLeft: "auto"}}>
                  <a href="#" className="cart-btn">
                    <img src={cart} alt="cart" />
                    <span>2</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoArea;
