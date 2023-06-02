import React from "react";

const ProductCard = ({ product }) => {
  // console.log(product);
  return (
    <div className="rt-items">
      <div className="rt-box d-flex">
        <div className="rt-img">
          <a href="#">
            <img src={product.images[0]} alt="" />
          </a>
        </div>
        <div className="rt-content">
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
            <li className="list-inline-item">{product.price}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const TopRated = ({ products }) => {
  return (
    <>
      <div className="col-md-12">
        <div className="top-rtd">
          <div className="sec-title">
            <h6>Top Rated</h6>
          </div>
          <div className="rt-slider owl-carousel">
            {products?.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TopRated;
