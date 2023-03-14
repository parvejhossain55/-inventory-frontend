import React from "react";

const Newsletter = () => {
  return (
    <>
      <div className="col-md-12">
        <div className="nw-ltr">
          <div className="sec-title">
            <h6>Newsletter</h6>
          </div>
          <div className="nw-box">
            <p>Sign Up And Get Latest News, Updates, Offers & Deals</p>
            <form className="nw-form" action="#">
              <input
                type="text"
                name="email"
                placeholder="Email Here..."
                required
              />
              <button type="submit" name="button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Newsletter;
