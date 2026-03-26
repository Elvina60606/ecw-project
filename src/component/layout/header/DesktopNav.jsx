import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { openModal } from "../../../slices/modalSlice";

const DesktopNav = ({
  isLogin,
  images,
  searchShow,
  setSearchShow,
  totalQuantity,
  desktopOpen,
  setDesktopOpen,
}) => {
  const dispatch = useDispatch();

  return (
    <>
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-6 align-items-center d-none d-lg-flex">
        <li className="nav-item">
          <a className="nav-link">最新消息</a>
        </li>
        <li className="nav-item">
          <Link to="/products_sidebar_layout/products" className="nav-link">
            商品介紹
          </Link>
        </li>
        <div className={`collapse ${searchShow ? "show" : ""}`}>
          <form className="position-relative">
            <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ps-5 text-primary">
              search
            </span>
            <input
              className="form-control input-search ps-10"
              type="search"
              id="search"
              placeholder="輸入關鍵字"
            />
            <button
              className="btn btn-search btn-primary fw-medium position-absolute top-50 end-0 translate-middle-y me-2"
              type="button"
            >
              搜尋
            </button>
          </form>
        </div>
        <li className="nav-item">
          <button
            type="button"
            className="nav-link"
            onClick={() => setSearchShow((prev) => !prev)}
          >
            <span className="material-symbols-outlined align-bottom">
              search
            </span>
          </button>
        </li>
        <li className="nav-item">
          <Link to="/carts" className="nav-link">
            <div className="position-relative">
              <span className="material-symbols-outlined fill align-bottom">
                {" "}
                shopping_cart
              </span>
              <span className="position-absolute top-0 start-100 translate-middle badge border border-white bg-secondary-500">
                {totalQuantity}
              </span>
            </div>
          </Link>
        </li>
        <li className="nav-item">
          <div className="dropdown-center">
            {isLogin ? (
              <>
                <img
                  src={images.avatar}
                  alt="avatar"
                  style={{ width: 40, height: 40 }}
                  className="border rounded-circle"
                  onClick={() => setDesktopOpen((prev) => !prev)}
                />
                <ul
                  className={`dropdown-menu ${desktopOpen && "show dropdown-menu-end"}`}
                  style={{
                    width: 250,
                    position: "absolute",
                    top: "120%",
                    right: -4,
                  }}
                >
                  <li>
                    <Link to="#" className="dropdown-item px-6 py-2">
                      <span className="fs-6 text-primary-700">
                        <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">
                          person
                        </span>
                        會員中心
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item px-6 py-2">
                      <span className="fs-6 text-primary-700">
                        <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">
                          edit
                        </span>
                        修改會員資料
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item px-6 py-2">
                      <span className="fs-6 text-primary-700">
                        <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">
                          lock
                        </span>
                        修改密碼
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/member_sidebar_layout/orders"
                      className="dropdown-item px-6 py-2"
                    >
                      <span className="fs-6 text-primary-700">
                        <span className="material-symbols-outlined align-bottom me-2 text-primary-300">
                          credit_card
                        </span>
                        訂單紀錄
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/member_sidebar_layout/coupons"
                      className="dropdown-item px-6 py-2"
                    >
                      <span className="fs-6 text-primary-700">
                        <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">
                          local_activity
                        </span>
                        優惠券＆點數
                      </span>
                    </Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      className="dropdown-item px-6 py-2"
                      onClick={() =>
                        dispatch(openModal({ type: "SWEET_PLAN" }))
                      }
                    >
                      <span className="fs-6 text-primary-700">
                        <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">
                          takeout_dining
                        </span>
                        寄甜商品
                      </span>
                    </button>
                  </li>
                  <li className="border-top">
                    <button
                      type="button"
                      className="dropdown-item px-6 py-2"
                      onClick={() => dispatch(openModal({ type: "LOGOUT" }))}
                    >
                      <span className="fs-6 text-primary-700">
                        <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">
                          logout
                        </span>
                        登出
                      </span>
                    </button>
                  </li>
                </ul>
              </>
            ) : (
              <Link to="login" className="btn btn-primary">
                註冊/登入
              </Link>
            )}
          </div>
        </li>
      </ul>
    </>
  );
};

export default DesktopNav;
