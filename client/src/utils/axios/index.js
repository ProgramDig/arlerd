
import axios  from "axios";
const BASE_URL = 'http://localhost:5000'

export default axios.create({
    baseURL:BASE_URL,
    timeout: 1000,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
});

