import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const getAsyncOrders = createAsyncThunk(
    'orders/getAsyncOrders',
    async(page = 1) => {
        try {
            const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/orders?page=${page}`)
            console.log(res.data)
            return {
                orders: res.data.orders,
                pagination: res.data.pagination
            }
        } catch (error) {
            console.log('getAsyncOrders:',error)
        }
    }
);

export const postAsyncOrders =createAsyncThunk(
    'orders/postAsyncOrders',
    async({recipient, email, tel, address, orderNote},{dispatch}) => {
        const data = {
                "user": {
                "name": recipient,
                "email": email,
                "tel": tel,
                "address": address,
                },
                "message": orderNote
            }

            console.log(data)

        try {
            const res = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`,{data})
            dispatch(getAsyncOrders())
        } catch (error) {
            console.log('postAsyncOrders:',error)
        }
    }
)


export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        pagination: {},
        currentPage: 1,
    },
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncOrders.fulfilled, (state, action) => {
            state.orders = action.payload.orders
            state.pagination = action.payload.pagination
            state.currentPage = action.meta.arg  
        })
    }
});

export const { setCurrentPage } = ordersSlice.actions


export default ordersSlice.reducer;