import React from "react";
import ShopLeft from "./ShopLeft";
import ShopRight from "./ShopRight";

const Shop = () => {
  return (
    <>
      <section class="category">
        <div class="container">
          <div class="row">
            <ShopLeft/>
            <ShopRight/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
