import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { loadFilterProduct } from "../../apiRequest";
import { filterReducer as reducer } from "../../reducer/filterReducer";
import ShopLeft from "./ShopLeft";
import ShopRight from "./ShopRight";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  const [state, dispatch] = useReducer(reducer, {
    category: [],
    brand: [],
    price: { min: 1, max: 6000 },
    sortBy: "",
    perPage: 12,
  });

  useEffect(() => {
    handleFilter();
  }, [state, currentPage, totalPages]);

  async function handleFilter() {
    setLoading(true);
    const { products, totalPages } = await loadFilterProduct(
      currentPage,
      state
    );
    setProducts(products);
    setTotalPage(totalPages);
    setLoading(false);
  }

  function handleCategory(e, catId) {
    dispatch({
      type: "changeCategory",
      category: catId,
      checked: e.target.checked,
    });
  }

  function handleBrand(e, brandId) {
    dispatch({
      type: "changeBrand",
      brand: brandId,
      checked: e.target.checked,
    });
  }

  function handlePrice(price) {
    dispatch({ type: "changePrice", price });
  }

  function handleSort(sortValue) {
    dispatch({ type: "handleSort", sort: sortValue });
  }

  function handlePerPage(perPage) {
    dispatch({ type: "handlePerPage", perPage: parseInt(perPage) });
  }

  function handlePagination({ selected }) {
    setCurrentPage(selected + 1);
  }

  function handleReset() {}

  return (
    <>
      <section class="category">
        <div class="container">
          <div class="row">
            <ShopLeft
              handleCategory={handleCategory}
              handleBrand={handleBrand}
              handlePrice={handlePrice}
              handleFilter={handleFilter}
              handleReset={handleReset}
            />
            <ShopRight
              products={products}
              currentPage={currentPage}
              totalPages={totalPages}
              handleSort={handleSort}
              handlePerPage={handlePerPage}
              handlePagination={handlePagination}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Shop;
