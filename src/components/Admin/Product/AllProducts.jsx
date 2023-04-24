import React, { useEffect, useState } from "react";
import { MdCreate, MdRestoreFromTrash } from "react-icons/md";
import ReactPaginate from "react-paginate";
import { Link, useNavigate } from "react-router-dom";
import { AllProductsData, ProductDelete } from "../../../apiRequest/adminApi";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadAllProducts();
  }, []);

  const loadAllProducts = async () => {
    const { products } = await AllProductsData();
    setProducts(products);
  };

  const handleProductDelete = async (productId) => {
    await ProductDelete(productId);
    await loadAllProducts();
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="row mb-2">
                <div className="col-sm-5">
                  <Link to="/dashboard/product" className="btn btn-danger mb-2">
                    <i className="mdi mdi-plus-circle me-2"></i> Add Product
                  </Link>
                </div>
                <div className="col-sm-7">
                  <div className="text-sm-end">
                    <button type="button" className="btn btn-light mb-2 me-1">
                      Import
                    </button>
                    <button type="button" className="btn btn-light mb-2">
                      Export
                    </button>
                  </div>
                </div>
              </div>

              <div className="table-responsive">
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <label className="form-label">
                        Display{" "}
                        <select className="form-select form-select-sm ms-1 me-1">
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                          <option value="-1">All</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  {/* <div className="col-sm-6">
                    <div>
                      <label>
                        Search:
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder=""
                        />
                      </label>
                    </div>
                  </div> */}
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table w-100 table-hover">
                      <thead className="table-light text-center">
                        <tr>
                          <th style={{ width: "27.6px" }}>#</th>
                          <th style={{ width: "50.8px" }}>Image</th>
                          <th style={{ width: "244.8px" }}>Product</th>
                          <th style={{ width: "93.8px" }}>Category</th>
                          <th style={{ width: "42.8px" }}>Price</th>
                          <th style={{ width: "60.8px" }}>Quantity</th>
                          <th style={{ width: "45.8px" }}>Status</th>
                          <th style={{ width: "85.6px" }}>Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {products.map((product) => (
                          <tr>
                            <td>1</td>
                            <td>
                              <img
                                src={`${process.env.REACT_APP_IMAGE_URL}/${product.images[0]}`}
                                alt="contact-img"
                                className="rounded-circle me-3"
                                width={60}
                                height={60}
                              />
                            </td>
                            <td>
                              <p className="m-0 d-inline-block align-middle">
                                {product.title}
                              </p>
                            </td>
                            <td>{"product.category"}</td>
                            <td>{product.price}</td>

                            <td>{product.quantity}</td>
                            <td>
                              <span className="badge bg-success">
                                {product.status}
                              </span>
                            </td>

                            <td className="table-action">
                              <button
                                onClick={() =>
                                  navigate(`/dashboard/product/${product.slug}`)
                                }
                                className="btn btn-outline-warning mr-2"
                              >
                                <MdCreate />
                              </button>
                              <button
                                onClick={() => handleProductDelete(product._id)}
                                className="btn btn-outline-danger"
                              >
                                <MdRestoreFromTrash />
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-5">
                    <div
                      className="dataTables_info"
                      id="products-datatable_info"
                      role="status"
                      aria-live="polite"
                    >
                      Showing products 1 to 5 of 12
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-7">
                    {/* <nav className="pagination-outer my-4">
                        <ReactPaginate
                          previousLabel={"<"}
                          nextLabel={">"}
                          breakLabel={"..."}
                          pageCount={10}
                          marginPagesDisplayed={2}
                          pageRangeDisplayed={4}
                          onPageChange={({ selected }) => console.log(selected)}
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
                      </nav> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllProducts;
