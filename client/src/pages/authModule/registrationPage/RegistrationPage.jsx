import React, {useContext, useState} from 'react';

import classes from './RegistrationPage.module.scss';
import {useMessage} from "../../../hooks/message.hook";
import axios from 'axios';
import {ROOT_ROUTE} from '../../../data/constants'

import {useNavigate} from "react-router-dom";
import FormRegistration from "../../../components/form/formSelect/formRegistration/FormRegistration";
import preLoader from "../../../components/ui/loaders/spinnerPreLoader/SpinnerPreLoader";
import ScientificTeacherForm
    from "../../../components/form/formSelect/formRegistration/formScientificTeacher/ScientificTeacherForm";
import {AuthContext} from "../../../context/AuthContext";
import checkbox from "../../../components/form/checkBox/Checkbox";


const RegistrationPage = () => {
    const message = useMessage()
    const url = ROOT_ROUTE;
    const [loading , setLoading] = useState(false)
    const navigate = useNavigate()
    const auth = useContext(AuthContext);

    const [checkBoxVal, setCheckBoxVal] = useState('TEACHER')

    const [rank, setRank] = useState('')
    const [degree, setDegree] = useState('')

    const [regPageToggle, setRegPageToggle] = useState(false);

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
        rank: rank,
        degree: degree
    })

    const setFormRoleHandler = (value) => {
        setUserDTOForm({...userDTOForm, role: value})
    }

    const setCheckBoxValHandler = (value) => {
        setCheckBoxVal(value)
    }


    const registrationHandler = async (url,formData) => {
            if (userDTOForm.role === null || userDTOForm.email === '' ||
                userDTOForm.password === '' || userDTOForm.rePassword === ''){
                return message("Ведіть дані у форму");
            }
            if (userDTOForm.password !== userDTOForm.rePassword){
                return message("Старий та новий паролі не збігаються");
            }
        try {
            const response = await axios.post(url , userDTOForm)
            if (auth.login) {
                auth.login(response.data.token, response.data.role);
            }
            if (!response.data.error){
                setRegPageToggle(prevState => !prevState)
            }
        } catch (e) {
            const { data } = e.response;
            console.log(data);
            message(data.message);
        }
    }

    const renderFlag = !regPageToggle
        ?
        <FormRegistration userDTOForm={userDTOForm}
                          setUserDTOForm={setUserDTOForm}
                          setFormRoleHandler={setFormRoleHandler}
                          setCheckBoxValHandler={setCheckBoxValHandler}
                          registrationHandler={registrationHandler}
                          checkBoxVal={checkBoxVal}
                          loading={loading}
                          setRegPageToggle={setRegPageToggle}/>
        :
        <ScientificTeacherForm scientificTeacher={scientificTeacher}
                               setScientificTeacher={setScientificTeacher}
                               registrationHandler={registrationHandler}
                               loading={loading}
                               checkBoxVal={checkBoxVal}
                               setRegPageToggle={setRegPageToggle}/>

    return (
        <div className={classes.registrationPage}>
            {renderFlag}
        </div>
    )
};


export default RegistrationPage;