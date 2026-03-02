import MainLayout from "../layout/MainLayout";
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
                path: 'products',
                element: <Products />,
            }
        ]
    },
]

export default routes;