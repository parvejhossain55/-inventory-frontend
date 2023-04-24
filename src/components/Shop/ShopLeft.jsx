import React, { useState } from "react";
import InputRange from "react-input-range";
import useBrand from "../../hooks/useBrand";
import useCategory from "../../hooks/useCategory";
import "react-input-range/lib/css/index.css";

const ShopLeft = ({ handleCategory, handleBrand, handlePrice }) => {
  const categories = useCategory();
  const brands = useBrand();
  const [price, setPrice] = useState({ min: 1, max: 2000 });

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
          <div className="price-filter py-3 px-3">
            <InputRange
              maxValue={2000}
              minValue={0}
              value={price}
              onChange={(value) => {
                setPrice(value);
                handlePrice({ min: value.min, max: value.max });
              }}
              formatLabel={(value) => `৳${value}`}
            />
            <button type="button" className="mt-5" name="button">
              Reset
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopLeft;
