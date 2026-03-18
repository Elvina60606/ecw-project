import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsyncMessage } from "../messageSlice";
import axios from "axios";

const { VITE_URL } = import.meta.env;

export const getAsyncAuth = createAsyncThunk(
  "/adminAuth/getAsyncAuth",
  async (data, { dispatch }) => {
    try {
      const res = await axios.post(`${VITE_URL}/v2/admin/signin`, data);
      dispatch(getAsyncMessage(res.data));

      const { token, expired } = res.data;
      document.cookie = `hexToken=${token}; expires=${new Date(expired)}; path=/`;
      axios.defaults.headers.common["Authorization"] = token;

      return res.data;
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

export const asyncLogout = createAsyncThunk(
  "/adminAuth/asyncLogout",
  async (_, { dispatch }) => {
    try {
      const res = await axios.post(`${VITE_URL}/v2/logout`);
      dispatch(getAsyncMessage(res.data));
      return res.data;
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    adminAuth: false,
    token: null,
    success: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAsyncAuth.fulfilled, (state, action) => {
        state.adminAuth = true;
        state.token = action.payload.token;
        state.success = action.payload.success;
      })
      .addCase(asyncLogout.fulfilled, (state, action) => {
        state.adminAuth = false;
        state.token = null;
        state.success = action.payload.success;
      });
  },
});

export default adminAuthSlice.reducer;
