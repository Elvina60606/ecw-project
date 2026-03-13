import images from '../../assets/images/images';
import { useDispatch, useSelector } from "react-redux";
import { getAsyncCarts } from "../../slices/cartsSlice";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import ModalManager from '../modal/ModalManager';
import { openModal } from '../../slices/modalSlice';

const Header =({ mobileOpen, setMobileOpen}) =>{
    const isLogin = useSelector(state => state.login.isLogin);

    const dispatch = useDispatch();
    const [ searchShow, setSearchShow ] = useState(false);
    const [ desktopOpen, setDesktopOpen ] = useState(false);
    const { totalQuantity } = useSelector(state => state.carts);

    useEffect(() => {
        dispatch(getAsyncCarts())
    },[]);

    const location = useLocation();
    useEffect(() => {
        setDesktopOpen(false)
        setMobileOpen(false)
    },[location]);

    return (
    <>
        <nav className={`navbar navbar-expand-lg navbar-light bg-light mb-auto ${ !mobileOpen && 'shadow'}`}>
                <div className="container">
               {/* Logo */}
                    <Link  to='/'
                           className="navbar-brand me-auto py-0">
                        <img src='https://raw.githubusercontent.com/Elvina60606/Onon_cake_React/b7d4258906d9bffb3ea738abedf479fb6fdb1ce4/src/assets/images/ononLogoSm.svg'
                            alt="onon_logo-sm"
                            className="d-lg-none" />
                        <img src='https://raw.githubusercontent.com/Elvina60606/Onon_cake_React/b7d4258906d9bffb3ea738abedf479fb6fdb1ce4/src/assets/images/ononLogo.svg'
                            alt="onon_logo"
                            className="d-none d-lg-block" />
                    </Link>
                    <Link to='/carts' className="nav-link d-lg-none">
                        <div className="position-relative">
                            <span className="material-symbols-outlined fill align-bottom text-primary">shopping_cart</span>
                            <span className="position-absolute top-0 start-100 translate-middle badge border border-white bg-secondary-500">{totalQuantity}</span>
                        </div>
                    </Link> 
                    
                {/* 漢堡按鈕 */}
                    <button className="navbar-toggler border-0" type="button"   
                            onClick={() => setMobileOpen(prev => !prev)}>
                        <span className="material-symbols-outlined">menu</span>
                    </button>
                    <div className={`collapse navbar-collapse mobile-menu ${mobileOpen && 'show'}`}>
                    {/* mobile */}
                        { isLogin ? (
                            <ul className="navbar-nav ms-auto mb-5 d-lg-none text-primary-800">
                                <form className="position-relative d-lg-none mt-5 w-100">
                                    <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ps-5 text-primary">search</span>
                                    <input className="form-control input-search ps-10" 
                                            type="search"
                                            id='search'
                                            placeholder="輸入關鍵字" />
                                    <button className="btn btn-search btn-primary fw-medium position-absolute top-50 end-0 translate-middle-y me-2">搜尋</button>
                                </form>

                                <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                                <div className='mb-5 d-flex'>
                                    <img src={images.avatar} alt="avatar"
                                        style={{width:60, height:60}}
                                        className='border rounded-circle' />
                                    <div className='ms-6'>
                                        <p className='text-primary-300'>會員</p>
                                        <p>Claire158872</p>
                                    </div>
                                </div>
                                <li>
                                    <Link to='/login' className='py-3 w-100'>會員中心</Link>
                                </li>
                                <li>
                                    <Link to='/member_registration' className='py-3 w-100'>修改會​員​資料​</Link>
                                </li>
                                <li>
                                    <a href="#" className='py-3 w-100'>修改密碼</a>
                                </li>
                                <li>
                                    <Link to='/member_sidebar_layout/orders' className='py-3 w-100'>訂單紀錄</Link>
                                </li>
                                <li>
                                    <Link to='#' className='py-3 w-100'>優惠券＆點數</Link>
                                </li>
                                <li>
                                    <button type='button'
                                            className='button-reset px-0 py-3 w-100 text-start'
                                            onClick={()=>dispatch(openModal({ type: 'SWEET_PLAN'}))}>
                                            寄甜商品
                                    </button>
                                </li>
                                <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                                <li>
                                    <Link to='#' className='py-3 w-100'>最新消息</Link>
                                </li>
                                <li>
                                    <Link to='/products_sidebar_layout/products' className='py-3 w-100'>商品介紹</Link>
                                </li>
                                <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                                <li>
                                    <button className='button-reset px-0 py-3 w-100 text-start d-flex'
                                            onClick={()=>dispatch(openModal({type: 'LOGOUT'}))}>
                                        <span className="material-symbols-outlined text-primary-300 me-2" 
                                                style={{width: "20px", height: "20px"}}>login</span>
                                        <p>登出</p>    
                                    </button>
                                </li>
                            </ul>
                        ) : (
                            <ul className="navbar-nav ms-auto mb-5 d-lg-none text-primary-800">
                                <form className="position-relative d-lg-none my-5 w-100">
                                    <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ps-5 text-primary">search</span>
                                    <input className="form-control input-search ps-10" 
                                            type="search"
                                            id='search'
                                            placeholder="輸入關鍵字" />
                                    <button className="btn btn-search btn-primary fw-medium position-absolute top-50 end-0 translate-middle-y me-2">搜尋</button>
                                </form>
                                <li>
                                    <Link to='/' className='py-3 w-100'>最新消息</Link>
                                </li>
                                <li>
                                    <Link to='/products_sidebar_layout/products' className='py-3 w-100'>商品介紹</Link>
                                </li>
                                <div className="bg-primary-500 d-lg-none w-100 my-5" style={{height: "4px"}}></div>
                                <li>
                                    <Link to='/login'
                                        className='button-reset px-0 py-3 w-100 text-start d-flex'>
                                        <span className="material-symbols-outlined text-primary-300 me-2" 
                                                style={{width: "20px", height: "20px"}}>login</span>
                                        <p>登入/註冊</p>    
                                    </Link>
                                </li>
                            </ul>
                        )}

                    {/* desktop */}
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-6 align-items-center d-none d-lg-flex">
                            <li className="nav-item">
                                <a className="nav-link">最新消息</a>
                            </li>
                            <li className="nav-item">
                                <Link to='/products_sidebar_layout/products' className="nav-link">商品介紹</Link>
                            </li> 
                            <div className={`collapse ${searchShow ? 'show' : ''}`}>
                                <form className="position-relative">
                                    <span className="material-symbols-outlined position-absolute top-50 translate-middle-y ps-5 text-primary">search</span>
                                    <input className="form-control input-search ps-10" 
                                           type="search"
                                           id='search' 
                                           placeholder="輸入關鍵字" />
                                    <button className="btn btn-search btn-primary fw-medium position-absolute top-50 end-0 translate-middle-y me-2">搜尋
                                    </button>
                                </form>
                            </div>
                            <li className="nav-item">
                                <button className="nav-link"
                                        onClick={()=>setSearchShow(prev => !prev)}>
                                    <span className="material-symbols-outlined align-bottom">search</span>
                                </button>
                            </li>
                            <li className="nav-item">
                                <Link to='/carts' className="nav-link">
                                    <div className="position-relative">
                                        <span className="material-symbols-outlined fill align-bottom"> shopping_cart</span>
                                        <span className="position-absolute top-0 start-100 translate-middle badge border border-white bg-secondary-500">{totalQuantity}</span>
                                    </div>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown-center">
                                    { isLogin ? (<>
                                        <img src={images.avatar}  alt='avatar'
                                            style={{width:40, height:40}}
                                            className="border rounded-circle"
                                            onClick={()=>setDesktopOpen( prev => !prev )}/>
                                        <ul className={`dropdown-menu ${ desktopOpen && 'show dropdown-menu-end'}`}
                                                style={{width:250, position: "absolute", top: "120%", right: -4,}}>
                                                <li>
                                                    <Link to='#' className="dropdown-item px-6 py-2">
                                                        <span className="fs-6 text-primary-700">
                                                            <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">person</span>會員中心
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='#' className="dropdown-item px-6 py-2">
                                                        <span className="fs-6 text-primary-700">
                                                            <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">edit</span>修改會​員​資料
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='#' className="dropdown-item px-6 py-2">
                                                        <span className="fs-6 text-primary-700">
                                                            <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">lock</span>修改密碼
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='/member_sidebar_layout/orders' className="dropdown-item px-6 py-2">
                                                        <span className="fs-6 text-primary-700">
                                                            <span className="material-symbols-outlined align-bottom me-2 text-primary-300">credit_card</span>訂單紀錄
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to='#' className="dropdown-item px-6 py-2">
                                                        <span className="fs-6 text-primary-700">
                                                            <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">local_activity</span>優惠券＆點數
                                                        </span>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <button type='button'
                                                            className="dropdown-item px-6 py-2"
                                                            onClick={()=>dispatch(openModal({ type: 'SWEET_PLAN'}))}>
                                                        <span className="fs-6 text-primary-700">
                                                            <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">takeout_dining</span>寄甜商品
                                                        </span>
                                                    </button>
                                                </li>
                                                <li className='border-top'>
                                                    <button className="dropdown-item px-6 py-2"
                                                            onClick={()=>dispatch(openModal({type: 'LOGOUT'}))}>
                                                        <span className="fs-6 text-primary-700">
                                                            <span className="material-symbols-outlined fill align-bottom me-2 text-primary-300">logout</span>登出
                                                        </span>
                                                    </button>
                                                </li>           
                                        </ul>
                                    </>
                                    ) : (
                                        <Link to='login'
                                            className="btn btn-primary">註冊/登入
                                        </Link>
                                    ) }
                                </div>
                            </li>
                        </ul> 
                    </div>
                </div>
        </nav>
        <ModalManager /> 
    </>)
}

export default Header;

//把header拆分成 mobile & desktop元件
//加入AsyncMessage