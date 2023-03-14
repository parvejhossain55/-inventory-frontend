import React from "react";
import ProductCard from "../../Card/ProductCard";

const NewProduct = ({ products }) => {
  return (
    <>
      <div className="col-md-12 padding-fix-l20">
        <div className="new-product">
          <div className="sec-title">
            <h5>New Product</h5>
          </div>
          <div className="row">
            {products.map((product) => (
              <ProductCard product={product}/>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default NewProduct;
