import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loadTeachersThunk = createAsyncThunk(
    "teacher/loadTeachersThunk",
    async function (token) {
        try {
            const response = await axios.get("http://localhost:5000/teacher/all",{
                headers: {
                    Authorization: `Bearer ${token.accessToken}`, // Include access token in the request header
                },
            });
            const data = response.data;
            return data;
        } catch (error) {
            throw Error(error.message);
        }
    }
);

const initialState = {
    teacher: {},
    list: [],
    status: "init",
    error: null,
};

const teacherSlice = createSlice({
    name: "teacher",
    initialState,
    reducers: {
        setTeacher(state, action) {
            state.teacher = action.payload;
        },
        removeTeacher(state) {
            state.teacher = null;
        },
        setTeachers(state, action) {
            state.list = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadTeachersThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loadTeachersThunk.fulfilled, (state, action) => {
                state.status = "success";
                state.list = action.payload;
            })
            .addCase(loadTeachersThunk.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message;
            });
    },
});

export const { setTeacher, removeTeacher, setTeachers } = teacherSlice.actions;
export default teacherSlice.reducer;

