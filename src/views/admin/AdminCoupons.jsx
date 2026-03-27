import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../slices/modalSlice";
import {
  getAsyncAdminCoupons,
  setCurrentPage,
  deleteAsyncCoupon,
  resetTemptCoupon,
  setTempCoupon,
} from "../../slices/admin/adminCouponSlice";

import MessageToast from "../../component/utils/MessageToast";
import Pagination from "../../component/utils/Pagination";
import ModalManager from "../../component/modal/ModalManager";

const AdminCoupons = () => {
  const dispatch = useDispatch();
  const { adminCoupons, pagination, currentPage } = useSelector(
    (state) => state.adminCoupons,
  );

  useEffect(() => {
    dispatch(getAsyncAdminCoupons(currentPage));
  }, [dispatch, currentPage]);

  const handleCreateCoupon = () => {
    dispatch(resetTemptCoupon());
    dispatch(
      openModal({
        type: "COUPON",
        props: { mode: "create" },
      }),
    );
  };

  const handleUpdateCoupon = (Coupon) => {
    dispatch(setTempCoupon(Coupon));
    dispatch(
      openModal({
        type: "COUPON",
        props: { mode: "edit" },
      }),
    );
  };

  // coupons date
  const normalizeTimestamp = (timeStamp) =>
    timeStamp < 1e12 ? timeStamp * 1000 : timeStamp;

  const formatTime = (timeStamp, addDays = 0) => {
    const date = new Date(normalizeTimestamp(timeStamp));
    date.setDate(date.getDate() + addDays);

    return date.toLocaleDateString("sv-SE", {
      timeZone: "Asia/Taipei",
    });
  };

  pagination;
  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <ModalManager />
      <MessageToast />
      <div className="container">
        <h3>優惠卷列表</h3>
        <div className="text-end my-4 me-5">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleCreateCoupon}
          >
            建立新的優惠卷
          </button>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th>優惠卷名稱</th>
              <th>折扣數</th>
              <th>到期日</th>
              <th>是否啟用</th>
              <th>編輯</th>
            </tr>
          </thead>
          <tbody>
            {adminCoupons?.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.percent}</td>
                <td>{formatTime(item.due_date)}</td>
                <td className={item.is_enabled ? "text-success" : ""}>
                  {item.is_enabled ? "啟用" : "未啟用"}
                </td>
                <td>
                  <div className="btn-group">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => handleUpdateCoupon(item)}
                    >
                      編輯
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => dispatch(deleteAsyncCoupon(item.id))}
                    >
                      刪除
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <Pagination
        currentPage={currentPage}
        onPageChange={handlePageChange}
        totalPages={pagination?.total_pages || 1}
      />
    </>
  );
};

export default AdminCoupons;
