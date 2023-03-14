import React from 'react'
import tab from "../../assets/images/tab-15.png";

const HotOfferCard = () => {
  return (
    <>
      <div class="ht-item pb-4">
        <div class="ht-img">
          <a href="#">
            <img src={tab} alt="" class="img-fluid" />
          </a>
          <span>- 59%</span>
          <ul class="list-unstyled list-inline counter-box">
            <li class="list-inline-item">
              185
              <p>Days</p>
            </li>
            <li class="list-inline-item">
              11
              <p>Hrs</p>
            </li>
            <li class="list-inline-item">
              39
              <p>Mins</p>
            </li>
            <li class="list-inline-item">
              51
              <p>Sec</p>
            </li>
          </ul>
        </div>
        <div class="ht-content">
          <p>
            <a href="#">Items Title Here</a>
          </p>
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
      </div>
    </>
  );
}

export default HotOfferCard