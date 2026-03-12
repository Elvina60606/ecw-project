import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";
import Login from "../views/frontend/Login";
import Carts from "../views/frontend/carts/Carts";
import MemberRegistration from "../views/frontend/MemberRegistration";

import ProductsSidebarLayout from "../layout/ProductsSidebarLayout";
import Products from "../views/frontend/Products";
import Product from "../views/frontend/Product";

import MemberSidebarLayout from "../layout/MemberSidebarLayout";
import Orders from "../views/frontend/Orders";



const routes = [
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/member_registration',
                element: <MemberRegistration />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/carts',
                element: <Carts />,
            },
            {
                path: '/products_sidebar_layout',
                element: <ProductsSidebarLayout />,
                children: [
                    {
                        path: 'products',  // all products
                        element: <Products />,
                    },
                    {
                        path: 'products/:category',
                        element: <Products />,
                    },
                ]
            },
            {
                path: '/product/:id',
                element: <Product />
            },
            {
                path: '/member_sidebar_layout',
                element: <MemberSidebarLayout />,
                children: [
                    {
                        path: 'orders',
                        element: <Orders />
                    },
                ]
            },
        ]
    },
]

export default routes;