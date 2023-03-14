import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { filterReducer as reducer } from "../../reducer/filterReducer";
import ShopLeft from "./ShopLeft";
import ShopRight from "./ShopRight";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPage] = useState(1);

  const [state, dispatch] = useReducer(reducer, {
    category: [],
    brand: [],
    price: [1, 2000],
    sortBy: "",
    perPage: 12,
  });

  useEffect(() => {
    handleFilter();
  }, [state, currentPage, totalPages]);

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

  function handlePrice(maxPrice) {
    dispatch({ type: "changePrice", price: [0, parseInt(maxPrice)] });
  }

  function handleSort(sortValue) {
    dispatch({ type: "handleSort", sort: sortValue });
  }

  function handlePerPage(perPage) {
    dispatch({ type: "handlePerPage", perPage: parseInt(perPage) });
  }

  async function handleFilter() {
    setLoading(true);
    const {
      data: { products, totalPages },
    } = await axios.post(
      `/products/filter-products/?page=${currentPage}`,
      state
    );
    setProducts(products);
    setTotalPage(totalPages);
    setLoading(false);
  }

  function handlePagination({ selected }) {
    setCurrentPage(selected + 1);
  }

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
