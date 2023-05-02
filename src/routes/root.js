import { createBrowserRouter } from "react-router-dom";
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
import ProductByCategory from "../components/Shop/ProductByCategory";
import SearchProduct from "../components/Shop/SearchProduct";
import Dashboard from "../components/User";
import AdminRoute from "./AdminRoute";
import CreateProduct from "../components/Admin/Product/CreateProduct";
import CreateBrand from "../components/Admin/Brand";
import CreateCategory from "../components/Admin/Category";
import AllProducts from "../components/Admin/Product/AllProducts";
import EditProduct from "../components/Admin/Product/EditProduct";
import OrderSuccess from "../components/TrackOrder/OrderSuccess";
import AdminOrder from "../components/Admin/Orders";
import Coupon from "../components/Admin/Coupon";
import Transaction from "../components/Admin/Transaction";
import UserProfile from "../components/User/Profile";
import UserOrder from "../components/User/Order";
import UserWishlist from "../components/User/Wishlist";
import UserTrackOrder from "../components/User/TrackOrder";

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
        path: "/category/:slug",
        element: <ProductByCategory />,
      },
      {
        path: "/search",
        element: <SearchProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
        loader: () => null,
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
      },
      {
        path: "/compare",
        element: <Compare />,
      },
      {
        path: "/track-order",
        element: <TrackOrder />,
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
    path: "/user",
    element: <PrivetRoute />,
    errorElement: <div>There are some error</div>,
    children: [
      { index: true, element: <Dashboard /> },
      {
        path: "profile",
        element: <UserProfile />,
        loader: () => null,
      },
      {
        path: "order",
        element: <UserOrder />,
        loader: () => null,
      },
      {
        path: "wishlist",
        element: <UserWishlist />,
        loader: () => null,
      },
      {
        path: "track-order",
        element: <UserTrackOrder />,
        loader: () => null,
      },
      {
        path: "order-success/:orderId",
        element: <OrderSuccess />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <AdminRoute />,
    errorElement: <div>There are some error</div>,
    children: [
      {
        path: "profile",
        element: <div>Dashboard Admin Profile</div>,
      },
      {
        path: "brand",
        element: <CreateBrand />,
        loader: () => null,
      },
      {
        path: "category",
        element: <CreateCategory />,
        loader: () => null,
      },
      {
        path: "products",
        element: <AllProducts />,
      },
      {
        path: "product",
        element: <CreateProduct />,
      },
      {
        path: "product/:slug",
        element: <EditProduct />,
      },
      {
        path: "order",
        element: <AdminOrder />,
        loader: () => null,
      },
      {
        path: "coupon",
        element: <Coupon />,
        loader: () => null,
      },
      // {
      //   path: "customer",
      //   element: <div>Dashboard Admin customer</div>,
      //   loader: () => null,
      // },
      {
        path: "transaction",
        element: <Transaction />,
        loader: () => null,
      },
      {
        path: "refund",
        element: <div>Dashboard Admin refund</div>,
        loader: () => null,
      },
    ],
  },
]);

export default router;
