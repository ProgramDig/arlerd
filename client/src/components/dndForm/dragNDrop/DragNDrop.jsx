import React, {useEffect, useState} from 'react';
import Card from "../card/Card";
import Board from "../board/Board";
import M from "materialize-css";
import {useDispatch, useSelector} from "react-redux";
import {loadDisciplineThunk, setDisciplines} from "../../../store/slices/disciplineSlice";
import {loadGroupThunk, setGroups} from "../../../store/slices/groupSlice";
import {useMessage} from "../../../hooks/message.hook";
import {loadTeachersThunk} from "../../../store/slices/teacherSlice";

function DragNDrop() {
    const [isFirstResponse, setIsFirstResponse] = useState(true);
    const groups = useSelector(state => state.group.list);
    const teachers = useSelector(state => state.teacher.list)
    const disciplines = useSelector(state => state.discipline.list);
    const message = useMessage()
    const dispatch = useDispatch();

    useEffect(() => {
        const loadGroups = async () => {
            try {
                const response = await dispatch(loadGroupThunk());
                if (response && response.data) {
                    const groups = response.data;
                    dispatch(setGroups(...groups));
                } else {
                    if (!isFirstResponse) {
                        message('Завантаження груп - успішне!');
                    }
                }
            } catch (error) {
                message(error.message);
            }
        };
        loadGroups();

        const loadDisciplines = async () => {
            try {
                const response= await dispatch(loadDisciplineThunk());
                if (response && response.data) {
                    const disciplines = response.data;
                    dispatch(setDisciplines(...disciplines));
                } else {
                    if (!isFirstResponse) {
                        message('Завантаження дисциплін - успішне!');
                    }
                }
            } catch (error) {
                message(error.message);
            }
        };
        loadDisciplines();

        const loadTeachers = async () => {
            try {
                const response = await dispatch(loadTeachersThunk());
                if (response && response.data) {
                    const teachers = response.data;
                    dispatch(setGroups(...teachers));
                } else {
                    if (!isFirstResponse) {
                        message('Завантаження викладачів - успішне!');
                    }
                }
            } catch (error) {
                message(error.message);
            }
        };
        loadTeachers();
        setIsFirstResponse(false);
    }, [dispatch, message, isFirstResponse]);

    return (
        <>
            <div className={` center groupCol`} >{groups.map((item) => {
                return <Card key={item.id} id={item.id} name={item.name.slice(0,3)}   types={'groupCard'}/>
            })}

            </div>
            <div className={` center disciplineCol`}>{disciplines.map((item) => {
                return <Card key={item.id} id={item.id} name={item.nameEducationalComponent}
                             types={'disciplineCard'}/>
            })}

            </div>
            <div className={`center teacherCol`}>{teachers.map((item) => {
                return <Card key={item.id} id={item.id} name={item.secondName + " " + item.firstName.charAt(0).toUpperCase() + "." +
                item.thirdName.charAt(0).toUpperCase()} types={'teacherCard'}/>
            })}
            </div>

            <Board listGroup={groups}
                   disciplineList={disciplines}
                   teacherList={teachers}/>
        </>
    );
};

export default DragNDrop;