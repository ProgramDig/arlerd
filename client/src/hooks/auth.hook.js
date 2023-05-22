import {removeToken, setToken} from "../store/slices/tokenSlice";
import { setRole, removeRole} from "../store/slices/roleSlice";
import {useCallback, useEffect} from "react";
import {useDispatch} from "react-redux";
import {setUser} from "../store/slices/userSlice";

const LOCALSTORAGE_NAME = "User";

export const useAuth = () => {
    const dispatch = useDispatch();
    const login = useCallback((jwtToken , role) => {
        dispatch(setToken(jwtToken));
        dispatch(setRole(role));
        localStorage.setItem(LOCALSTORAGE_NAME, JSON.stringify({token: jwtToken, role: role}));
    }, []);

    const logout = useCallback(() => {
        dispatch(removeToken());
        dispatch(removeRole());
        localStorage.removeItem(LOCALSTORAGE_NAME);
    }, []);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(LOCALSTORAGE_NAME) || "{}");
        if (data && data.token) {
            login(data.token, data.role);
        }
    }, [login]);

    return {login, logout};
};