import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const getAsyncOrders = createAsyncThunk(
    'orders/getAsyncOrders',
    async(page = 1) => {
        try {
            const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/orders?page=${page}`)
            console.log(res) //從這裡開始
        } catch (error) {
            console.log('getAsyncOrders:',error)
        }
    }
)


export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        pagination: {},
        current_page: 1,
    },
    reducers: []
});



export default ordersSlice.reducer;