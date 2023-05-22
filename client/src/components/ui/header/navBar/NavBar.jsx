import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {AuthContext} from "../../../../context/AuthContext";
import Links from "../links/Links";
import {BiExit, BiUserCircle} from "react-icons/bi";
import {useSelector} from "react-redux";

const NavBar = () => {
    const auth = useContext(AuthContext)
    const role = useSelector(state => state.role.value);

    const logoutHandler = async (event) => {
        event.preventDefault()
        await auth.logout()
    }

    return (
        <nav>
            <div className="nav-wrapper blue darken-1" style={{padding: '0 2rem'}}>
                <span href="#" className="brand-logo">Лого</span>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <Links role={role}/>
                    <li>
                        <NavLink to={'/account'}>
                            <BiUserCircle/>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={'/auth'} onClick={logoutHandler}>
                            <BiExit/>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default NavBar;