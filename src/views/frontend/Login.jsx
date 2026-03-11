import images from '../../assets/images/images';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router';


const Login =() => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            username: 'ononcake@gmail.com'
        }
        }
    )

    return(
    <>
        <main className="login-container d-flex flex-column align-items-center justify-content-center position-relative"
              id="moving-bg">
            <h2 className="login-title-mobile text-primary-700 fw-bold d-block d-lg-none">
                歡迎登入
            </h2>
            <div className="login-card d-flex bg-secondary-50 border border-secondary-500 overflow-hidden">
                <div className="login-image flex-shrink-0">
                    <img src={images.loginHero}
                        alt="店舖情境圖"
                        className="d-none d-lg-block w-100 h-100 object-fit-cover"/>
                    <img src={images.loginHero} 
                        alt="店舖情境圖"
                        className="d-block d-lg-none w-100 h-100 object-fit-cover"/>
                </div>

                <div className="login-content d-flex flex-column align-items-center w-100 overflow-y-auto">
                    <h2 className="login-title-desktop text-primary-700 fw-bold d-none d-lg-block">
                        歡迎登入
                    </h2>

                    <form className="login-form d-flex flex-column align-items-center">
                        {/* 帳號欄位 */}
                        <div className="form-group mb-4 d-flex flex-column">
                            <label className="form-label fs-6 mb-1 text-neutral-800"
                                   htmlFor='username'>
                                帳號 <span className="text-danger">*</span>
                            </label>
                            <div className="input-wrapper d-flex align-items-center bg-white border border-neutral-400 rounded-2 px-3">
                                <input type="text"
                                       id="username"
                                       name="username"
                                       className="login-input flex-grow-1 border-0 bg-transparent py-2"
                                       placeholder="請輸入帳號"
                                       {...register('username',{ 
                                            required : '請輸入帳號',
                                            pattern: {
                                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                                message: '請輸入會員信箱'
                                            }
                                        })}/>
                                <span className="material-symbols-outlined cursor-pointer icon-hover-secondary text-neutral-600"
                                      id="dropdown-icon">
                                        keyboard_arrow_down
                                </span>
                            </div>
                                {errors.username && (
                                    <small className='text-danger ms-2'>{errors.username.message}</small>
                                )}
                        </div>

                        {/* 密碼欄位 */}
                        <div className="form-group d-flex flex-column">
                            <label className="form-label fs-6 mb-1 text-neutral-800"
                                   htmlFor='password'>
                                密碼 <span className="text-danger">*</span>
                            </label>
                            <div className="input-wrapper d-flex align-items-center bg-white border border-neutral-400 rounded-2 px-3">
                                <input type="password"
                                       id="password"
                                       name="password"
                                       className="login-input flex-grow-1 border-0 bg-transparent py-2"
                                       placeholder="請輸入密碼"
                                       {...register('password', {
                                        required: "請輸入密碼",
                                        pattern: {
                                            value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
                                            message: "密碼需包含英文與數字，長度 8-20 碼"
                                        }
                                       })}/>
                                <span className="material-symbols-outlined cursor-pointer icon-hover-secondary text-neutral-600"
                                      id="toggle-password">
                                        visibility_off
                                </span>
                            </div>
                            { errors.password && (
                                <small className='text-danger ms-2'>{errors.password.message}</small>
                            )}
                            <Link to="#"
                                  className="forgot-password forgot-password--desktop text-primary-700 align-self-end mt-2 text-decoration-underline hover-secondary d-none d-lg-block">
                                    忘記密碼 ?
                            </Link>
                        </div>

                        <Link className="btn btn-login mt-4 w-100 rounded-pill text-white border-0">會員登入
                        </Link>

                        <Link to="#"
                              className="forgot-password forgot-password--mobile text-primary-700 text-decoration-underline hover-secondary d-block d-lg-none">
                                忘記密碼 ?
                        </Link>
                    </form>

                {/* 修正: 只在桌面版使用 mt-auto */}
                    <div className="register-footer d-flex justify-content-center align-items-center bg-white rounded-4 mt-lg-auto">
                        <span className="register-text me-3 text-neutral-800">
                            還不是會員嗎?
                        </span>
                        <Link to="/member_registration"
                              className="btn btn-register text-primary-700 fw-bold rounded-pill">
                                手刀加入
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    </>)
}

export default Login;