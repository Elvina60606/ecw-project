import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getAsyncMessage } from "../messageSlice";


const { VITE_URL, VITE_PATH } = import.meta.env;

const INITIAL_TEMPLATE_DATA = {
  id: "",
  title: "",
  category: "",
  origin_price: "",
  price: "",
  unit: "",
  description: "",
  content: "",
  is_enabled: false,
  imageUrl: "",
  imagesUrl: [],
};

export const getAsynsAdminProducts = createAsyncThunk(
    '/adminProducts/getAsynsAdminProducts',
    async(page=1,{dispatch}) => {
        try {
            const res = await axios.get(`${VITE_URL}/v2/api/${VITE_PATH}/admin/products?page=${page}`)
            return {
                adminProducts : res.data.products,
                pagination: res.data.pagination
            }
        } catch (error) {
            dispatch(getAsyncMessage(error.response?.data))
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
            dispatch(getAsyncMessage(error.response?.data))
        }
    }
);

export const createAsyncAdminProduct = createAsyncThunk(
    'adminProducts/createAsyncAdminProduct',
    async(data,{dispatch}) => {
        const productData = {
          data : {
            ...data,
            origin_price : Number(data.origin_price),
            price : Number(data.price),
            is_enabled : data.is_enabled ? 1 : 0,
            imagesUrl : [...data.imagesUrl.filter((url) =>  url !== "")]
          }
        }

        try {
        const res = await axios.post(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product`,productData)
        dispatch(getAsyncMessage(res.data))
        } catch (error) {
        dispatch(getAsyncMessage(error.response?.data))
        }
    }
);

export const updateAsyncAdminProduct = createAsyncThunk(
    'adminProducts/updateAsyncAdminProduct',
    async({id, data},{dispatch}) => {
        const productData = {
          data : {
            ...data,
            origin_price : Number(data.origin_price),
            price : Number(data.price),
            is_enabled : data.is_enabled ? 1 : 0,
            imagesUrl : [...data.imagesUrl.filter((url) =>  url !== "")]
          }
        }

        try {
            const res = await axios.put(`${VITE_URL}/v2/api/${VITE_PATH}/admin/product/${id}`,productData)
            dispatch(getAsyncMessage(res.data))
        } catch (error) {
            dispatch(getAsyncMessage(error.response?.data))
        }
    }
);

export const adminProductsSlice = createSlice({
    name: 'adminProducts',
    initialState:{
        adminProducts: [],
        pagination: {},
        currentPage: 1,
        tempProduct: {...INITIAL_TEMPLATE_DATA},
    },
    reducers:{
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setTempProduct(state, action) {
            state.tempProduct = action.payload
        },
        resetTempProduct(state) {
            state.tempProduct = {...INITIAL_TEMPLATE_DATA}
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

export const { setCurrentPage, setTempProduct, resetTempProduct } = adminProductsSlice.actions;

export default adminProductsSlice.reducer;