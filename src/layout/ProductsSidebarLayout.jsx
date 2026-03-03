import { Link, Outlet } from "react-router";
import ScrollToTop from "../component/utils/ScrollToTop";

const ProductsSidebarLayout =() =>{

    return (<>
        <main className="container py-8 py-md-12">
            <div className="row">
                <div className="col-3 d-none d-md-block">
                    <nav>
                        <ul className="sidebar">
                            <li className="sidebar-item active">
                                <Link to='/products_sidebar_layout/products'>
                                    <h5 className="fs-md-6 fs-lg-5">商品總覽</h5>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/products_sidebar_layout/products'>
                                    <h5 className="fs-md-6 fs-lg-5">可麗露</h5>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/products_sidebar_layout/products'>
                                    <h5 className="fs-md-6 fs-lg-5">巴斯克</h5>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/products_sidebar_layout/products'>
                                    <h5 className="fs-md-6 fs-lg-5">瑪德蓮</h5>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/products_sidebar_layout/products'>
                                    <h5 className="fs-md-6 fs-lg-5">法式小塔</h5>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/products_sidebar_layout/products'>
                                    <h5 className="fs-md-6 fs-lg-5">寄甜計畫</h5>
                                </Link>
                            </li>
                            <li className="sidebar-item">
                                <Link to='/products_sidebar_layout/products'>
                                    <h5 className="fs-md-6 fs-lg-5">中秋禮盒</h5>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                </div>
                {/* right-side */}
                <ScrollToTop />
                <Outlet />
            </div>
        </main>
    </>)
}

export default ProductsSidebarLayout;