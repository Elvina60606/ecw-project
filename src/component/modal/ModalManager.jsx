import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"

import Modal from "./Modal"
import AdminModal from "./AdminModal"
import { closeModal } from "../../slices/modalSlice"
import { logout } from "../../slices/loginSlice"

const MODAL_COMPONENT = {
    PRODUCT : AdminModal
};

const MODAL_CONTENTS = {
    SWEET_PLAN: {
        title: '寄甜計劃',
        message: '計畫籌備中，敬請期待！',
        confirm: '關閉'
    },
    LOGOUT: {
        title: '即將登出',
        message: '確定要登出嗎？',
        confirm: '確定'
    },
    REGISTER_SUCCESS: {
        title: '註冊成功',
        message: '優惠券已匯入您的帳戶！',
        confirm: '立即登入'
    },
};


const ModalManager =() => {
    const { isOpen, modalType, props } = useSelector(state => state.modal)
    const dispatch = useDispatch();
    const navigate = useNavigate();

    if(!isOpen) return null;

    // 後台 modal
    if (MODAL_COMPONENT[modalType]) {
    const Component = MODAL_COMPONENT[modalType]
    return <Component {...props} />
    };
    
    // 前台 modal
    const content = MODAL_CONTENTS[modalType] || {};
    const handleConfirm =() =>{
        if ( modalType === 'LOGOUT'){
            dispatch(logout())
            dispatch(closeModal())
            navigate('/')
        } else if ( modalType === 'REGISTER_SUCCESS'){
            dispatch(closeModal())
            navigate('/login')
        } else {
            dispatch(closeModal());
        }
    };

    return <Modal {...content} onConfirm={handleConfirm}/>;
}

export default ModalManager;