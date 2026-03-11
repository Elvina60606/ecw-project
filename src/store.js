import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice';
import cartsReducer from './slices/cartsSlice';
import ordersReducer from './slices/ordersSlice';
import memberReducer from './slices/memberSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        carts: cartsReducer,
        orders: ordersReducer,
        member: memberReducer,
    }
});