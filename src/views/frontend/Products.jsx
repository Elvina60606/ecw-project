import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";

import { getAsyncProducts, setCurrentPage } from "../../slices/productsSlice";
import Pagination from "../../component/utils/Pagination";

const Products =() => {
    const dispatch = useDispatch();
    const { products, pagination, currentPage } = useSelector(state => state.products )
    
    useEffect(()=>{
        dispatch(getAsyncProducts(currentPage))
    },[dispatch, currentPage])

    const [ dropdownShow, setDropdownShow ] = useState(false);

    //pagination
    const handlePageChange = (page) => {
      dispatch(setCurrentPage(page));
    };


    return(<>
            <section className="col-12 col-md-9">
                <h2 className="fs-3 fs-lg-2 mb-6 mb-md-0">商品介紹</h2>
                <div className="dropdown d-block d-md-none">
                    <Link to='/products_sidebar_layout/products'
                          className="form-select text-primary-800 text-start py-2"
                          onClick={()=>setDropdownShow(prev => !prev)}>
                        商品總覽
                    </Link>
                    <ul className={`dropdown-menu w-100 mt-1 ${dropdownShow && 'show'}`}>
                        <li>
                            <Link to='/products_sidebar_layout/products'
                                  className="dropdown-item">
                                可麗露
                            </Link>
                        </li>
                        <li>
                            <Link to='/products_sidebar_layout/products' 
                                  className="dropdown-item">
                                巴斯克
                            </Link>
                        </li>
                        <li>
                            <Link to='/products_sidebar_layout/products' 
                                  className="dropdown-item">
                                瑪德蓮
                            </Link>
                        </li>
                        <li>
                            <Link to='/products_sidebar_layout/products' 
                                className="dropdown-item">
                                法式小塔
                            </Link>
                        </li>
                        <li>
                            <Link to='/products_sidebar_layout/products' 
                                  className="dropdown-item">
                                寄甜計畫
                            </Link>
                        </li>
                        <li>
                            <Link to='/products_sidebar_layout/products'
                                  className="dropdown-item">
                                中秋禮盒
                            </Link>
                        </li>
                    </ul>
                </div>

              {/* 商品資料 */}
                <div className="row py-6 py-md-8 g-6">
                    {products?.map((product) => {
                        return (
                            <div className="col-12 col-sm-6 col-lg-4" key={product.id}>
                                <div className="card h-100">
                                    <Link to={`/product/${product.id}`}>
                                        <img src={product.imageUrl}
                                             className="card-img-top object-fit-cover"
                                             alt="canele"
                                             style={{ height: 200 }}/>
                                    </Link>
                                    <div className="card-body d-flex flex-column">
                                        <Link to={`/product/${product.id}`}>
                                            <h4 className="card-title text-primary-800">
                                                {product.title}
                                            </h4>
                                        </Link>
                                        <p className="card-text text-primary-600 mb-4 text-truncate">
                                            {product.content}
                                        </p>
                                        <div className="mt-auto d-flex justify-content-between align-items-center">
                                            <h4 className="text-primary-700">
                                                NT$ {product.price}
                                            </h4>
                                            <button className="btn btn-card-cart px-6"
                                                    onClick={()=>addOneToCart(product.id)}>
                                                <span className="material-symbols-outlined fill align-bottom">
                                                shopping_cart
                                                </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

                <Pagination currentPage={currentPage}
                            onPageChange={handlePageChange}
                            totalPages={pagination?.total_pages || 1}/>

            </section>
    </>)
}

export default Products;