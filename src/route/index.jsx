import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";
import ProductsSidebarLayout from "../layout/ProductsSidebarLayout";
import Products from "../views/frontend/Products";
import Product from "../views/frontend/Product";
import MemberRegistration from "../views/frontend/MemberRegistration";
import Carts from "../views/frontend/Carts";



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
                ]
            },
            {
                path: '/product/:id',
                element: <Product />
            },
        ]
    },
]

export default routes;