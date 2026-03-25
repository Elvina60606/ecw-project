import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../slices/modalSlice";
import {
  getAsyncAdminOrders,
  setCurrentPage,
  deleteAsyncOrder,
  setAdminOrder,
  updateAsyncOrder,
} from "../../slices/admin/adminOrderSlice";

import ModalManager from "../../component/modal/ModalManager";
import MessageToast from "../../component/utils/MessageToast";
import Pagination from "../../component/utils/Pagination";

const AdminOrders = () => {
  const dispatch = useDispatch();
  const { adminOrders, pagination, currentPage } = useSelector(
    (state) => state.adminOrders,
  );

  useEffect(() => {
    dispatch(getAsyncAdminOrders(currentPage));
  }, [dispatch, currentPage]);

  const handleSelectOrder = (order) => {
    dispatch(setAdminOrder(order));
    dispatch(openModal({ type: "ORDER" }));
  };

  const handleChangeStatus = (order) => {
    dispatch(
      updateAsyncOrder({
        id: order.id,
        data: {
          ...order,
          is_paid: !order.is_paid,
        },
      }),
    );
  };

  // orders date
  const normalizeTimestamp = (timeStamp) =>
    timeStamp < 1e12 ? timeStamp * 1000 : timeStamp;

  const formatTime = (timeStamp, addDays = 0) => {
    const date = new Date(normalizeTimestamp(timeStamp));
    date.setDate(date.getDate() + addDays);

    return date.toLocaleDateString("sv-SE", {
      timeZone: "Asia/Taipei",
    });
  };

  //pagination
  const handlePageChange = (page) => {
    dispatch(setCurrentPage(page));
  };

  return (
    <>
      <ModalManager />
      <MessageToast />
      <div className="container">
        <h3>訂單列表</h3>
        <table className="table">
          <thead>
            <tr>
              <th>訂單編號</th>
              <th>訂單成立時間</th>
              <th>預計出貨日</th>
              <th>訂單狀態</th>
              <th>查看</th>
              <th>刪除</th>
            </tr>
          </thead>
          <tbody>
            {adminOrders?.map((order) => (
              <tr key={order.id}>
                <td>{order.create_at}</td>
                <td>{formatTime(order.create_at)}</td>
                <td>{formatTime(order.create_at, 3)}</td>
                <td className="">
                  {order.is_paid ? (
                    <button
                      type="button"
                      className="border border-0 rounded-pill bg-success-50 text-success-700 px-3 py-2"
                      onClick={() => handleChangeStatus(order)}
                    >
                      已完成
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="border border-0 rounded-pill bg-alert-50 text-alert-700 px-3 py-2"
                      onClick={() => handleChangeStatus(order)}
                    >
                      未付款
                    </button>
                  )}
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-primary btn-sm"
                    onClick={() => handleSelectOrder(order)}
                  >
                    查看
                  </button>
                </td>
                <td>
                  <button
                    type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => dispatch(deleteAsyncOrder(order.id))}
                  >
                    刪除
                  </button>
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

export default AdminOrders;
