import React, {useEffect, useState} from 'react';
import './Board.scss'
import 'materialize-css'
import Select from "../../form/select/Select";
import GenerateCard from "../generateCard/GenerateCard";
import uuid from "react-uuid";
import M from 'materialize-css'

const Board = ({listGroup, teacherList, disciplineList}) => {
    const [idYear , setYear] = useState({
        idYear : ''
    });
    const [idDepartment , setDepartment] = useState({
        idDepartment : ''
    });

    console.log(idYear , idDepartment)

    const onChangeYearInput = (e) => {
        setYear({...idYear , idYear : e.target.value})
    }
    const onChangeDepartmentInput = (e) => {
        setYear({...idDepartment , idDepartment : e.target.value})
    }

    const [itemsList, setItemsList] = useState([])
    const [payload, setPayload] = useState([]);


    useEffect(() => {
        M.AutoInit()
        addItemToList()
    },[])

    const addItemToList = () => {
        const item = createNewItem()
        setItemsList([...itemsList, item])
    }

    const removeItemFromList = (id) => {
        //     removes last item from ItemList
        setItemsList((previousArr) => (previousArr.slice(0, -1)))
    }


    const submitAllBoard = async (e) => {
        e.preventDefault()
        // console.log(payload)
        const dataToSubmit = Object.values(payload)
        const preparedData = dataToSubmit[0]
        // console.log(dataToSubmit)

        console.log(preparedData)

        const requestOptions = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(preparedData)
        }
        const response = await fetch('http://localhost:5000/generate/data-processor', requestOptions);
        const data = await response.json();
        console.log( await response)
        console.log( await data)
    }
    const createNewItem = () => {
        const key = uuid()
        return (<GenerateCard listGroup={listGroup}
                              key={key}
                              teacherList={teacherList}
                              disciplineList={disciplineList}
                              payload={payload}
                              setPayload={setPayload}
                              idYear={idYear}
                              idDepartment={idDepartment}
        />)
    }

    return (
        <div className={`col board z-depth-4`}>
            <div className={'row'}>
                <Select
                    idYear={idYear}
                    onChangeInput={onChangeYearInput}
                    url='/year/all'
                    label={'Рік'}
                    nameOfEvent={'idYear'}
                />

                <Select
                    idDepartment={idDepartment}
                    onChangeInput={onChangeDepartmentInput}
                    url='/department/all'
                    label={'Відділ'}
                    nameOfEvent={'idDepartment'}
                />
            </div>


            <div className="nav-wrapper icons">
                <i className="material-icons"
                   onClick={addItemToList}
                >create</i><i
                className="material-icons"
                onClick={removeItemFromList}
            >close</i><i
                className="material-icons"
                onClick={submitAllBoard}
            >close</i></div>

            {/* map on all itemLists */}
            {itemsList.map(item => item)}
        </div>
    )
        ;
};

export default Board;
