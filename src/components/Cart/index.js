import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  applyCouponCode,
  loadCart,
  removeCartItemData,
  updateCartQuantity,
} from "../../apiRequest";
import { useGlobalContext } from "../../context/gobalContext";
import { getToken } from "../../helper/helper";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [calculate, setCalculate] = useState({ shipping: 0, subtotal: 0 });
  const [coupon, setCoupon] = useState("");
  const { checkCountCart } = useGlobalContext();
  const navigate = useNavigate();

  useEffect(() => {
    const token = getToken();
    if (token) {
      loadCartData();
    }
  }, []);

  const loadCartData = async () => {
    const { products, shipping, subtotal } = await loadCart();
    setCart(products);
    setCalculate({
      ...calculate,
      shipping: shipping,
      subtotal: subtotal,
    });
  };

  function decreaseQuantity(quantity, itemId) {
    updateQuantity((quantity -= 1), itemId);
  }

  const increaseQuantity = (quantity, itemId) => {
    updateQuantity((quantity += 1), itemId);
  };

  const updateQuantity = async (quantity, itemId) => {
    await updateCartQuantity(quantity, itemId);
    await loadCartData();
    checkCountCart();
  };

  const removeCartItem = async (itemId) => {
    await removeCartItemData(itemId);
    await loadCartData();
    checkCountCart();
  };

  const handleCoupon = async (e) => {
    e.preventDefault();
    await applyCouponCode(coupon);
    await loadCartData();
  };

  return (
    <>
      <section className="shopping-cart">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="cart-table table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th className="t-pro">Product</th>
                      <th className="t-price">Price</th>
                      <th className="t-qty">Quantity</th>
                      <th className="t-total">Total</th>
                      <th className="t-rem">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cart.length > 0 ? (
                      cart.map((item, i) => (
                        <tr key={i}>
                          <td className="t-pro d-flex">
                            <div className="t-img">
                              <Link to={`/product/${item.product.slug}`}>
                                <img
                                  src={item.product?.image?.secure_url}
                                  alt={item.product.title}
                                  width={100}
                                  height={100}
                                />
                              </Link>
                            </div>
                            <div className="t-content">
                              <p className="t-heading py-5">
                                <Link to={`/product/${item.product.slug}`}>
                                  {item.product.title}
                                </Link>
                              </p>
                            </div>
                          </td>
                          <td className="t-price">
                            {<span className="taka">৳</span>}
                            {item.price}
                          </td>
                          <td class="t-qty">
                            <div class="qty-box">
                              <div class="quantity buttons_added">
                                <input
                                  type="button"
                                  onClick={() =>
                                    decreaseQuantity(item.quantity, item._id)
                                  }
                                  value="-"
                                  class="minus"
                                  disabled={item.quantity <= 1 ? true : false}
                                />
                                <input
                                  value={item.quantity}
                                  class="qty text"
                                  readOnly
                                />
                                <input
                                  type="button"
                                  onClick={() =>
                                    increaseQuantity(item.quantity, item._id)
                                  }
                                  disabled={item.quantity >= 12 ? true : false}
                                  value="+"
                                  class="plus"
                                />
                              </div>
                            </div>
                          </td>
                          <td className="t-total">
                            {<span className="taka">৳</span>}
                            {item.totalPrice}
                          </td>
                          <td className="t-rem">
                            <Link onClick={() => removeCartItem(item._id)}>
                              <i className="fa fa-trash-o"></i>
                            </Link>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <>
                        <h6 className="text-center mt-3 notfoundtext">
                          No Item Found in Your Cart
                        </h6>
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
            {cart.length > 0 && (
              <>
                <div className="col-md-4 offset-4">
                  <div className="coupon">
                    <h6>Discount Coupon</h6>
                    <p>Enter your coupon code if you have one</p>
                    <form onSubmit={handleCoupon}>
                      <input
                        type="text"
                        value={coupon}
                        onChange={(e) => setCoupon(e.target.value)}
                        placeholder="Your Coupon"
                      />
                      <button type="submit">Apply Code</button>
                    </form>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="crt-sumry">
                    <h5>Cart Summery</h5>
                    <ul className="list-unstyled">
                      <li>
                        Subtotal <span>{calculate.subtotal}</span>
                      </li>
                      <li>
                        Shipping & Tax <span>{calculate.shipping}</span>
                      </li>
                      <li>
                        Grand Total{" "}
                        <span>{calculate.subtotal + calculate.shipping}</span>
                      </li>
                    </ul>
                    <div className="cart-btns text-right">
                      <button
                        onClick={() => navigate("/shop")}
                        type="button"
                        className="up-cart"
                      >
                        Update Cart
                      </button>
                      <button
                        onClick={() => navigate("/checkout")}
                        type="button"
                        className="chq-out"
                      >
                        Checkout
                      </button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
