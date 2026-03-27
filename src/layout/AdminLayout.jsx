import { NavLink, Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <ul className="nav justify-content-center my-7 gap-8 fs-5">
        <li className="nav-item">
          <NavLink
            to="/admin/dashboard"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active text-primary-600 border-bottom border-3 border-neutral-500" : ""}`
            }
          >
            後台首頁
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/admin_products"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active text-primary-600 border-bottom border-3 border-neutral-500" : ""}`
            }
          >
            產品管理
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/admin_orders"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active text-primary-600 border-bottom border-3 border-neutral-500" : ""}`
            }
          >
            訂單管理
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/admin/admin_coupons"
            className={({ isActive }) =>
              `nav-link ${isActive ? "active text-primary-600 border-bottom border-3 border-neutral-500" : ""}`
            }
          >
            優惠卷管理
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default AdminLayout;
