// import {createSlice} from "@reduxjs/toolkit";
//
// const initialState =
//     {
//         id: '',
//         firstName: '',
//         secondName: '',
//         thirdName: '',
//         rank: '',
//         degree: '',
//     }
//
// const scientificTeacherSlice = createSlice({
//     name: 'scientificTeacher',
//     initialState: {
//         scientificTeacher: initialState,
//         scientificTeachers: []
//     },
//     reducers: {
//         setScientificTeacher(state, action) {
//             state.scientificTeacher = {
//                 id: action.payload.id,
//                 firstName: action.payload.firstName,
//                 secondName: action.payload.secondName,
//                 thirdName: action.payload.thirdName,
//                 rank: action.payload.rank,
//                 degree: action.payload.degree,
//             }
//         },
//         removeScientificTeacher(state) {
//             state.scientificTeacher = initialState
//         },
//         setScientificTeachers(state, action) {
//             state.scientificTeachers = [...action.payload]
//         }
//     }
// })
//
// export const {setScientificTeacher, removeScientificTeacher, setScientificTeachers} = scientificTeacherSlice.actions
// export default scientificTeacherSlice.reducer
