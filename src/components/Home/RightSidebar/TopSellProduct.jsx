import React from "react";
import ProductCard from "../../Card/ProductCard";

const TopSellProduct = ({ products }) => {
  return (
    <>
      <div className="col-md-12 padding-fix-l20">
        <div className="top-slr">
          <div className="sec-title">
            <h5>Top Selling</h5>
          </div>
          <div className="row">
            {products?.map((product, i) => (
              <ProductCard key={i} product={product}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopSellProduct;
