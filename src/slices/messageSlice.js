import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const messageSlice = createSlice({
    name: 'message',
    initialState: {
        message: []
    },
    reducers: {
        createMessage: ( state, action) =>{
            state.message.push({
                id: action.payload.id,
                type: action.payload.success ? 'success' : 'danger',
                title: action.payload.success ? '成功' : '失敗',
                text: action.payload.message,
            })
        },
        removeMessage( state, action ){
            state.message = state.message.filter(msg => msg.id !== action.payload)
        },
    }
});

export const { createMessage, removeMessage } = messageSlice.actions;

export const getAsyncMessage = createAsyncThunk(
    'message/getAsyncMessage',
    async( payload, { dispatch, requestId }) => {
        dispatch(createMessage({
            ...payload,
            id: requestId
        }));

        setTimeout(() => {
            dispatch(removeMessage(requestId))
        }, 2000);
    }
)


export default messageSlice.reducer;