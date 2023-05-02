import React, { useEffect, useState } from "react";
import { loadAllTransaction } from "../../../apiRequest/adminApi";
import moment from "moment";

const Transaction = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    loadTransactions();
  }, []);

  const loadTransactions = async () => {
    const result = await loadAllTransaction();
    setTransactions(result);
  };

  console.log("transactions ", transactions);

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
                          <th style={{ width: "130px" }}>Order ID</th>
                          <th style={{ width: "100px" }}>Name</th>
                          <th style={{ width: "80px" }}>Date</th>
                          <th style={{ width: "30px" }}>Amount</th>
                          <th style={{ width: "30px" }}>Transaction Id</th>
                          <th style={{ width: "50px" }}>Payment Method</th>
                          <th style={{ width: "100px" }}>Payment Status</th>
                          {/* <th style={{ width: "85.6px" }}>Action</th> */}
                        </tr>
                      </thead>
                      <tbody className="text-center">
                        {transactions.map((transaction) => (
                          <tr>
                            <td>{transaction.order.orderId}</td>
                            <td>
                              {transaction.user.firstName +
                                " " +
                                transaction.user.lastName}
                            </td>
                            <td>
                              {moment(transaction.tran_date).format(
                                "MMMM D, YYYY"
                              )}
                            </td>
                            <td>{transaction?.amount}</td>
                            <td>{transaction?.tran_id}</td>
                            <td>
                              <span class={`badge text-bg-success`}>
                                {transaction?.paymentMethod}
                              </span>
                            </td>
                            <td>
                              <span class="badge text-bg-secondary">
                                {transaction?.paymentStatus}
                              </span>
                            </td>
                            {/* <td className="table-action">
                              <td>Something</td>
                            </td> */}
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

export default Transaction;
