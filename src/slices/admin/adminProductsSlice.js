import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAsyncMessage } from "../messageSlice";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const getAsynsAdminProducts = createAsyncThunk(
    '/adminProducts/getAsynsAdminProducts',
    async(page=1) => {
        try {
            const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=${page}`)
            return {
                adminProducts : res.data.products,
                pagination: res.data.pagination
            }
        } catch (error) {
            console.log('getAsynsAdminProducts:', error)
        }
    }
);

export const deleteAsyncAdminProduct = createAsyncThunk(
    '/adminProducts/deleteAsyncAdminProduct',
    async(productId, {dispatch}) => {
        try {
            const res = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${productId}`)
            dispatch(getAsyncMessage(res.data))
            dispatch(getAsynsAdminProducts())
        } catch (error) {
            console.log('deleteAsyncAdminProduct:', error)
        }
    }
)

export const adminProductsSlice = createSlice({
    name: 'adminProducts',
    initialState:{
        adminProducts: [],
        pagination: {},
        currentPage: 1,
    },
    reducers:{
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAsynsAdminProducts.fulfilled, (state, action) => {
            state.adminProducts = action.payload.adminProducts
            state.pagination = action.payload.pagination
            state.currentPage = action.meta.arg 
        })
    }
});

export const { setCurrentPage } = adminProductsSlice.actions;

export default adminProductsSlice.reducer;