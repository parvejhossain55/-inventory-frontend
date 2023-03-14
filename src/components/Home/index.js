import React, { useEffect, useState } from "react";
import HeroSlider from "./HeorSection/HeroSlider";
import AllCategories from "./HeorSection/AllCategories";
import BestDeals from "./LeftSidebar/BestDeals";
import HotOffer from "./LeftSidebar/HotOffer";
import TopRated from "./LeftSidebar/TopRated";
import Newsletter from "./LeftSidebar/Newsletter";
import FeatureProduct from "./RightSidebar/FeatureProduct";
import TopSellProduct from "./RightSidebar/TopSellProduct";
import NewProduct from "./RightSidebar/NewProduct";
import useApi from "../../hooks/useApi";

const Home = () => {
  const { data, error, loading } = useApi("/product-by-type");

  return (
    <>
      <section className="slider-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-0">
              <AllCategories />
            </div>
            <div className="col-lg-9 col-md-12 padding-fix-l20">
              <HeroSlider />
            </div>
          </div>
        </div>
      </section>
      <section className="product-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="row">
                <BestDeals
                  products={data.filter(
                    (product) => product.type === "bestdeal"
                  )}
                />
                <HotOffer />
                <TopRated
                  products={data.filter(
                    (product) => product.type === "toprated"
                  )}
                />
                <Newsletter />
              </div>
            </div>
            <div className="col-lg-9 col-md-8">
              <div className="row">
                <FeatureProduct
                  products={data.filter(
                    (product) => product.type === "feature"
                  )}
                />
                <NewProduct
                  products={data.filter((product) => product.type === "new")}
                />
                <TopSellProduct
                  products={data?.filter(
                    (product) => product.type === "topselling"
                  )}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
