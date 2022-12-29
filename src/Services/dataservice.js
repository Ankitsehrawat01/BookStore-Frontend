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
//to add book to wishlist
export const addWishlist =(book_Id) => {
    let response = axios.post(`https://localhost:44379/api/WishList/Add?BookId=${book_Id}`, headerConfig)
    return response
}
//to get wishlist
export const getwishlistAPI =(UserId) => {
    let response = axios.get(`https://localhost:44379/api/WishList/GetWishList?UserId=${UserId}`, headerConfig)
    return response
}
//to delete Wishlist
export const deletewishlistAPI =(UserId) => {
    let response = axios.get(`https://localhost:44379/api/WishList/GetWishList?UserId=${UserId}`, headerConfig)
    return response
}


