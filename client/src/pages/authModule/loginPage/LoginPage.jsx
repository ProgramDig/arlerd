import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import useAxiosFunction from "../../../hooks/axiosFunction.hook"
import classes from './LoginPage.module.scss';
import axiosInstance from '../../../utils/axios/index'
import transformLoginData_ from "../../../utils/auth/transformLoginData";
import {AuthContext} from "../../../context/AuthContext";
import {useMessage} from "../../../hooks/message.hook";
import FormLogin from "../../../components/form/formSelect/formLogin/FormLogin";;


const LoginPage = () => {
    const auth = useContext(AuthContext)
    const [response, error, loading, axiosFetch] = useAxiosFunction(axiosInstance);
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
        console.log(transformLoginData_(userLoginDto))
        const postData = transformLoginData_(userLoginDto);
        try {
            await axiosFetch({
                axiosInstance: axiosInstance,
                method: 'POST',
                url: '/auth/login',
                requestConfig: {
                    ...postData
                }
            }).then(response => console.log(response.data.token.accessToken))
                .catch(e => message(error))

            if (auth.login) {
                console.log(response.data.token.accessToken , response.data.role)
                await auth.login(response.data.token.accessToken, response.data.role);
            }
        } catch (e) {
            message(e);
        }


    }
    return (
        <div className={classes.loginPage}>
            <FormLogin loading={loading} loginHandler={loginHandler}
                       setForm={setUserLoginDto} form={userLoginDto}/>
        </div>
    )
}

export default LoginPage;