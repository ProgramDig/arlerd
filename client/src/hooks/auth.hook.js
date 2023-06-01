import {removeToken, setToken} from "../store/slices/tokenSlice";
import { setRole, removeRole} from "../store/slices/roleSlice";
import {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {removeTeacher, setTeacher} from "../store/slices/teacherSlice";

const LOCALSTORAGE_NAME = "Teacher";

export const useAuth = () => {
    const dispatch = useDispatch();
    const login = useCallback((jwtToken , role , teacher ) => {
        dispatch(setTeacher(teacher))
        dispatch(setToken(jwtToken));
        dispatch(setRole(role));
        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify({token: jwtToken, role: role , teacher: teacher}));
    }, []);

    const logout = useCallback(() => {
        dispatch(removeTeacher())
        dispatch(removeToken());
        dispatch(removeRole());
        localStorage.removeItem(LOCALSTORAGE_NAME);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME) || "{}");
        if (data && data.token) {
            login(data.token, data.role, data.teacher);
        }
    }, [login]);

    return {login, logout};
};