import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../slices/modalSlice";

const AdminOrderModal = () => {
  const dispatch = useDispatch();
  const adminOrder = useSelector((state) => state.adminOrders.adminOrder);

  const orderProducts = Object.values(adminOrder.products || {});
  const totalPrice = orderProducts.reduce(
    (sum, item) => sum + item.total * item.qty,
    0,
  );

  if (!adminOrder) return null;

  return (
    <>
      <div className="modal-overlay" tabIndex="-1">
        <div className="admin-modal-box" style={{ width: "70%" }}>
          <div className="modal-header mt-4 mb-5">
            <h4>訂單編號：{adminOrder.create_at}</h4>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-6">
                <h5 className="mb-3">產品內容</h5>
                {orderProducts.map((item) => (
                  <div key={item.id} className="mb-4">
                    <p>{item.product.title}</p>
                    <p>
                      ${item.total} x {item.qty} = ${item.total * item.qty}
                    </p>
                  </div>
                ))}
                <h4>訂單總金額：${totalPrice}</h4>
              </div>
              <div className="col-6">
                <h5 className="mb-3">收件人資訊</h5>
                <p className="mb-3">收件人姓名：{adminOrder.user.name}</p>
                <p className="mb-3">信箱：{adminOrder.user.email}</p>
                <p className="mb-3">電話：{adminOrder.user.tel}</p>
                <p className="mb-3">收件地址：{adminOrder.user.address}</p>
              </div>
            </div>
          </div>
          <div className="modal-footer d-flex justify-content-end gap-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => dispatch(closeModal())}
            >
              關閉
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminOrderModal;
