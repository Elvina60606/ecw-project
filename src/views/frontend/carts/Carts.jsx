import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import {
  getAsyncCarts,
  deleteAsyncCarts,
  updateAsyncCarts,
} from "../../../slices/cartsSlice";
import { getAsyncOrders, postAsyncOrders } from "../../../slices/ordersSlice";

import MessageToast from "../../../component/utils/MessageToast";
import CartLists from "./CartLists";
import Promotion from "./Promotion";
import OrderPrice from "./OrderPrice";
import CheckoutForm from "./CheckoutForm";
import { getAsyncMessage } from "../../../slices/messageSlice";
import { updateCartQtyLocal } from "../../../slices/cartsSlice";
import { useNavigate } from "react-router";
import { useDebounce } from "@uidotdev/usehooks";

const Carts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { carts, totalPrice, finalPrice } = useSelector((state) => state.carts);

  //price ----------------------------------------
  const shippingCost = finalPrice > 2000 ? 0 : 60;
  const codePrice = totalPrice - finalPrice;
  const terminalPrice = finalPrice + shippingCost;
  const formatPrice = (price) => price.toLocaleString("zh-Hant");
  //-------------------------------------------------

  useEffect(() => {
    const fetchCarts = async () => {
      try {
        await dispatch(getAsyncCarts());
      } catch (error) {
        dispatch(getAsyncMessage(error.response.data));
      }
    };
    fetchCarts();
  }, [dispatch]);

  const [pendingQty, setPendingQty] = useState(null);
  const debouncedQty = useDebounce(pendingQty, 300);

  const changeQty = (cartId, delta) => {
    const currentCart = carts.find((c) => c.id === cartId);
    const newQty = currentCart.qty + delta;

    if (newQty < 1 || newQty > 10) return;

    dispatch(updateCartQtyLocal({ cartId, qty: newQty }));

    setPendingQty({
      cartId,
      productId: currentCart.product.id,
      qty: newQty,
      prevQty: currentCart.qty,
    });
  };

  useEffect(() => {
    if (!debouncedQty) return;

    const updateCart = async () => {
      await dispatch(updateAsyncCarts(debouncedQty));
      dispatch(getAsyncCarts());
    };
    updateCart();
  }, [debouncedQty, dispatch]);

  const deleteCart = (cartId) => {
    dispatch(deleteAsyncCarts(cartId));
  };

  // validation
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    resetField,
    reset,
    getValues,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      invoice_type: "personal",
    },
  });

  // same as member
  const member = useSelector((state) => state.member.member);

  const onSubmit = async (data) => {
    const res = await dispatch(postAsyncOrders(data));
    const Id = res.payload.orderId;
    dispatch(getAsyncOrders());
    dispatch(getAsyncCarts());
    reset();

    if (Id) {
      navigate(`/order_success/${Id}`);
    }
  };

  return (
    <>
      <MessageToast />
      <section className="bg-neutral-50 py-8 py-md-12">
        <CartLists
          carts={carts}
          changeQty={changeQty}
          deleteCart={deleteCart}
          formatPrice={formatPrice}
        />

        <Promotion />

        <OrderPrice
          totalPrice={totalPrice}
          shippingCost={shippingCost}
          codePrice={codePrice}
          terminalPrice={terminalPrice}
          formatPrice={formatPrice}
        />
      </section>

      {/* user info */}
      <section className="py-8 py-md-12">
        <div className="container">
          <h3 className="fs-md-2 text-black mb-6 mb-md-8">填寫資訊</h3>
          <CheckoutForm
            register={register}
            handleSubmit={handleSubmit}
            watch={watch}
            setValue={setValue}
            resetField={resetField}
            reset={reset}
            member={member}
            getValues={getValues}
            errors={errors}
            onSubmit={onSubmit}
          />
        </div>
      </section>
    </>
  );
};

export default Carts;
