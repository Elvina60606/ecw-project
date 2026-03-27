import images from "../../assets/images/images.js";

const Coupons = () => {
  return (
    <>
      <div className="col-md-9">
        <h3 className="mb-6">優惠券＆點數</h3>
        {/*紅利點數*/}
        <div className="d-lg-flex justify-content-around align-items-center bg-white border border-1 rounded-4 p-5 mb-6">
          <h5 className="text-neutral-800 mb-6 mb-lg-0 text-nowrap">
            紅利點數
          </h5>
          <div className="d-lg-flex w-100">
            <div className="d-flex justify-content-center align-items-center bg-primary-600 border rounded-2 py-6 px-auto mx-lg-6 w-100 mb-6 mb-lg-0">
              <p className="text-white fs-6">目前剩餘</p>
              <p className="h1 mx-6 text-white mx-6 mx-lg-3">0</p>
              <span className="text-white fs-6">點</span>
            </div>
            <div className="d-flex justify-content-center align-items-center bg-primary-600 border rounded-2 py-6 px-auto w-100">
              <div>
                <p className="text-white fs-6">即將過期</p>
                <p className="text-secondary-100">2026/12/31 止</p>
              </div>
              <p className="h1 mx-6 text-white mx-6 mx-lg-3">0</p>
              <span className="text-white fs-6">點</span>
            </div>
          </div>
        </div>
        {/*優惠卷*/}
        <div className="bg-white border border-1 rounded-4 p-5">
          <h5 className="text-neutral-800 mb-6">優惠卷</h5>
          {/*mobile*/}
          <div className="d-lg-none">
            <div className="shadow rounded-4 mb-6">
              <div className="d-flex justify-content-center coupon-card-up rounded-4 rounded-bottom-0">
                <img
                  className="me-3"
                  style={{ width: 24, height: 24 }}
                  src={images.logo3}
                  alt="canele-logo"
                />
                <span className="h4 text-primary-700">12% off</span>
              </div>
              <div className="p-4 rounded-4 rounded-top-0">
                <h5 className="text-primary-700 mb-1">不限金額即享88折</h5>
                <p className="text-neutral-800 mb-1">
                  歡迎加入onon_cake二溫菓子
                </p>
                <p className="text-neutral-800 mb-4 pb-4 border-bottom">
                  首次購買甜點
                </p>
                <div className="d-flex justify-content-between">
                  <div className="text-nowrap">
                    <h6 className="text-primary-600">優惠券代碼</h6>
                    <p className="text-alert-500 fs-7">僅可使用一次</p>
                  </div>
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control ms-3 border-end-0"
                        placeholder="firsttime"
                      />
                      <button
                        className="btn border rounded-1 border-start-0"
                        type="button"
                      >
                        <img src={images.contentcopy} alt="content-copy" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="shadow rounded-4 mb-6">
              <div className="d-flex justify-content-center coupon-card-up rounded-4 rounded-bottom-0">
                <img
                  className="me-3"
                  style={{ width: 24, height: 24 }}
                  src={images.logo3}
                  alt="canele-logo"
                />
                <span className="h4 text-primary-700">40% off</span>
              </div>
              <div className="p-4 rounded-4 rounded-top-0">
                <h5 className="text-primary-700 mb-1">天大地大．壽星最大</h5>
                <p className="text-neutral-800 mb-1">祝你生日快樂</p>
                <p className="text-neutral-800 mb-4 pb-4 border-bottom">
                  本月購買甜點享 6 折優惠
                </p>
                <div className="d-flex justify-content-between">
                  <div className="text-nowrap">
                    <h6 className="text-primary-600">優惠券代碼</h6>
                    <p className="text-alert-500 fs-7">本月專屬</p>
                  </div>
                  <div>
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control ms-3 border-end-0"
                        placeholder="birthday666"
                      />
                      <button
                        className="btn border rounded-1 border-start-0"
                        type="button"
                      >
                        <img src={images.contentcopy} alt="content-copy" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*desktop*/}
          <div className="row d-none d-lg-flex">
            <div className="col-lg-6 mb-6">
              <div className="shadow rounded-4 d-none d-lg-flex mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center coupon-card-left rounded-4 rounded-end-0">
                  <img
                    className="mb-3"
                    style={{ width: 24, height: 24 }}
                    src={images.logo3}
                    alt="canele-logo"
                  />
                  <h4 className="text-primary-700 text-nowrap">12% off</h4>
                </div>
                <div className="p-4 rounded-4 rounded-start-0">
                  <h5 className="text-primary-700 mb-1">不限金額即享88折</h5>
                  <p className="text-neutral-800 mb-1">
                    歡迎加入onon_cake二溫菓子
                  </p>
                  <p className="text-neutral-800 mb-4 pb-4 border-bottom">
                    首次購買甜點
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="text-nowrap">
                      <h6 className="text-primary-600">優惠券代碼</h6>
                      <p className="text-alert-500 fs-7">僅可使用一次</p>
                    </div>
                    <div>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control ms-3 border-end-0"
                          placeholder="firsttime"
                        />
                        <button
                          className="btn border rounded-1 border-start-0"
                          type="button"
                        >
                          <img src={images.contentcopy} alt="content-copy" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 mb-6">
              <div className="shadow rounded-4 d-none d-lg-flex mb-4">
                <div className="d-flex flex-column justify-content-center align-items-center coupon-card-left rounded-4 rounded-end-0">
                  <img
                    className="mb-3"
                    style={{ width: 24, height: 24 }}
                    src={images.logo3}
                    alt="canele-logo"
                  />
                  <h4 className="text-primary-700 text-nowrap">40% off</h4>
                </div>
                <div className="p-4 rounded-4 rounded-start-0">
                  <h5 className="text-primary-700 mb-1">天大地大．壽星最大</h5>
                  <p className="text-neutral-800 mb-1">祝你生日快樂</p>
                  <p className="text-neutral-800 mb-4 pb-4 border-bottom">
                    本月購買甜點享 6 折優惠
                  </p>
                  <div className="d-flex justify-content-between">
                    <div className="text-nowrap">
                      <h6 className="text-primary-600">優惠券代碼</h6>
                      <p className="text-alert-500 fs-7">本月專屬</p>
                    </div>
                    <div>
                      <div className="input-group">
                        <input
                          type="text"
                          className="form-control ms-3 border-end-0"
                          placeholder="birthday666"
                        />
                        <button
                          className="btn border rounded-1 border-start-0"
                          type="button"
                        >
                          <img src={images.contentcopy} alt="content-copy" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Coupons;
