import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const getAsyncCarts = createAsyncThunk(
    'carts/getAsyncCarts',
    async() => {
        try {
            const res = await axios(`${VITE_URL}/v2/api/${VITE_PATH}/cart`)
            console.log(res.data.data)
            return res.data.data
        } catch (error) {
            console.log('getAsyncCarts:',error)
        }
    }
);

export const postAsyncCarts = createAsyncThunk(
    'carts/postAsyncCarts',
    async({productId, qty}, {dispatch}) => {
        const data = {
            product_id: productId,
            qty
        }

        try {
            const res = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`,{data})
            dispatch(getAsyncCarts());
        } catch (error) {
            console.log('postAsyncCarts:',error)
        }
    }
);

export const cartsSlice = createSlice({
    name: 'carts',
    initialState: {
        carts: [],
        totalQuantity: 0, //for header badge
    },
    reducers: {
        addQty( state, action ){
            state.totalQuantity += action.payload
        },
        removeQty(state, action) {
        state.totalQuantity -= action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(getAsyncCarts.fulfilled, ( state, action ) => {
                state.carts = action.payload
                state.totalQuantity = action.payload.carts.reduce((sum , item) => sum + item.qty, 0 )
            })
    }
});

export const { addQty, removeQty } = cartsSlice.actions;

export default cartsSlice.reducer;