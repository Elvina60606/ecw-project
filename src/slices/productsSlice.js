import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const { VITE_URL, VITE_PATH } = import.meta.env;


export const getAsyncProducts = createAsyncThunk(
    'products/getAsyncProducts',
    async( page =1) => {
        try {
            const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}`)
            console.log(res.data)
            return {
                products: res.data.products,
                pagination: res.data.pagination
            }
        } catch (error) {
            console.log(error)
        }
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        pagination: {},
        currentPage: 1,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAsyncProducts.fulfilled, (state, action) => {
            state.products = action.payload.products
            state.pagination = action.payload.pagination
            state.currentPage = action.meta.arg  
        })
    }
})



export default productsSlice.reducer;