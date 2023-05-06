import React from 'react';
import './FormLogin.module.scss'
import {useNavigate} from "react-router-dom";
import userLoginPicture from '../../../../assets/images/userLoginPicture.png'
import SpinnerPreLoader from "../../../ui/loaders/spinnerPreLoader/SpinnerPreLoader";
import LinearPreLoader from "../../../ui/loaders/linearPreLoader/LinearPreLoader";


const FormLogin = ({setForm, loginHandler, loading , form }) => {
    const navigate = useNavigate();

    const onChangeInput = (event) => {
        setForm(prevState => {
            return {...form , [event.target.name]: event.target.value}
        })
    }

    const onSumbit = async (e) => {
        e.preventDefault();
         loginHandler()
        navigate('/main')
    }

    return (
        <form className={'form no-select'} onSubmit={onSumbit} method={'POST'}>
            <div className="card-panel z-depth-5">
                <div className="rowmargin">
                    <div className="col s12 m12 l12 center no-select">
                        <img src={userLoginPicture}
                             alt="userLoginPic" className="responsive-img circle disabled"
                             style={{width: "150px"}}/>
                    </div>
                </div>
                <div className="col s12 m12 l12">
                    <div className="input-field">
                        <input type="text" name="nickname" id="Idlogib"
                               value={form.nickname}
                               onChange={onChangeInput}/>
                        <label htmlFor="Idlogib">Логін</label>
                    </div>
                </div>
                <div className="col m12 l12">
                    <div className="input-field">
                        <input type="password" name="password" id="Idpassword"
                               onChange={onChangeInput}
                               value={form.password}/>
                        <label htmlFor="Idpassword">Пароль</label>
                    </div>
                </div>

                <div className="center">
                    <input type="submit" value="Вхід" name="login"

                           className="btn waves-effect waves-light "
                           style={{width: "100%", backgroundColor: "darkgreen"}}/>
                </div>
                <LinearPreLoader loading={loading} style={{width : '100%'}}/>


                <div className="" style={{fontSize: "14px", cursor: 'pointer'}}><br/>
                    <a className="left"
                       onClick={() => {
                           navigate('/reg')
                       }}
                    >Зареєструватись зараз!</a>
                    <a className="right ">Забули пароль?</a>
                </div>
                <br/>
            </div>
        </form>
    );
};

export default FormLogin;