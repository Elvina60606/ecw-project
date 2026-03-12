import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { getAsyncCarts, deleteAsyncCarts, updateAsyncCarts } from '../../../slices/cartsSlice';
import { getAsyncOrders, postAsyncOrders } from '../../../slices/ordersSlice';

import CartLists from './CartLists';
import Promotion from './Promotion';


import OrderPrice from './OrderPrice';
import CheckoutForm from './CheckoutForm';

const Carts =() =>{
    const dispatch = useDispatch();
    const { carts, totalPrice } = useSelector(state => state.carts) 
    const shippingCost = totalPrice > 1000 ? 0 : 60;
    const finalPrice = totalPrice + shippingCost;

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

    const deleteCart =(cartId)=>{
        dispatch(deleteAsyncCarts(cartId))
    };

    // validation
    const {
        register,
        handleSubmit,
        watch,
        setValue,
        resetField,
        reset,
        getValues,
        formState: {errors}
    } = useForm({
        mode: 'onChange',
        defaultValues: {
            invoice_type: "personal",
            }
    });

    // same as member
    const member = useSelector(state => state.member.member)
    const sameAsMember = watch('sameAsMember')
    useEffect(()=>{
        if(sameAsMember && member){
            reset({
                ...getValues(),
                recipient: member.memberName,
                tel: member.tel,
                email: member.email,
                address: member.address,
                city: member.city,
                district: member.district,
                zipCode: member.zipCode
            })
        } else {
            reset({
                ...getValues(),
                recipient: "",
                tel: "",
                email: "",
                address: "",
                city: "",
                district: "",
                zipCode: ""
            })
        }
    },[sameAsMember, member, setValue ])


    const onSubmit = async(data) =>{
        console.log(data)
        await dispatch(postAsyncOrders(data))

        dispatch(getAsyncOrders())
        dispatch(getAsyncCarts())
        reset()
    };

    return (
    <>
        <section className="bg-neutral-50 py-8 py-md-12">
            <CartLists carts={carts}
                    incrementQty={incrementQty}
                    decrementQty={decrementQty}
                    deleteCart={deleteCart}/>
            
            <Promotion />

            <OrderPrice totalPrice={totalPrice}
                        shippingCost={shippingCost}
                        finalPrice={finalPrice}/>
        </section>

        {/* user info */}
        <section className="py-8 py-md-12">
            <div className="container">
                <h3 className="fs-md-2 text-black mb-6 mb-md-8">填寫資訊</h3>
                <CheckoutForm register={register}
                              handleSubmit={handleSubmit}
                              watch={watch}
                              setValue={setValue}
                              resetField={resetField}
                              reset={reset}
                              errors={errors}
                              onSubmit={onSubmit}/>
            </div>
        </section>
    </>)
}

export default Carts;