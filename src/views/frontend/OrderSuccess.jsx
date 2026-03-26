import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAsyncOrder } from "../../slices/ordersSlice";
import { useEffect } from "react";
import { Comment } from "react-loader-spinner";

const OrderSuccess = () => {
  const dispatch = useDispatch();
  const { Id } = useParams();

  useEffect(() => {
    if (Id) {
      dispatch(getAsyncOrder(Id));
    }
  }, [dispatch, Id]);

  const order = useSelector((state) => state.orders.order);

  if (!order)
    return (
      <div className="text-center my-13" style={{ minHeight: 400 }}>
        <Comment
          visible={true}
          height="80"
          width="80"
          ariaLabel="comment-loading"
          wrapperStyle={{}}
          wrapperClass="comment-wrapper"
          color="#fff"
          backgroundColor="#F4442E"
        />
      </div>
    );

  const orderProducts = Object.values(order?.products || {});
  const totalPrice = orderProducts.reduce(
    (sum, item) => sum + item.total * item.qty,
    0,
  );

  return (
    <>
      <div className="container my-13">
        <div className="row justify-content-center">
          <div className="text-center mt-5 mb-8">
            <h2>感謝您的訂購！</h2>
          </div>
          <div className="col-lg-3">
            <div className="mb-4 text-center text-lg-start">
              <h4 className="mb-3">收件人資訊</h4>
              <p className="mb-3">收件人姓名：{order.user?.name}</p>
              <p className="mb-3">信箱：{order.user?.email}</p>
              <p className="mb-3">電話：{order.user?.tel}</p>
              <p className="mb-3">收件地址：{order.user?.address}</p>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="mb-4 text-center text-lg-start">
              <h4 className="mb-3">產品內容</h4>
              {orderProducts.map((item) => (
                <div key={item.id} className="mb-4">
                  <p>{`${item.product.title} ${item.product.content}`}</p>
                  <p>
                    ${item.total} x {item.qty} = ${item.total * item.qty}
                  </p>
                </div>
              ))}
              <h4>總金額為 $ {totalPrice} 元</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
