import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsyncMessage } from "./messageSlice";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const getAsyncCarts = createAsyncThunk(
  "carts/getAsyncCarts",
  async (_, { dispatch }) => {
    try {
      const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/cart`);
      return res.data.data;
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

export const postAsyncCarts = createAsyncThunk(
  "carts/postAsyncCarts",
  async ({ productId, qty = 1 }, { dispatch }) => {
    const data = {
      product_id: productId,
      qty,
    };

    try {
      const res = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/cart`, {
        data,
      });
      dispatch(getAsyncCarts());
      dispatch(getAsyncMessage(res.data));
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

export const updateAsyncCarts = createAsyncThunk(
  "carts/updateAsyncCarts",
  async ({ cartId, productId, qty, prevQty }, { dispatch }) => {
    const data = {
      product_id: productId,
      qty,
    };

    try {
      const res = await axios.put(
        `${VITE_URL}/v2/api/${VITE_PATH}/cart/${cartId}`,
        { data },
      );
      dispatch(getAsyncMessage(res.data));
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
      dispatch(updateCartQtyLocal({ cartId, qty: prevQty }));
    }
  },
);

export const deleteAsyncCarts = createAsyncThunk(
  "carts/deleteAsyncCarts",
  async (cartId, { dispatch }) => {
    try {
      const res = await axios.delete(
        `${VITE_URL}/v2/api/${VITE_PATH}/cart/${cartId}`,
      );
      dispatch(getAsyncCarts());
      dispatch(getAsyncMessage(res.data));
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

// coupon
export const applyCoupon = createAsyncThunk(
  "carts/applyCoupon",
  async (code, { dispatch }) => {
    try {
      const res = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/coupon`, {
        data: { code },
      });
      //dispatch(getAsyncCarts());
      dispatch(getAsyncMessage(res.data));
    } catch (error) {
      dispatch(
        getAsyncMessage({
          message: error.response?.data?.message || error.message,
        }),
      );
    }
  },
);

export const cartsSlice = createSlice({
  name: "carts",
  initialState: {
    carts: [],
    totalPrice: 0,
    finalPrice: 0,
    totalQuantity: 0, //for header badge
  },
  reducers: {
    updateCartQtyLocal(state, action) {
      const { cartId, qty } = action.payload;
      const target = state.carts.find((c) => c.id === cartId);
      if (target) target.qty = qty;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncCarts.fulfilled, (state, action) => {
      state.carts = action.payload.carts;
      state.totalPrice = action.payload.total;
      state.finalPrice = action.payload.final_total;
      state.totalQuantity = action.payload.carts.reduce(
        (sum, item) => sum + item.qty,
        0,
      );
    });
  },
});

export const { updateCartQtyLocal } = cartsSlice.actions;

export default cartsSlice.reducer;
