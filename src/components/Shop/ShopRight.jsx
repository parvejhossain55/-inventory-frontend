import React from "react";
import ReactPaginate from "react-paginate";
import ProductCard from "../Card/ProductCard";

const ShopRight = ({
  handleSort,
  handlePerPage,
  handlePagination,
  currentPage,
  totalPages,
  products,
}) => {
  return (
    <>
      <div className="col-md-9">
        <div className="product-box">
          <div className="cat-box d-flex justify-content-start">
            <div className="sortby">
              <span>Sort By</span>
              <select
                defaultValue="rating"
                onChange={(e) => handleSort(e.target.value)}
                className="sort-box"
              >
                <option>Select Option</option>
                <option value="priceHigh">Price Low to High</option>
                <option value="priceLow">Price High to Low</option>
                <option value="rating">Rating</option>
              </select>
            </div>
            <div className="show-item">
              <span>Show</span>
              <select
                onChange={(e) => handlePerPage(e.target.value)}
                className="show-box"
              >
                <option value={12} selected>
                  12
                </option>
                <option value={24}>24</option>
                <option value={36}>36</option>
              </select>
            </div>
            {/* <div>Total Products {products.length}</div> */}
            <div className="page">
              <p>
                Page {currentPage} of {totalPages}
              </p>
            </div>
          </div>
          {/* Start Tab */}
          <div className="tab-content">
            <div className="tab-pane fade show active">
              <div className="row">
                {products.map((product, i) => (
                  <ProductCard key={i} product={product} />
                ))}
              </div>
            </div>
          </div>

          <nav className="pagination-outer my-4">
            <ReactPaginate
              previousLabel={"<"}
              nextLabel={">"}
              breakLabel={"..."}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={4}
              onPageChange={handlePagination}
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
        </div>
      </div>
    </>
  );
};

export default ShopRight;
