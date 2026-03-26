import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsyncMessage } from "./messageSlice";

const { VITE_URL, VITE_PATH } = import.meta.env;

export const getAsyncProducts = createAsyncThunk(
  "products/getAsyncProducts",
  async ({ page = 1, category = "" }, { dispatch, rejectWithValue }) => {
    try {
      const url = `${VITE_URL}/v2/api/${VITE_PATH}/products?page=${page}${
        category ? `&category=${category}` : ""
      }`;

      const res = await axios.get(url);

      return {
        products: res.data.products,
        pagination: res.data.pagination,
        category,
        page,
      };
    } catch (error) {
      dispatch(getAsyncMessage(error.response?.data));
      return rejectWithValue(error.response?.data); // ⭐重點
    }
  },
);

export const getAsyncProduct = createAsyncThunk(
  "products/getAsyncProduct",
  async (id, { dispatch }) => {
    try {
      const res = await axios.get(
        `${VITE_URL}/v2/api/${VITE_PATH}/product/${id}`,
      );
      return res.data.product;
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    pagination: {},
    product: null,
    currentPage: 1,
    error: null,
    isLoading: false,
    category: "",
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncProducts.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAsyncProducts.fulfilled, (state, action) => {
        if (!action.payload) return; // ⭐防炸

        state.isLoading = false;
        state.products = action.payload.products;
        state.pagination = action.payload.pagination;
        state.currentPage = action.payload.page;
      })
      .addCase(getAsyncProduct.fulfilled, (state, action) => {
        state.product = action.payload;
      });
  },
});

export const { setCurrentPage } = productsSlice.actions;

export default productsSlice.reducer;
