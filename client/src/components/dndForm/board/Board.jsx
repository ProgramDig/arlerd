import React, {useEffect, useState} from 'react';
import './Board.scss'
import 'materialize-css'
import Select from "../../form/select/Select";
import GenerateCard from "../generateCard/GenerateCard";
import uuid from "react-uuid";
import M from 'materialize-css'
import {useDispatch, useSelector} from "react-redux";
import {setDepartment, setYear} from "../../../store/slices/yeardAndDepartmentSlice";
import {useMessage} from "../../../hooks/message.hook";
import loginPage from "../../../pages/authModule/loginPage/LoginPage";

const Board = ({listGroup, teacherList, disciplineList}) => {
    const message = useMessage()
    const dispatch = useDispatch()
    const idYear = useSelector(state => state.yearAndDepartmentId.idYear)
    const idDepartment = useSelector(state => state.yearAndDepartmentId.idDepartment)

    const onChangeYearInput = (e) => {
        dispatch(setYear(e.target.value))
    }
    const onChangeDepartmentInput = (e) => {
        dispatch(setDepartment(e.target.value))
    }

    const [itemsList, setItemsList] = useState([])
    const [payload, setPayload] = useState([]);


    useEffect(() => {
        M.AutoInit()
        addItemToList()
    }, [])

    const addItemToList = () => {
        const item = createNewItem()
        setItemsList([...itemsList, item])
    }

    const removeItemFromList = () => {
        //     removes last item from ItemList
        setItemsList((previousArr) => previousArr.slice(0, -1));

        setPayload((previousPayload) => {
            const preparedData = Object.values(payload)
            const updatedPayload = [...preparedData.slice(0, -1)];
            return updatedPayload;
        });
    }
    const removeAllItemsFromList = () => {
        setItemsList(itemsList.slice(0,0))
        setPayload([])
    }


    const submitAllBoard = async (e) => {
        e.preventDefault()
        console.log(payload)
        const dataToSubmit = Object.values(payload)
        console.log(dataToSubmit)
        dataToSubmit.forEach(item => {
            if (idYear !== undefined) {
                item.idYear = Number.parseInt(idYear);
            }

            if (idDepartment !== undefined) {
                item.idDepartment = Number.parseInt(idDepartment);
            }
        });
        const preparedData = {...dataToSubmit}
        console.log(payload)
        console.log(preparedData)
        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({...preparedData})
        }
        const response = await fetch('http://localhost:5000/generate/data-processor', requestOptions);
        const data = await response.data;
        message(data)
        removeAllItemsFromList()
    }


    const createNewItem = () => {
        const key = uuid()
        return (<GenerateCard listGroup={listGroup}
                              key={key}
                              color={' yellow'}
                              teacherList={teacherList}
                              disciplineList={disciplineList}
                              payload={payload}
                              setPayload={setPayload}
                              idYear={idYear}
                              idDepartment={idDepartment}
        />)
    }

    return (
        <div className={`col board circle z-depth-5`}>
            <div className={'row hoverable'}>
                <Select
                    color={'aqua'}
                    idYear={idYear}
                    onChangeInput={onChangeYearInput}
                    url='/year/all'
                    label={'Рік'}
                    nameOfEvent={'idYear'}
                />

                <Select
                    color={'aqua'}
                    idDepartment={idDepartment}
                    onChangeInput={onChangeDepartmentInput}
                    url='/department/all'
                    label={'Відділ'}
                    nameOfEvent={'idDepartment'}
                />
            </div>


            <div className="nav-wrapper icons">
                <i className="material-icons hoverable icons circle "
                   onClick={addItemToList}>add</i>
                <i className="material-icons hoverable icons circle "
                   onClick={submitAllBoard}>send</i>
                <i className="material-icons hoverable icons circle "
                   onClick={removeItemFromList}>close</i>
            </div>

            {/* map on all itemLists */}
            {itemsList.map(item => item)}
        </div>
    )
        ;
};

export default Board;
