import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../slices/modalSlice";
import { createAsyncAdminProduct, updateAsyncAdminProduct, resetTempProduct, getAsynsAdminProducts } from "../../slices/admin/AdminProductsSlice";
import { useForm, useFieldArray } from "react-hook-form";
import { useEffect } from "react";

const AdminModal = ({ mode }) => {
  const dispatch = useDispatch();
  const tempProduct = useSelector(state => state.adminProducts.tempProduct);

  const isCreate = mode === "create";

  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    formState: {errors}
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      imagesUrl: []
    }
  });

  useEffect(() => {
    if (!isCreate && tempProduct.id) {
      reset({
        ...tempProduct,
        imagesUrl: tempProduct.imagesUrl || []
      });
    } else {
      reset({
        title: "",
        category: "",
        unit: "",
        origin_price: 0,
        price: 0,
        description: "",
        content: "",
        is_enabled: false,
        imageUrl: "",
        imagesUrl: []
      });
    }
  }, [tempProduct, isCreate, reset]);

  const mainImage = watch("imageUrl");
  const { fields, append, remove } = useFieldArray({
    control,
    name: "imagesUrl"
  });

  const onSubmit = async (data) => {

    if (isCreate) {
      await dispatch(createAsyncAdminProduct(data));
    } else {
      await dispatch(updateAsyncAdminProduct({
        id: tempProduct.id,
        data
      }));
    }

    dispatch(getAsynsAdminProducts());
    dispatch(closeModal());
    dispatch(resetTempProduct());
  };

  return(
    <>
      <div className="modal-overlay" tabIndex="-1">
        <div className="admin-modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="modal-header">
              <button type="button" className="btn-close"
                onClick={()=>dispatch(closeModal())}>
              </button>
            </div>
            <div className="modal-body">    
              <div className='row'>
                <div className="col-4">
                  <div className="mb-2">
                    <div className="mb-3">
                      <label htmlFor="imageUrl" className="form-label">
                        輸入圖片網址
                      </label>
                      <input  type="text"
                        id="imageUrl"
                        className="form-control"
                        placeholder="請輸入圖片連結"
                        {...register('imageUrl')}/>
                    </div>
                    {mainImage && (
                      <img src={mainImage} alt="main" 
                        style={{height: 150}} />
                    )}
                  </div>
                  { fields.map((field, index) => (
                    <div key={field.id}>
                      <div className="mb-2">
                        <input type="text"
                          className="form-control"
                          placeholder={`附圖 ${index +1} `}
                          {...register(`imagesUrl.${index}`)}
                        />
                      </div>
                      {watch("imagesUrl")?.[index] && (
                        <img src={watch("imagesUrl")[index]} alt={`附圖${index +1}`}
                          style={{height: 150}}/>
                      )}
                      <button type="button"
                        className="btn btn-sm btn-danger mb-2 align-bottom"
                        onClick={()=>remove(index)}>
                        刪除
                      </button>
                    </div>
                  ))}
                  <button type="button"
                    className="btn btn-primary mb-2 d-block"
                    onClick={()=>append("")}>
                    新增附圖
                  </button>
                </div>
                <div className="col-8">
                  <div className="mb-3">
                    <label htmlFor="title" className="form-label">產品標題</label>
                    <input type="text" className="form-control" 
                      id="title" 
                      placeholder="請輸入標題" 
                      {...register('title', {
                        required: '標題不得為空'
                      })}/>
                    {errors.title && (
                      <small className="text-danger">{errors.title.message}</small>
                    )}
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="category" className="form-label">分類</label>
                      <input type="text" className="form-control" 
                        id="category"  
                        placeholder="請輸入分類"
                        {...register('category',{
                          required: '商品類別不得為空'
                        })}/>
                      {errors.category && (
                        <small className="text-danger">{errors.category.message}</small>
                      )}
                    </div>
                    <div className="col-6">
                      <label htmlFor="unit" className="form-label">單位</label>
                      <input type="text" className="form-control" 
                        id="unit"
                        placeholder="請輸入單位"
                        {...register('unit',{
                          required: '商品單位不得為空'
                        })}/>
                      {errors.unit && (
                        <small className="text-danger">{errors.unit.message}</small>
                      )}
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-6">
                      <label htmlFor="origin_price" className="form-label">原價</label>
                      <input type="number" className="form-control" 
                        id="origin_price" 
                        placeholder="請輸入原價"
                        onFocus={(e) => {
                          if (e.target.value === "0") e.target.value = "";
                        }}
                        {...register('origin_price',{
                          valueAsNumber: true
                        })}/>
                    </div>
                    <div className="col-6">
                      <label htmlFor="price" className="form-label">售價</label>
                      <input type="number" className="form-control" 
                        id="price" 
                        placeholder="請輸入售價"
                        onFocus={(e) => {
                          if (e.target.value === "0") e.target.value = "";
                        }}
                        {...register('price',{
                          valueAsNumber: true
                        })}/>
                    </div>
                  </div>
                  <hr/>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">商品描述</label>
                    <textarea className="form-control" 
                      id="description"
                      placeholder="請輸入產品描述" rows={3} 
                      {...register('description')}/>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="content" className="form-label">說明內容</label>
                    <textarea className="form-control" 
                      id="content"
                      placeholder="請輸入說明內容" rows={3} 
                      {...register('content')}/>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox"  
                        id="is_enabled" 
                        {...register('is_enabled')} />
                      <label className="form-check-label" htmlFor="is_enabled">
                        是否啟用
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-end gap-2">
              <button type="submit" className="btn">確認送出</button>
              <button type="button" className="btn" onClick={()=>dispatch(closeModal())}>取消</button>
            </div>
          </form>
        </div>
      </div>
    </>)
};

export default AdminModal;