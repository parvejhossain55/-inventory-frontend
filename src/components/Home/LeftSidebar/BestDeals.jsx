import React from "react";

const ProductCard = ({ product }) => {
  // console.log(product);
  return (
    <div className="bt-items">
      <div className="bt-box d-flex">
        <div className="bt-img">
          <a href="#">
            <img className="pic-1" src={product?.images[0]} />
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
              {product.price}
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
          <div className="sec-title">
            <h6>Best Deals</h6>
          </div>
          <div className="bt-body">
            {products.map((product, i) => (
              <ProductCard key={i} product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default BestDeals;
