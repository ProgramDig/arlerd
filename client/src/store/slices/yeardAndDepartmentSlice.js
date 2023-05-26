import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    idYear: '',
    idDepartment: ''
};


const yearAndDepartmentIdSlice = createSlice({
    name: 'yearAndDepartmentId',
    initialState: initialState,
    reducers: {
        setYear(state, action) {
            console.log(state)
            console.log(action)
            state.idYear = action.payload;
        },
        setDepartment(state , action) {
            state.idDepartment = action.payload
        },
        removeYearAndDepartment(state){
            state.idYear = initialState.idYear;
            state.idDepartment = initialState.idDepartment;
        }
    }
});


export const{ setYearAndDepartment , removeYearAndDepartment,setDepartment,setYear} = yearAndDepartmentIdSlice.actions;
export default yearAndDepartmentIdSlice.reducer;