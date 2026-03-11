import images from '../assets/images/images';
import { Link, Outlet } from "react-router";
import ScrollToTop from "../component/utils/ScrollToTop";

const MemberSidebarLayout =() =>{

    return(
    <>
        <div className=' bg-secondary-50'>
            <main className="container py-md-12 py-8 mb-auto">
              <div className="row justify-content-center">
                <aside className="col-3 d-none d-lg-block">
                  <div className="p-0 m-0 border rounded-4 overflow-hidden bg-white">
                      <div className="bg-white w-100 text-center align-middle px-6 py-7">
                          <img style={{width: '80px', height: '80px'}}
                              className="border rounded-circle mb-4" 
                              src={images.avatar}
                              alt="avatar" />
                          <p className="fs-6 border-bottom pb-7">Claire158872</p>
                      </div>
                      <ul className="li-style-none d-flex flex-column justify-content-start p-0">
                        <li className="mx-6" role="presentation">
                            <Link to='/login'
                                  className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover">
                                  <span className="fs-6 text-primary-700 ps-6">
                                    <span className="material-symbols-outlined fill align-bottom me-2">person</span>
                                      會員中心
                                  </span>
                            </Link>
                        </li>
                        <li className="mx-6" role="presentation">
                            <Link to='#'
                                  className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover">
                                  <span className="fs-6 text-primary-700 ps-6">
                                    <span className="material-symbols-outlined fill align-bottom me-2">edit</span>
                                      修改會​員​資料
                                  </span>
                            </Link>
                        </li>
                        <li className="mx-6" role="presentation">
                            <Link to='#'
                                  className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover">
                                  <span className="fs-6 text-primary-700 ps-6">
                                    <span className="material-symbols-outlined fill align-bottom me-2">lock</span>
                                      修改密碼
                                  </span>
                            </Link>
                        </li>
                        <li className="mx-6" role="presentation">
                            <Link to='/member_sidebar_layout/orders'
                                  className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover">
                                  <span className="fs-6 text-primary-700 ps-6">
                                    <span className="material-symbols-outlined align-bottom me-2">credit_card</span>
                                      訂單紀錄
                                  </span>
                            </Link>

                        </li>
                        <li className="mx-6" role="presentation">
                            <Link to='#'
                                  className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover">
                                    <span className="fs-6 text-primary-700 ps-6">
                                      <span className="material-symbols-outlined fill align-bottom me-2">local_activity</span>
                                      優惠券＆點數
                                    </span>
                            </Link>
                        </li>
                        <li className="mx-6" role="presentation">
                            <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover">
                                  <span className="fs-6 text-primary-700 ps-6">
                                    <span className="material-symbols-outlined fill align-bottom me-2">takeout_dining</span>
                                      寄甜商品
                                  </span>
                            </button>
                        </li>
                        <li className="mx-6" role="presentation">
                            <button className="nav-link w-100 py-2 mb-2 rounded-3 text-start sideBar-hover"
                                    type="button">
                                    <span className="fs-6 text-primary-700 ps-6">
                                      <span className="material-symbols-outlined align-bottom me-2">logout</span>
                                      登出
                                    </span>
                            </button>
                        </li>
                      </ul>                     
                    </div>
                </aside>

                {/*--右側內容--*/}
                <ScrollToTop />
                <Outlet />

              </div>
            </main>
          </div>
    
    
    
    </>)
}

export default MemberSidebarLayout;