import React from 'react';
import classes from "./ScientificTeacherForm.scss";
import {useNavigate} from "react-router-dom";
import Checkbox from "../../../checkBox/Checkbox";


const ScientificTeacherForm =
                            ({
                                   scientificTeacher,
                                   setScientificTeacher,
                                   registrationHandler,
                                    loading,
                               }) => {
    const navigate = useNavigate();

    const onChangeInput = (event) => {
        setScientificTeacher({...scientificTeacher, [event.target.name]: event.target.value})
    }

    const onSubmit = (e) => {
        e.preventDefault();
        registrationHandler('http://localhost:5000/api/auth/registrationTwo',scientificTeacher);
    }

    return (
        <form className={`${classes.scientificTeacher} form no-select`} method={'POST'}
              onSubmit={onSubmit}>
            <div className="card-panel z-depth-5">
                <div className="rowmargin">
                    <div className="col s12 m12 l12 center no-select registartion-label ">
                        <h4>Інформація про наукового працівника</h4>
                    </div>
                </div>
                <div className="col m12 l12">
                    <div className="input-field">
                        <input
                            id="firstName"
                            type="text"
                            required={true}
                            name="firstName"
                            value={scientificTeacher.firstName}
                            onChange={onChangeInput}
                        />
                        <label htmlFor="email"><b>І'мя </b><span style={{color : 'red'}}>*</span></label>
                    </div>
                </div>
                <div className="col m12 l12">
                    <div className="input-field">
                        <input id="secondName"
                               type="text"
                               name="secondName"
                               value={scientificTeacher.secondName}
                               onChange={onChangeInput}
                        />
                        <label htmlFor="login"><b>Прізвище </b><span style={{color : 'red'}}>*</span></label>
                    </div>
                </div>

                <div className="col m12 l12">
                    <div className="input-field">
                        <input type="password"
                               name="thirdName"
                               value={scientificTeacher.thirdName}
                               id="thirdName"
                               onChange={onChangeInput}
                        />
                        <label htmlFor="password"><b>По батькові </b><span style={{color : 'red'}}>*</span></label>
                    </div>
                </div>
                <div className="col m12 l12">
                    <div className="input-field">
                        <input type="text"
                               name="thirdName"
                               value={scientificTeacher.dateBird}
                               id="thirdName"
                               onChange={onChangeInput}
                        />
                        <label htmlFor="password"><b>Дата народження</b></label>
                    </div>
                </div>
                <div className="col m12 l12">
                    <div className="input-field">
                        <input type={'text'}
                               name="thirdName"
                               value={scientificTeacher.contacts}
                               id="thirdName"
                               onChange={onChangeInput}
                        />
                        <label htmlFor="password"><b>Контактні дані</b></label>
                    </div>
                </div>

                <Checkbox

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
                       onClick={() => {
                           navigate('/log')
                       }}
                    >Здійснити вхід</a>
                </div>
                <br/>
            </div>
        </form>
    )
}

export default ScientificTeacherForm;
