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
const GenerateCard = ({listGroup, teacherList, disciplineList, payload, setPayload, color}) => {


    const itemTeacher = useRef();
    const itemGroupOne = useRef();
    const itemGroupTwo = useRef();
    const itemGroupThree = useRef();
    const itemGroupFour = useRef();
    const itemGroupFive = useRef();
    const itemGroupSix = useRef();
    const itemDisciplineOne = useRef();
    const itemDisciplineTwo = useRef();
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
        // run through all refs and collect inner info: id, name, ....

        const firstSemesterData = [];
        const secondSemesterData = [];

        if (itemDisciplineOne.current) {
            const firstSemesterItem = {
                idDiscipline: itemDisciplineOne.current.props?.id,
                idGroups: [],
            };

            if (itemGroupOne.current?.props?.id) {
                firstSemesterItem.idGroups.push(itemGroupOne.current.props.id);
            }

            if (itemGroupTwo.current?.props?.id) {
                firstSemesterItem.idGroups.push(itemGroupTwo.current.props.id);
            }

            if (itemGroupThree.current?.props?.id) {
                firstSemesterItem.idGroups.push(itemGroupThree.current.props.id);
            }

            if (firstSemesterItem.idGroups.length > 0) {
                firstSemesterData.push(firstSemesterItem);
            }
        }

        if (itemDisciplineTwo.current) {
            const secondSemesterItem = {
                idDiscipline: itemDisciplineTwo.current.props?.id,
                idGroups: [],
            };

            if (itemGroupFour.current?.props?.id) {
                secondSemesterItem.idGroups.push(itemGroupFour.current.props.id);
            }

            if (itemGroupFive.current?.props?.id) {
                secondSemesterItem.idGroups.push(itemGroupFive.current.props.id);
            }

            if (itemGroupSix.current?.props?.id) {
                secondSemesterItem.idGroups.push(itemGroupSix.current.props.id);
            }

            if (secondSemesterItem.idGroups.length > 0) {
                secondSemesterData.push(secondSemesterItem);
            }
        }

        return {
            idTeacher: itemTeacher?.current?.props?.id,
            firstSemester: {
                data: firstSemesterData,
            },
            secondSemester: {
                data: secondSemesterData,
            },
        };
    };

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
        drop: (item) => (addDropToItems(item.id, item.name, teacherList, itemTeacher, color)),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
            canDropTeacher: !!monitor.canDrop(),
        }),
    }))

    const addDropToItems = async (id, name, list, ref) => {
        console.log(id)
        list.filter((item) => id === item.id)
        ref.current = <Card key={id} id={id} name={name} color={color}/>
        console.log(key)
        const updated = {...payload}
        updated[key] = createPayloadForSubmit()
        setPayload(updated)
    }

    return (
        <div className={'center row'}>
            <div className={"parent"}
                 style={{
                     boxShadow: 'rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset',
                     border: '0.2rem dotted #ffeb3b ',
                     minHeight: '40vh',
                     margin: '5px 15px'
                 }}>
                <div
                    className={`center teacher-name`}
                    ref={dropTeacher}
                    style={{
                        border: canDropTeacher ? "1px dotted yellow" : "0px",
                        display: "flex",
                        flexDirection: 'column',
                        alignContent: 'space-evenly',
                        alignItems: 'center',
                    }}>
                    <span className={'material-icons'} style={{fontSize: '7rem'}}>person</span>
                    {itemTeacher.current}
                </div>
                <div>
                    <div className={'center '}>1 Семестр</div>
                    <div className="parent2 center "
                         style={{
                             minHeight: '150px', marginTop: '30px',
                         }}>
                        <div style={{
                            border: canDropDiscipline ? '2px dotted darkblue' : '0',
                            borderRadius: '5%'
                        }}
                             ref={dropDisciplineOne}>
                            {itemDisciplineOne.current}
                        </div>

                        <div className={'center'}
                             style={{display: "flex", justifyContent: "space-around", alignItems: 'flex-end'}}>
                            <div className={'box  '} ref={dropOne}
                                 style={{border: canDropGroup ? "2px dotted green " : "0px"}}>
                                {itemGroupOne.current}</div>
                            <div className={'box center '} style={{border: canDropGroup ? "2px dotted green " : "0px"}}
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
                    >
                        2 Семестр
                    </div>
                    <div className="parent2 center"
                         style={{minHeight: '75px', marginTop: '30px'}}>
                        <div style={{
                            border: canDropDisciplineTwo ? '2px dotted darkblue' : '0',
                            borderRadius: '5%',
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

