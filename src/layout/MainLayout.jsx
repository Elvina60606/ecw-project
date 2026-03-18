import Footer from "../component/layout/Footer";
import Header from "../component/layout/header/Header";
import ScrollToTop from "../component/utils/ScrollToTop";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
        <Header mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />
        <main style={{ display: mobileOpen ? "none" : "block" }}>
          <ScrollToTop />
          <Outlet />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default MainLayout;
