import React, {useContext, useEffect, useState} from 'react';
import useAxiosFunction from "../../../hooks/axiosFunction.hook"
import classes from './LoginPage.module.scss';
import axiosInstance from '../../../utils/axios/index'
import transformLoginData_ from "../../../utils/auth/transformLoginData";
import {useMessage} from "../../../hooks/message.hook";
import FormLogin from "../../../components/form/formLogin/FormLogin";
import {useAuth} from "../../../hooks/auth.hook";
import {useDispatch} from "react-redux";


const LoginPage = () => {
    const auth = useAuth()
    const axiosResponse = useAxiosFunction(axiosInstance);
    const [response, error, loading, axiosFetch, clearError] = axiosResponse;
    const message = useMessage()


    const [userLoginDto, setUserLoginDto] = useState({
        nickname: '',
        password: ''
    })
    // function postData
    const loginHandler = async () => {
        if (!userLoginDto.nickname || !userLoginDto.password) {
            return alert("Ведіть дані у форму");
        }
        const postData = transformLoginData_(userLoginDto);
        const res = await axiosFetch({
            axiosInstance: axiosInstance,
            method: 'POST',
            url: '/auth/login',
            requestConfig: {
                ...postData
            }
        })
        if (res.status >= 200 && res.status <= 300) {
            if (auth.login) {
                await auth.login(res.data.accessToken, res.data.role);
                message(res.statusText)
            }
        }

    }

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])


    return (
        <div className={classes.loginPage + ' container'}>
            <FormLogin loading={loading} loginHandler={loginHandler}
                       setForm={setUserLoginDto} form={userLoginDto}/>
        </div>
    )
}

export default LoginPage;