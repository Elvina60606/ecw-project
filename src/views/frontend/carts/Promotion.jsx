import { useState } from "react";
import { useDispatch } from "react-redux";
import { applyCoupon } from "../../../slices/cartsSlice";

const Promotion = () => {
  const dispatch = useDispatch();
  const [couponCode, setCouponCode] = useState("");
  return (
    <>
      <div className="container pb-4">
        <div className="row g-3">
          <div className="col-md-4">
            <div className="bg-white border rounded-4 p-4 p-md-6 d-flex flex-column flex-md-row justify-content-between flex-wrap flex-xxl-nowrap h-100">
              <div className="d-flex flex-column flex-grow-1 me-md-4">
                <label htmlFor="point" className="mb-1">
                  可用點數：0點
                </label>
                <input
                  type="text"
                  id="point"
                  placeholder="請輸入紅利點數"
                  className="form-control border border-neutral-300 rounded-3 px-4 py-2"
                  disabled
                />
              </div>
              <div className="d-flex align-items-end mt-4">
                <button
                  type="button"
                  className="btn btn-coupon me-4 w-50"
                  disabled
                >
                  使用
                </button>
                <button
                  type="button"
                  className="btn btn-coupon-clear w-50"
                  disabled
                >
                  清除
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="bg-white border rounded-4 p-4 p-md-6 d-flex flex-column flex-md-row  justify-content-between flex-wrap flex-xxl-nowrap h-100">
              <div className="d-flex flex-column flex-grow-1 me-md-4">
                <label htmlFor="promoCode" className="mb-1">
                  優惠碼
                </label>
                <input
                  type="text"
                  id="promoCode"
                  placeholder="請輸入優惠碼"
                  className="form-control border border-neutral-300 rounded-3 px-4 py-2"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                />
              </div>
              <div className="d-flex align-items-end mt-4">
                <button
                  type="button"
                  className="btn btn-coupon me-4 w-50 flex-fill"
                  onClick={() => dispatch(applyCoupon(couponCode))}
                >
                  使用
                </button>
                <button
                  type="button"
                  className="btn btn-coupon-clear w-50 flex-fill"
                  onClick={() => setCouponCode("")}
                >
                  清除
                </button>
              </div>
            </div>
          </div>

          <div className="col-md-4 ">
            <div className="bg-white border rounded-4 p-4 p-md-6 d-flex flex-column flex-md-row  justify-content-between flex-wrap flex-xxl-nowrap h-100">
              <div className="d-flex flex-column flex-grow-1 me-md-4">
                <label htmlFor="coupon" className="mb-1">
                  優惠券
                </label>
                <select
                  id="coupon"
                  defaultValue=""
                  disabled
                  className="form-select border border-neutral-300 rounded-3 py-2 mb-4 mb-md-0 text-neutral-700"
                >
                  <option value="">請選擇優惠券</option>
                  <option value="0">無優惠卷</option>
                </select>
              </div>
              <div className="d-flex align-items-end mt-4">
                <button
                  type="button"
                  className="btn btn-coupon me-4 w-50 flex-fill"
                  disabled
                >
                  使用
                </button>
                <button
                  type="button"
                  className="btn btn-coupon-clear w-50 flex-fill"
                  disabled
                >
                  清除
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Promotion;
