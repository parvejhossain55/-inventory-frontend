import { Link, useNavigate } from "react-router-dom";
import sbar from "../../assets/images/sbar-1.png";
import { checkAuth, checkoutOrder, loadCart } from "../../apiRequest";
import { useEffect, useRef, useState } from "react";

const Checkout = () => {
  const [cart, setCart] = useState([]);
  const [shipping, setShipping] = useState(0);
  const [subtotal, setSubtotal] = useState(0);
  const [loading, setLoading] = useState(false);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [state, setStates] = useState("");
  const [zip, setZip] = useState("");
  const [note, setNote] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    loadCartData();
  }, []);

  const loadCartData = async () => {
    const { products, shipping, subtotal } = await loadCart();
    setCart(products);
    setShipping(shipping);
    setSubtotal(subtotal);
  };

  const handlePlaceOrder = async () => {
    const { ok } = await checkAuth();

    if (!ok) {
      navigate("/login");
    } else {
      setLoading(true);
      const product_name = cart.reduce(
        (name, product) => name + product.product.title + ", ",
        ""
      );

      const orderData = {
        name: firstName + " " + lastName,
        email,
        phone,
        address,
        country,
        city,
        state,
        zip,
        note,
        product_name,
      };
      const { url } = await checkoutOrder(orderData);
      setLoading(false);

      window.location.replace(url);
    }
  };

  return (
    <>
      <section className="checkout">
        <div className="container">
          <div className="row">
            <div className="col-md-7">
              <form action="#">
                <h5>Shipping Information</h5>
                <div className="row">
                  <div className="col-md-6">
                    <label>First Name*</label>
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="Your first name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Last Name*</label>
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Your last name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Email*</label>
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Your Emial Address"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Phone*</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Your phone number"
                    />
                  </div>
                  <div className="col-md-12">
                    <label>Address*</label>
                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Provide Your Address"
                    />
                  </div>
                  <div className="col-md-6 contry">
                    <label>Country*</label>
                    <select
                      onChange={(e) => setCountry(e.target.value)}
                      className="country"
                    >
                      <option>Select Country</option>
                      <option value="Bangladesh">Bangladesh</option>
                    </select>
                  </div>
                  <div className="col-md-6">
                    <label>Town/City*</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Your town or city name"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>State/Province*</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setStates(e.target.value)}
                      placeholder="Your state or province"
                    />
                  </div>
                  <div className="col-md-6">
                    <label>Postal/Zip Code*</label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      placeholder="Your postal or zip code"
                    />
                  </div>
                  {/* <div className="col-md-12">
                    <ul className="list-unstyled">
                      <li>
                        <input type="checkbox" id="samsung" name="name" />
                        <label htmlFor="samsung">Create An Account?</label>
                      </li>
                      <li>
                        <input type="checkbox" id="apple" name="name" />
                        <label htmlFor="apple">Ship To Same Address?</label>
                      </li>
                    </ul>
                  </div> */}
                  <div className="col-md-12">
                    <label>Order Note</label>
                    <textarea
                      name="note"
                      value={note}
                      onChange={(e) => setNote(e.target.value)}
                      placeholder="Note htmlFor your order (optional). Example- special notes htmlFor delivery"
                    ></textarea>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-md-5">
              <div className="row">
                <div className="col-md-12">
                  <div className="order-review">
                    <h5>Order Review</h5>
                    <div className="review-box">
                      <ul className="list-unstyled">
                        <li>
                          Product <span>Total</span>
                        </li>
                        {cart.map((product, i) => (
                          <li
                            key={i}
                            className="d-flex justify-content-between"
                          >
                            <div className="pro">
                              <img src={sbar} alt="" />
                              <p>{product.product.title}</p>
                              <span>
                                {product.quantity} X{" "}
                                <span>৳{product.price}</span>
                              </span>
                            </div>
                            <div className="prc">
                              {/* <p>$49.00</p> */}
                              <p>৳{product.totalPrice}</p>
                            </div>
                          </li>
                        ))}

                        <li>
                          Sub Total <span>৳{subtotal}</span>
                        </li>
                        <li>
                          Shipping & Tax <span>৳{shipping}</span>
                        </li>
                        <li>
                          Grand Total <span>৳{subtotal + shipping}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  {/* <div className="pay-meth">
                    <h5>Payment Method</h5>
                    <div className="pay-box">
                      <ul className="list-unstyled">
                        <li>
                          <input
                            type="radio"
                            id="pay1"
                            defaultValue={"cod"}
                            // onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label htmlFor="pay1">
                            <span>
                              <i className="fa fa-circle"></i>
                            </span>
                            Cash On Delivery
                          </label>
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Eaque sint placeat illo animi quis minus.
                          </p>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="pay5"
                            defaultValue={"op"}
                            // onChange={(e) => setPaymentMethod(e.target.value)}
                          />
                          <label htmlFor="pay5">
                            <span>
                              <i className="fa fa-circle"></i>
                            </span>
                            Online Payment
                          </label>
                        </li>
                      </ul>
                    </div>
                  </div> */}
                  <button
                    onClick={handlePlaceOrder}
                    type="button"
                    className="ord-btn"
                  >
                    {!loading ? (
                      "Place Order"
                    ) : (
                      <>
                        Loading...
                        <div class="spinner-border text-white pt-2"></div>
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
