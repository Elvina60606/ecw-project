import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router"

import Modal from "./Modal"
import { closeModal } from "../../slices/modalSlice"
import { logout } from "../../slices/loginSlice"

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
}

const ModalManager =() => {
    const { isOpen, modalType } = useSelector(state => state.modal)
    
    const content = MODAL_CONTENTS[modalType] || {};


    const dispatch = useDispatch();
    const navigate = useNavigate();

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
    }

    if(!isOpen) return null;
    return <Modal {...content} onConfirm={handleConfirm}/>
}

export default ModalManager;