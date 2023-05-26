import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const  loadGroupThunk = createAsyncThunk(
    "group/loadGroupThunk",
    async function () {
        try {
            const response = await axios.get("http://localhost:5000/group/all")
            return response.data;
        } catch (error) {
            throw Error(error.message);
        }
    }
);

const initialState = {
    group: {},
    list: [],
    status: "init",
    error: null,
};

const groupSlice = createSlice({
    name: "group",
    initialState,
    reducers: {
        setGroup(state, action) {
            state.group = action.payload;
        },
        removeGroup(state) {
            state.group = null;
        },
        setGroups(state, action) {
            state.list = action.payload;
        },
        removeAllDisciplines(state) {
            state.list = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadGroupThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loadGroupThunk.fulfilled, (state, action) => {
                state.status = "success";
                state.list = action.payload;
            })
            .addCase(loadGroupThunk.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message;
            });
    },
});

export const {removeAllDisciplines,removeGroup,
    setGroup,setGroups} = groupSlice.actions;
export default groupSlice.reducer;

