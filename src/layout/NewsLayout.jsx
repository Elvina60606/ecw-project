import { useState } from "react";
import { Outlet, NavLink } from "react-router";

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
            <li className="nav-item list-news">
              <NavLink
                to="/newslayout/all_news"
                className={({ isActive }) =>
                  `${isActive ? "active" : ""} nav-link px-10 text-white`
                }
              >
                全部消息
              </NavLink>
            </li>
            <li className="nav-item list-news">
              <NavLink
                to="/newslayout/spend_and_save"
                className={({ isActive }) =>
                  `${isActive ? "active" : ""} nav-link px-10 text-white`
                }
              >
                滿額優惠
              </NavLink>
            </li>
            <li className="nav-item list-news">
              <NavLink
                to="/newslayout/festival"
                className={({ isActive }) =>
                  `${isActive ? "active" : ""} nav-link px-10 text-white`
                }
              >
                節慶活動
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="dropdown d-md-none my-4">
          <div
            className="form-select text-primary-800 py-3"
            onClick={() => setDropdownShow((prev) => !prev)}
          >
            最新消息
          </div>
          <ul className={`dropdown-menu w-100 ${dropdownShow ? "show" : ""}`}>
            <li className="dropdown-item border-bottom">
              <NavLink
                to="/newslayout/all_news"
                className="w-100"
                onClick={() => setDropdownShow(false)}
              >
                全部消息
              </NavLink>
            </li>
            <li className="dropdown-item border-bottom">
              <NavLink
                to="/newslayout/spend_and_save"
                className="w-100"
                onClick={() => setDropdownShow(false)}
              >
                滿額優惠
              </NavLink>
            </li>
            <li className="dropdown-item">
              <NavLink
                to="/newslayout/festival"
                className="w-100"
                onClick={() => setDropdownShow(false)}
              >
                節慶活動
              </NavLink>
            </li>
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
