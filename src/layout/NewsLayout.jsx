import { useState } from "react";
import { Outlet, NavLink } from "react-router";
import newsCategories from "../data/newsCategories";

const NewsLayout = () => {
  const [dropdownShow, setDropdownShow] = useState(false);

  return (
    <>
      <div className="news-bg d-flex justify-content-center align-items-center">
        <h1 className="text-white mb-8">最新消息</h1>
      </div>
      <div className="container">
        <div className="d-none d-md-block">
          <ul className="list-unstyled nav justify-content-center gap-6 my-8">
            {newsCategories.map((c) => (
              <li className="nav-item list-news" key={c.id}>
                <NavLink
                  to={`/newslayout/${c.id}`}
                  className={({ isActive }) =>
                    `${isActive ? "active" : ""} nav-link px-10 text-white`
                  }
                >
                  {c.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="dropdown d-md-none my-4">
          <div
            className="form-select text-primary-800 py-3"
            onClick={() => setDropdownShow((prev) => !prev)}
          >
            {newsCategories?.name || "最新消息"}
          </div>
          <ul className={`dropdown-menu w-100 ${dropdownShow ? "show" : ""}`}>
            {newsCategories.map((c, i) => (
              <li
                key={c.id}
                className={`dropdown-item ${i === newsCategories.length - 1 ? "" : "border-bottom"}`}
              >
                <NavLink
                  to={`/newslayout/${c.id}`}
                  className="w-100"
                  onClick={() => setDropdownShow(false)}
                >
                  {c.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-8">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsLayout;
