import React from 'react';
import classes from "./ScientificTeacherForm.scss";
import {useNavigate} from "react-router-dom";
import M from 'materialize-css'
import Select from "../../select/Select";
import LinearPreLoader from "../../../../components/ui/loaders/linearPreLoader/LinearPreLoader";


const ScientificTeacherForm =
    ({
         scientificTeacher,
         setScientificTeacher,
         registrationHandlerScientific,
         loading,
         setDatePickerValHandler,
         setPhoneNumberValHandler,
     }) => {
        const options = {
            format: 'yyyy-mm-dd',
            autoClose: true,
            showClearBtn: true,
            setDefaultDate: true,
            minYear: new Date(1920),
            maxYear: new Date(2020),
            selectYears: 24,
            yearRange: 80,
            onSelect: ((date) => {
                setDatePickerValHandler(date)
            }),
        }

        const datePicker = document.querySelector('.datepicker');
        M.Datepicker.init(datePicker, options);

        const navigate = useNavigate();

        const onChangeInput = (e) => {
            setScientificTeacher({...scientificTeacher, [e.target.name]: e.target.value})
        }

        const onChangeDateOfBirth = (e) => {
            setDatePickerValHandler(e.target.value)
        }


        const onSubmit = async (e) => {
            e.preventDefault();
            await registrationHandlerScientific();

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
                            <label htmlFor="firstName"><b>І'мя </b><span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>
                    <div className="col m12 l12">
                        <div className="input-field">
                            <input id="secondName"
                                   type="text"
                                   required={true}
                                   name="secondName"
                                   value={scientificTeacher.secondName}
                                   onChange={onChangeInput}
                            />
                            <label htmlFor="secondName"><b>Прізвище </b><span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>

                    <div className="col m12 l12">
                        <div className="input-field">
                            <input type="text"
                                   required={true}
                                   name="thirdName"
                                   value={scientificTeacher.thirdName}
                                   id="thirdName"
                                   onChange={onChangeInput}
                            />
                            <label htmlFor="thirdName"><b>По батькові </b><span style={{color: 'red'}}>*</span></label>
                        </div>
                    </div>

                    <input type="text"
                           className="datepicker"
                           id="startdate"
                           placeholder='Виберіть дату родження'
                           name="dateOfBirth"
                           value={scientificTeacher.dateOfBirth}
                           onChange={onChangeDateOfBirth}
                    />

                    <div className="col m12 l12">
                        <div className="input-field">
                            <input type="number"
                                   maxLength={10}
                                   name="phoneNumber"
                                   id="phoneNumber"
                                   value={scientificTeacher.phoneNumber}
                                   onChange={onChangeInput}
                            />
                            <label htmlFor="phoneNumber"><b>Мобільний телефон +38(ххх)-хх-хх-ххх</b></label>
                        </div>
                    </div>
                    <Select
                        scientificTeacher={scientificTeacher}
                        onChangeInput={onChangeInput}
                        url='/ranks/all'
                        label={'Військове звання'}
                        nameOfEvent={'rank'}
                    />
                    <Select
                        scientificTeacher={scientificTeacher}
                        onChangeInput={onChangeInput}
                        url={'/degrees/all'}
                        label={'Науковий ступінь'}
                        nameOfEvent={'degree'}
                    />

                    <div className={"center"}>
                        <input name="login" type={'submit'}
                               disabled={loading}
                               className={"waves-effect waves-light waves-effect waves-light btn"}
                               style={{width: "100%", backgroundColor: "darkgreen"}}
                               onClick={() => {
                                   navigate('/log')
                               }}>
                        </input>
                    </div>

                    <div className="" style={{fontSize: "14px", cursor: 'pointer'}}><br/>
                        <a className="left"
                           onClick={() => {
                               navigate('/log')
                           }}
                        >Здійснити вхід</a>
                    </div>
                    <LinearPreLoader loading={loading} style={{width: '100%'}}/>
                    <br/>
                </div>
            </form>
        )
    }

export default ScientificTeacherForm;
