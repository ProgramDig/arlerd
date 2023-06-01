import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import classes from "./UserAccountPage.module.scss";
import Modal from "../../components/form/modal/Modal";
import useAxiosFunction from "../../hooks/axiosFunction.hook";
import {useMessage} from "../../hooks/message.hook";
import {setUser} from "../../store/slices/userSlice";
import InfoModal from "../../components/form/modal/infoModal/InfoModal";
import axiosInstance from "../../utils/axios";
const UserAccountPage = () => {
    const [response, error, loading, axiosFetch, clearError] = useAxiosFunction(axiosInstance);

    const dispatch = useDispatch()
    const {request} = useAxiosFunction()
    const message = useMessage()

    const user = useSelector(state => state.user.user)

    console.log(user)
    // const {id, email, login, password, role, isActivated, link} = user

    useEffect(() => {
        window.M.AutoInit()
    }, [])

    const updateHandler = async (user) => {
    //     const res = await axiosFetch({
    //         axiosInstance: axiosInstance,
    //         method: 'POST',
    //         url: REGISTRATION_SCIENTIFIC_URL_POST,
    //         requestConfig: {
    //             {...user, id: user.id},
        //         {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token.accessToken}`}
    //         }
    //     })
    //     message(res.statusText)
    //     dispatch(setTeacher(res.data))
    //     navigate('/log')
    // }

        // const response = await request(
        //     '/api/admin/users',
        //     'PUT',
        //     {...user, id: user.id},
        //     {"Authorization": `Bearer ${JSON.parse(localStorage.getItem("user")).token.accessToken}`}
        // )
        // if (response.isUpdate) {
        //     message(response.message)
            dispatch(setUser(user))
        // } else {
        //     message(response.message)
        // }
    }


    return (
            <div className={classes.flexContainer}>
                <div className="row center-align">
                    <h4 className="title">Особистий кабінет</h4>
                </div>
                <div className={classes.flexCol}>
                    <div className={classes.flexRow}>
                        <img
                            style={{borderRadius: '50%'}}
                             src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80"
                             width={'250'} alt="userImage"
                        />
                    </div>
                    <div>
                        <InfoModal/>
                        <div className={classes.infoItem}><strong>Логін:</strong> {user.login}</div>
                        <div className={classes.infoItem}><strong>Пошта:</strong> {user.email}</div>
                        <div className={classes.infoItem}><strong>Роль:</strong> {user.role}</div>
                        <div className={classes.btnBlock}>
                            <button
                                data-target="modal2"
                                className={'btn modal-trigger blue darken-1 us-btn'}
                                style={{marginBottom: 10}}
                            >
                                Інформація користувача
                            </button>
                            <button
                                data-target="modal1"
                                className={'btn modal-trigger blue darken-1 us-btn'}
                            >
                                Змінити особисті дані
                            </button>
                        </div>
                        <Modal thisUser={user} updateUserHandler={updateHandler} />
                    </div>
                    <div className={''}>
                        <h6>Змінити пароль</h6>
                        <div className="input-field col s12">
                            <input id="old-password" type="password" className="validate"/>
                            <label htmlFor="old-password">Старий пароль</label>
                        </div>

                        <div className="input-field col s12">
                            <input id="new-password" type="password" className="validate"/>
                            <label htmlFor="new-password">Новий пароль</label>
                        </div>
                        <div className="input-field col s12">
                            <input id="re-new-password" type="password" className="validate"/>
                            <label htmlFor="re-new-password">Повтор нового паролю</label>
                        </div>
                        <button
                            className={'btn blue darken-1'}
                        >
                            Змінити пароль
                        </button>
                    </div>
                </div>
            </div>
    );
};

export default UserAccountPage;