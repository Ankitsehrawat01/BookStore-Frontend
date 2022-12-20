import axios from "axios";

export const loginApi = (loginObj) => {
    let response = axios.post('https://localhost:44379/api/User/Login',loginObj)
    return response
}