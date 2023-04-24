import axios from "axios";
import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { useParams } from "react-router-dom";
import { loadCategoryProduct } from "../../apiRequest";
import ProductCard from "../Card/ProductCard";
import Loader from "../Loader";

const ProductByCategory = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(null);
  const [loading, setLoading] = useState(false);
  const [sort, setSort] = useState("rating");
  const [perPage, setPerPage] = useState(12);
  const [currentPage, serCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const { slug } = useParams();

  useEffect(() => {
    handleSearch();
  }, [sort, perPage, currentPage]);

  async function handleSearch() {
    const { count, totalPages, products } = await loadCategoryProduct({ slug, currentPage, perPage, sort });
    setProducts(products);
    setCount(count);
    setTotalPages(totalPages);
    setLoading(false);
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <section class="category">
        <div class="container">
          <div class="row">
            <div className="col-md-12">
              <div className="product-box">
                <div className="cat-box d-flex justify-content-start">
                  <div className="sortby">
                    <span>Sort By</span>
                    <select
                      value={sort}
                      onChange={(e) => setSort(e.target.value)}
                      className="sort-box"
                    >
                      <option value="priceHigh">Price Low to High</option>
                      <option value="priceLow">Price High to Low</option>
                      <option value="rating">Rating</option>
                    </select>
                  </div>
                  <div className="show-item">
                    <span>Show</span>
                    <select
                      value={perPage}
                      onChange={(e) => setPerPage(e.target.value)}
                      className="show-box"
                    >
                      <option value={12} selected>
                        12
                      </option>
                      <option value={24}>24</option>
                      <option value={36}>36</option>
                      <option value={50}>50</option>
                    </select>
                  </div>
                  {count && (
                    <div className="mx-auto">
                      <h6 className="text-center mt-2 notfoundtext">
                        Total Products {count}
                      </h6>
                    </div>
                  )}
                  <div className="page">
                    {totalPages > 0 ? (
                      <p>
                        Page {currentPage} of {totalPages}
                      </p>
                    ) : (
                      <p>Page 1 of 1</p>
                    )}
                  </div>
                </div>
                {/* Start Tab */}
                <div className="tab-content">
                  <div className="tab-pane fade show active">
                    <div className="row">
                      {products.map((product, i) => (
                        <ProductCard key={i} product={product} col={2} />
                      ))}
                    </div>
                  </div>
                </div>
                {products.length > 0 ? (
                  <nav className="pagination-outer my-4">
                    <ReactPaginate
                      previousLabel={"<"}
                      nextLabel={">"}
                      breakLabel={"..."}
                      pageCount={totalPages}
                      marginPagesDisplayed={2}
                      pageRangeDisplayed={4}
                      onPageChange={({ selected }) => serCurrentPage(selected + 1)}
                      containerClassName={"pagination"}
                      pageClassName={"page-item"}
                      pageLinkClassName={"page-link"}
                      previousClassName={"page-item"}
                      previousLinkClassName={"page-link"}
                      nextClassName={"page-item"}
                      nextLinkClassName={"page-link"}
                      breakClassName={"page-item"}
                      breakLinkClassName={"page-link"}
                      activeClassName={"active"}
                    />
                  </nav>
                ) : (
                  <>
                    <div className="my-4">
                      <h6 className="text-center mt-3 notfoundtext">
                        No Product Exist in this Category
                      </h6>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductByCategory;
