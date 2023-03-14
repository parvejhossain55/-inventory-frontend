import React from "react";
import slider1 from "../../../assets/images/girl-1.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <>
      <div class="owl-carousel owl-slider">
        <Slider>
          <div class="slider-item slider-item1">
            <img
              src={slider1}
              alt=""
              class="img1 wow fadeInRight effect"
              data-wow-duration="1s"
              data-wow-delay="0s"
            />
            <div class="slider-box">
              <div class="slider-table">
                <div class="slider-tablecell">
                  <div
                    class="wow fadeInUp effect"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.5s"
                  >
                    <h5>Big Sale</h5>
                  </div>
                  <div
                    class="wow fadeInUp effect"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.6s"
                  >
                    <h2>New Product Collection</h2>
                  </div>
                  <div
                    class="wow fadeInUp effect"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.7s"
                  >
                    <p>Save Up To 25% Off</p>
                  </div>
                  <div
                    class="wow fadeInUp effect"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.8s"
                  >
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="slider-item slider-item1">
            <img
              src={slider1}
              alt=""
              class="img1 wow fadeInRight effect"
              data-wow-duration="1s"
              data-wow-delay="0s"
            />
            <div class="slider-box">
              <div class="slider-table">
                <div class="slider-tablecell">
                  <div
                    class="wow fadeInUp effect"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.5s"
                  >
                    <h5>Big Sale</h5>
                  </div>
                  <div
                    class="wow fadeInUp effect"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.6s"
                  >
                    <h2>New Product Collection</h2>
                  </div>
                  <div
                    class="wow fadeInUp effect"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.7s"
                  >
                    <p>Save Up To 25% Off</p>
                  </div>
                  <div
                    class="wow fadeInUp effect"
                    data-wow-duration="1.2s"
                    data-wow-delay="0.8s"
                  >
                    <a href="#">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* Banner Add Show */}
    </>
  );
};

export default HeroSlider;
