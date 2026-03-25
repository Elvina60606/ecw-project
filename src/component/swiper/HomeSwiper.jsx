import images from "@/assets/images/images.js";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";
import "./homeSwiperCss.scss";

const Hero = ({ onNavigate }) => (
  <>
    <div className="hero-content">
      <div className="hero-text mb-4">
        <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap">
          在平淡的生活中
        </h2>
        <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap">
          用甜點找回你的心跳
        </h2>
      </div>
      <button className="hero-button" type="button" onClick={onNavigate}>
        點我訂購
      </button>
    </div>
  </>
);
const MidAutumn = ({ onNavigate }) => (
  <>
    <div className="mid-content">
      <div className="mid-text mb-4">
        <p className="fs-lg-5 fs-6 text-neutral-0 fw-bold lh-24 nowrap mb-2">
          Just Enjoy The Mid-Autumn Festival!
        </p>
        <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap mb-2">
          月圓人團圓．給你一盒甜
        </h2>
        <p className="fs-lg-3 fs-6 text-neutral-0 fw-bold lh-336 nowrap">
          中秋禮盒．限量發售
        </p>
      </div>
      <button className="hero-button" type="button" onClick={onNavigate}>
        點我訂購
      </button>
    </div>
  </>
);
const Discount = ({ onNavigate }) => (
  <>
    <div className="discounts-content">
      <div className="discounts-text mb-4">
        <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap mb-3">
          主廚回饋．折扣優惠
        </h2>
        <div className="discounts-box d-flex flex-column justify-content-center align-items-center">
          <p className="fs-lg-3 fs-5 text-neutral-0 fw-bold lh-336 nowrap mb-1">
            滿 NT$2000．享免運費
          </p>
          <p className="fs-lg-3 fs-5 text-neutral-0 fw-bold lh-336 nowrap mb-1">
            滿 NT$3000．享９２折
          </p>
          <p className="fs-lg-3 fs-5 text-neutral-0 fw-bold lh-336 nowrap">
            滿 NT$5000．享８８折
          </p>
        </div>
      </div>
      <button className="hero-button" type="button" onClick={onNavigate}>
        點我訂購
      </button>
    </div>
  </>
);

const swipeData = [
  {
    key: "hero",
    imagesDesktop: images.caneleBanner,
    imagesMobile: images.caneleBannerMd,
    component: Hero,
  },
  {
    key: "mid_autumn",
    imagesDesktop: images.midautumnfestivalBanner,
    imagesMobile: images.midautumnfestivalBannerMd,
    component: MidAutumn,
  },
  {
    key: "discount",
    imagesDesktop: images.discountsBanner,
    imagesMobile: images.discountsBannerMd,
    component: Discount,
  },
];

const HomeSwiper = () => {
  const navigate = useNavigate();
  const handleNavigateToProducts = () => {
    navigate("/products_sidebar_layout/products");
  };

  return (
    <>
      <section className="hero-container">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Swiper
                className="mySwiper"
                pagination={{
                  clickable: true,
                  el: ".my-pagination",
                }}
                modules={[Autoplay, Pagination]}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                loop={true}
              >
                {swipeData.map((item) => {
                  const Content = item.component;

                  return (
                    <SwiperSlide key={item.key}>
                      <div className="rounded-4 overflow-hidden">
                        <div className="d-flex justify-content-center">
                          <img
                            className="d-none d-lg-block"
                            src={item.imagesDesktop}
                            alt={item.key}
                          />
                          <img
                            className="d-lg-none"
                            src={item.imagesMobile}
                            alt={item.key}
                          />
                          <Content onNavigate={handleNavigateToProducts} />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
                <div className="my-pagination text-center"></div>
              </Swiper>
            </div>
          </div>
        </div>
        <img
          className="vector1-img z-0"
          src={images.vector1}
          alt="裝飾向量圖案1"
        />
      </section>
    </>
  );
};

export default HomeSwiper;
