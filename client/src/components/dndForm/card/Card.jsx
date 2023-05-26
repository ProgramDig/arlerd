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
            item: {id: id, name: name},
            collect: (monitor) => ({
                isDragging: !!monitor.isDragging()
            })
        }));
        const opacity = isDragging ? 0.4 : 1;

        return (
            <div className="row " ref={drag} key={id} id={id} style={{
                opacity,
                margin: 'auto'
            }}>
                <div className="col s12 m11 center-align">
                    <div className="card-panel  darken-4 green z-depth-3 " style={{
                        cursor : 'pointer',
                        borderRadius: 15,
                        display: "flex",
                        justifyContent: 'center'
                    }}>
        <span className="white-text ">{name}
        </span>
                    </div>
                </div>
            </div>
        );

    }
;

export default Card;