import './App.scss';
import NavBar from "../ui/header/navBar/NavBar";
import {AuthContext} from "../../context/AuthContext"
import useRoutes from "../../hooks/routes.hook";
import Footer from "../ui/footer/Footer";
import {useAuth} from "../../hooks/auth.hook";
import {useSelector} from "react-redux";
import LocalContainer from "../ui/Container";
import Container from "../ui/Container";

function App() {
    const role = useSelector(state => state.role.value);
    const routes = useRoutes(role)

    const {login, logout} = useAuth();
    return (
        <Container className="App">
            <AuthContext.Provider value={{login, logout}}>
                {!!role && <NavBar/>}
                    <LocalContainer >
                    {routes}
                    </LocalContainer>
                {!!role && <Footer/>}
            </AuthContext.Provider>
        </Container>
    );
}

export default App;
