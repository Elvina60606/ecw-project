import { useDispatch } from "react-redux";
import { Link } from "react-router";
import { deleteAsyncCarts } from "../../../slices/cartsSlice";

const CartLists = ({ carts, incrementQty, decrementQty, deleteCart }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h3 className="fs-md-2 text-black mb-6 mb-md-8">購物車商品清單</h3>
        {/* desktop */}
        <div className="row d-none d-md-block">
          <table className="table table-borderless text-center align-middle mb-0">
            <thead className="table-carts-thead">
              <tr>
                <th scope="col" style={{ width: "48%" }}>
                  商品資料
                </th>
                <th scope="col" style={{ width: "9%" }}>
                  單價
                </th>
                <th scope="col" style={{ width: "18%" }}>
                  數量
                </th>
                <th scope="col" style={{ width: "15%" }}>
                  小計
                </th>
                <th scope="col" style={{ width: "10%" }}>
                  刪除
                </th>
              </tr>
            </thead>
            <tbody className="table-carts-tbody">
              {carts.length > 0 ? (
                carts?.map((cart) => (
                  <tr key={cart.id}>
                    <td colSpan={5} className="rounded-4 p-0">
                      <div className="d-flex align-items-center ps-7 py-4 table-body-hover">
                        <div
                          className="d-flex align-items-center"
                          style={{ width: "46%" }}
                        >
                          <img
                            src={cart.product.imageUrl}
                            alt="product-imageUrl"
                            className="rounded-4 me-4 object-fit-cover"
                            style={{ width: 80, height: 80 }}
                          />
                          <h5>{cart.product.title}</h5>
                        </div>
                        <div style={{ width: "10%" }}>
                          <h6>NT$ {cart.product.price}</h6>
                        </div>
                        <div style={{ width: "20%" }}>
                          <div className="d-inline-flex justify-content-center align-items-center border rounded-3 mx-auto">
                            <button
                              type="button"
                              className="btn btn-qty"
                              onClick={() => decrementQty(cart)}
                            >
                              <i className="bi bi-dash-lg"></i>
                            </button>
                            <h6 className="px-4">{cart.qty}</h6>
                            <button
                              type="button"
                              className="btn btn-qty"
                              onClick={() => incrementQty(cart)}
                            >
                              <i className="bi bi-plus-lg"></i>
                            </button>
                          </div>
                        </div>
                        <div style={{ width: "15%" }}>
                          <h5 className="text-secondary-500">
                            NT$ {cart.product.price * cart.qty}
                          </h5>
                        </div>
                        <div style={{ width: "10%" }}>
                          <button
                            type="button"
                            className="btn btn-trash"
                            onClick={() => deleteCart(cart.id)}
                          >
                            <i className="bi bi-trash3-fill"></i>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="rounded-4 py-8">
                    <Link
                      to="/products_sidebar_layout/products"
                      className="text-primary-700 fw-bold"
                    >
                      目前購物車是空的，去逛逛商品吧！
                    </Link>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        {/* mobile */}
        <div className="row px-3 d-md-none">
          {carts.length > 0 ? (
            carts?.map((cart) => (
              <div
                className="bg-white rounded-4 p-4 pb-0 mb-4 mobile-product"
                key={cart.id}
              >
                <div className="d-flex align-items-center">
                  <img
                    className="rounded-4 me-4 object-fit-cover"
                    style={{ width: 80, height: 80 }}
                    src={cart.product.imageUrl}
                    alt="product-imageUrl"
                  />
                  <div>
                    <h6 className="mb-2">{cart.product.title}</h6>
                    <h6>NT$ {cart.product.price}</h6>
                  </div>
                </div>

                <div className="d-flex justify-content-between align-items-center">
                  <div
                    className="d-flex align-items-center border rounded-3"
                    style={{ width: "40%" }}
                  >
                    <button
                      type="button"
                      className="btn btn-qty flex-fill"
                      onClick={() => decrementQty(cart)}
                    >
                      <i className="bi bi-dash-lg"></i>
                    </button>
                    <h6 className="text-center px-4 flex-fill">{cart.qty}</h6>
                    <button
                      type="button"
                      className="btn btn-qty flex-fill"
                      onClick={() => incrementQty(cart)}
                    >
                      <i className="bi bi-plus-lg"></i>
                    </button>
                  </div>
                  <div className="d-flex align-items-center">
                    <h5 className="text-secondary-500">
                      NT$ {cart.product.price * cart.qty}
                    </h5>
                    <button
                      type="button"
                      className="btn btn-trash m-4"
                      onClick={() => dispatch(deleteAsyncCarts(cart.id))}
                    >
                      <i className="bi bi-trash3-fill"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-white rounded-4 p-4 mb-4 text-center">
              <Link
                to="/products_sidebar_layout/products"
                className="text-primary-700 fw-bold"
              >
                目前購物車是空的，去逛逛商品吧！
              </Link>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartLists;
