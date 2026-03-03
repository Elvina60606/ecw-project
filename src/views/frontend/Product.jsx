import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { getAsyncProduct } from "../../slices/productsSlice";
import { postAsyncCarts } from "../../slices/cartsSlice";
import { ProgressBar } from "react-loader-spinner";

import ProductImages from "../../component/product/ProductImages";
import ProductNote from "../../component/product/ProductNote";
import HotProductsContainer from "../../component/utils/hotProducts/HotProductsContainer";



const Product =() => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { product } = useSelector(state => state.products);
    
    const [ images, setImages ] = useState([]);
    const [ showMobileControl, setShowMobileControl ] = useState(false);
    
    useEffect(() => {
        const fetchProduct =async() =>{
            try {
                await dispatch(getAsyncProduct(id));              
            } catch (error) {
                console.log(error)           
            }
        }
        fetchProduct();
    },[dispatch, id]);

    useEffect(() => {
        if (product) {
            setImages([product.imageUrl, ...(product.imagesUrl?.slice(0, 3) || [])]);
        }
    }, [product]);


    const [ qty, setQty ] = useState(1);

    const incrementCount =() => {
        if(qty >=10) return;
        setQty( prev => prev +1 )
    };

    const decrementCount =() => {
        if(qty <= 1) return;
        setQty( prev => prev -1 )
    };

    const addCarts = async() => {
        try {
            await dispatch(postAsyncCarts({ productId: product.id, qty }))
            setQty(1)
        } catch (error) {
            console.log('addCarts:',error)
        }
    }


     if (!product) {
        return (
            <div className="container my-5 text-center">
                <ProgressBar visible={true}
                             height="80"
                             width="80"
                             color="#FC8D5D"
                             barColor="#FECDB9"
                             borderColor="#BDBDBD"
                             ariaLabel="progress-bar-loading"
                             />
            </div>
        )
     }

    return(<>
        {/* Product */}
            <section className="container pt-8 pb-5">
              {/* breadcrumb */}
                        <nav className="my-breadcrumb"
                            aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/'>首頁</Link></li>
                                <li className="breadcrumb-item"><Link to='/products_sidebar_layout/products'>商品介紹</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    {product.title}
                                </li>
                            </ol>
                        </nav>
                        <div className="row">
                            <ProductImages images={images}/> 
                            <div className="col-12 col-lg-7 order-3 ps-lg-8">
                                <div className="d-flex align-items-center justify-content-between mb-4">
                                    <h3 className="fw-bold mb-0 text-primary-800 fs-lg-2">
                                        {product.title}
                                    </h3>
                                    <button type='button' className="btn p-0 border-0 bg-transparent">
                                        <i className='bi fs-4 bi-heart'></i>
                                    </button>
                                </div>
                                <p className="text-primary-700 mb-4 mb-lg-6">{product.description}</p>
                                <div className="d-flex align-items-baseline">
                                    <span className="fs-3 text-secondary-500 fw-bold me-6 mb-4 mb-lg-6">NT$ {product.price}</span>
                                    <span className="text-decoration-line-through text-gray-700 fs-7">原價 NT$ {product.origin_price}</span>
                                </div>
                                <div className="mb-5 mb-lg-0">
                                    <span className="badge text-bg-secondary-50 text-secondary-500 p-2 fs-6 rounded-1 fw-500 border border-1 border-secondary-500">此商品為冷凍寄出</span>
                                </div>
                                <hr className="d-none d-lg-block my-lg-6" />

                            { /* desktop addcarts */}
                                <div className="cart-actions d-none d-lg-flex align-items-center w-100">
                                {/* Product Qty */}
                                    <div className="quantity-control d-flex align-items-center w-50">
                                        <button className="qty-btn btn btn-outline-secondary"
                                                type='button'
                                                onClick={()=> decrementCount()}>-
                                        </button>
                                        <input  type="text"
                                                id='productQty'
                                                className="form-control text-center"
                                                value={qty}
                                                readOnly
                                                style={{width: 60}}/>
                                        <button className="qty-btn btn btn-outline-secondary"
                                                type='button'
                                                onClick={()=> incrementCount()}>+
                                        </button>
                                    </div>
                                    <button className="btn btn-primary w-50"
                                            type='button'
                                            onClick={()=> addCarts()}>
                                            加入購物車
                                    </button>
                                </div>

                            { /* mobile addcarts */}
                                <div className="cart-actions-mobile d-lg-none fixed-bottom px-3 py-4 bg-white shadow">
                                    <button type='button'
                                            className={`btn btn-primary w-100 ${showMobileControl && 'd-none'}`}
                                            onClick={()=> setShowMobileControl(true)}>加入購物車
                                    </button>
                                    <div className={`bg-white py-1 px-2 rounded ${showMobileControl? '' : 'd-none'}`}>
                                        <div className="d-flex align-items-center justify-content-between mb-4">
                                            <span className="me-6">數量：</span>
                                            <div className="quantity-control d-flex align-items-center">
                                                <button className="qty-btn btn btn-outline-secondary"
                                                        type='button'
                                                        onClick={()=> decrementCount()}>-</button>
                                                <input type="text"
                                                    className="form-control text-center mx-2"
                                                    value={qty}
                                                    readOnly
                                                    style={{width: 60}}/>
                                                <button className="qty-btn btn btn-outline-secondary"
                                                        type='button'
                                                        onClick={()=> incrementCount()}>+</button>
                                            </div>
                                            <button type="button"
                                                    className="btn-close ms-8"
                                                    onClick={()=>setShowMobileControl(false)}>
                                            </button>
                                        </div>

                                        { /* 確認按鈕 */}
                                        <button className="btn btn-primary w-100"
                                                type='button'
                                                onClick={()=> {
                                                    addCarts();
                                                    setShowMobileControl(false)}}>
                                                確認
                                        </button>
                                    </div>
                                </div>
                            </div>                        
                        </div>
            </section>
            <ProductNote />
            {/* <HotProducts />   */}

          <HotProductsContainer />
    </>)
}

export default Product;