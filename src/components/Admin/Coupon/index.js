import React, { useEffect, useState } from "react";
import { MdOutlineEditOff, MdOutlineDeleteSweep } from "react-icons/md";
import {
  createCoupon,
  deleteCoupon,
  loadAllCoupon,
} from "../../../apiRequest/adminApi";
import moment from "moment";

const Coupon = () => {
  const [code, setCode] = useState("");
  const [discountType, setDiscountType] = useState("");
  const [discountAmount, setDiscountAmount] = useState("");
  const [minPurchase, setMinPurchase] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [usageLimit, setUsageLimit] = useState("");
  // const [applicableProducts, setApplicableProducts] = useState([]);
  const [conditions, setConditions] = useState([]);

  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    loadCoupon();
  }, []);

  const loadCoupon = async () => {
    const coupons = await loadAllCoupon();
    setCoupons(coupons);
  };

  const handleDelete = async (code) => {
    await deleteCoupon(code);
    await loadCoupon();
  };

  const handleCoupon = async () => {
    const data = {
      code,
      discountType,
      discountAmount,
      minPurchase,
      expirationDate,
      usageLimit,
      conditions,
    };
    await createCoupon(data);
    await loadCoupon();
    setCode("");
    setDiscountType("");
    setDiscountAmount("");
    setMinPurchase("");
    setExpirationDate("");
    setUsageLimit("");
    setConditions("");
  };

  return (
    <>
      <div className="row">
        <div class="col-lg-8">
          <div class="card">
            <div class="card-header bg-white">
              <h3>Coupon List</h3>
            </div>

            <div class="card-body p-0">
              <table class="table table-hover text-center">
                <thead>
                  <tr>
                    <th style={{ width: "10px" }}>#</th>
                    <th>Code</th>
                    <th>Discount Type</th>
                    <th>Discount Amount</th>
                    <th style={{ width: "100px" }}>Expire Date</th>
                    <th>Minmum Purchase</th>
                    <th>Usage Limit</th>
                    <th style={{ width: "100px", textAlign: "center" }}>
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.length > 0 ? (
                    coupons.map((coupon, i) => (
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td>{coupon.code}</td>
                        <td>{coupon.discountType}</td>
                        <td>{coupon?.discountAmount}</td>
                        <td>
                          {moment(coupon.expirationDate).format("MMMM D, YYYY")}
                        </td>
                        <td>{coupon.minPurchase}</td>
                        <td>{coupon.usageLimit}</td>
                        <td>
                          <button
                            type="button"
                            class="btn btn-outline-danger"
                            onClick={() => handleDelete(coupon.code)}
                          >
                            <MdOutlineDeleteSweep />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <>
                      {" "}
                      <p>Coupon Not Found</p>
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="row">
            <div className="col-12">
              <div class="card mb-3">
                <div class="card-header bg-white">
                  <h3>Add New Coupon</h3>
                </div>
                <div class="card-body">
                  <div className="row">
                    <div className="col-md-12">
                      <div class="form-group">
                        <label for="category_title">Coupon Code</label>
                        <input
                          type="text"
                          id="category_title"
                          class="form-control"
                          value={code}
                          onChange={(e) => setCode(e.target.value)}
                          placeholder="Enter Coupno Code"
                        />
                      </div>
                      <div class="form-group">
                        <label for="exp_date">Expiration Date</label>
                        <input
                          type="date"
                          id="exp_date"
                          class="form-control"
                          value={expirationDate}
                          onChange={(e) => setExpirationDate(e.target.value)}
                        />
                      </div>
                      <div class="form-group">
                        <label for="min_purchase">Minimum Purchase</label>
                        <input
                          type="text"
                          id="min_purchase"
                          class="form-control"
                          value={minPurchase}
                          onChange={(e) => setMinPurchase(e.target.value)}
                          placeholder="Enter Minimum Purchase"
                        />
                      </div>
                      <div class="form-group">
                        <label>Discount Type</label>
                        <select
                          onChange={(e) => setDiscountType(e.target.value)}
                          class="form-select mb-3"
                        >
                          <option>Select Discount Type</option>
                          <option value="percentage">Percentage</option>
                          <option value="fixed">Fixed</option>
                        </select>
                      </div>
                      {discountType && discountType === "fixed" ? (
                        <>
                          <div class="form-group">
                            <label for="disc_amount">Discount Amount</label>
                            <input
                              type="text"
                              id="disc_amount"
                              class="form-control"
                              value={discountAmount}
                              onChange={(e) =>
                                setDiscountAmount(e.target.value)
                              }
                              placeholder="Enter Discount Amount"
                            />
                          </div>
                        </>
                      ) : (
                        ""
                      )}
                      <div class="form-group">
                        <label for="usage_limit">Usage Limit</label>
                        <input
                          type="text"
                          id="usage_limit"
                          class="form-control"
                          value={usageLimit}
                          onChange={(e) => setUsageLimit(e.target.value)}
                          placeholder="Enter Usage Limit"
                        />
                      </div>
                      <div class="form-group">
                        <label for="conditions">Conditions</label>
                        <textarea
                          id="conditions"
                          class="form-control"
                          value={conditions}
                          onChange={(e) => setConditions(e.target.value)}
                          placeholder="Enter Coupon Conditions"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card-footer text-muted">
                  <button
                    onClick={handleCoupon}
                    className="btn btn-outline-primary btn-block"
                  >
                    Create Coupon
                  </button>
                </div>
              </div>
              {/* </>
              )} */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupon;
