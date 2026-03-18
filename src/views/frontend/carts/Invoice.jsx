import invoiceData from "../../../data/invoice.json";
import { useEffect } from "react";

const Invoice = ({ register, watch, resetField }) => {
  // invoice
  const invoiceType = watch("invoice_type");
  const carrierType = watch("carrier_type");

  const invoiceConfig = invoiceData.find((item) => item.id === invoiceType);

  // 切換發票時清空
  useEffect(() => {
    resetField("carrier_type");
    invoiceData.forEach((inv) => {
      inv.carriers?.forEach((carrier) => {
        carrier.fields?.forEach((field) => resetField(field.id));
      });
      inv.fields?.forEach((field) => resetField(field.id));
    });
  }, [invoiceType]);

  // 切換carriers時清空
  useEffect(() => {
    invoiceConfig?.carriers
      ?.filter((c) => c.id !== carrierType)
      .forEach((c) => c.fields?.forEach((f) => resetField(f.id)));
  }, [carrierType]);

  return (
    <>
      <div className="col-12 col-md-6">
        <div className="border border-neutral-300 rounded-4 p-4 p-md-6 h-100">
          <h6 className="fs-md-5 mb-4">發票開立</h6>
          <div>
            <select
              className="form-select mb-4"
              name="invoice"
              id="invoice"
              {...register("invoice_type")}
            >
              {invoiceData.map((item) => (
                <option value={item.id} key={item.id}>
                  {item.name}
                </option>
              ))}
            </select>
            {invoiceConfig?.carriers?.map((carrier) => (
              <div
                className="form-check py-2 d-flex align-items-center"
                key={carrier.id}
              >
                <input
                  className="form-check-input me-2"
                  type="radio"
                  name="carrier_type"
                  id={carrier.id}
                  value={carrier.id}
                  {...register("carrier_type")}
                />
                <label className="form-check-label" htmlFor={carrier.id}>
                  {" "}
                  {carrier.name}
                </label>
                {carrier.id === carrierType &&
                  carrier?.fields?.map((field) => (
                    <input
                      type={field.type}
                      key={field.id}
                      className="form-control w-50 ms-4"
                      placeholder={field.placeholder}
                      {...register(field.id, {
                        required: field.required && `${field.label}為必填`,
                      })}
                    />
                  ))}
              </div>
            ))}
            {invoiceConfig?.fields?.map((field) => (
              <div className="mb-4" key={field.id}>
                <label className="form-label" htmlFor={field.id}>
                  {field.label}
                  <span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name={field.id}
                  id={field.id}
                  placeholder={field.placeholder}
                  {...register(field.id, {
                    required: field.required && `${field.label}為必填`,
                  })}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Invoice;
