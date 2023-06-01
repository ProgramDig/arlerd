import React, {useEffect, useState} from 'react';
import {BsFillTrashFill} from "react-icons/bs";
import {BiPencil} from "react-icons/bi";
import {MdOutgoingMail} from "react-icons/md";
import axios from '../../utils/axios/index'
import {useMessage} from "../../hooks/message.hook";
import LinearPreLoader from "../ui/loaders/linearPreLoader/LinearPreLoader";
import SearchPanel from '../ui/searchPanel/SearchPanel'
import Modal from "../form/modal/Modal";
import useAxiosFunction from "../../hooks/axiosFunction.hook";
import {loadUsersThunk} from "../../store/slices/userSlice";
import {useDispatch, useSelector} from "react-redux";

const Table = () => {
    const users = useSelector(state => state.user.list);
    const teachers = useSelector(state => state.teacher.list);
    const token = useSelector(state => state.token)
    const dispatch = useDispatch();

    const message = useMessage()

    const [response, error, loading, axiosFetch,clearError] = useAxiosFunction();

    const [form, setForm] = useState(null)

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    useEffect(() => {
        refreshHandler()
        window.M.AutoInit()
    }, [])

    const refreshHandler = async () => {
        const data = await loadUsersThunk(token)
        setForm(data)
        setFilterFrom(data)
    }


    const deleteHandler = async (id) => {
        // const data = await request(
        //     '/api/admin/users',
        //     'DELETE',
        //     {id},
        //     {"Authorization": `Bearer ${token}`}
        // )
        // if (data.isDelete) {
        //     message(data.message)
        //     const newForm = [...form.filter(user => user._id !== id)]
        //     console.log('form -', newForm)
        //     setForm(newForm)
        //     setFilterFrom(newForm)
        // }
        console.log('deleteHandlerWork')
    }


    const [select, setSelect] = useState('')
    const selectOnChangeHandle = (event) => {
        setSelect(event.target.value)
    }

    const [search, setSearch] = useState('')
    const [filteredForm, setFilterFrom] = useState(form)
    const searchOnChangeHandler = (event) => {
        const query = event.target.value;
        setSearch(query)
        let updateForm = [...form]
        updateForm = updateForm.filter((user) => {
            switch (select) {
                case 'id':
                    return user.id.toLowerCase().indexOf(query.toLowerCase()) !== -1
                case 'login':
                    return user.login.toLowerCase().indexOf(query.toLowerCase()) !== -1
                case 'role':
                    return user.role.toLowerCase().indexOf(query.toLowerCase()) !== -1
                case 'email':
                    return user.email.toLowerCase().indexOf(query.toLowerCase()) !== -1
                default:
                    return user.login.toLowerCase().indexOf(query.toLowerCase()) !== -1
            }
        })
        setFilterFrom(updateForm)
    }

    const [thisUser, setThisUser] = useState(null)

    const thisUserHandler = (event) => {
        const id = event.currentTarget.value
        const user = form.filter((user) => {
            if(user._id === id){
                return user
            }
        })[0]
        setThisUser(user)
    }

    const [updateUser, setUpdateUser] = useState(null)
    const updateHandler = async (user) => {
        setUpdateUser(user)

        const data = await axiosFetch(
            '/api/admin/users',
            'PUT',
            {...user, _id: user._id },
            {"Authorization": `Bearer ${token}`}
        )
        if(data.isUpdate) {
            message(data.message)
            refreshHandler()
        }
    }

    const sendMessage = async (event) => {
        // const email = event.currentTarget.value
        // const data = await request(
        //     '/api/activate',
        //     'POST',
        //     {email: email},
        //     {"Authorization": `Bearer ${token}`}
        // )
        // message(data.message)
        console.log('sendMessage')
    }

    return (
        <>
            <button
                className={'btn'}
                style={{backgroundColor: "#F2546D"}}
                onClick={refreshHandler}
                disabled={loading}
            >
                Оновити
            </button>
            <LinearPreLoader loading={loading}/>
            <SearchPanel
                select={select}
                search={search}
                searchOnChangeHandler={searchOnChangeHandler}
                selectOnChangeHandle={selectOnChangeHandle}
            />

            <Modal thisUser={thisUser} updateUserHandler={updateHandler}/>

            <div className={'Table'}>
                <table>
                    <thead>
                    <tr>
                        {/*<th>Ідентифікатор</th>*/}
                        <th>ПІБ</th>
                        <th>Роль</th>
                        <th>Пошта</th>
                        <th>Логін</th>
                        <th>Активація</th>
                        <th>Функції</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        !filteredForm &&
                        <div>
                            <h2 className="center-align">
                                Користувачів немає
                            </h2>
                        </div>
                    }
                    {filteredForm?.map((user) => {
                        return (
                            <tr key={user._id} className={user._id}>
                                {/*<td>{user._id}</td>*/}
                                <td>{user.fullName}</td>
                                <td>{user.role}</td>
                                <td>{user.email}</td>
                                <td>{user.login}</td>
                                <td>{user.isActivated ? 'Активовано' : 'Не активовано'}</td>
                                <td style={{display: 'flex'}}>
                                    <button
                                        disabled={user.role === 'ADMIN'}
                                        className={'btn red darken-1'}
                                        style={{marginRight: 5}}
                                        onClick={() => deleteHandler(user._id)}
                                    >
                                        <BsFillTrashFill/>
                                    </button>
                                    <button
                                        disabled={user.role === 'ADMIN'}
                                        data-target="modal1"
                                        value={user._id}
                                        onClick={thisUserHandler}
                                        className={'btn modal-trigger blue darken-1'}
                                        style={{marginRight: 5}}
                                    >
                                        <BiPencil/>
                                    </button>
                                    <button
                                        disabled={user.role === 'ADMIN' || user.isActivated === true}
                                        value={user.email}
                                        onClick={sendMessage}
                                        className={'btn green darken-2'}
                                    >
                                        <MdOutgoingMail/>
                                    </button>
                                </td>
                            </tr>
                        )
                    })
                    }
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Table;