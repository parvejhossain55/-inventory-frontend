import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";

const OrderSuccess = () => {
  const { orderId } = useParams();

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card p-5 bg-secondary">
            <h1 className="text-center mb-5 text-white">
              <FaCheckCircle /> Order Successful!
            </h1>
            <p className="text-center text-white">
              Thank you for shopping with us. Your order has been successfully
              placed.
            </p>
            <p className="text-center text-white my-3">
              Your order Id : #{orderId}
            </p>
            <p className="text-center text-white">
              You will receive an email with your order confirmation and
              tracking details shortly.
            </p>
            <p className="text-center text-white">
              If you have any questions or concerns about your order, please
              contact us at support@example.com.
            </p>
          </div>
          <div className="text-center">
            <Link to="/" className="btn btn-info text-white">
              Back To Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSuccess;
