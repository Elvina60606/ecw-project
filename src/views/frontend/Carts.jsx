

const Carts =() =>{


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
                                <th scope="col" style={{width: '50%'}}>商品資料</th>
                                <th scope="col" style={{width: '10%'}}>單價</th>
                                <th scope="col" style={{width: '15%'}}>數量</th>
                                <th scope="col" style={{width: '15%'}}>小計</th>
                                <th scope="col" style={{width: '10%'}}>刪除</th>
                            </tr>
                        </thead>
                        <tbody className="table-carts-tbody">
                            <tr>
                                <td colSpan={5} className="rounded-4 p-0">
                                    <div className="d-flex align-items-center ps-7 py-4 table-body-hover">
                                        <div className="d-flex align-items-center" style={{width: '49%'}}>
                                            <img src="https://github.com/Elvina60606/onon_images/blob/main/products-img/%E6%AA%B8%E6%AA%AC%E5%8F%AF%E9%BA%97%E9%9C%B21.jpg?raw=true"    
                                                alt="product-imageUrl" 
                                                className="rounded-4 me-4 object-fit-cover"
                                                style={{width:80, height:80}}/>
                                            <h5>product-title</h5>
                                        </div>
                                        <div style={{width: '10%'}}><h6>單價</h6></div>
                                        <div style={{width: '16%'}}><h6>數量</h6></div>
                                        <div style={{width: '15%'}}><h5>單項總價</h5></div>
                                        <div style={{width: '10%'}}>delete icon</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            {/* mobile */}
                <div className="row px-3 d-md-none">
                    <div className="bg-white rounded-4 p-4 py-md-6 mb-4 mobile-product">
                        <div className="d-flex align-items-center">
                            <img className="rounded-4 me-4 object-fit-cover" style={{width:80, height:80}}
                                 src="https://github.com/Elvina60606/onon_images/blob/main/products-img/%E6%AA%B8%E6%AA%AC%E5%8F%AF%E9%BA%97%E9%9C%B21.jpg?raw=true"    
                                 alt="product-imageUrl" />
                            <div>
                                <h6 className="mb-2">product-title</h6>
                                <h6>origin_price</h6>
                            </div>
                        </div>
                        
                        <div className="d-flex">
                            <div>數量btn</div>
                            <h5>單項總價</h5>
                            <p>delete icon</p>
                        </div>

                    </div>
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

            </div>

        </section>
    </>)
}

export default Carts;