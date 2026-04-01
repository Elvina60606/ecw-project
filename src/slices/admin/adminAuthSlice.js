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
      document.cookie =
        "hexToken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/"; //清除cookie
      return res.data;
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
    }
  },
);

export const checkAsyncAuth = createAsyncThunk(
  "adminAuth/checkAsyncAuth",
  async (token, { dispatch }) => {
    try {
      if (!token) return { success: false };

      const res = await axios.post(`${VITE_URL}/v2/api/user/check`);
      dispatch(getAsyncMessage({ ...res.data, message: "登入中" }));
      return res.data;
    } catch (error) {
      dispatch(getAsyncMessage(error.response.data));
      return { success: false };
    }
  },
);

export const adminAuthSlice = createSlice({
  name: "adminAuth",
  initialState: {
    adminAuth: false,
    isAuthChecked: false,
    token: null,
    success: false,
  },
  reducers: {
    setAuthStatus: (state, action) => {
      state.adminAuth = action.payload.adminAuth;
      state.isAuthChecked = true;
    },
  },
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
      })
      .addCase(checkAsyncAuth.pending, (state) => {
        state.isAuthChecked = false;
      })
      .addCase(checkAsyncAuth.fulfilled, (state) => {
        state.isAuthChecked = true;
        state.adminAuth = true;
      });
  },
});

export const { setAuthStatus } = adminAuthSlice.actions;

export default adminAuthSlice.reducer;
