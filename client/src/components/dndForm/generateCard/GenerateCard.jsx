import React, {useEffect, useRef, useState} from 'react';
import {useDrop} from "react-dnd";
import Card from "../card/Card";
import {TYPES} from "../types";
import M from 'materialize-css'
import './GenerateCards.scss'
import uuid from "react-uuid";
import loginPage from "../../../pages/authModule/loginPage/LoginPage";
import {useSelector} from "react-redux";

M.AutoInit()
const GenerateCard = ({listGroup, teacherList, disciplineList, payload, setPayload}) => {


    const itemTeacher = useRef(null);
    const itemGroupOne = useRef(null);
    const itemGroupTwo = useRef(null);
    const itemGroupThree = useRef(null);
    const itemGroupFour = useRef(null);
    const itemGroupFive = useRef(null);
    const itemGroupSix = useRef(null);
    const itemDisciplineOne = useRef(null);
    const itemDisciplineTwo = useRef(null);
    const key = uuid()

    const [{canDropDiscipline}, dropDisciplineOne] = useDrop(() => ({
        accept: TYPES.discipline,
        drop: (item) => (addDropToItems(item.id, item.name,
            disciplineList, itemDisciplineOne)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDropDiscipline: !!monitor.canDrop(),
        }),
    }))

    const [{canDropDisciplineTwo}, dropDisciplineTwo] = useDrop(() => ({
        accept: TYPES.discipline,
        drop: (item) => (addDropToItems(item.id, item.name, disciplineList, itemDisciplineTwo)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDropDisciplineTwo: !!monitor.canDrop(),
        }),
    }))

    // const yearAndDep = useSelector(state => state.yearAndDepartmentId)
    // const {idYear, idDepartment} = yearAndDep
    // const idDepartment = useSelector(state => state.yearAndDepartmentId.idDepartment)

    const createPayloadForSubmit = () => {
        //     run through all refs and collect inner info : id, name, ....
        // console.log(idYear)
        return {
            idTeacher: 1,
            // idYear: Number.parseInt(idYear),
            // idDepartment: Number.parseInt(idDepartment),
            firstSemester: {
                data: [
                    {
                        idDiscipline: itemDisciplineOne.current?.props?.id,
                        idGroups: [
                            itemGroupOne.current?.props?.id,
                            itemGroupTwo.current?.props?.id,
                            itemGroupThree.current?.props?.id,
                        ]
                    },
                ]
            },
            secondSemester: {
                data: [
                    {
                        idDiscipline: itemDisciplineTwo.current?.props?.id,
                        idGroups: [
                            itemGroupFour.current?.props?.id,
                            itemGroupFive.current?.props?.id,
                            itemGroupSix.current?.props?.id
                        ]
                    },
                ]
            }
        };
    }


    const [{canDropGroup}, dropOne] = useDrop(() => ({
        accept: TYPES.group,
        drop: (item) => (addDropToItems(item.id, item.name, listGroup, itemGroupOne)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDropGroup: !!monitor.canDrop(),
        }),
    }))

    const [{}, dropTwo] = useDrop(() => ({
        accept: TYPES.group,
        drop: (item) => (addDropToItems(item.id, item.name, listGroup
            , itemGroupTwo)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }))

    const [{}, dropThree] = useDrop(() => ({
        accept: TYPES.group,
        drop: (item) => (addDropToItems(item.id, item.name, listGroup
            , itemGroupThree)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }))

    const [{}, dropFour] = useDrop(() => ({
        accept: TYPES.group,
        drop: (item) => (addDropToItems(item.id, item.name
            , listGroup, itemGroupFour)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),

        }),
    }))

    const [{}, dropFive] = useDrop(() => ({
        accept: TYPES.group,
        drop: (item) => (addDropToItems(item.id, item.name
            , listGroup, itemGroupFive)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }))

    const [{}, dropSix] = useDrop(() => ({
        accept: TYPES.group,
        drop: (item) => (addDropToItems(item.id, item.name
            , listGroup, itemGroupSix)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop(),
        }),
    }))

    const [{canDropTeacher}, dropTeacher] = useDrop(() => ({
        accept: TYPES.teacher,
        drop: (item) => (addDropToItems(item.id, item.name, teacherList, itemTeacher)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDropTeacher: !!monitor.canDrop(),
        }),
    }))

    const addDropToItems = async (id, name, list, ref) => {
        console.log(id)
        list.filter((item) => id === item.id)
        ref.current = <Card key={id} id={id} name={name}/>
        console.log(key)
        const updated = {...payload}
        updated[key] = createPayloadForSubmit()
        setPayload(updated)
    }

    return (
        <div className={'center'} style={{border: '3px dotted black', marginTop: '5px'}}>
            <div className={"parent "}>
                <div
                    className={`
            center
            teacher - name
            darken - 2`}
                    ref={dropTeacher}
                    style={{
                        border: canDropTeacher ? "2px dotted yellow" : "0px",
                        display: "flex", justifyContent: "center", alignItems: "center"
                    }}>
                    {itemTeacher.current}
                </div>
                <div>
                    <div className={'center'}>1 Семестр</div>
                    <div className="parent2 row center "
                         style={{minHeight: '150px', marginTop: '30px'}}>
                        <div style={{
                            border: canDropDiscipline ? '2px dotted darkblue' : '0',
                            borderRadius: '5%', minHeight: '80px', paddingLeft: '15px'
                        }}
                             ref={dropDisciplineOne}>
                            {itemDisciplineOne.current}
                        </div>

                        <div className={'center'}
                             style={{display: "flex", justifyContent: "space-around", alignItems: 'flex-end'}}>
                            <div className={'box center'} ref={dropOne}
                                 style={{border: canDropGroup ? "2px dotted green" : "0px"}}>
                                {itemGroupOne.current}</div>
                            <div className={'box center '} style={{border: canDropGroup ? "2px dotted green" : "0px"}}
                                 ref={dropTwo}>{itemGroupTwo.current}</div>
                            <div className={`
            box
            center `} style={{border: canDropGroup ? "2px dotted green" : "0px"}}
                                 ref={dropThree}>{itemGroupThree.current}</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className={'center'}
                    >2 Семестр
                    </div>
                    <div className="parent2 row"
                         style={{minHeight: '150px', marginTop: '30px'}}>
                        <div style={{
                            border: canDropDisciplineTwo ? '2px dotted darkblue' : '0',
                            borderRadius: '5%', minHeight: '80px', paddingLeft: '15px'
                        }}
                             className={`
            center `}
                             ref={dropDisciplineTwo}>{itemDisciplineTwo.current}</div>
                        <div className={'center'}
                             style={{display: "flex", justifyContent: "space-around", alignItems: 'flex-end'}}>
                            <div className={`
            box `} style={{border: canDropGroup ? "2px dotted green" : "0px"}}
                                 ref={dropFour}>{itemGroupFour.current}</div>
                            <div className={`
            box
            center `} style={{border: canDropGroup ? "2px dotted green" : "0px"}}
                                 ref={dropFive}>{itemGroupFive.current}</div>
                            <div className={`
            box
            center `} style={{border: canDropGroup ? "2px dotted green" : "0px"}}
                                 ref={dropSix}>{itemGroupSix.current}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default GenerateCard;

