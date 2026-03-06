

const Carts =() =>{


    return (
    <>
        <section className="bg-neutral-50">
            <div className="container">
                <h3 className="fs-md-2 text-black pt-8 pt-md-12 mb-6 mb-md-8">購物車商品清單</h3>
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
                    <div className="bg-white rounded-4 p-4 mb-4">
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
        </section>

        {/* coupon */}
        <section className="bg-neutral-50">
            <div className="container">
                <div className="row px-3 py-4">
                    <div className="col-md-4 border rounded-4 p-4 d-flex">.  //從這邊調整coupon的排版開始
                        <div className="d-flex flex-column">
                            <label htmlFor="point"
                                className="mb-1">可用點數：1000點
                            </label>
                            <input type="text"
                                id="point"
                                placeholder="請輸入紅利點數"
                                className="border border-neutral-300 rounded-3 px-4 py-2 mb-4"/>
                        </div>
                        <div className="d-flex">
                            <button type="button"
                                    className="btn btn-coupon w-50 me-2">使用</button>
                            <button type="button"
                                    className="btn btn-coupon-clear w-50">清除</button>
                        </div>

                    </div>
                </div>
            </div>
        </section>




        {/* 訂購人資訊（背景白） */}
    
    </>)
}

export default Carts;