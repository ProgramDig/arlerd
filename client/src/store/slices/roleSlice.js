import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value: ''
};


const roleSlice = createSlice({
    name: 'role',
    initialState: initialState,
    reducers: {
        setRole(state, action) {
            state.value = action.payload;
        },
        removeRole(state) {
            state.value = initialState.value;
        }
    }

});

export const {setRole, removeRole} = roleSlice.actions;

export default roleSlice.reducer;
