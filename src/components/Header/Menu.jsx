import React from "react";

const Menu = () => {
  return (
    <>
      <section class="menu-area">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="main-menu">
                <ul class="list-unstyled list-inline">
                  <li class="list-inline-item">
                    <a>
                      HOME <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown list-unstyled">
                      <li>
                        <a href="index.html">Home Style 1</a>
                      </li>
                      <li>
                        <a href="02-home-two.html">Home Style 2</a>
                      </li>
                    </ul>
                  </li>
                  <li class="list-inline-item mega-menu">
                    <a>
                      MEGA MENU <i class="fa fa-angle-down"></i>
                    </a>
                    <div class="mega-box">
                      <div class="row">
                        <div class="col-md-3">
                          <div class="clt-area">
                            <h6>Clothing</h6>
                            <div class="link-box">
                              <a href="#">- Western Clothing</a>
                              <a href="#">- Traditional Clothing</a>
                              <a href="#">- Winter Clothing</a>
                              <a href="#">- Summer Clothing</a>
                              <a href="#">- Inner Wear</a>
                              <a href="#">- Night Wear</a>
                              <a href="#">- Mens Clothing</a>
                              <a href="#">- Womens Clothing</a>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="sm-phn">
                            <h6>Smartphones</h6>
                            <div class="dept-box">
                              <a href="#">- Samsung</a>
                              <a href="#">- Huawei</a>
                              <a href="#">- One Plus</a>
                              <a href="#">- Xiaomi</a>
                              <a href="#">- Iphone</a>
                              <a href="#">- Blackberry</a>
                              <a href="#">- Nokia</a>
                              <a href="#">- Oppo</a>
                            </div>
                          </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                          <div class="lt-news">
                            <h6>Latest News</h6>
                            <div class="news-box d-flex">
                              <div class="news-img">
                                <img src="images/mega-img-1.jpg" alt="" />
                              </div>
                              <div class="news-con">
                                <p>Lorem ipsum dolor sit...</p>
                                <span>Feb 10, 2020</span>
                              </div>
                            </div>
                            <div class="news-box d-flex">
                              <div class="news-img">
                                <img src="images/mega-img-2.jpg" alt="" />
                              </div>
                              <div class="news-con">
                                <p>Lorem ipsum dolor sit...</p>
                                <span>Feb 12, 2020</span>
                              </div>
                            </div>
                            <div class="news-box d-flex">
                              <div class="news-img">
                                <img src="images/mega-img-3.jpg" alt="" />
                              </div>
                              <div class="news-con">
                                <p>Lorem ipsum dolor sit...</p>
                                <span>Feb 21, 2020</span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-3">
                          <div class="m-slider owl-carousel">
                            <div class="slider-item">
                              <img
                                src="images/mega-1.jpg"
                                alt=""
                                class="img-fluid"
                              />
                              <span>-65%</span>
                            </div>
                            <div class="slider-item">
                              <img
                                src="images/mega-2.jpg"
                                alt=""
                                class="img-fluid"
                              />
                              <span>-50%</span>
                            </div>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="mega-bnr">
                            <div class="row">
                              <div class="col-md-3">
                                <a href="#" class="bnr-box text-center">
                                  <img src="images/mega-b-1.jpg" alt="" />
                                  <span>Camera</span>
                                </a>
                              </div>
                              <div class="col-md-3">
                                <a href="#" class="bnr-box text-center">
                                  <img src="images/mega-b-2.jpg" alt="" />
                                  <span>Mouse</span>
                                </a>
                              </div>
                              <div class="col-md-3">
                                <a href="#" class="bnr-box text-center">
                                  <img src="images/mega-b-3.jpg" alt="" />
                                  <span>Earphone</span>
                                </a>
                              </div>
                              <div class="col-md-3">
                                <a href="#" class="bnr-box text-center">
                                  <img src="images/mega-b-4.jpg" alt="" />
                                  <span>Speaker</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li class="list-inline-item">
                    <a>
                      PAGES <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown list-unstyled">
                      <li>
                        <a href="03-about-us.html">About Us</a>
                      </li>
                      <li>
                        <a href="04-category.html">Category</a>
                      </li>
                      <li>
                        <a href="05-single-product.html">Single Product</a>
                      </li>
                      <li>
                        <a href="06-shopping-cart.html">Shopping Cart</a>
                      </li>
                      <li>
                        <a href="07-checkout.html">Checkout</a>
                      </li>
                      <li>
                        <a href="08-login.html">Log In</a>
                      </li>
                      <li>
                        <a href="09-register.html">Register</a>
                      </li>
                      <li>
                        <a href="10-wishlist.html">Wishlist</a>
                      </li>
                      <li>
                        <a href="11-compare.html">Compare</a>
                      </li>
                      <li>
                        <a href="15-track-order.html">Track Order</a>
                      </li>
                      <li>
                        <a href="12-terms-condition.html">Terms & Condition</a>
                      </li>
                      <li>
                        <a href="13-faq.html">Faq</a>
                      </li>
                      <li>
                        <a href="14-404.html">404</a>
                      </li>
                    </ul>
                  </li>
                  <li class="list-inline-item">
                    <a>
                      BLOG <i class="fa fa-angle-down"></i>
                    </a>
                    <ul class="dropdown list-unstyled">
                      <li>
                        <a href="16-blog-one.html">Blog Style 1</a>
                      </li>
                      <li>
                        <a href="17-blog-two.html">Blog Style 2</a>
                      </li>
                      <li>
                        <a href="18-blog-three.html">Blog Style 3</a>
                      </li>
                      <li>
                        <a href="19-blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li class="list-inline-item">
                    <a href="20-contact.html">CONTACT</a>
                  </li>
                  <li class="list-inline-item trac-btn">
                    <a href="#">Track Your Order</a>
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

export default Menu;
