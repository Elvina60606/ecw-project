import { useDispatch, useSelector } from "react-redux";
import { asyncLogout, getAsyncAuth } from "../../slices/admin/AdminAuthSlice";
import { useForm } from "react-hook-form";

import MessageToast from "../../component/utils/MessageToast";

const Dashboard =() => {
    const dispatch = useDispatch();
    const adminAuth = useSelector( state => state.adminAuth.adminAuth);

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            username: 'sweetchen709+1@gmail.com',
            password: 'ononcake666'
        }
    });

    const onSubmit =(data) => {
        dispatch(getAsyncAuth(data))
    };

    return(
    <>
        <MessageToast />
        <div className="container">
            <div className="row flex-column align-items-center gy-7 my-5">
                { adminAuth ? (
                    <div className="col-4 text-center">
                        <button type="button"
                                className="btn btn-primary"
                                onClick={()=>dispatch(asyncLogout())}>後台登出
                        </button>

                    </div>
                    
                ) : (
                    <>
                        <h5 className="col-4 text-center">請先登入</h5>
                        <div className="col-4">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label htmlFor="email" 
                                        className="form-label">
                                            Email
                                    </label>
                                    <input type="email" 
                                        className="form-control" 
                                        id="email" 
                                        {...register('username', {
                                            required: '請輸入信箱',
                                            pattern: {
                                                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
                                                message: '信箱格式錯誤'
                                            }
                                        })}/>
                                { errors.username && (
                                    <small className="text-danger">{errors.username.message}</small>
                                )}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" 
                                        className="form-label">
                                            Password
                                    </label>
                                    <input type="password" 
                                        className="form-control" 
                                        id="password" 
                                        {...register('password',{
                                            required: '請輸入密碼',
                                            pattern: {
                                                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,20}$/,
                                                message: "密碼需包含英文與數字，長度 6-20 碼"
                                            }
                                        })}/>
                                { errors.password && (
                                    <small className="text-danger">{errors.password.message}</small>
                                )}
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary my-4 px-7">登入</button>
                                </div>
                            </form>

                        </div>
                    </>
                )}
            </div>
        </div>
    </>)
}

export default Dashboard;