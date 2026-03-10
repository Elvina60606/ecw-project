import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { getAsyncCarts, deleteAsyncCarts, updateAsyncCarts } from '../../slices/cartsSlice';

import ShippingAddress from '../../component/utils/ShippingAddress';
import paymemtMethods from '../../data/paymentMethods.json';
import invoice from '../../data/invoice.json';

const Carts =() =>{
    const dispatch = useDispatch();
    const carts = useSelector(state => state.carts.carts)

    useEffect(()=>{
        const fetchCarts = async() =>{
            try {
                await dispatch(getAsyncCarts());
            } catch (error) {
                console.log(error)
            }
        }
        fetchCarts();
    },[]);

    const incrementQty =(cart) => {
        if(cart.qty >= 10) return;

        dispatch(updateAsyncCarts({
            cartId: cart.id,
            productId: cart.product.id,
            qty: cart.qty +1
        }))
    };

    const decrementQty =(cart) => {
        if(cart.qty <= 1) return;

        dispatch(updateAsyncCarts({
            cartId: cart.id,
            productId: cart.product.id,
            qty: cart.qty -1
        }))
    };




    const {
        register,
        handleSubmit,
        watch,
        setValue,
        resetField,
        formState: {errors}
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            invoice_type: "personal",
            }
    });

    const invoiceType = watch('invoice_type');
    const carrierType = watch('carrier_type');

    const invoiceConfig = invoice.find(
        item => item.id === invoiceType
    );

    // 切換發票時清空
    useEffect(() => {
        resetField('carrier_type');
        invoice.forEach(inv => {
            inv.carriers?.forEach(carrier => {
            carrier.fields?.forEach(field => resetField(field.id));
            });
            inv.fields?.forEach(field => resetField(field.id));
        });
    }, [invoiceType]);

    // 切換carriers時清空
    useEffect(() =>{
        invoiceConfig?.carriers
            ?.filter(c => c.id !== carrierType)
            .forEach(c => c.fields?.forEach(f => resetField(f.id)));
    }, [carrierType])


    const onSubmit =(data) =>{
        console.log(data)
    };

    return (
    <>
        {/* product lists */}
        <section className="bg-neutral-50 py-8 py-md-12">
            <div className="container">
                <h3 className="fs-md-2 text-black mb-6 mb-md-8">購物車商品清單</h3>
            {/* desktop */}
                <div className="row d-none d-md-block">
                    <table className="table table-borderless text-center align-middle mb-0">
                        <thead className="table-carts-thead">
                            <tr>
                                <th scope="col" style={{width: '48%'}}>商品資料</th>
                                <th scope="col" style={{width: '9%'}}>單價</th>
                                <th scope="col" style={{width: '18%'}}>數量</th>
                                <th scope="col" style={{width: '15%'}}>小計</th>
                                <th scope="col" style={{width: '10%'}}>刪除</th>
                            </tr>
                        </thead>
                        <tbody className="table-carts-tbody">
                            { carts?.map(cart => (
                                <tr key={cart.id}>
                                    <td colSpan={5} className="rounded-4 p-0">
                                        <div className="d-flex align-items-center ps-7 py-4 table-body-hover">
                                            <div className="d-flex align-items-center" style={{width: '46%'}}>
                                                <img src={cart.product.imageUrl}   
                                                    alt="product-imageUrl" 
                                                    className="rounded-4 me-4 object-fit-cover"
                                                    style={{width:80, height:80}}/>
                                                <h5>{cart.product.title}</h5>
                                            </div>
                                            <div style={{width: '10%'}}><h6>NT$ {cart.product.price}</h6></div>
                                            <div style={{width: '20%'}}>
                                                <div className='d-inline-flex justify-content-center align-items-center border rounded-3 mx-auto'>
                                                    <button type='button' className='btn btn-qty'
                                                            onClick={()=>decrementQty(cart)}>
                                                        <i className="bi bi-dash-lg"></i>
                                                    </button>
                                                    <h6 className='px-4'>{cart.qty}</h6>
                                                    <button type='button' className='btn btn-qty'
                                                            onClick={()=>incrementQty(cart)}>
                                                        <i className="bi bi-plus-lg"></i>
                                                    </button>
                                                </div>
                                            </div>
                                            <div style={{width: '15%'}}>
                                                <h5 className='text-secondary-500'>NT$ {cart.product.price * cart.qty}</h5>
                                            </div>
                                            <div style={{width: '10%'}}>
                                                <button type='button' className='btn btn-trash'
                                                        onClick={()=>dispatch(deleteAsyncCarts(cart.id))}>
                                                    <i className="bi bi-trash3-fill"></i>
                                                </button>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            {/* mobile */}
                <div className="row px-3 d-md-none">
                    { carts?.map(cart => (
                        <div className="bg-white rounded-4 p-4 pb-0 mb-4 mobile-product" key={cart.id}>
                            <div className="d-flex align-items-center">
                                <img className="rounded-4 me-4 object-fit-cover" style={{width:80, height:80}}
                                    src={cart.product.imageUrl}   
                                    alt="product-imageUrl" />
                                <div>
                                    <h6 className="mb-2">{cart.product.title}</h6>
                                    <h6>NT$ {cart.product.price}</h6>
                                </div>
                            </div>
                            
                            <div className="d-flex justify-content-between align-items-center">
                                <div className='d-flex align-items-center border rounded-3'
                                     style={{width: '40%'}}>
                                    <button type='button' className='btn btn-qty flex-fill'
                                            onClick={()=>decrementQty(cart)}>
                                        <i className="bi bi-dash-lg"></i>
                                    </button>
                                    <h6 className='text-center px-4 flex-fill'>{cart.qty}</h6>
                                     <button type='button' className='btn btn-qty flex-fill'
                                             onClick={()=>incrementQty(cart)}>
                                        <i className="bi bi-plus-lg"></i>
                                    </button>
                                </div>
                                <div className='d-flex align-items-center'>
                                    <h5 className='text-secondary-500'>NT$ {cart.product.price * cart.qty}</h5>
                                    <button type='button' className='btn btn-trash m-4'
                                            onClick={()=>dispatch(deleteAsyncCarts(cart.id))}>
                                        <i className="bi bi-trash3-fill"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* promotion */}
            <div className="container pb-4">
                <div className="row g-3">
                    <div className="col-md-4">
                        <div className="bg-white border rounded-4 p-4 p-md-6 d-flex flex-column flex-md-row justify-content-between flex-wrap flex-xxl-nowrap h-100">
                            <div className="d-flex flex-column flex-grow-1 me-md-4">
                                <label htmlFor="point"
                                    className="mb-1">可用點數：1000點
                                </label>
                                <input type="text"
                                    id="point"
                                    placeholder="請輸入紅利點數"
                                    className="form-control border border-neutral-300 rounded-3 px-4 py-2 "/>
                            </div>
                            <div className="d-flex align-items-end mt-4">
                                <button type="button"
                                        className="btn btn-coupon me-4 w-50">使用</button>
                                <button type="button"
                                        className="btn btn-coupon-clear w-50">清除</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="bg-white border rounded-4 p-4 p-md-6 d-flex flex-column flex-md-row  justify-content-between flex-wrap flex-xxl-nowrap h-100">
                            <div className="d-flex flex-column flex-grow-1 me-md-4">
                                <label htmlFor="promoCode"
                                    className="mb-1">優惠碼
                                </label>
                                <input type="text"
                                    id="promoCode"
                                    placeholder="請輸入優惠碼"
                                    className="form-control border border-neutral-300 rounded-3 px-4 py-2"/>
                            </div>
                            <div className="d-flex align-items-end mt-4">
                                <button type="button"
                                        className="btn btn-coupon me-4 w-50 flex-fill">使用</button>
                                <button type="button"
                                        className="btn btn-coupon-clear w-50 flex-fill">清除</button>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-4 ">
                        <div className="bg-white border rounded-4 p-4 p-md-6 d-flex flex-column flex-md-row  justify-content-between flex-wrap flex-xxl-nowrap h-100">
                            <div className="d-flex flex-column flex-grow-1 me-md-4">
                                <label htmlFor="coupon" className="mb-1">優惠券</label>
                                <select id="coupon"
                                        defaultValue=""
                                        className="form-select border border-neutral-300 rounded-3 py-2 mb-4 mb-md-0 text-neutral-700">
                                    <option value="" disabled>請選擇優惠券</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                            </div>
                            <div className="d-flex align-items-end mt-4">
                                <button type="button"
                                        className="btn btn-coupon me-4 w-50 flex-fill">使用</button>
                                <button type="button"
                                        className="btn btn-coupon-clear w-50 flex-fill">清除</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* price */}
            <div className="container">
                <div className="bg-white border rounded-4 p-5 p-md-6">
                    <div className="d-flex justify-content-between mb-2">
                        <p className="fs-7">小計</p>
                        <p className="fs-7">$ 商品總價</p>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <p className="fs-7">運費</p>
                        <p className="fs-7">$ 運費</p>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <p className="fs-7">點數</p>
                        <p className="fs-7">$ 點數優惠價格</p>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <p className="fs-7">優惠碼</p>
                        <p className="fs-7">$ 優惠碼折扣</p>
                    </div>
                    <div className="d-flex justify-content-between mb-2 pb-2 border-bottom">
                        <p className="fs-7">優惠券</p>
                        <p className="fs-7">$ 優惠券折扣</p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-2">
                        <h5 className="fw-500">總金額</h5>
                        <h4 className="fw-500 text-secondary-500">$ 總金額</h4>
                    </div>
                </div>
            </div>
        </section>

        {/* user info */}
        <section className="py-8 py-md-12">
            <div className="container">
                <h3 className="fs-md-2 text-black mb-6 mb-md-8">填寫資訊</h3>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="row g-6 pb-6 pb-md-8">
                        <div className="col-12">
                            <div className="border border-neutral-300 rounded-4 p-4 p-md-6">
                                <div className="form-check d-flex align-items-center mb-4 py-2">
                                    <input className="form-check-input me-2" type="checkbox" value="" id="sameAsMemberInfo" />
                                    <label className="form-check-label" htmlFor="sameAsMemberInfo">同會員資料</label>
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

                {/* payment & invoice */}
                        <div className="col-12 col-md-6">
                            <div className="border border-neutral-300 rounded-4 p-4 p-md-6 h-100">
                                <h6 className='fs-md-5 mb-4'>付款方式</h6>
                                <div>
                                    {   paymemtMethods.map(payment => (
                                            <div className="form-check py-2" key={payment.id}>
                                                <input  type="radio"
                                                        className="form-check-input"  
                                                        name="paymentMethod" 
                                                        id={payment.id} 
                                                        {...register(payment.id)}/>
                                                <label className="form-check-label" 
                                                    htmlFor={payment.id}>
                                                    {payment.name}
                                                </label>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6">
                            <div className="border border-neutral-300 rounded-4 p-4 p-md-6 h-100">
                                    <h6 className='fs-md-5 mb-4'>發票開立</h6>
                                    <div>
                                        <select className="form-select mb-4"
                                                name='invoice'
                                                id='invoice'
                                                {...register('invoice_type')}>
                                            
                                            { invoice.map(item => (
                                                <option value={item.id} key={item.id}>{item.name}</option>
                                            ))}
                                        </select>
                                            { invoiceConfig?.carriers?.map( carrier => (
                                                <div className="form-check py-2 d-flex align-items-center" key={carrier.id}>
                                                    <input className="form-check-input me-2" 
                                                        type="radio" 
                                                        name="carrier_type" 
                                                        id={carrier.id}
                                                        value={carrier.id} 
                                                        {...register('carrier_type')}/>
                                                    <label className="form-check-label" 
                                                        htmlFor={carrier.id}> {carrier.name}
                                                    </label>
                                                    { carrier.id === carrierType && carrier?.fields?.map( field => (
                                                        <input type={field.type} key={field.id}
                                                            className='form-control w-50 ms-4'
                                                            placeholder={field.placeholder}
                                                            {...register(field.id,{
                                                                    required: field.required && `${field.label}為必填`,
                                                                    })}/>
                                                    ))}
                                                </div>
                                                )    
                                            )}
                                            { invoiceConfig?.fields?.map(field => (
                                                <div className='mb-4' key={field.id}>
                                                    <label  className='form-label'
                                                            htmlFor={field.id}>
                                                            {field.label}
                                                            <span className='text-danger'>*</span>
                                                    </label>
                                                    <input type="text" 
                                                        className='form-control'
                                                        name={field.id}
                                                        id={field.id}
                                                        placeholder={field.placeholder}
                                                        {...register(field.id,{
                                                                required: field.required && `${field.label}為必填`
                                                                })}/>
                                                </div>
                                            ))}
                                    </div>
                            </div>
                        </div>
                    </div>
                    <button type='submit'
                            className='btn btn-order w-100'>確認訂購
                    </button>
                </form>
            </div>
        </section>
    </>)
}

export default Carts;