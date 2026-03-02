import Footer from "../views/frontend/Footer";
import Header from "../views/frontend/Header";
import ScrollToTop from "../component/ScrollToTop";
import { useState } from "react";
import { Outlet } from "react-router-dom"

const MainLayout =() => {
    const [mobileOpen, setMobileOpen] = useState(false);

    return(<>
        <div className='d-flex flex-column bg-light' style={{minHeight: '100vh'}}>
                <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen}/>
                    <main style={{ display: mobileOpen ? 'none' : 'block'}}>
                        <ScrollToTop />
                        <Outlet/>
                    </main>
                <Footer />
        </div>
    
    </>)
}

export default MainLayout;