import {createSlice} from "@reduxjs/toolkit";

const initialState =
    {
        id: '',
        email: '',
        isActivated: '',
        login: '',
        role: '',
    }

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: initialState,
        users: []
    },
    reducers: {
        setUser(state, action) {
            state.user = {
                id: action.payload.id,
                email: action.payload.email,
                isActivated: action.payload.isActivated,
                role: action.payload.role
            }
        },
        removeUser(state) {
            state.user = initialState
        },
        setUsers(state, action) {
            state.users = [...action.payload]
        }
    }
})

export const {setUser, removeUser, setUsers} = userSlice.actions
export default userSlice.reducer
