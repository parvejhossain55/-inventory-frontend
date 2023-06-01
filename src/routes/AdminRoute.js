import React, { useEffect, useState } from "react";
import { checkAuthAdmin } from "../apiRequest";
import Loader from "../components/Loader";
import {
  getToken,
  showProfileDropdown,
  checkMenuDropdown,
} from "../helper/helper";
import logo from "../assets/admin/img/AdminLTELogo.png";
import userImg from "../assets/admin/img/user1-128x128.jpg";
import { FaChevronLeft, FaTachometerAlt } from "react-icons/fa";
import { Link, NavLink, Outlet } from "react-router-dom";

import {
  MdEditSquare,
  MdDns,
  MdLeaderboard,
  MdShop2,
  MdStars,
  MdAccountBox,
  MdOutlineAttachMoney,
  MdMoveDown,
} from "react-icons/md";
import { useAuth } from "../context/useAuth";

const AdminRoute = () => {
  const [ok, setOk] = useState(false);
  const [auth, setAuth] = useAuth();

  useEffect(() => {
    console.log("auth in admin", auth);
    if (auth?.token) checkAdminAuth();
  }, [auth?.token]);

  const checkAdminAuth = async () => {
    const data = await checkAuthAdmin();
    setOk(data.ok);
  };

  const logout = async () => {
    localStorage.removeItem("auth");
    window.location.replace("/login");
  };

  return ok ? (
    <>
      <div class="wrapper">
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
          {/* <!-- Left navbar links --> */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" data-widget="pushmenu" role="button">
                <i className="fa fa-home" aria-hidden="true"></i>
              </Link>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="/" className="nav-link">
                Home
              </a>
            </li>
            <li className="nav-item d-none d-sm-inline-block">
              <a href="#" className="nav-link">
                Contact
              </a>
            </li>
          </ul>

          {/* <!-- Right navbar links --> */}
          <ul className="navbar-nav ml-auto">
            {/* <!-- Navbar Search --> */}
            <li className="nav-item">
              <a
                className="nav-link"
                data-widget="navbar-search"
                href="#"
                role="button"
              >
                <i className="fas fa-search"></i>
              </a>
              <div className="navbar-search-block">
                <form className="form-inline">
                  <div className="input-group input-group-sm">
                    <input
                      className="form-control form-control-navbar"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search"></i>
                      </button>
                      <button
                        className="btn btn-navbar"
                        type="button"
                        data-widget="navbar-search"
                      >
                        <i className="fas fa-times"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </li>
            {/* <!-- Notifications Dropdown Menu --> */}
            <li id="showProfiledropdown" className="nav-item dropdown">
              <a
                onClick={showProfileDropdown}
                className="nav-link"
                data-toggle="dropdown"
                href="#"
              >
                <img
                  src={userImg ? userImg : userImg}
                  style={{
                    height: "40px",
                    width: "40px",
                    marginTop: "-8px",
                  }}
                />
              </a>
              <div
                id="dropdoownRight"
                className="dropdown-menu dropdown-menu-lg dropdown-menu-right"
              >
                <span className="dropdown-item dropdown-header">
                  <img
                    src={userImg ? userImg : userImg}
                    style={{
                      height: "80px",
                      width: "80px",
                    }}
                  />
                </span>
                <span className="dropdown-item dropdown-header">
                  <h5>Parvej Hossain</h5>
                </span>
                <div className="dropdown-divider"></div>
                <Link to="/profile" className="dropdown-item">
                  <i className="fas fa-user mr-2"></i> Profile
                </Link>
                <div className="dropdown-divider"></div>
                <Link onClick={logout} className="dropdown-item">
                  <i className="fa fa-sign-out mr-2"></i>
                  Logout
                </Link>
              </div>
            </li>
          </ul>
        </nav>
        <aside class="main-sidebar sidebar-dark-primary elevation-4">
          <Link to="/" class="brand-link">
            <img
              src={logo}
              alt="AdminLTE Logo"
              class="brand-image img-circle elevation-3"
              style={{ opacity: 0.8 }}
            />
            <span class="brand-text font-weight-light">TrendsTrove</span>
          </Link>

          <div class="sidebar">
            <nav class="mt-2">
              <ul
                class="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                {/* <li className="nav-item">
                  <Link onClick={checkMenuDropdown} className="nav-link">
                    <i class="nav-icon">
                      <FaTachometerAlt />
                    </i>
                    <p>
                      Dashboard
                      <i class="right">
                        <FaChevronLeft />
                      </i>
                    </p>
                  </Link>
                  <ul className="nav nav-treeview">
                    <li className="nav-item">
                      <NavLink to="/create" className={"nav-link"}>
                        <p className="ml-4">Add New Task</p>
                      </NavLink>
                    </li>
                  </ul>
                </li> */}
                <li className="nav-item">
                  <Link to="/dashboard" className="nav-link">
                    <i class="nav-icon">
                      <FaTachometerAlt />
                    </i>
                    <p>Dashboard</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/dashboard/brand" class="nav-link">
                    <i class="nav-icon">
                      <MdDns />
                    </i>
                    <p>Brand</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/dashboard/category" class="nav-link">
                    <i class="nav-icon">
                      <MdEditSquare />
                    </i>
                    <p>Category</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/dashboard/products" class="nav-link">
                    <i class="nav-icon">
                      <MdLeaderboard />
                    </i>
                    <p>Product</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/dashboard/order" class="nav-link">
                    <i class="nav-icon">
                      <MdShop2 />
                    </i>
                    <p>Orders</p>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/dashboard/coupon" class="nav-link">
                    <i class="nav-icon">
                      <MdStars />
                    </i>
                    <p>Coupon</p>
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link to="/dashboard/customer" class="nav-link">
                    <i class="nav-icon">
                      <MdAccountBox />
                    </i>
                    <p>Customer</p>
                  </Link>
                </li> */}
                <li class="nav-item">
                  <Link to="/dashboard/transaction" class="nav-link">
                    <i class="nav-icon">
                      <MdOutlineAttachMoney />
                    </i>
                    <p>Transaction</p>
                  </Link>
                </li>
                {/* <li class="nav-item">
                  <Link to="/dashboard/refund" class="nav-link">
                    <i class="nav-icon">
                      <MdMoveDown />
                    </i>
                    <p>Refund</p>
                  </Link>
                </li> */}

                <hr
                  style={{
                    margin: "8px 0px",
                    borderTop: "2px solid rgb(127 127 127 / 52%)",
                  }}
                />
                <li className="nav-item">
                  <a onClick={() => console.log("logout")} className="nav-link">
                    <i className="nav-icon fa fa-sign-out"></i>
                    <p>Logout</p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        <div class="content-wrapper">
          <div class="content py-3 px-3">
            <div class="container-fluid">
              <Outlet />

              {/* body mount here */}
            </div>
          </div>
        </div>

        <footer class="main-footer">
          <div class="float-right d-none d-sm-inline">Anything you want</div>
          <strong>
            Copyright &copy; 2014-2021
            <a href="https://adminlte.io/">AdminLTE.io</a>.
          </strong>
          All rights reserved.
        </footer>
      </div>
    </>
  ) : (
    <Loader />
  );
};

export default AdminRoute;
