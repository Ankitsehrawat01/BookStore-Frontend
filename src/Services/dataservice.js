import axios from 'axios'

const headerConfig = {
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}

//to retrive Notes
export const retriveBooksAPI =() => {
    let response = axios.get('https://localhost:44379/api/Book/Get',headerConfig)
    return response
}