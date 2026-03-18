import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./slices/productsSlice";
import cartsReducer from "./slices/cartsSlice";
import ordersReducer from "./slices/ordersSlice";
import memberReducer from "./slices/memberSlice";
import modalReducer from "./slices/modalSlice";
import loginReducer from "./slices/loginSlice";
import messageReducer from "./slices/messageSlice";

import adminAuthReducer from "./slices/admin/AdminAuthSlice";
import adminProductsReducer from "./slices/admin/AdminProductsSlice";
import adminOrdersReducer from "./slices/admin/adminOrderSlice";

export const store = configureStore({
  reducer: {
    products: productsReducer,
    carts: cartsReducer,
    orders: ordersReducer,
    member: memberReducer,
    modal: modalReducer,
    login: loginReducer,
    message: messageReducer,
    adminAuth: adminAuthReducer,
    adminProducts: adminProductsReducer,
    adminOrders: adminOrdersReducer,
  },
});
