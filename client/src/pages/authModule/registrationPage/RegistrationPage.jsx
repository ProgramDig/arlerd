import React, {useCallback, useContext, useEffect, useState} from 'react';

import classes from './RegistrationPage.module.scss';
import {useMessage} from "../../../hooks/message.hook";

import {useNavigate} from "react-router-dom";
import FormRegistration from "../../../components/form/formRegistration/FormRegistration";
import ScientificTeacherForm
    from "../../../components/form/formRegistration/formScientificTeacher/ScientificTeacherForm";
import {AuthContext} from "../../../context/AuthContext";
import axiosInstance from "../../../utils/axios";
import useAxiosFunction from "../../../hooks/axiosFunction.hook";
import {createSlice} from "@reduxjs/toolkit";
import dateFormatter from "../../../utils/date/dateFormatter";
import {useToggle} from "../../../hooks/useToggle";
import {REGISTRATION_SCIENTIFIC_URL_POST, REGISTRATION_URL_POST} from "../../../data/constants";


const RegistrationPage = () => {
    const [response, error, loading, axiosFetch, clearError] = useAxiosFunction(axiosInstance);
    const message = useMessage()
    const navigate = useNavigate()
    const auth = useContext(AuthContext);

    const [checkBoxVal, setCheckBoxVal] = useState('TEACHER');

    const [regPageToggle, setRegPageToggle] = useToggle(false);

    const [userDTOForm, setUserDTOForm] = useState({
        email: '',
        login: '',
        password: '',
        rePassword: '',
        role: checkBoxVal,
    })

    const [scientificTeacher, setScientificTeacher] = useState({
        firstName: '',
        secondName: '',
        thirdName: '',
        dateOfBirth: '',
        phoneNumber: '',
        rank: '',
        degree: ''
    })


    const setFormRoleHandler = (value) => {
        setUserDTOForm({...userDTOForm, role: value})
    }

    const setCheckBoxValHandler = (value) => {
        setCheckBoxVal(value)
    }

    const setDatePickerValHandler = (value) => {
        setScientificTeacher({...scientificTeacher, dateOfBirth: value ? dateFormatter(value) : ''})
    }

    const registrationHandlerScientific = async () => {

        if (scientificTeacher.firstName === '' || scientificTeacher.secondName === '' ||
            scientificTeacher.thirdName === '' || scientificTeacher.rank === ''
            || scientificTeacher.degree === '') {
            return message("Ведіть дані у обов'язкові поля");
        }
        const res = await axiosFetch({
            axiosInstance: axiosInstance,
            method: 'POST',
            url: REGISTRATION_SCIENTIFIC_URL_POST,
            requestConfig: {
                ...scientificTeacher
            }
        })

    }


    const registrationHandler = async () => {
        if (userDTOForm.role === null || userDTOForm.email === '' ||
            userDTOForm.password === '' || userDTOForm.rePassword === '') {
            return message("Ведіть дані у форму");
        }
        if (userDTOForm.password !== userDTOForm.rePassword) {
            return message("Старий та новий паролі не збігаються");
        }

        const res = await axiosFetch({
            axiosInstance: axiosInstance,
            method: 'POST',
            url: REGISTRATION_URL_POST,
            requestConfig: {
                ...userDTOForm
            }
        })

        if (res.status >= 200 && res.status <= 300) {
            setRegPageToggle(prevState => !prevState)
        }

        // if (auth.login) {
        //     auth.login(response.data.token.accessToken, response.data.role);
        // }
    }

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const renderFlag = !regPageToggle
        ?
        <FormRegistration userDTOForm={userDTOForm}
                          setUserDTOForm={setUserDTOForm}
                          setFormRoleHandler={setFormRoleHandler}
                          setCheckBoxValHandler={setCheckBoxValHandler}
                          registrationHandler={registrationHandler}
                          checkBoxVal={checkBoxVal}
                          loading={loading}
        />
        :
        <ScientificTeacherForm scientificTeacher={scientificTeacher}
                               setScientificTeacher={setScientificTeacher}
                               registrationHandlerScientific={registrationHandlerScientific}
                               loading={loading}
                               setRegPageToggle={setRegPageToggle}
                               setDatePickerValHandler={setDatePickerValHandler}
        />

    return (
        <div className={classes.registrationPage}>
            {renderFlag}
        </div>
    )
}
export default RegistrationPage;