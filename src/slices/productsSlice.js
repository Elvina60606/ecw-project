import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const { VITE_URL, VITE_PATH } = import.meta.env;


export const getAsyncProducts = createAsyncThunk(
    'products/getAsyncProducts',
    async( page =1) => {
        try {
            const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}`)
            return {
                products: res.data.products,
                pagination: res.data.pagination
            }
        } catch (error) {
            console.log(error)
        }
    }
);

export const getAsyncProduct = createAsyncThunk(
    'products/getAsyncProduct',
    async(id) => {
        try {
            const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`)
            //console.log(res.data.product)
            return res.data.product
        } catch (error) {
            console.log("API失敗:", error);
        }
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        pagination: {},
        product: null,
        currentPage: 1,
        error: null,
    },
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncProducts.fulfilled, (state, action) => {
            state.products = action.payload.products
            state.pagination = action.payload.pagination
            state.currentPage = action.meta.arg  
        })
        .addCase(getAsyncProduct.fulfilled, ( state, action) => {
            state.product = action.payload
        })
    }
})

export const { setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;