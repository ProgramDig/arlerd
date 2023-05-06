import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/global.scss';
import App from './components/app/App';
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import store from "./store/store";
import 'materialize-css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <App/>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
