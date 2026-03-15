import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../slices/modalSlice";
import { createAsyncAdminProduct, updateAsyncAdminProduct, setTempProduct, resetTempProduct, getAsynsAdminProducts } from "../../slices/admin/AdminProductsSlice";

const AdminModal = ({ mode, product }) => {
    const dispatch = useDispatch();
    const tempProduct = useSelector(state => state.adminProducts.tempProduct);

    const isCreate = mode === "create";

    const handleAddImage = () => {
        const images = tempProduct.imagesUrl || []
        if (images.length >= 5) return;

        dispatch(
            setTempProduct({
            ...tempProduct,
            imagesUrl: [...images, ""],
            })
        );
    };

    const handleChange = (e) =>{
        const { name, value, type, checked } = e.target;
        dispatch(setTempProduct({ 
            ...tempProduct, 
            [name]: type === 'checkbox' ? checked : value }))
    };

    const handleSubmit = async() =>{
        if(isCreate){
          await  dispatch(createAsyncAdminProduct(tempProduct))
        } else {
          await  dispatch(updateAsyncAdminProduct({id: tempProduct.id, data: tempProduct}))
        }
        dispatch(getAsynsAdminProducts())
        dispatch(closeModal())
        dispatch(resetTempProduct())
    }

    return(
    <>
        <div className="modal-overlay" tabIndex="-1">
            <div className="admin-modal-box">
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
                                            name="imageUrl"
                                            className="form-control"
                                            placeholder="請輸入圖片連結"
                                            value={tempProduct.imageUrl || ''}
                                            onChange={(e)=>dispatch(setTempProduct({...tempProduct, imageUrl: e.target.value}))}/>
                                </div>
                                    {tempProduct.imageUrl && (
                                        <img src={tempProduct.imageUrl} alt="main" 
                                             style={{height: 150}} />
                                    )}
                            </div>
                            {(tempProduct.imagesUrl || []).map((url, index) => (
                                <div key={index} className="mb-2">
                                    <input type="text"
                                           className="form-control"
                                           placeholder={`附圖 ${index + 1}`}
                                           value={url || ""}
                                           onChange={(e) => {
                                                const newImages = [...tempProduct.imagesUrl];
                                                newImages[index] = e.target.value;

                                                dispatch(setTempProduct({
                                                        ...tempProduct,
                                                        imagesUrl: newImages,
                                                    })
                                                );
                                            }}
                                        />
                                    {url && <img src={url} style={{height: 150}} />}
                                </div>
                            ))}
                            <button type="button"
                                    className="btn btn-outline-primary mb-2"
                                    onClick={handleAddImage}>
                                    新增附圖
                            </button>
                        </div>
                        <div className="col-8">
                            <div className="mb-3">
                                <label htmlFor="title" className="form-label">產品標題</label>
                                <input type="text" className="form-control" 
                                       id="title" name="title"
                                       placeholder="請輸入標題" 
                                       value={tempProduct.title}
                                       onChange={(e)=>handleChange(e)}/>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label htmlFor="category" className="form-label">分類</label>
                                    <input type="text" className="form-control" 
                                           id="category" name="category" 
                                           placeholder="請輸入分類"
                                           value={tempProduct.category}
                                           onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="unit" className="form-label">單位</label>
                                    <input type="text" className="form-control" 
                                           id="unit" name="unit" 
                                           placeholder="請輸入單位"
                                           value={tempProduct.unit}
                                           onChange={(e)=>handleChange(e)}/>
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-6">
                                    <label htmlFor="origin_price" className="form-label">原價</label>
                                    <input type="number" className="form-control" 
                                           id="origin_price" name="origin_price"
                                           placeholder="請輸入原價"
                                           value={tempProduct.origin_price}
                                           onChange={(e)=>handleChange(e)}/>
                                </div>
                                <div className="col-6">
                                    <label htmlFor="price" className="form-label">售價</label>
                                    <input type="number" className="form-control" 
                                           id="price" name="price" 
                                           placeholder="請輸入售價"
                                           value={tempProduct.price}
                                           onChange={(e)=>handleChange(e)}/>
                                </div>
                            </div>
                            <hr/>
                            <div className="mb-3">
                                <label htmlFor="description" className="form-label">商品描述</label>
                                <textarea className="form-control" id="description"
                                          name="description"
                                          placeholder="請輸入產品描述" rows={3} 
                                          value={tempProduct.description}
                                          onChange={(e)=>handleChange(e)}/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="content" className="form-label">說明內容</label>
                                <textarea className="form-control" id="content"
                                          name="content"
                                          placeholder="請輸入說明內容" rows={3} 
                                          value={tempProduct.content}
                                          onChange={(e)=>handleChange(e)}/>
                            </div>
                            <div className="mb-3">
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox"  id="is_enabled" 
                                           name="is_enabled"
                                           checked={tempProduct.is_enabled}
                                           onChange={(e)=>handleChange(e)}/>
                                    <label className="form-check-label" htmlFor="is_enabled">
                                        是否啟用
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-footer d-flex justify-content-end gap-2">
                    <button type="submit" className="btn" onClick={handleSubmit}>確認送出</button>
                    <button type="button" className="btn" onClick={()=>dispatch(closeModal())}>取消</button>
                </div>
            </div>
        </div>
    </>)
};

export default AdminModal;