import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const loadUsersThunk = createAsyncThunk(
    "user/loadUsersThunk",
    async function (tokens) { // Accept tokens as parameters
        try {
            const response = await axios.get("http://localhost:5000/users-login/all", {
                headers: {
                    Authorization: `Bearer ${tokens.accessToken}`, // Include access token in the request header
                },
            });
            const data = response.data;
            return data;
        } catch (error) {
            throw Error(error.message);
        }
    }
);

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {},
        list:[],
        status: "init",
        error: null,
    },
    reducers: {
        setUser(state, action) {
            state.user = action.payload
        },
        removeUser(state) {
            state.user = {}
        },
        setUsers(state, action) {
            state.list = action.payload
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadUsersThunk.pending, (state) => {
                state.status = "loading";
            })
            .addCase(loadUsersThunk.fulfilled, (state, action) => {
                state.status = "success";
                state.list = action.payload;
            })
            .addCase(loadUsersThunk.rejected, (state, action) => {
                state.status = "error";
                state.error = action.error.message;
            });
    },

},)

export const {setUser, removeUser, setUsers} = userSlice.actions
export default userSlice.reducer
