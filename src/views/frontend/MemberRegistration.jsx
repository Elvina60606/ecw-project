import { useForm } from "react-hook-form";
import { Link } from "react-router";



const  MemberRegistration =() =>{

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isValid},
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            memberName: '野原廣志',
            gender: 'male',
        }
    });

    const onSubmit =(data) => {
        console.log(data)
    };

    return(
    <>
        <section className="hero-banner d-flex align-items-center">
            <div className="container text-center text-white">
                <h3 className="fs-lg-8 fs-3 mb-6">
                    加入會員，即享首購不限金額88折
                </h3>
                <p className="mx-auto fs-6 mb-2">
                    會員可享多重優惠：專屬折扣、紅利點數、生日優惠，現在加入會員，
                    首購優惠與寄甜計畫合併使用，
                </p>
                <p className="mx-auto fs-6">
                    即贈經典原味可麗露乙份，贈品數量有限贈完為止，敬請把握優惠。
                    本活動不可與其他優惠合併使用。
                </p>
            </div>
        </section>

        <main className="bg-secondary-50">
            <div className="container py-md-12 py-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-6">
                    {/* Left */}
                        <div className="col-12 col-lg-6">
                            <div className="card h-100">
                                <div className="mx-md-11 my-md-8 m-4">
                                    <h5 className="mb-4">會員資料</h5>
                                    <div className="row g-4">
                                    {/* name */}
                                        <div className="col-12">
                                            <label htmlFor="memberName" className="form-label">
                                                姓名 
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="row g-2 align-items-center">
                                                <div className="col-6 col-md-8">
                                                    <input  type="text"
                                                            className="form-control"
                                                            id="memberName"
                                                            name="memberName"
                                                            placeholder="請填寫姓名"
                                                            { ...register('memberName',{
                                                                required: '請輸入姓名',
                                                                minLength: {
                                                                    value: 2,
                                                                    message: '註冊名字至少爲 2 個字'
                                                                }
                                                            })}
                                                            />
                                                            { errors.memberName && (
                                                                <small className="text-danger ms-2">{errors.memberName.message} </small>
                                                            )}
                                                </div>
                                                <div className="col-6 col-md-4 d-flex justify-content-around">
                                                    <div className="form-check-inline">
                                                        <input  type="radio"
                                                                className="form-check-input"
                                                                value="male"
                                                                id="male"
                                                                {...register('gender',{
                                                                    required: '請選擇性別'
                                                                })}/>
                                                        <label  className="form-check-label" 
                                                                htmlFor="male">先生
                                                        </label>
                                                    </div>

                                                    <div className="form-check-inline">
                                                        <input  type="radio"
                                                                className="form-check-input"
                                                                value="female"
                                                                id="female"
                                                                {...register('gender',{
                                                                    required: '請選擇性別'
                                                                })}/>
                                                        <label  className="form-check-label" 
                                                                htmlFor="female">小姐
                                                        </label>
                                                    </div>
                                                </div>
                                                {errors.gender && (
                                                    <small className="text-danger ms-2">{errors.gender.message}</small>
                                                )}
                                            </div>
                                        </div>

                                        {/* 生日 */}
                                        <div className="col-12">
                                            <label htmlFor="birthday" className="form-label">
                                                    生日 
                                                    <span className="text-danger">*</span>
                                            </label>
                                            <input  type="date"
                                                    className="form-control"
                                                    id="birthday"
                                                    placeholder="請選擇生日"
                                                    {...register('birthday',{required: '請選擇生日'})}/>
                                                    {errors.birthday && (
                                                        <small className="text-danger ms-2">{errors.birthday.message}</small>
                                                    )}
                                        </div>

                                        {/* 電話 */}
                                        <div className="col-12">
                                            <div className="d-flex justify-content-between align-items-end">
                                                <label  htmlFor="phoneNumber" className="form-label">
                                                        電話 
                                                        <span className="text-danger">*</span>
                                                </label>
                                            </div>
                                            <input  type="tel"
                                                    className="form-control"
                                                    id="phone"
                                                    name="phone"
                                                    placeholder="請填寫電話"
                                                    maxLength="10"
                                                    {...register('phone',{
                                                        required:'請輸入電話',
                                                        minLength: {
                                                            value: 8,
                                                            message: '電話號碼至少爲 8 碼'
                                                        },
                                                        maxLength: {
                                                            value: 10,
                                                            message: '電話號碼至少爲 10 碼'
                                                        },
                                                        pattern: {
                                                            value:  /^\d+$/,
                                                            message: '只能輸入數字'
                                                        }
                                                        })}/>
                                                {errors.phone && (
                                                    <small className="text-danger ms-2">{errors.phone.message}</small>
                                                )}
                                        </div>


            從email認證開始

                                        {/* Email */}
                                        <div className="col-12">
                                            <div className="d-flex justify-content-between align-items-end">
                                                <label htmlFor="email" className="form-label">
                                                    電子信箱 
                                                    <span className="text-danger">*</span>
                                                </label>
                                            </div>
                                            <input  type="email"
                                                    className="form-control"
                                                    id="email"
                                                    name="email"
                                                    placeholder="請填寫電子信箱"/>
                                        </div>

                                        {/* 地址 */}
                                        <div className="col-12">
                                            <label  htmlFor="postCode" 
                                                    className="form-label">
                                                    聯絡地址
                                            </label>
                                            <div className="row g-2">
                                            {/* 郵遞區號 */}
                                                <div className="col-12 col-md-4">
                                                    <input  type="number"
                                                            className="form-control bg-light"
                                                            id="postCode"
                                                            name="postCode"
                                                            placeholder="郵遞區號"/>
                                                </div>
                                            {/* 縣市選單 */}
                                                <div className="col-6 col-md-4">
                                                    <select className="form-select"
                                                            name="city"
                                                            id="city">
                                                    <option>縣市</option>
                                                    {/* {taiwanDistricts.map((item) => (
                                                        <option key={item.city} value={item.city}>
                                                        {item.city}
                                                        </option>
                                                    ))} */}
                                                    </select>
                                                </div>
                                            {/* 行政區選單 */}
                                                <div className="col-6 col-md-4">
                                                    <select className="form-select"
                                                            name="district"
                                                            id="district">
                                                    <option value="">鄉鎮市區</option>
                                                    {/* {taiwanDistricts
                                                        .find((item) => item.city === formData.city)
                                                        ?.districts.map((d) => (
                                                        <option key={d.name} value={d.name}>
                                                            {d.name}
                                                        </option>
                                                        ))} */}
                                                    </select>
                                                </div>
                                                <div className="col-12">
                                                    <input  type="text"
                                                            className="form-control"
                                                            id="address"
                                                            name="address"
                                                            placeholder="請輸入地址"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    {/* Right */}
                        <div className="col-12 col-lg-6">
                            <div className="d-flex flex-column gap-6">
                                <div className="card">
                                    <div className="mx-md-11 my-md-8 mt-lg-8 mb-lg-13 m-4">
                                        <h5 className="mb-4">設定密碼</h5>
                                        <div className="mb-4">
                                            <label className="form-label">
                                                    密碼 
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <input  type='password'
                                                        className='form-control'
                                                        id="password"
                                                        name="password"
                                                        placeholder="請填寫密碼"/>
                                                <span   className="material-symbols-outlined fill cursor-pointer input-group-text bg-white">visibility_off
                                                </span>
                                            </div>
                                        </div>

                                        <div className="mb-lg-4 mb-0">
                                            <label className="form-label">
                                                    確認密碼 
                                                <span className="text-danger">*</span>
                                            </label>
                                            <div className="input-group">
                                                <input type='password'
                                                className='form-control'
                                                id="confirmPassword"
                                                name="confirmPassword"
                                                placeholder="請再次填寫密碼"/>
                                                    <span className=" material-symbols-outlined fill cursor-pointer input-group-text bg-white">visibility
                                                    </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                        {/* policy checked */}
                                <div className="card">
                                    <div className="mx-md-11 my-md-8 m-4">
                                        <h5 className="mb-4">加入會員須知</h5>
                                        <div className="form-check">
                                            <input  type="checkbox"
                                                    className="form-check-input"
                                                    id="terms"
                                                    name="isAgreed"/>
                                            <label  className="form-check-label" 
                                                    htmlFor="terms">
                                                        您已詳閱我們的
                                                    <Link to='/' className="text-decoration-underline text-secondary-500">
                                                        隱私權政策/服務條款
                                                    </Link>，同意本網站所提供的服務。
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Submit */}
                    <div className="col-12 mt-8">
                        <button type="submit"
                                className="btn btn-primary w-100 py-3">
                                確認送出
                        </button>
                    </div>
                </form>
                
            </div>
        </main>
    
    </>)
}

export default MemberRegistration;