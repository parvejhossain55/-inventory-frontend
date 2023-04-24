import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AllOrdersData, updateOrderStatus } from "../../../apiRequest/adminApi";
import { MdCreate, MdRestoreFromTrash } from "react-icons/md";
import moment from "moment";

const AdminOrder = () => {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    loadAllOrders();
  }, []);

  const loadAllOrders = async () => {
    const orders = await AllOrdersData();
    setOrders(orders);
  };

  const handleOrderStatus = async (e) => {
    const orderId = e.target.dataset.orderid;
    await updateOrderStatus(orderId, {
      status: e.target.value,
    });
    await loadAllOrders();
  };

  return (
    <>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-body">
              <div className="table-responsive">
                <div className="row">
                  <div className="col-sm-6">
                    <div>
                      <label className="form-label">
                        <select className="form-select form-select-sm ms-1 me-1">
                          <option value="10">10</option>
                          <option value="25">25</option>
                          <option value="50">50</option>
                          <option value="100">100</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div>
                      <label>
                        <input
                          type="search"
                          className="form-control form-control-sm"
                          placeholder="Search..."
                        />
                      </label>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <table className="table w-100 table-hover">
                      <thead className="table-light text-center">
                        <tr>
                          <th style={{ width: "100px" }}>Order ID</th>
                          <th style={{ width: "70px" }}>Name</th>
                          <th style={{ width: "70px" }}>Date</th>
                          <th style={{ width: "30px" }}>Total</th>
                          <th style={{ width: "50px" }}>Payment Status</th>
                          <th style={{ width: "55px" }}>Order Status</th>
                          <th style={{ width: "85.6px" }}>Action</th>
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {orders.map((order) => (
                          <tr>
                            <td>{order.orderId}</td>
                            <td>
                              {order.user.firstName + " " + order.user.lastName}
                            </td>
                            <td>
                              {moment(order.createdAt).format("MMMM D, YYYY")}
                            </td>
                            <td>{order.payment.amount}</td>
                            <td>
                              <span
                                class={`badge text-bg-${
                                  order.payment.paymentStatus === "VALID"
                                    ? "success"
                                    : "danger"
                                }`}
                              >
                                {order.payment.paymentStatus === "VALID"
                                  ? "Paid"
                                  : "Unpaid"}
                              </span>
                            </td>
                            <td>
                              <span class="badge text-bg-secondary">
                                {order.status}
                              </span>
                            </td>
                            <td className="table-action">
                              {/* onchange event add kore order status update korte hobe */}
                              <select
                                data-orderid={order._id}
                                onChange={handleOrderStatus}
                                class="form-select"
                              >
                                <option selected value="Processing">
                                  Processing
                                </option>
                                <option value="Ordered">Ordered</option>
                                <option value="Shipped">Shipped</option>
                                <option value="Delivered">Delivered</option>
                                <option value="Canceled">Canceled</option>
                              </select>
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

export default AdminOrder;
