import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";
import Login from "../views/frontend/Login";
import MemberRegistration from "../views/frontend/MemberRegistration";
import ProductsSidebarLayout from "../layout/ProductsSidebarLayout";
import Products from "../views/frontend/Products";
import Product from "../views/frontend/Product";
import ProtectedRoute from "./ProtectedRoute";
import Carts from "../views/frontend/carts/Carts";
import OrderSuccess from "../views/frontend/OrderSuccess";
import MemberSidebarLayout from "../layout/MemberSidebarLayout";
import Orders from "../views/frontend/Orders";
import Coupons from "../views/frontend/Coupon";
import NewsLayout from "../layout/NewsLayout";
import News from "../views/frontend/latestNews/News";

import AdminLayout from "../layout/AdminLayout";
import AdminProtectedRoute from "./AdminProtectedRoute";
import AdminProducts from "../views/admin/adminProducts";
import AdminOrders from "../views/admin/AdminOrders";
import Dashboard from "../views/admin/Dashboard";

import NotFound from "../views/NotFound";
import AdminCoupons from "../views/admin/AdminCoupons";

const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/member_registration",
        element: <MemberRegistration />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/newslayout",
        element: <NewsLayout />,
        children: [
          {
            path: ":newsCategory?",
            element: <News />,
          },
        ],
      },
      {
        path: "/products_sidebar_layout",
        element: <ProductsSidebarLayout />,
        children: [
          {
            path: "products", // all products
            element: <Products />,
          },
          {
            path: "products/:category",
            element: <Products />,
          },
        ],
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "/carts",
            element: <Carts />,
          },
          {
            path: "/order_success/:Id",
            element: <OrderSuccess />,
          },
          {
            path: "/member_sidebar_layout",
            element: <MemberSidebarLayout />,
            children: [
              {
                path: "orders",
                element: <Orders />,
              },
              {
                path: "coupons",
                element: <Coupons />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "admin",
    element: <AdminLayout />,
    children: [
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        element: <AdminProtectedRoute />,
        children: [
          {
            path: "admin_products",
            element: <AdminProducts />,
          },
          {
            path: "admin_orders",
            element: <AdminOrders />,
          },
          {
            path: "admin_coupons",
            element: <AdminCoupons />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default routes;
