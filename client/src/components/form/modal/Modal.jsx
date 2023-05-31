import React, {useEffect, useState} from 'react';
import Checkbox from "../checkBox/Checkbox";

const Modal = ({thisUser, updateUserHandler}) => {
    const [checkBoxVal, setCheckBoxVal] = useState('TEACHER')
    const [email, setEmail] = useState('')
    const [login, setLogin] = useState('')

    const [updateUser, setUpdateUser] = useState({
        id: 0,  email: '', login: '', role: checkBoxVal
    })

    useEffect(() => {
        if(thisUser){
            setUpdateUser({
                id: thisUser.id,
                email: thisUser.email,
                login: thisUser.login,
                role: thisUser.role
            })
            setEmail(thisUser.email)
            setLogin(thisUser.login)
            setCheckBoxVal(thisUser.role)
        }
    }, [thisUser])

    const setFormRoleHandler = (value) => {
        setUpdateUser({...updateUser, role: value})
    }

    const setCheckBoxValHandler = (value) => {
        setCheckBoxVal(value)
    }

    const changeEmailNameHandler = event => {
        setEmail(event.target.value)
    }
    const changeLoginNameHandler = event => {
        setLogin(event.target.value)
    }

    const updateHandler = () => {
        updateUserHandler({
            id: thisUser.id,
            email: email,
            login: login,
            role: checkBoxVal
        })
    }

    return (
        <div>
            <div id="modal1" className="modal">
                <div className="modal-content">
                    <h4 className={"title center"}>Зміна особистих даних</h4>
                    <div className="row">
                        <form className="col s12">
                            <div className="row">
                                <div className="input-field col s6">
                                    <input
                                        id="login"
                                        name="login"
                                        type="text"
                                        value={login}
                                        className="validate"
                                        onChange={changeLoginNameHandler}
                                    />
                                    <label htmlFor="login" className="active">Логін</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        className="validate"
                                        onChange={changeEmailNameHandler}
                                    />
                                    <label htmlFor="email" className="active">Пошта</label>
                                </div>
                            </div>
                            <Checkbox
                                checkBoxVal={checkBoxVal}
                                setCheckBoxValHandler={setCheckBoxValHandler}
                                setFormRoleHandler={setFormRoleHandler}
                                color={'#000000'}
                            />
                        </form>
                    </div>
                </div>
                <div className="modal-footer">
                    <button
                        className="modal-close waves-effect waves-green btn-flat red darken-1"
                        style={{marginRight: 10, color: '#fff'}}
                    >
                        Відміна
                    </button>
                    <button
                        className="modal-close waves-effect waves-green btn-flat blue darken-1"
                        style={{marginRight: 10, color: '#fff'}}
                        onClick={updateHandler}
                    >
                        Оновити
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;