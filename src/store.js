import { configureStore } from "@reduxjs/toolkit";
import productsReducer from './slices/productsSlice';
import cartsReducer from './slices/cartsSlice';

export const store = configureStore({
    reducer: {
        products: productsReducer,
        carts: cartsReducer,
    }
});