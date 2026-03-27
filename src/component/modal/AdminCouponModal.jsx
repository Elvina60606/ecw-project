import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../slices/modalSlice";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

import {
  createAsyncCoupon,
  updateAsyncCoupon,
  resetTemptCoupon,
  getAsyncAdminCoupons,
} from "../../slices/admin/adminCouponSlice";

const AdminCouponModal = ({ mode }) => {
  const dispatch = useDispatch();
  const tempCoupon = useSelector((state) => state.adminCoupons.tempCoupon);

  const isCreate = mode === "create";

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const formatDateForInput = (timestamp) => {
    if (!timestamp) return "";

    const date = new Date(timestamp < 1e12 ? timestamp * 1000 : timestamp);

    return date.toISOString().split("T")[0]; // yyyy-mm-dd
  };

  useEffect(() => {
    if (!isCreate && tempCoupon.id) {
      reset({
        ...tempCoupon,
        due_date: formatDateForInput(tempCoupon.due_date),
      });
    } else {
      reset({
        id: "",
        title: "",
        percent: "",
        due_date: "",
        code: "",
        num: "",
        is_enabled: false,
      });
    }
  }, [tempCoupon, isCreate, reset]);

  const onSubmit = async (data) => {
    const formatData = {
      ...data,
      due_date: Math.floor(new Date(data.due_date).getTime() / 1000),
    };

    if (isCreate) {
      await dispatch(createAsyncCoupon(formatData));
    } else {
      await dispatch(
        updateAsyncCoupon({
          id: tempCoupon.id,
          data: formatData,
        }),
      );
    }

    dispatch(getAsyncAdminCoupons());
    dispatch(closeModal());
    dispatch(resetTemptCoupon());
  };

  return (
    <>
      <div className="modal-overlay" tabIndex="-1">
        <div className="admin-modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch(closeModal())}
              ></button>
            </div>
            <div className="modal-body">
              <div className="row justify-content-center">
                <div className="col-6">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">
                      優惠卷名稱
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="請輸入優惠卷名稱"
                      {...register("title", {
                        required: "名稱不得為空",
                      })}
                    />
                    {errors.title && (
                      <small className="text-danger">
                        {errors.title.message}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="percent" className="form-label">
                      折扣數（％）
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="percent"
                      placeholder="請輸入折扣數"
                      {...register("percent", {
                        required: "折扣數不得為空",
                      })}
                    />
                    {errors.percent && (
                      <small className="text-danger">
                        {errors.percent.message}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="due_date" className="form-label">
                      到期日
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="due_date"
                      placeholder="請輸入到期日"
                      {...register("due_date", {
                        required: "到期日不得為空",
                      })}
                    />
                    {errors.due_date && (
                      <small className="text-danger">
                        {errors.due_date.message}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <label htmlFor="code" className="form-label">
                      優惠碼
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="code"
                      placeholder="請輸入優惠碼"
                      {...register("code", {
                        required: "優惠碼不得為空",
                      })}
                    />
                    {errors.code && (
                      <small className="text-danger">
                        {errors.code.message}
                      </small>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="is_enabled"
                        {...register("is_enabled")}
                      />
                      <label className="form-check-label" htmlFor="is_enabled">
                        是否啟用
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-end gap-2">
              <button type="submit" className="btn">
                確認送出
              </button>
              <button
                type="button"
                className="btn"
                onClick={() => dispatch(closeModal())}
              >
                取消
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminCouponModal;
