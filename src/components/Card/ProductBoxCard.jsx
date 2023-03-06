import React from "react";
import tab1 from "../../assets/images/tab-1.png";

const ProductBoxCard = () => {
  return (
    <>
      <div class="ftr-product">
        <div class="tab-box d-flex justify-content-between">
          <div class="sec-title">
            <h5>Feature Product</h5>
          </div>

          <ul class="nav nav-tabs" role="tablist">
            <li class="nav-item">
              <a class="nav-link active" data-toggle="tab" href="#all">
                All
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#elec">
                Electronics
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#smart">
                Smartphones
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-toggle="tab" href="#shoe">
                Shoes
              </a>
            </li>
          </ul>
        </div>

        <div class="">
          <div class="card-body" id="all" role="tabpanel">
            <div class="tab-slider">
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img class="main-img img-fluid" src={tab1} alt="" />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              {/* <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img class="main-img img-fluid" src={tab1} alt="" />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div> */}
              {/* <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-2.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <span class="sale">Sale</span>
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-3.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-4.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div class="tab-pane fade" id="elec" role="tabpanel">
            <div class="tab-slider owl-carousel">
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-5.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-6.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <span class="new">New</span>
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-7.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-8.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="smart" role="tabpanel">
            <div class="tab-slider owl-carousel">
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-9.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-10.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <span class="sale">Sale</span>
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-11.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-12.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="shoe" role="tabpanel">
            <div class="tab-slider owl-carousel">
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-13.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-14.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <span class="new">New</span>
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-15.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
              <div class="tab-item">
                <div class="tab-heading">
                  <ul class="list-unstyled list-inline">
                    <li class="list-inline-item">
                      <a href="#">Home Appliance,</a>
                    </li>
                    <li class="list-inline-item">
                      <a href="#">Smart Led</a>
                    </li>
                  </ul>
                  <p>
                    <a href="#">Samsung Smart Led Tv 42"</a>
                  </p>
                </div>
                <div class="tab-img">
                  <img
                    class="main-img img-fluid"
                    src="images/tab-9.png"
                    alt=""
                  />
                  <img
                    class="sec-img img-fluid"
                    src="images/tab-16.png"
                    alt=""
                  />
                  <div class="layer-box">
                    <a
                      href="#"
                      class="it-comp"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Compare"
                    >
                      <img src="images/it-comp.png" alt="" />
                    </a>
                    <a
                      href="#"
                      class="it-fav"
                      data-toggle="tooltip"
                      data-placement="left"
                      title="Favourite"
                    >
                      <img src="images/it-fav.png" alt="" />
                    </a>
                  </div>
                </div>
                <div class="img-content d-flex justify-content-between">
                  <div>
                    <ul class="list-unstyled list-inline fav">
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star"></i>
                      </li>
                      <li class="list-inline-item">
                        <i class="fa fa-star-o"></i>
                      </li>
                    </ul>
                    <ul class="list-unstyled list-inline price">
                      <li class="list-inline-item">$120.00</li>
                      <li class="list-inline-item">$150.00</li>
                    </ul>
                  </div>
                  <div>
                    <a
                      href="#"
                      data-toggle="tooltip"
                      data-placement="top"
                      title="Add to Cart"
                    >
                      <img src="images/it-cart.png" alt="" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ProductBoxCard;
