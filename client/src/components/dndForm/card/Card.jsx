import React from 'react';
import {useDrag} from "react-dnd";
import {TYPES} from "../types";

const Card = ({id, name, types,color}) => {
        let type = '';

        switch (types) {
            case TYPES.teacher : {
                type = 'teacherCard';
                break;
            }
            case TYPES.group : {
                type = 'groupCard';
                break;
            }
            case TYPES.discipline: {
                type = 'disciplineCard';
                break;
            }
        }


        const [{isDragging}, drag] = useDrag(() => ({
            type: type,
            item: {id: id, name: name , color: color},
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            })
        }));

        const opacity = isDragging ? 0.4 : 1;

        return (
            <div  className={`row `} ref={drag} key={id} id={id} style={{
                opacity,
                margin: 'auto'
            }}>
                <div className={`center-align`}>
                    <div className={`card-panel card ${color}`} style={{
                        transition: 'transform 0.2s',
                        cursor : 'pointer',
                        padding:'25px',
                        borderRadius: 20,
                        display: "flex",
                        alignItems:'center',
                        justifyContent: 'center',
                    }}>
        <p>{name}
        </p>
                    </div>
                </div>
            </div>
        );

    }
;

export default Card;