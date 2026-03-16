import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsyncMessage } from "../messageSlice";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const getAsyncAdminOrders = createAsyncThunk(
    'adminOrders/getAsyncAdminOrders',
    async() => {
        try {
            const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/orders`)
            return {
                adminOrders: res.data.orders,
                pagination: res.data.pagination
            }
        } catch (error) {
            console.log(error.response?.data)
        }
    }
);

export const updateAsyncOrder = createAsyncThunk(
    'adminOrders/updateAsyncOrder',
    async({id, data},{dispatch}) =>{
        try {
            const res = await axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${id}`,{data})
            dispatch(getAsyncAdminOrders())
        } catch (error) {
            dispatch(getAsyncMessage(error.response.data))
        }
    }
);

export const deleteAsyncOrder = createAsyncThunk(
    'adminOrders/deleteAsyncOrder',
    async(orderId, { dispatch }) => {
        try {
            const res = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/admin/order/${orderId}`)
            dispatch(getAsyncMessage(res.data))
            dispatch(getAsyncAdminOrders())            
        } catch (error) {
            dispatch(getAsyncMessage(error.response.data))
        }
    }
);


export const adminOrdersSlice = createSlice({
    name: 'adminOrders',
    initialState:{
        adminOrders: [],
        pagination: {},
        currentPage: 1,
        adminOrder: null,
    },
    reducers: {
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setAdminOrder(state,action) {
            state.adminOrder = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase(getAsyncAdminOrders.fulfilled, (state, action) =>{
            state.adminOrders = action.payload.adminOrders
            state.pagination = action.payload.pagination
            state.currentPage = action.meta.arg
        })
    }
})

export const { setCurrentPage, setAdminOrder } = adminOrdersSlice.actions;

export default adminOrdersSlice.reducer;