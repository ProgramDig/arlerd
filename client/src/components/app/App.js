import './App.scss';
import NavBar from "../ui/header/navBar/NavBar";
import {AuthContext} from "../../context/AuthContext";
import useRoutes from "../../hooks/routes.hook";
import Footer from "../ui/footer/Footer";
import {useAuth} from "../../hooks/auth.hook";
import {useSelector} from "react-redux";

function App() {
    const role = useSelector(state => state.role.value);
    const routes = useRoutes({role})

    const {login, logout} = useAuth();

    return (
        <div className="App">
            <AuthContext.Provider value={{ login, logout }}>
                {!!role && <NavBar/>}
                <div className={'container'}>
                    {routes}
                </div>
                {!!role && <Footer/>}
            </AuthContext.Provider>
        </div>
    );
}

export default App;
