import { createBrowserRouter, Outlet } from "react-router-dom";
import Shop from "../components/Shop";
import Home from "../components/Home";
import Layout from "../components/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <div>There are some error</div>,
    children: [
      {
        index: true,
        element: <Home/>,
        loader: () => null,
      },
      {
        path: "/shop",
        element: <Shop/>,
        loader: () => null,
      },
      {
        path: "/about",
        element: <div>About Page</div>,
        loader: () => null,
      },
      {
        path: "/contact",
        element: <div>Contact Page</div>,
        loader: () => null,
        action: () => null,
      },
      {
        path: "/product",
        element: <div>Product Page</div>,
        loader: () => null,
        action: () => null,
      },
      {
        path: "/wishlist",
        element: <div>Wishlist Page</div>,
        loader: () => null,
        action: () => null,
      },
      {
        path: "/compare",
        element: <div>Compare Page</div>,
        loader: () => null,
      },
      {
        path: "/checkout",
        element: <div>Checkout Page</div>,
        loader: () => null,
        action: () => null,
      },
      {
        path: "/cart",
        element: <div>Cart Page</div>,
        loader: () => null,
        action: () => null,
      },
      {
        path: "/login",
        element: <div>Login Page</div>,
        action: () => null,
      },
      {
        path: "/register",
        element: <div>Register Page</div>,
        action: () => null,
      },
      {
        path: "/faq",
        element: <div>Faq Page</div>,
        loader: () => null,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <div>
        Dashboard / check authentication <Outlet />
      </div>
    ),
    errorElement: <div>There are some error</div>,
    children: [
      {
        path: "user",
        element: <div>Dashboard User</div>,
        loader: () => null,
      },
      {
        path: "user/profile",
        element: <div>Dashboard User Profile</div>,
        loader: () => null,
      },
      {
        path: "user/order",
        element: <div>Dashboard User Order</div>,
        loader: () => null,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <div>
        Dashboard / check admin authentication <Outlet />
      </div>
    ),
    errorElement: <div>There are some error</div>,
    children: [
      {
        path: "admin",
        element: <div>Dashboard Admin</div>,
        loader: () => null,
      },
      {
        path: "admin/profile",
        element: <div>Dashboard Admin Profile</div>,
        loader: () => null,
      },
      {
        path: "admin/category",
        element: <div>Dashboard Admin Category</div>,
        loader: () => null,
      },
      {
        path: "admin/product",
        element: <div>Dashboard Admin Product</div>,
        loader: () => null,
      },
    ],
  },
]);

export default router;
