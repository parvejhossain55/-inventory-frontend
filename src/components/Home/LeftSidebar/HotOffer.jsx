import React from "react";
import tab from "../../../assets/images/tab-15.png";
import HotOfferCard from "../../Card/HotOfferCard";

const HotOffer = () => {
  return (
    <>
      <div className="col-md-12">
        <div className="ht-offer">
          <div className="sec-title">
            <h6>Hot Offer</h6>
          </div>
          <div className="ht-body">
            <HotOfferCard/>
            <HotOfferCard/>
          </div>
        </div>
      </div>
    </>
  );
};

export default HotOffer;
