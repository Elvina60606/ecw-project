import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { openModal } from "../../slices/modalSlice";
import { getAsynsAdminProducts, setCurrentPage, setTempProduct, deleteAsyncAdminProduct, resetTempProduct } from "../../slices/admin/AdminProductsSlice";

import MessageToast from "../../component/utils/MessageToast";
import Pagination from "../../component/utils/Pagination";
import ModalManager from "../../component/modal/ModalManager";

const AdminProducts =() =>{
    const dispatch = useDispatch();
    const { adminProducts, pagination, currentPage } = useSelector( state => state.adminProducts);

    useEffect(()=>{
         dispatch(getAsynsAdminProducts(currentPage))
    }, [currentPage]);

    const handleCreateProduct = () => {
      dispatch(resetTempProduct())
      dispatch(openModal({
        type: 'PRODUCT',
        props: {mode: 'create'}
      }))
    };
    

    //pagination
    const handlePageChange = (page) => {
      dispatch(setCurrentPage(page));
    };

    return(
    <>
        <ModalManager />
        <MessageToast />
        <div className="container">
            <h3>產品列表</h3>
            <div className="text-end my-4 me-5">
                <button type='button' 
                        className='btn btn-primary' 
                        onClick={handleCreateProduct}>
                        建立新的產品
                </button>
            </div>
            <table className="table">
                <thead>
                  <tr>
                    <th>分類</th>
                    <th>產品名稱</th>
                    <th>原價</th>
                    <th>售價</th>
                    <th>是否啟用</th>
                    <th>編輯</th>
                  </tr>
                </thead>
                <tbody>
                  {adminProducts?.map((item) => (
                    <tr key={item.id}>
                      <td>{item.category}</td>
                      <td>{item.title}</td>
                      <td>{item.origin_price}</td>
                      <td>{item.price}</td>
                      <td className={item.is_enabled? "text-success" : "" }>
                        {item.is_enabled ? "啟用" : "未啟用"}
                      </td>
                      <td>
                        <div className="btn-group" role="group" aria-label="Basic example">
                          <button type="button" 
                                  className="btn btn-outline-primary btn-sm">
                                  編輯
                          </button>
                          <button type="button" 
                                  className="btn btn-outline-danger btn-sm"
                                  onClick={()=>dispatch(deleteAsyncAdminProduct(item.id))}>
                                  刪除
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
            </table>
        </div>

        <Pagination currentPage={currentPage}
                    onPageChange={handlePageChange}
                    totalPages={pagination?.total_pages || 1}/>
    </>)
}

export default AdminProducts;