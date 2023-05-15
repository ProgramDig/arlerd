import React, {useCallback} from 'react';
import classes from "./FormRegistration.module.scss";
import {useNavigate} from "react-router-dom";
import Checkbox from "../checkBox/Checkbox";
import {REGISTRATION_URL_POST} from "../../../data/constants";


const FormRegistration = ({
                              setUserDTOForm,
                              userDTOForm,
                              checkBoxVal,
                              setFormRoleHandler,
                              setCheckBoxValHandler,
                              registrationHandler,
                              loading,
                          }) => {
    const navigate = useNavigate();

    const onSubmit = async (e) => {
        e.preventDefault()
        await registrationHandler();
    }

    const onChangeInput = (event) => {
        setUserDTOForm({...userDTOForm, [event.target.name]: event.target.value})
    }

    return (
        <form className={`${classes.colorLogBtn} form no-select`} method={'POST'}
              onSubmit={onSubmit}>
            <div className="card-panel z-depth-5">
                <div className="rowmargin">
                    <div className="col s12 m12 l12 center no-select registartion-label ">
                        <h3>Реєстрація</h3>
                    </div>
                </div>
                <div className="col m12 l12">
                    <div className="input-field">
                        <input
                            id="email"
                            required={true}
                            type="text"
                            name="email"
                            value={userDTOForm.email}
                            onChange={onChangeInput}
                        />
                        <label htmlFor="email"><b>Пошта </b><span style={{color: 'red'}}>*</span></label>
                    </div>
                </div>
                <div className="col m12 l12">
                    <div className="input-field">
                        <input id="login"
                               required={true}
                               type="text"
                               name="login"
                               value={userDTOForm.login}
                               onChange={onChangeInput}
                        />
                        <label htmlFor="login"><b>Логін </b><span style={{color: 'red'}}>*</span></label>
                    </div>
                </div>

                <div className="col m12 l12">
                    <div className="input-field">
                        <input type="password"
                               required={true}
                               name="password"
                               value={userDTOForm.password}
                               autoComplete={'on'}
                               id="password" onChange={onChangeInput}
                        />
                        <label htmlFor="password"><b>Пароль </b><span style={{color: 'red'}}>*</span></label>
                    </div>
                </div>
                <div className="col m12 l12">
                    <div className="input-field">
                        <input id="rePassword"
                               required={true}
                               autoComplete={'on'}
                               type="password"
                               value={userDTOForm.rePassword}
                               name="rePassword"
                               onChange={onChangeInput}
                        />
                        <label htmlFor="rePassword"><b>Підтвердження паролю </b><span
                            style={{color: 'red'}}>*</span></label>
                    </div>
                </div>

                <Checkbox
                    setFormRoleHandler={setFormRoleHandler}
                    setCheckBoxValHandler={setCheckBoxValHandler}
                    checkBoxVal={checkBoxVal}
                />

                <div className={"center"}>
                    <input value="next form" name="login" type={'submit'}
                           disabled={loading}
                           className={"waves-effect waves-light waves-effect waves-light btn"}
                           style={{width: "100%", backgroundColor: "darkgreen"}}>
                    </input>
                </div>

                <div className="" style={{fontSize: "14px", cursor: 'pointer'}}><br/>
                    <a className="left"
                    >Здійснити вхід</a>
                </div>
                <br/>
            </div>
        </form>
    )
}
export default FormRegistration;