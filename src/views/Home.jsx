



//從首頁輪播圖開始，使用react swiper
const Home = () => {

    return (<>
        <section className="hero-container">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div id="heroCarousel"
                                 className="carousel slide hero-carousel"
                                 data-bs-ride="false">
                                <div className="carousel-inner">
                                  {/* 第一張幻燈片 - 法式可麗露 */}
                                    <div className="carousel-item active">
                                        <div className="d-flex justify-content-center">
                                            <img  src={images.caneleBanner}
                                                  alt='caneleBanner.jpg'
                                                  className='d-none d-lg-block'/>
                                            <img  src={images.caneleBannerMd}
                                                  alt='caneleBannerMd.jpg' 
                                                  className='d-lg-none' />
                                            <div className="hero-content">
                                                <div className="hero-text mb-4">
                                                    <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap">在平淡的生活中
                                                    </h2>
                                                    <h2 className="fs-lg-8 fs-3 text-neutral-0 fw-black lh-768 nowrap">用甜點找回你的心跳
                                                    </h2>
                                                </div>
                                                <button className="hero-button" type='button'
                                                        onClick={()=>handleNavigateProducts()}>點我訂購
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                  {/* 第二張幻燈片 - 中秋禮盒 */}
                                    <div className="carousel-item">
                                        <div className="d-flex justify-content-center">
                                            <img src={images.midautumnfestivalBanner}
                                                 alt="midautumnfestivalBanner.jpg"
                                                 className='d-none d-lg-block' />
                                            <img src={images.midautumnfestivalBannerMd}
                                                 alt="midautumnfestivalBannerMd.jpg"
                                                 className='d-lg-none' />
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
                                                <button className="hero-button" type='button'
                                                        onClick={()=>handleNavigateProducts()}>點我訂購
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                  {/* 第三張幻燈片 - 折扣優惠 */}
                                    <div className="carousel-item">
                                        <div className="d-flex justify-content-center">
                                            <img src={images.discountsBanner}
                                                 alt="discountsBanner.jpg" 
                                                 className='d-none d-lg-block'/>
                                            <img src={images.discountsBannerMd}
                                                 alt="discountsBannerMd.jpg" 
                                                 className='d-lg-none'/>
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
                                                <button className="hero-button" type='button'
                                                        onClick={()=>handleNavigateProducts()}>點我訂購
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            {/* 自定義指示器 */}
                                <div className="carousel-indicators">
                                    <button type="button"
                                            data-bs-target="#heroCarousel"
                                            data-bs-slide-to="0"
                                            className="active"
                                            aria-current="true"
                                            aria-label="Slide 1">
                                    </button>
                                    <button type="button"
                                            data-bs-target="#heroCarousel"
                                            data-bs-slide-to="1"
                                            aria-label="Slide 2">
                                    </button>
                                    <button type="button"
                                            data-bs-target="#heroCarousel"
                                            data-bs-slide-to="2"
                                            aria-label="Slide 3">
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img className="vector1-img"
                     src={images.vector1}
                     alt="裝飾向量圖案1" />
        </section>
    </>)
}

export default Home;