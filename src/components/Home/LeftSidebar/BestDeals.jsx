import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  // console.log(product);
  return (
    <div className="bt-items mb-4">
      <div className="bt-box d-flex">
        <div className="bt-img">
          <a href="#">
            <img className="pic-1" src={product?.image.secure_url} />
          </a>
        </div>
        <div className="bt-content">
          <p>
            <a href="#">{product.title}</a>
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
            <li className="list-inline-item">
              {<span style={{ fontSize: "16px", marginRight: "2px" }}>৳</span>}
              {product.salePrice}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const BestDeals = ({ products }) => {
  return (
    <>
      <div className="col-md-12">
        <div className="bt-deal">
          <div className="sec-title p-2">
            <h6>Best Deals</h6>
          </div>
          <div className="bt-body pb-3">
            {products?.map((product, i) => (
              <Link to={`/product/${product.slug}`} class="image">
                <ProductCard key={i} product={product} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestDeals;
