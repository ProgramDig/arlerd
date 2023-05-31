import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useMessage} from '../../../hooks/message.hook';
import {loadUsersThunk, setUsers} from "../../../store/slices/userSlice";
import Table from "../../../components/table/Table";
import {loadTeachersThunk, setTeachers} from "../../../store/slices/teacherSlice";

const AdminPage = () => {
    const [isFirstResponse, setIsFirstResponse] = useState(true);

    const users = useSelector(state => state.user.list);
    const userStatus = useSelector(state => state.user.status);
    const teachers = useSelector(state => state.teacher.list);
    const token = useSelector(state => state.token)



    const dispatch = useDispatch();
    const message = useMessage();


    useEffect(() => {
        const loadUsersData = async () => {
            try {
                const response = await dispatch(loadUsersThunk(token));
                if (response && response.data) {
                    const users = response.data;
                    dispatch(setUsers(...users));
                } else {
                    message(userStatus.status)
                }
            } catch (error) {
                message(error.message);
            }
        };
        loadUsersData();
        const loadTeachersData = async () => {
            try {
                const response = await dispatch(loadTeachersThunk(token));
                if (response && response.data) {
                    const teachers = response.data;
                    dispatch(setTeachers(...teachers));
                } else {
                    if (!isFirstResponse) {
                        message('Завантаження teachers успішне');
                    }
                }
            } catch (error) {
                message(error.message);
            }
        };
        loadTeachersData()
        setIsFirstResponse(false);
    }, [dispatch, message, isFirstResponse]);

    return (
        <div>
            <h1>AdminPage</h1>
                {users.map(i => {
                    return(
                        <p>{i.id}</p>
                    )
                })}
            {/*<Table/>*/}
        </div>
    );
};

export default AdminPage;