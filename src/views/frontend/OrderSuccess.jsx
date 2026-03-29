import images from "../../assets/images/images";
import LoadingDNA from "../../component/utils/LoadingDNA";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router";
import { getAsyncOrder } from "../../slices/ordersSlice";
import { useEffect } from "react";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();

  useEffect(() => {
    if (Id) {
      dispatch(getAsyncOrder(Id));
    }
  }, [dispatch, Id]);

  const order = useSelector((state) => state.orders.order);

  if (!order) return <LoadingDNA />;

  return (
    <>
      <div className="container mt-6 mb-13 text-center">
        <img
          src={images.logo4}
          alt="logo4.svg"
          style={{ height: 250, width: 250 }}
        />
        <h3 className="text-success-500 mb-5">謝謝您！您的訂單已成立！</h3>
        <h4 className="text-primary-600 me-3">訂單編號：{order.create_at}</h4>
        <div className="my-4">
          <p className="fs-5">
            可前往
            <Link
              to="/member_sidebar_layout/orders"
              className="fw-bold text-success-900"
            >
              會員中心
            </Link>
            查看訂單或
            <Link
              to="/products_sidebar_layout/products"
              className="fw-bold text-success-900"
            >
              再去逛逛
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
