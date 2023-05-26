import React, {useEffect} from 'react';
import './dnd.scss'
import {useDispatch, useSelector} from "react-redux";
import {useMessage} from "../../hooks/message.hook";
import {loadDisciplineThunk, setDisciplines} from "../../store/slices/disciplineSlice";
import {loadGroupThunk, setGroups} from "../../store/slices/groupSlice";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
import DragNDrop from "../../components/dndForm/dragNDrop/DragNDrop";


const DepartHeadPage = () => {
    const dispatch = useDispatch();
    const message = useMessage();


    return (
        <DndProvider backend={HTML5Backend}>
            <div  className={"dnd "}>
                <DragNDrop />
            </div>
        </DndProvider>
    );
};

export default DepartHeadPage;