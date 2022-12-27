import axios from 'axios'

const headerConfig = {
    headers: {Authorization:`Bearer ${localStorage.getItem('token')}`}
}

//to get all books
export const retriveBooksAPI =() => {
    let response = axios.get('https://localhost:44379/api/Book/Get',headerConfig)
    return response
}

//to get book by id 
export const retriveById =(book_Id) => {
    let response = axios.get(`https://localhost:44379/api/Book/GetById?BookId=${book_Id}`, headerConfig)
    return response
}
