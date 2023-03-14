import React from "react";
import useBrand from "../../hooks/useBrand";
import useCategory from "../../hooks/useCategory";
import tab1 from "../../assets/images/tab-15.png";
const ShopLeft = ({ handleCategory, handleBrand, handlePrice }) => {
  const categories = useCategory();
  const brands = useBrand();

  return (
    <>
      <div className="col-md-3">
        <div className="cat-brand">
          <div className="sec-title">
            <h6>Category</h6>
          </div>
          <div className="brand-box">
            <ul className="list-unstyled">
              {categories.map((category, i) => (
                <li key={i}>
                  <label htmlFor={category.slug}>
                    <input
                      type="checkbox"
                      id={category.slug}
                      onChange={(e) => handleCategory(e, category._id)}
                    />
                    {category.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="cat-brand">
          <div className="sec-title">
            <h6>Brands</h6>
          </div>
          <div className="brand-box">
            <ul className="list-unstyled">
              {brands.map((brand, i) => (
                <li key={i}>
                  <label htmlFor={brand.slug}>
                    <input
                      type="checkbox"
                      id={brand.slug}
                      onChange={(e) => handleBrand(e, brand._id)}
                    />
                    {brand.name}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="price-range">
          <div className="sec-title">
            <h6>Price</h6>
          </div>
          <div className="price-filter">
            <input
              type="range"
              min={0}
              max={2000}
              step={10}
              onChange={(e) => handlePrice(e.target.value)}
            />
            <button type="button" className="mt-3" name="button">
              Filter
            </button>
          </div>
        </div>
        {/* Banner add photo add korte hobe */}
        {/* <div class="col-md-12">
          <div class="ht-offer">
            <div class="sec-title">
              <h6>Hot Offer</h6>
            </div>
            <div class="ht-body owl-carousel">
              <div class="ht-item">
                <div class="ht-img">
                  <a href="#">
                    <img src={tab1} alt="" class="img-fluid" />
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
              <div class="ht-item">
                <div class="ht-img">
                  <a href="#">
                    <img src="images/tab-14.png" alt="" class="img-fluid" />
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
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default ShopLeft;
