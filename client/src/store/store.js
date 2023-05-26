import {configureStore} from "@reduxjs/toolkit";
import tokenSlice from "./slices/tokenSlice";
import roleSlice from "./slices/roleSlice";
import teacherSlice from "./slices/teacherSlice";
import disciplineSlice from "./slices/disciplineSlice";
import groupSlice from "./slices/groupSlice";

export const store = configureStore({
    reducer: {
        group: groupSlice,
        discipline: disciplineSlice,
        teacher: teacherSlice,
        token : tokenSlice,
        role: roleSlice
    },
    devTools: true
})
export default store;
