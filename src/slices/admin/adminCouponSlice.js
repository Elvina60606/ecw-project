import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getAsyncMessage } from "../messageSlice";

const { VITE_URL, VITE_PATH } = import.meta.env;

const INITIAL_TEMPLATE_COUPON_DATA = {
  id: "",
  title: "",
  percent: "",
  due_date: "",
  code: "",
  num: "",
  is_enabled: false,
};

export const getAsyncAdminCoupons = createAsyncThunk(
  "adminCoupons/getAsyncAdminCoupons",
  async (page = 1, { dispatch }) => {
    try {
      const res = await axios(
        `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupons?page=${page}`,
      );
      return {
        adminCoupons: res.data.coupons,
        pagination: res.data.pagination,
      };
    } catch (error) {
      dispatch(
        getAsyncMessage({
          message: error.response?.data?.message || error.message,
        }),
      );
    }
  },
);

export const deleteAsyncCoupon = createAsyncThunk(
  "adminCoupons/deleteAsyncCoupon",
  async (id, { dispatch }) => {
    try {
      const res = await axios.delete(
        `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${id}`,
      );
      dispatch(getAsyncMessage(res.data));
      dispatch(getAsyncAdminCoupons());
    } catch (error) {
      dispatch(
        getAsyncMessage({
          message: error.response?.data?.message || error.message,
        }),
      );
    }
  },
);

export const createAsyncCoupon = createAsyncThunk(
  "adminCoupons/createAsyncCoupon",
  async (data, { dispatch }) => {
    const couponData = {
      data: {
        title: data.title,
        is_enabled: data.is_enabled ? 1 : 0,
        percent: Number(data.percent),
        due_date: data.due_date,
        code: data.code,
      },
    };
    try {
      const res = await axios.post(
        `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon`,
        couponData,
      );
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

export const updateAsyncCoupon = createAsyncThunk(
  "adminCoupons/updateAsyncCoupon",
  async ({ id, data }, { dispatch }) => {
    const couponData = {
      data: {
        ...data,
        id: data.id,
        title: data.title,
        is_enabled: data.is_enabled ? 1 : 0,
        percent: Number(data.percent),
        due_date: data.due_date,
        num: data.num,
        code: data.code,
      },
    };
    try {
      const res = await axios.put(
        `${VITE_URL}/v2/api/${VITE_PATH}/admin/coupon/${id}`,
        couponData,
      );
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

export const adminCouponSlice = createSlice({
  name: "adminCoupons",
  initialState: {
    adminCoupons: [],
    pagination: {},
    currentPage: 1,
    tempCoupon: { ...INITIAL_TEMPLATE_COUPON_DATA },
  },
  reducers: {
    setCurrentPage(state, action) {
      state.currentPage = action.payload;
    },
    setTempCoupon(state, action) {
      state.tempCoupon = action.payload;
    },
    resetTemptCoupon(state) {
      state.tempCoupon = { ...INITIAL_TEMPLATE_COUPON_DATA };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAsyncAdminCoupons.fulfilled, (state, action) => {
      state.adminCoupons = action.payload.adminCoupons;
      state.pagination = action.payload.pagination;
      state.currentPage = action.meta.arg;
    });
  },
});

export const { setCurrentPage, setTempCoupon, resetTemptCoupon } =
  adminCouponSlice.actions;

export default adminCouponSlice.reducer;
