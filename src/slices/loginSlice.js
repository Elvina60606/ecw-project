import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLogin: false,
    },
    reducers: {
        loginSuccess( state ){
            state.isLogin = true
        },
        logout( state ){
            state.isLogin = false
        }
    }
})

export const { loginSuccess, logout } =loginSlice.actions;

export default loginSlice.reducer;