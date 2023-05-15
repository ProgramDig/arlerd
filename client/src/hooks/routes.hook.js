import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import AdminPage from "../pages/adminModule/adminPage/AdminPage";
import DepartHeadPage from "../pages/departHeadPage/DepartHeadPage";
import ScientificEmployerPage from "../pages/scientificEmployerPage/ScientificEmployerPage";
import TeacherPage from "../pages/teacherPage/TeacherPage";
import MainPage from "../pages/mainPage/MainPage";
import ActivatePage from "../pages/activatePage/ActivatePage";
import UserAccountPage from "../pages/userAccountPage/UserAccountPage";
import LoginPage from "../pages/authModule/loginPage/LoginPage";
import RegistrationPage from "../pages/authModule/registrationPage/RegistrationPage";


const RoutesHook = ({role}) => {
    switch (role) {
        case '1':
            return (
                <Routes>
                    <Route path={'/admin'} element={<AdminPage/>} exact/>
                    <Route path={'/department-head'} element={<DepartHeadPage/>} exact/>
                    <Route path={'/scientific-employer'} element={<ScientificEmployerPage/>} exact/>
                    <Route path={'/teacher'} element={<TeacherPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'/account'} element={<UserAccountPage/>}/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        case '3':
            return (
                <Routes>
                    <Route path={'/department-head'} element={<DepartHeadPage/>} exact/>
                    <Route path={'/teacher'} element={<TeacherPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'/account'} element={<UserAccountPage/>}/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        case '2':
            return (
                <Routes>
                    <Route path={'/scientific-employer'} element={<ScientificEmployerPage/>} exact/>
                    <Route path={'/teacher'} element={<TeacherPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'/account'} element={<UserAccountPage/>}/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        case '4':
            return (
                <Routes>
                    <Route path={'/teacher'} element={<TeacherPage/>} exact/>
                    <Route path={'/main'} element={<MainPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'/account'} element={<UserAccountPage/>}/>
                    <Route path={'*'} element={<Navigate to='/main' replace/>}/>
                </Routes>
            )
        default:
            return (
                <Routes>
                    <Route path={'/reg'} element={<RegistrationPage/>} exact/>
                    <Route path={'/log'} element={<LoginPage/>} exact/>
                    <Route path={'/activate/:link'} element={<ActivatePage/>}/>
                    <Route path={'*'} element={<Navigate to='/log' replace/>}/>
                </Routes>
            )
    }
}

export default RoutesHook;