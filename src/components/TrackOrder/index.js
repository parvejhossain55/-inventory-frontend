import React from "react";

const TrackOrder = () => {
  return (
    <>
      <section class="tr-order">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="tr-box">
                <form action="#">
                  <h5>Track Your Order</h5>
                  <div class="row">
                    <div class="col-md-12">
                      <label>Order Id</label>
                      <input
                        type="text"
                        name="order id"
                        placeholder="Enter your order number"
                      />
                    </div>
                    <div class="col-md-12">
                      <label>Confirm Your Email</label>
                      <input
                        type="text"
                        name="email"
                        placeholder="Enter your order email address"
                      />
                    </div>
                    <div class="col-md-12">
                      <button type="button" name="button">
                        Track Order
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrder;
