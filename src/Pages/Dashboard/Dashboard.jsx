import { Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import Book from '../../Components/Book/Book'
import Header from '../../Components/Header/Header'
import WishList from '../../Components/WishList/WishList'
import { getwishlistAPI, retriveBooksAPI, wishlistAPI } from '../../Services/dataservice'



const useStyle = makeStyles({
    bookthing: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid red',
        position: 'relative',
        width: '9VW',
        height: '5vh',
        justifyContent: 'space-between'
    },
    Itemthing: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid red',
        position: 'relative',
        top: '6px'
    },
    options: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '230px',
        top: '30px',
        border: '0px solid red',
        width: '68%',
        justifyContent: 'space-between'
    },
    listren: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '70vw',
        position: 'relative',
        border: '0px solid red',
        height: 'auto',
        left: '200px',
        top: '50px'
    },
})

function Dashboard() {

    const classes6 = useStyle()

    const [dataArray, setDataArray] = useState([])

    useEffect(() => {
        retriveBooksAPI()
            .then((response) => {
                console.log(response)
                setDataArray(response.data.response)
            })
            .catch((error) => { console.log(error) })
        console.log("All Books Retrived")
    }, [])

    return (
        <div>
            <Header />
            <Box className={classes6.options}>
                <Box className={classes6.bookthing}>
                    <Box style={{ fontWeight: 600, fontSize: 20 }}>
                        Books
                    </Box>
                    <Box className={classes6.Itemthing} style={{ fontSize: 13, color: '#878787', }}>
                        (123 Items)
                    </Box>
                </Box>
                <Box>
                    <select>
                        <option value="sort by relevance">Sort By Relevance</option>
                        <option value="Price: Low to High">Price: Low to High</option>
                        <option value="Price: High to Low">Price: High to Low</option>
                        <option value="What's New">What's New</option>
                        <option value="Popularity">Popularity</option>
                        <option value="Better Discount">Better Discount</option>
                        <option value="Customer Rating">Customer Rating</option>
                    </select>
                </Box>
            </Box>
            <div>
                <div className={classes6.listren}>
                    {
                        dataArray.map((book) => (<Book book={book} />))
                    }
                </div>
            </div>

        </div>
    )
}

export default Dashboard
