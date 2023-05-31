import React from 'react';
import {NavLink} from "react-router-dom";



const Links = ({role}) => {
    switch (role) {
        case 1:
            return (
                <>
                    <li><NavLink to={'/admin'}>Адмін панель</NavLink></li>
                    <li><NavLink to={'/department-head'}>Начальник кафедри</NavLink></li>
                    <li><NavLink to={'/scientific-employer'}>Навчальний відділ</NavLink></li>
                    <li><NavLink to={'/teacher'}>Викладач</NavLink></li>
                    <li><NavLink to={'/main'}>Основна</NavLink></li>
                </>
            )
        case 3:
            return (
                <>
                    <li><NavLink to={'/department-head'}>Начальник кафедри</NavLink></li>
                    <li><NavLink to={'/teacher'}>Викладач</NavLink></li>
                    <li><NavLink to={'/main'}>Основна</NavLink></li>
                </>
            )
        case 2:
            return (
                <>
                    <li><NavLink to={'/scientific-employer'}>Навчальний відділ</NavLink></li>
                    <li><NavLink to={'/teacher'}>Викладач</NavLink></li>
                    <li><NavLink to={'/main'}>Основна</NavLink></li>
                </>
            )
        case 4:
            return (
                <>
                    <li><NavLink to={'/teacher'}>Викладач</NavLink></li>
                    <li><NavLink to={'/main'}>Основна</NavLink></li>
                </>
            )
        default:
            console.log('default')
            return (
                <>
                    <li><NavLink to={'/main'}>Основна</NavLink></li>
                </>
            )
    }
};

export default Links;