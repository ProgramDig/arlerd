import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    value: ''
};

const roleSlice = createSlice({
    name: 'role',
    initialState: initialState,
    reducers: {
        setRole(state, action) {
            state = action.value;
        },
        removeRole(state) {
            state = initialState.value;
        }
    }

});
export const {setRole, removeRole} = roleSlice.actions;

export default roleSlice.reducer;
