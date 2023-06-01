import {ROOT_ROUTE} from '../../data/constants'
import axios  from "axios";

export default axios.create({
    baseURL:ROOT_ROUTE,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'

    }
});

