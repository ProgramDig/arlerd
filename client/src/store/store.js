import {configureStore} from "@reduxjs/toolkit";
import tokenSlice from "./slices/tokenSlice";
import roleSlice from "./slices/roleSlice";
import scientificTeacherSlice from "./slices/scientificTeacherSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user: userSlice,
        scientificTeacher: scientificTeacherSlice,
        token : tokenSlice,
        role: roleSlice
    },
})
export default store;
