import React from "react";
import ProductCard from "../../Card/ProductCard";

const FeatureProduct = ({ products }) => {
  return (
    <>
      <div className="col-md-12 padding-fix-l20">
        <div className="product-box">
          <div className="tab-box d-flex justify-content-between">
            <div className="sec-title">
              <h5>Feature Product</h5>
            </div>
          </div>

          <div className="row">
            {products?.map((product, i) => (
              <ProductCard product={product} key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeatureProduct;
