import { Link } from "react-router";

const Footer = () => {
  return (
    <>
      <div className="bg-primary-800">
        <div className="container py-8 d-flex flex-column flex-lg-row align-items-center justify-content-between">
          <Link to="/">
            <img
              className="mb-6 mb-lg-0"
              src="https://raw.githubusercontent.com/Elvina60606/Onon_cake_React/b7d4258906d9bffb3ea738abedf479fb6fdb1ce4/src/assets/images/ononLogoWhite.svg"
              alt="onon_logo-white"
            />
          </Link>
          {/*--contact info--*/}
          <div className="mb-6 mb-lg-0">
            <p className="fs-7 text-white py-2 py-lg-1 d-flex align-items-center justify-content-center justify-content-lg-start">
              <span className="material-symbols-outlined fill me-1 text-primary-300">
                call
              </span>
              <a href="tel:+886800123456" aria-label="撥打 0800-123-456">
                0800-123-456
              </a>
            </p>
            <p
              className="fs-7 text-white py-2 py-lg-1 d-flex align-items-center justify-content-center
                        justify-content-lg-start"
            >
              <span className="material-symbols-outlined fill me-1 text-primary-300">
                location_on
              </span>
              桃園市桃園區桃園路123號
            </p>
            <p
              className="fs-7 text-white py-2 py-lg-1 d-flex align-items-center justify-content-center
                        justify-content-lg-start"
            >
              <span className="material-symbols-outlined fill me-1 text-primary-300">
                schedule
              </span>
              10:00-19:00 週一公休
            </p>
          </div>
          {/*--official link--*/}
          <div className="d-flex flex-column align-items-center align-items-lg-end">
            <div className="mb-4">
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/Elvina60606/Onon_cake_React/b7d4258906d9bffb3ea738abedf479fb6fdb1ce4/src/assets/images/facebookWhite.svg"
                  alt="facebook-white"
                  className="border border-white rounded-circle p-2 me-2"
                />
              </a>
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/Elvina60606/Onon_cake_React/b7d4258906d9bffb3ea738abedf479fb6fdb1ce4/src/assets/images/instagramWhite.svg"
                  alt="instagram-white"
                  className="border border-white rounded-circle p-2 me-2"
                />
              </a>
              <a href="#">
                <img
                  src="https://raw.githubusercontent.com/Elvina60606/Onon_cake_React/b7d4258906d9bffb3ea738abedf479fb6fdb1ce4/src/assets/images/lineWhite.svg"
                  alt="line-white"
                  className="border border-white rounded-circle p-2"
                />
              </a>
            </div>
            <p className="fs-7 text-white text-center">
              Copyright © 2025 onon_cake All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
