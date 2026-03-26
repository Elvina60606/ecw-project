import paymemtMethods from "../../../data/paymentMethods.json";

const Payment = ({ register, errors }) => {
  return (
    <>
      <div className="col-md-6">
        <div className="border border-neutral-300 rounded-4 p-4 p-md-6 h-100">
          <div className="mb-4 d-flex align-items-end">
            <h6 className="fs-md-5">付款方式</h6>
            {errors.paymentMethod && (
              <small className="text-danger ms-3">
                {errors.paymentMethod.message}
              </small>
            )}
          </div>
          <div>
            {paymemtMethods.map((payment) => (
              <div className="form-check py-2" key={payment.id}>
                <input
                  type="radio"
                  className="form-check-input"
                  value={payment.id}
                  id={payment.id}
                  {...register("paymentMethod", { required: "請選擇付款方式" })}
                />
                <label className="form-check-label" htmlFor={payment.id}>
                  {payment.name}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
