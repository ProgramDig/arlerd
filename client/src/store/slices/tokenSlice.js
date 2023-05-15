import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    value: ''
};


const tokenSlice = createSlice({
    name: 'token',
    initialState: initialState,
    reducers: {
        setToken(state, action) {
            state.value = action.payload;
        },
        removeToken(state){
            state.value = initialState.value;
        }
    }
});


export const{ setToken , removeToken} = tokenSlice.actions;
export default tokenSlice.reducer;