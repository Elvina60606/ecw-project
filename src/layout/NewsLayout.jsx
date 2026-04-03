import { Outlet, NavLink } from "react-router";

const NewsLayout = () => {
  return (
    <>
      <div className="news-bg d-flex justify-content-center align-items-center">
        <h1 className="text-white mb-8">最新消息</h1>
      </div>
      <div className="container">
        <ul className="list-unstyled nav justify-content-center gap-6 my-8">
          <li className="nav-item list-news">
            <NavLink
              to="/newslayout/latest_news"
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
              to="/newslayout"
              className={({ isActive }) =>
                `${isActive ? "active" : ""} nav-link px-10 text-white`
              }
            >
              節慶活動
            </NavLink>
          </li>
        </ul>
        <main className="container">
          <div className="row justify-content-center">
            <div className="col-md-8">
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default NewsLayout;
