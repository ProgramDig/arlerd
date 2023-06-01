import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const loadDisciplineThunk = createAsyncThunk(
    "discipline/loadDisciplineThunk",
    async function (token) {
        try {
            const response = await axios.get("http://localhost:5000/discipline/all" ,{
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
    discipline: {},
    list: [],
    status: "init",
    error: null,
};

const disciplineSlice = createSlice({
    name: "discipline",
    initialState,
    reducers: {
        setDiscipline(state, action) {
            state.discipline = action.payload;
        },
        removeDiscipline(state) {
            state.discipline = null;
        },
        setDisciplines(state, action) {
            state.list = action.payload;
        },
        removeAllDisciplines(state) {
            state.list = null;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadDisciplineThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loadDisciplineThunk.fulfilled, (state, action) => {
                state.status = "success";
                state.list = action.payload;
            })
            .addCase(loadDisciplineThunk.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message;
            });
    },
});

export const {removeAllDisciplines,removeDiscipline,setDiscipline,
setDisciplines} = disciplineSlice.actions;
export default disciplineSlice.reducer;

