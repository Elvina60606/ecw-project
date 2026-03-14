import ShippingAddress from './ShippingAddress';
import Payment from './Payment';
import Invoice from './Invoice';
import MessageToast from '../../../component/utils/MessageToast';


const CheckoutForm =({
    register,
    handleSubmit,
    watch,
    setValue,
    resetField,
    errors,
    onSubmit
}) =>{

    return(
    <>
        <MessageToast />
         <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-6 pb-6 pb-md-8">
                        <div className="col-12">
                            <div className="border border-neutral-300 rounded-4 p-4 p-md-6">
                                <div className="form-check d-flex align-items-center mb-4 py-2">
                                    <input className="form-check-input me-2" 
                                           type="checkbox" value="" 
                                           id="sameAsMember" 
                                           {...register('sameAsMember')}/>
                                    <label className="form-check-label" htmlFor="sameAsMember">同會員資料</label>
                                </div>

                                <div className="row g-4">
                                    <div className="col-md-6">
                                        <label htmlFor="recipient" className="form-label">
                                            收件人姓名 
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input type="text"
                                                className="form-control"
                                                id="recipient"
                                                placeholder="請填寫姓名"
                                                {...register('recipient',{
                                                    required: '請填寫姓名',
                                                    minLength: {
                                                        value: 2,
                                                        message: '至少填入2個字'
                                                    }
                                                    })}/>
                                        { errors.recipient && (
                                            <small className='text-danger ms-2'>{errors.recipient.message}</small>
                                        )}
                                    </div>
                                    <div className="col-md-6">
                                        <label  htmlFor="tel" className="form-label">
                                            聯絡電話 
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input  type="tel"
                                                className="form-control"
                                                id="tel"
                                                placeholder="請填寫聯絡電話"
                                                maxLength="10" 
                                                {...register('tel', {
                                                    required: '請填寫聯絡電話',
                                                    minLength: {
                                                        value: 8,
                                                        message: '請填寫 8 ~ 10 個數字的聯絡電話'
                                                    }
                                                })}/>
                                        { errors.tel && (
                                            <small className='text-danger ms-2'>{errors.tel.message}</small>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <label  htmlFor="email" className="form-label">
                                            聯絡信箱 
                                            <span className="text-danger">*</span>
                                        </label>
                                        <input  type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder="請填寫聯絡信箱"
                                                {...register('email', {
                                                    required: '請填寫聯絡信箱'
                                                })}/>
                                        { errors.email && (
                                            <small className='text-danger ms-2'>{errors.email.message}</small>
                                        )}
                                    </div>
                                    <div className="col-12">
                                        <ShippingAddress register={register}
                                                    watch={watch}
                                                    setValue={setValue}
                                                    errors={errors} />
                                    </div>
                                    <div className="col-12">
                                        <label className="form-label" htmlFor="orderNote">備註</label>
                                        <textarea className="form-control rounded-3" 
                                                id="orderNote" rows="5"
                                                placeholder='請填寫備註'
                                                {...register('orderNote')}>
                                        </textarea>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Payment register={register}/>
                        
                        <Invoice register={register}
                                 watch={watch}
                                 resetField={resetField}/>
                    </div>
                    <button type='submit'
                            className='btn btn-order w-100'>確認訂購
                    </button>
        </form>
    
    </>)
}

export default CheckoutForm;
