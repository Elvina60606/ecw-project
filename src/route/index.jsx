import MainLayout from "../layout/MainLayout";
import ProductsSidebarLayout from "../layout/ProductsSidebarLayout";
import Products from "../views/frontend/Products";
import Home from "../views/Home";



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
                    }
                ]
            },
        ]
    },
]

export default routes;