import axios from "axios";

const headerConfig = {
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}

export const loginApi = (loginObj) => {
    let response = axios.post('https://localhost:44379/api/User/Login',loginObj)
    return response
}

export const signUpApi =(signupObj) => {
    let response = axios.post('https://localhost:44379/api/User/Register',signupObj)
    return response
}

export const forgetApi =(email) => {
    let response = axios.post(`https://localhost:44379/api/User/ForgetPassword?email=${email}`, null)
    return response
}

export const resetApi =(newpassObj) => {
    let response = axios.post(`https://localhost:44379/api/User/Reset?newpassword=${newpassObj}&confirmpassword=${newpassObj}`,null, headerConfig)
    return response
}