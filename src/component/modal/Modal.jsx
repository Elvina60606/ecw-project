import images from '@/assets/images/images.js';
import { useDispatch } from "react-redux";
import { closeModal } from "../../slices/modalSlice";

const Modal =({ title, message, confirm, onConfirm }) => {
    const dispatch = useDispatch();

    return(
    <>
        <div className="modal-overlay" tabIndex="-1">
            <div className="modal-box">
                <div className="modal-header">
                    <button type="button" className="btn-close"
                            onClick={()=>dispatch(closeModal())}>
                    </button>
                </div>
                <div className="modal-body">
                    <div className='d-flex justify-content-center align-items-center gap-3 gap-md-6'>
                        <img src={images.canele2} alt="images.canele2" 
                             className='col-3 col-md-2'/>
                        <div className='col-md-7'>
                            <h5 className='mb-2'>{title}</h5>
                            <p className='mb-3'>{message}</p>
                            { onConfirm && (
                                <button type="button" 
                                        className="btn btn-primary w-75"
                                        onClick={onConfirm}>
                                        {confirm}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default Modal;