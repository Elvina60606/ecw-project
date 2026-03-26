import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAsyncMessage } from "./messageSlice";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const getAsyncOrders = createAsyncThunk(
  "orders/getAsyncOrders",
  async (page = 1, { dispatch }) => {
    try {
      const res = await axios.get(
        `${VITE_URL}/v2/api/${VITE_PATH}/orders?page=${page}`,
      );
      return {
        orders: res.data.orders,
        pagination: res.data.pagination,
      };
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

export const getAsyncOrder = createAsyncThunk(
  "order/getAsyncOrder",
  async (Id, { dispatch }) => {
    try {
      const res = await axios.get(
        `${VITE_URL}/v2/api/${VITE_PATH}/order/${Id}`,
      );
      return res.data;
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

export const postAsyncOrders = createAsyncThunk(
  "orders/postAsyncOrders",
  async ({ recipient, email, tel, address, orderNote }, { dispatch }) => {
    const data = {
      user: {
        name: recipient,
        email: email,
        tel: tel,
        address: address,
      },
      message: orderNote,
    };

    try {
      const res = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/order`, {
        data,
      });
      dispatch(getAsyncMessage(res.data));
      return res.data;
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
    pagination: {},
    currentPage: 1,
    order: null,
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncOrders.fulfilled, (state, action) => {
        state.orders = action.payload.orders;
        state.pagination = action.payload.pagination;
        state.currentPage = action.meta.arg;
      })

      .addCase(getAsyncOrder.fulfilled, (state, action) => {
        state.order = action.payload.order;
      });
  },
});

export const { setCurrentPage } = ordersSlice.actions;

export default ordersSlice.reducer;
