import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import tab1 from "../../assets/images/tab-1.png";
import useApi from "../../hooks/useApi";
import ProductCard from "../Card/ProductCard";
import { addToCart, addToWishlist } from "../../helper/cartHelper";

const SingleProduct = () => {
  const product = useLoaderData();
  const relateds = useApi(
    `/products/related-products/${product._id}/${product.category[0]._id}`
  );
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const cart = localStorage.getItem("cart");
    if (cart) {
      const cartObj = JSON.parse(cart);
      // console.log('car obj ', cartObj)
      const [currentProduct] = cartObj.products.filter(
        (item) => item.product === product._id
      );
      // console.log("current product", currentProduct.quantity);
      if (currentProduct) {
        setQuantity(currentProduct.quantity);
      }
    }
  }, []);

  return (
    <>
      <section className="sg-product">
        <div className="container">
          <div className="row">
            <div className="col-md-9">
              <div className="row">
                <div className="col-md-5">
                  <div className="sg-img">
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="sg1"
                        role="tabpanel"
                      >
                        <img
                          src={product.images[0]}
                          alt={product.title}
                          className="img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="sg-content">
                    <div className="pro-tag">
                      <ul className="list-unstyled list-inline">
                        {product.category.map((c, i) => (
                          <Link key={i} to={`/category/${c.slug}`}>
                            {c.name}
                            {", "}
                          </Link>
                        ))}
                      </ul>
                    </div>
                    <div className="pro-name">
                      <p>{product.title}</p>
                    </div>
                    <div className="pro-rating">
                      <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o"></i>
                        </li>
                        <li className="list-inline-item">
                          <a href="#">( 09 Review )</a>
                        </li>
                      </ul>
                    </div>
                    <div className="pro-price">
                      <ul className="list-unstyled list-inline">
                        <li className="list-inline-item">
                          {
                            <span
                              style={{ fontSize: "16px", marginRight: "2px" }}
                            >
                              ৳
                            </span>
                          }
                          {product.price}
                        </li>
                        <li className="list-inline-item"></li>
                      </ul>
                      <p>
                        Availability :{" "}
                        {product.quantity > 0 ? (
                          <>
                            <span>In Stock</span>
                            <label>({product.quantity}) Available</label>
                          </>
                        ) : (
                          <>
                            <span>Out of Stock</span>
                          </>
                        )}
                      </p>
                    </div>
                    <div className="colo-siz">
                      {/* <div className="color">
                        <ul className="list-unstyled list-inline">
                          <li>Color :</li>
                          <li className="list-inline-item">
                            <input
                              type="radio"
                              id="color-1"
                              name="color"
                              value="color-1"
                            />
                            <label htmlFor="color-1">
                              <span>
                                <i className="fa fa-check"></i>
                              </span>
                            </label>
                          </li>
                          <li className="list-inline-item">
                            <input
                              type="radio"
                              id="color-2"
                              name="color"
                              value="color-2"
                            />
                            <label htmlFor="color-2">
                              <span>
                                <i className="fa fa-check"></i>
                              </span>
                            </label>
                          </li>
                          <li className="list-inline-item">
                            <input
                              type="radio"
                              id="color-3"
                              name="color"
                              value="color-3"
                            />
                            <label htmlFor="color-3">
                              <span>
                                <i className="fa fa-check"></i>
                              </span>
                            </label>
                          </li>
                          <li className="list-inline-item">
                            <input
                              type="radio"
                              id="color-4"
                              name="color"
                              value="color-4"
                            />
                            <label htmlFor="color-4">
                              <span>
                                <i className="fa fa-check"></i>
                              </span>
                            </label>
                          </li>
                          <li className="list-inline-item">
                            <input
                              type="radio"
                              id="color-5"
                              name="color"
                              value="color-5"
                            />
                            <label htmlFor="color-5">
                              <span>
                                <i className="fa fa-check"></i>
                              </span>
                            </label>
                          </li>
                        </ul>
                      </div>
                      <div className="size">
                        <ul className="list-unstyled list-inline">
                          <li>Size :</li>
                          <li className="list-inline-item">
                            <input
                              type="radio"
                              id="size-1"
                              name="size"
                              value="size-1"
                            />
                            <label htmlFor="size-1">S</label>
                          </li>
                          <li className="list-inline-item">
                            <input
                              type="radio"
                              id="size-2"
                              name="size"
                              value="size-2"
                            />
                            <label htmlFor="size-2">M</label>
                          </li>
                          <li className="list-inline-item">
                            <input
                              type="radio"
                              id="size-3"
                              name="size"
                              value="size-3"
                            />
                            <label htmlFor="size-3">L</label>
                          </li>
                        </ul>
                      </div> */}
                      <div className="qty-box" style={{ marginTop: "25px" }}>
                        <ul className="list-unstyled list-inline">
                          <li className="list-inline-item">Qty :</li>
                          <li className="list-inline-item quantity buttons_added">
                            <input
                              type="button"
                              value="-"
                              className="minus"
                              onClick={() =>
                                setQuantity((prevState) => (prevState -= 1))
                              }
                              disabled={quantity === 1 ? true : false}
                            />
                            <input
                              type="number"
                              step="1"
                              min="1"
                              max="10"
                              value={quantity}
                              className="qty text"
                              size="4"
                              readOnly
                            />
                            <input
                              type="button"
                              className="plus"
                              value="+"
                              onClick={() =>
                                setQuantity((prevState) => (prevState += 1))
                              }
                              disabled={quantity >= 12 ? true : false}
                            />
                          </li>
                        </ul>
                      </div>
                      <div class="pro-btns">
                        <a
                          href="#"
                          onClick={() => addToCart(product._id, quantity)}
                          class="cart"
                        >
                          Add To Cart
                        </a>
                        <a
                          href="#"
                          onClick={() => addToWishlist(product._id)}
                          class="fav-com"
                          title="Add to Wishlist"
                        >
                          <i class="fa fa-heart"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="sg-tab">
                    <ul className="nav nav-tabs" role="tablist">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          data-toggle="tab"
                          href="#pro-det"
                        >
                          Product Details
                        </a>
                      </li>
                      <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#rev">
                          Reviews (03)
                        </a>
                      </li>
                    </ul>
                    <div className="tab-content">
                      <div
                        className="tab-pane fade show active"
                        id="pro-det"
                        role="tabpanel"
                      >
                        {product.description}
                      </div>
                      <div className="tab-pane fade" id="rev" role="tabpanel">
                        <div className="review-box d-flex">
                          <div className="rv-img">
                            <img src="images/testimonial-1.jpg" alt="" />
                          </div>
                          <div className="rv-content">
                            <h6>
                              Michel Kolins <span>(Feb 10, 2020)</span>
                            </h6>
                            <ul className="list-unstyled list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit. Dignissimos a deleniti dolorem
                              architecto quae eligendi voluptatem omnis beatae
                              at aut eveniet repellendus voluptas.
                            </p>
                          </div>
                        </div>
                        <div className="review-box d-flex">
                          <div className="rv-img">
                            <img src="images/testimonial-2.jpg" alt="" />
                          </div>
                          <div className="rv-content">
                            <h6>
                              Jenus Doe <span>(Feb 10, 2020)</span>
                            </h6>
                            <ul className="list-unstyled list-inline">
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                              <li className="list-inline-item">
                                <i className="fa fa-star"></i>
                              </li>
                            </ul>
                            <p>
                              Consectetur adipisicing elit. Dignissimos a
                              deleniti dolorem architecto quae eligendi
                              voluptatem omnis beatae at aut eveniet repellendus
                              voluptas.
                            </p>
                          </div>
                        </div>
                        <div className="review-form">
                          <h6>Add Your Review</h6>
                          <form action="#">
                            <div className="row">
                              <div className="col-md-12">
                                <div className="star-rating">
                                  <label>Your Rating*</label>
                                  <span
                                    className="fa fa-star-o"
                                    data-rating="1"
                                  ></span>
                                  <span
                                    className="fa fa-star-o"
                                    data-rating="2"
                                  ></span>
                                  <span
                                    className="fa fa-star-o"
                                    data-rating="3"
                                  ></span>
                                  <span
                                    className="fa fa-star-o"
                                    data-rating="4"
                                  ></span>
                                  <span
                                    className="fa fa-star-o"
                                    data-rating="5"
                                  ></span>
                                  <input
                                    type="hidden"
                                    name="whatever1"
                                    className="rating-value"
                                    value="0"
                                  />
                                </div>
                              </div>
                              <div className="col-md-6">
                                <label>Your Name*</label>
                                <input type="text" name="name" required="" />
                              </div>
                              <div className="col-md-6">
                                <label>Your Email*</label>
                                <input type="text" name="email" required="" />
                              </div>
                              <div className="col-md-12">
                                <label>Your Review*</label>
                                <textarea required=""></textarea>
                                <button type="submit">Add Review</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="sim-pro">
                    <div className="sec-title">
                      <h5>Similar Product</h5>
                    </div>
                    <div className="row">
                      {relateds.data.map((product, i) => (
                        <ProductCard key={i} product={product} />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="category-box">
                <div className="sec-title">
                  <h6>Categories</h6>
                </div>
                {/* <!-- accordion --> */}
                <div id="accordion">
                  <div className="card">
                    <div className="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse1"
                      >
                        <span>Clothing</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </div>
                    <div id="collapse1" className="collapse">
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 2
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 3
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse2"
                      >
                        <span>Electronics</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </div>
                    <div id="collapse2" className="collapse">
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 2
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 3
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse3"
                      >
                        <span>Home Appliance</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </div>
                    <div id="collapse3" className="collapse">
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 2
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 3
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse4"
                      >
                        <span>Smartphone</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </div>
                    <div id="collapse4" className="collapse">
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 2
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 3
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse5"
                      >
                        <span>Computer</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </div>
                    <div id="collapse5" className="collapse">
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 2
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 3
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse6"
                      >
                        <span>Kids Collection</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </div>
                    <div id="collapse6" className="collapse">
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 2
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 3
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header">
                      <a
                        href="#"
                        data-toggle="collapse"
                        data-target="#collapse7"
                      >
                        <span>Automobile</span>
                        <i className="fa fa-angle-down"></i>
                      </a>
                    </div>
                    <div id="collapse7" className="collapse">
                      <div className="card-body">
                        <ul className="list-unstyled">
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 1
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 2
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 3
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              <i className="fa fa-angle-right"></i> Catagory 4
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="ht-offer">
                <div className="sec-title">
                  <h6>Hot Offer</h6>
                </div>
                <div className="ht-body owl-carousel">
                  <div className="ht-item">
                    <div className="ht-img">
                      <a href="#">
                        <img src={tab1} alt="" className="img-fluid" />
                      </a>
                      <span>- 59%</span>
                      <ul className="list-unstyled list-inline counter-box">
                        <li className="list-inline-item">
                          185 <p>Days</p>
                        </li>
                        <li className="list-inline-item">
                          11 <p>Hrs</p>
                        </li>
                        <li className="list-inline-item">
                          39 <p>Mins</p>
                        </li>
                        <li className="list-inline-item">
                          51 <p>Sec</p>
                        </li>
                      </ul>
                    </div>
                    <div className="ht-content">
                      <p>
                        <a href="#">Items Title Name Enter Here</a>
                      </p>
                      <ul className="list-unstyled list-inline fav">
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o"></i>
                        </li>
                      </ul>
                      <ul className="list-unstyled list-inline price">
                        <li className="list-inline-item">$120.00</li>
                        <li className="list-inline-item">$150.00</li>
                      </ul>
                    </div>
                  </div>
                  {/* <div className="ht-item">
                    <div className="ht-img">
                      <a href="#">
                        <img src={tab1} alt="" className="img-fluid" />
                      </a>
                      <span>- 59%</span>
                      <ul className="list-unstyled list-inline counter-box">
                        <li className="list-inline-item">
                          185 <p>Days</p>
                        </li>
                        <li className="list-inline-item">
                          11 <p>Hrs</p>
                        </li>
                        <li className="list-inline-item">
                          39 <p>Mins</p>
                        </li>
                        <li className="list-inline-item">
                          51 <p>Sec</p>
                        </li>
                      </ul>
                    </div>
                    <div className="ht-content">
                      <p>
                        <a href="#">Items Title Name Enter Here</a>
                      </p>
                      <ul className="list-unstyled list-inline fav">
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star"></i>
                        </li>
                        <li className="list-inline-item">
                          <i className="fa fa-star-o"></i>
                        </li>
                      </ul>
                      <ul className="list-unstyled list-inline price">
                        <li className="list-inline-item">$120.00</li>
                        <li className="list-inline-item">$150.00</li>
                      </ul>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <div className="add-box">
                <a href="#">
                  <img src={tab1} alt="" className="img-fluid" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function loader({ params: { slug } }) {
  const { data } = await axios.get(
    "http://localhost:5000/api/v1/products/" + slug
  );
  return data;
}

export default SingleProduct;
