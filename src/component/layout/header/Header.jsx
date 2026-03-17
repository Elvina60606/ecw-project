import images from '../../../assets/images/images';
import { useDispatch, useSelector } from "react-redux";
import { getAsyncCarts } from "../../../slices/cartsSlice";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";

import ModalManager from '../../modal/ModalManager';
import MobileNav from './MobileNav';
import DesktopNav from './DesktopNav';

const Header =({ mobileOpen, setMobileOpen}) =>{
    const isLogin = useSelector(state => state.login.isLogin);

    const dispatch = useDispatch();
    const [ searchShow, setSearchShow ] = useState(false);
    const [ desktopOpen, setDesktopOpen ] = useState(false);
    const { totalQuantity } = useSelector(state => state.carts);

    useEffect(() => {
        dispatch(getAsyncCarts())
    },[dispatch]);

    const {pathname} = useLocation();
    useEffect(() => {
        const timer = setTimeout(() => {
            setDesktopOpen(false);
            setMobileOpen(false);
        });
        return () => clearTimeout(timer);
    }, [pathname, setMobileOpen]);

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
                    
                    <MobileNav isLogin={isLogin}
                               images={images}/>
                    
                    <DesktopNav isLogin={isLogin}
                                images={images}
                                searchShow={searchShow}
                                setSearchShow={setSearchShow}
                                totalQuantity={totalQuantity}
                                desktopOpen={desktopOpen}
                                setDesktopOpen={setDesktopOpen}/>
                         
                    </div>
                </div>
        </nav>
        <ModalManager /> 
    </>)
}

export default Header;