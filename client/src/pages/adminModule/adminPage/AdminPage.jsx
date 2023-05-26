import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {loadUsersThunk, setTeachers} from '../../../store/slices/teacherSlice';
import {useMessage} from '../../../hooks/message.hook';
import {loadGroupThunk, setGroups} from "../../../store/slices/groupSlice";

const AdminPage = () => {
    const [isFirstResponse, setIsFirstResponse] = useState(true);

    const teachers = useSelector(state => state.teacher.list);
    const status = useSelector(state => state.teacher.status);


    const dispatch = useDispatch();
    const message = useMessage();


    useEffect(() => {
        const loadData = async () => {
            try {
                const response = await dispatch(loadGroupThunk());
                if (response && response.data) {
                    const teachers = response.data;
                    dispatch(setGroups(...teachers));
                } else {
                    if (!isFirstResponse) {
                        message('Завантаження пройшло успішно');
                    }
                }
            } catch (error) {
                message(error.message);
            }
        };

        loadData();
        setIsFirstResponse(false);
    }, [dispatch, message, isFirstResponse]);


    return (
        <div>
            <h1>AdminPage</h1>
            {(status === 'loading') ?
                <div>Loading...</div> : null
            }
            {teachers.map((item) => {
                return(
                    <div>{item.firstName}</div>
                )
            })
            }
            {status}
        </div>
    );
};

export default AdminPage;