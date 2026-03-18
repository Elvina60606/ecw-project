import { NavLink, Outlet } from "react-router";
import ScrollToTop from "../component/utils/ScrollToTop";
import categories from "../data/categories";

const ProductsSidebarLayout = () => {
  return (
    <>
      <main className="container py-8 py-md-12">
        <div className="row">
          <div className="col-3 d-none d-md-block">
            <nav>
              <ul className="sidebar">
                <li className="sidebar-item">
                  <NavLink to="/products_sidebar_layout/products">
                    <h5 className="fs-md-6 fs-lg-5">商品總覽</h5>
                  </NavLink>
                </li>
                {categories.map((c) => (
                  <li className="sidebar-item" key={c.id}>
                    <NavLink
                      to={`/products_sidebar_layout/products/${c.id}`}
                      className={({ isActive }) =>
                        `${isActive ? "active" : ""} sidebar-link`
                      }
                    >
                      <h5 className="fs-md-6 fs-lg-5">{c.name}</h5>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {/* right-side */}
          <ScrollToTop />
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default ProductsSidebarLayout;
