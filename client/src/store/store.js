import {configureStore} from "@reduxjs/toolkit";
import tokenSlice from "./slices/tokenSlice";
import roleSlice from "./slices/roleSlice";
import teacherSlice from "./slices/teacherSlice";
import disciplineSlice from "./slices/disciplineSlice";
import groupSlice from "./slices/groupSlice";
import yearAndDepartmentIdSlice from './slices/yeardAndDepartmentSlice'
import userSlice from "./slices/userSlice";

export const store = configureStore({
    reducer: {
        user:userSlice,
        yearAndDepartmentId: yearAndDepartmentIdSlice,
        group: groupSlice,
        discipline: disciplineSlice,
        teacher: teacherSlice,
        token : tokenSlice,
        role: roleSlice
    },
    devTools: true
})
export default store;
