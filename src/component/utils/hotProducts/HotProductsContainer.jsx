import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getAsyncProducts } from "../../../slices/productsSlice";

import HotProducts from "./HotProducts";


const HotProductsContainer =() =>{
    const dispatch = useDispatch();    
    const { products } = useSelector( state => state.products )

    useEffect(()=> {
        dispatch(getAsyncProducts())
    }, [dispatch]);

    const hotProductsId = ['-OmCaBPD7BMoohDSFVoa', '-Om8_fXd3nhxI18dHkWj', '-Om8X8SgK8wLoxrzYcYv'];

    const hotProducts = products.filter(product => hotProductsId?.includes(product.id));

    return <HotProducts products={hotProducts} />
}

export default HotProductsContainer;