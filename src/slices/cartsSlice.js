import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsyncMessage } from "./messageSlice";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const getAsyncCarts = createAsyncThunk(
    'carts/getAsyncCarts',
    async(_, {dispatch}) => {
        try {
            const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
            return res.data.data
        } catch (error) {
             dispatch(getAsyncMessage(error.response.data))
        }
    }
);

export const postAsyncCarts = createAsyncThunk(
    'carts/postAsyncCarts',
    async({productId, qty =1}, {dispatch}) => {
        const data = {
            product_id: productId,
            qty
        }

        try {
            const res = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`,{data})
            dispatch(getAsyncCarts());
            dispatch(getAsyncMessage(res.data))
        } catch (error) {
            dispatch(getAsyncMessage(error.response.data))
        }
    }
);

export const updateAsyncCarts = createAsyncThunk(
    'carts/updateAsyncCarts',
    async({cartId, productId, qty},{dispatch}) => {
        const data ={
            product_id: productId,
            qty
        }

        try {
            const res = await axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${cartId}`, {data})
            dispatch(getAsyncCarts())
            dispatch(getAsyncMessage(res.data))
        } catch (error) {
            dispatch(getAsyncMessage(error.response.data))
        }
    }
);

export const deleteAsyncCarts =createAsyncThunk(
    'carts/deleteAsyncCarts',
    async(cartId, {dispatch}) => {
        try {
            const res = await axios.delete(`${VITE_URL}/v2/api/${VITE_PATH}/cart/${cartId}`)
            dispatch(getAsyncCarts())
            dispatch(getAsyncMessage(res.data))
        } catch (error) {
            dispatch(getAsyncMessage(error.response.data))
        }
    }
)

export const cartsSlice = createSlice({
    name: 'carts',
    initialState: {
        carts: [],
        totalPrice: 0,
        totalQuantity: 0, //for header badge
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAsyncCarts.fulfilled, ( state, action ) => {
                state.carts = action.payload.carts
                state.totalPrice = action.payload.carts.reduce((sum, cart) => sum + cart.product.price * cart.qty, 0 )
                state.totalQuantity = action.payload.carts.reduce((sum , item) => sum + item.qty, 0 )
            })
    }
});

export default cartsSlice.reducer;