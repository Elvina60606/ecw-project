import MainLayout from "../layout/MainLayout";
import Home from "../views/Home";
import ProductsSidebarLayout from "../layout/ProductsSidebarLayout";
import Products from "../views/frontend/Products";
import Product from "../views/frontend/Product";



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
                path: '/products_sidebar_layout',
                element: <ProductsSidebarLayout />,
                children: [
                    {
                        path: 'products',
                        element: <Products />,
                    },
                ]
            },
            {
                path: '/product/:id',
                element: <Product />
            }
        ]
    },
]

export default routes;