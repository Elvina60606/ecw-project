import { NavLink, Outlet } from "react-router";
import ScrollToTop from "../component/utils/ScrollToTop";
import categories from "../data/categories";
import { setCurrentPage } from "../slices/productsSlice";
import { useDispatch } from "react-redux";

const ProductsSidebarLayout = () => {
  const dispatch = useDispatch();
  return (
    <>
      <main className="container py-8 py-md-12">
        <div className="row">
          <div className="col-3 d-none d-md-block">
            <nav>
              <ul className="sidebar">
                {categories.map((c) => (
                  <li className="sidebar-item" key={c.id}>
                    <NavLink
                      to={
                        c.id === "all"
                          ? "/products_sidebar_layout/products"
                          : `/products_sidebar_layout/products/${c.id}`
                      }
                      end={c.id === "all"}
                      onClick={() => dispatch(setCurrentPage(1))}
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
