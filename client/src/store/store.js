import {configureStore} from "@reduxjs/toolkit";
import tokenSlice from "./slices/tokenSlice";
import roleSlice from "./slices/roleSlice";
import scientificTeacherSlice from "./slices/scientificTeacherSlice";

export const store = configureStore({
    reducer: {
        scientificTeacher: scientificTeacherSlice,
        token : tokenSlice,
        role: roleSlice
    },
})
export default store;