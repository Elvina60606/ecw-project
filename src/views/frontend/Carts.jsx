

const Carts =() =>{


    return (
    <>
        <section className="bg-neutral-50">
            <div className="container">
                <h2 className="fs-3 fs-md-2 text-black pt-8 pt-md-12 mb-6 mb-md-8">購物車商品清單</h2>
                <table className="table table-borderless text-center align-middle">
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
                            <th className="d-flex align-items-center ps-7 py-4">
                                <img src="https://github.com/Elvina60606/onon_images/blob/main/products-img/%E6%AA%B8%E6%AA%AC%E5%8F%AF%E9%BA%97%E9%9C%B21.jpg?raw=true"    
                                     alt="product-imageUrl" 
                                     className="rounded me-4 object-fit-cover"
                                     style={{width:80, height:80}}/>
                                <h6>product-title</h6>
                            </th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>@mdo</td>
                        </tr>
                    </tbody>
                </table>
            </div>




            {/* coupon & 結帳 */}
        </section>
    
    </>)
}

export default Carts;