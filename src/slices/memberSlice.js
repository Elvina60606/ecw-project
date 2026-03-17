import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  member: JSON.parse(localStorage.getItem("member")) || null
};

export const memberSlice = createSlice({
    name: 'member',
    initialState,
    reducers: {
        registerMember: (state, action) => {
            state.member = action.payload
            localStorage.setItem("member", JSON.stringify(action.payload))
        },
        logoutMember: (state) => {
            state.member = null
            localStorage.removeItem("member")
        }
    }
})

export const { registerMember, logoutMember } = memberSlice.actions;

export default memberSlice.reducer;