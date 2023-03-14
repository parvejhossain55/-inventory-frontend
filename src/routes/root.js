import { createBrowserRouter, Outlet } from "react-router-dom";
import Shop from "../components/Shop";
import Home from "../components/Home";
import Layout from "../components/Layout";
import SingleProduct, {
  loader as singleProductLoader,
} from "../components/SingleProduct";
import Cart from "../components/Cart";
import Checkout from "../components/Checkout";
import Wishlist from "../components/Wishlist";
import Compare from "../components/Compare";
import TrackOrder from "../components/TrackOrder";
import NotFound from "../pages/NotFound";
import About from "../components/About";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Loader from "../components/Loader";
import PrivetRoute from "./PriveRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: () => null,
      },
      {
        path: "/shop",
        element: <Shop />,
        loader: () => null,
      },
      {
        path: "/loader",
        element: <Loader />,
      },
      {
        path: "/product/:slug",
        element: <SingleProduct />,
        loader: singleProductLoader,
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: () => null,
        action: () => null,
      },
      {
        path: "/checkout",
        element: <Checkout />,
        loader: () => null,
        action: () => null,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
        loader: () => null,
        action: () => null,
      },
      {
        path: "/compare",
        element: <Compare />,
        loader: () => null,
      },
      {
        path: "/track-order",
        element: <TrackOrder />,
        loader: () => null,
      },
      {
        path: "/about",
        element: <About />,
        loader: () => null,
      },
      {
        path: "/contact",
        element: <Contact />,
        loader: () => null,
        action: () => null,
      },
      {
        path: "/login",
        element: <Login />,
        action: () => null,
      },
      {
        path: "/register",
        element: <Register />,
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
    element: <PrivetRoute/>,
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
