
const OrderPrice =({
        totalPrice, 
        shippingCost, 
        finalPrice, 
    }) =>{

    return(
    <>
        <div className="container">
                <div className="bg-white border rounded-4 p-5 p-md-6">
                    <div className="d-flex justify-content-between mb-2">
                        <p className="fs-7">小計</p>
                        <p className="fs-7">$ {totalPrice}</p>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                        <p className="fs-7">運費</p>
                        <p className="fs-7">$ {shippingCost}</p>
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
                        <h4 className="fw-500 text-secondary-500">$ {finalPrice}</h4>
                    </div>
                </div>
        </div>
    </>)
}

export default OrderPrice;