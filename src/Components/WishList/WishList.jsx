import { FormatAlignJustify } from '@mui/icons-material'
import { Box, Paper, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import DeleteIcon from '@mui/icons-material/Delete';
import { width } from '@mui/system'
import { deletewishlistAPI, getwishlistAPI, retriveById } from '../../Services/dataservice'
import { useNavigate } from 'react-router-dom'


const useStyle = makeStyles({
    mainheadtxt: {
        width: '10vw',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '0px solid red',
        left: '230px',
        top: '10px'
    },
    mainhometxt: {
        color: '#9D9D9D',
        fontSize: '12px',
    },
    mainwishtxt: {
        color: '#0A0102',
        fontSize: '12px',
        position: 'relative',
        left: '4px',
    },
    mainpaperbox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: '0px solid red',
        width: '67vw',
        height: '20vh',
        left: '230px',
        top: '20px'
    },
    maincontainer: {
        display: 'flex',
        flexDirection: 'column',
        border: '0px solid red',
        width: '100%',

    },
    mainpaperbox2: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '0px solid red',
        width: '67vw',
        backgroundColor: '#E4E4E4 !important',
        border: '#E4E4E4',
        left: '230px',
        top: '20px'
    },
    mainbookbox: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid red',
        position: 'relative',
        top: '25px',
        width: '95%',
        left: '20px',
        justifyContent: 'space-between'
    },
    bookdetailsbox: {
        display: 'flex',
        flexDirection: 'column',
        border: '0px solid red',
        alignItems: 'flex-start',
        position: 'relative',
        left: '120px',
        width: '40%',
        height: '58%',
        position: 'relative',
        bottom: '60px',
        rowGap: '10px'
    },
    bookpricebox: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '0px solid red',
        width: '31%',
        justifyContent: 'space-between',

    }

})
function WishList() {
    const class1 = useStyle()

    const [wishListarray, setWishListArray] = useState([])

   const navigate = useNavigate()

    const deleteWishlist = (wishListId) => {
        console.log('WISHLIST ID', wishListId)
        deletewishlistAPI(wishListId)
            .then((response) => {
                console.log(response.data.data)
                navigate('/wishlist')
            })
            .catch((error) => { console.log(error) })
        console.log(" Delete WishList successful")
    }

    useEffect(() => {
        getwishlistAPI()
        .then((response) => {
            console.log(response)
            setWishListArray(response.data.data)
        }).catch((error) => { console.log(error) })
    }, [])

    return (
        <div>
            <Box >
                <Box>
                    <Header />
                    <Box className={class1.mainheadtxt}>
                        <Box className={class1.mainhometxt}>Home</Box>
                        <Box className={class1.mainwishtxt} style={{ fontWeight: 600 }}> / My WishList</Box >
                    </Box>
                    <Box className={class1.mainpaperbox2}  >
                        <Box style={{ fontSize: '20px', fontWeight: 700, height: '7vh', position: 'relative', top: '10px', left: '20px' }}>My WishList (01)</Box>
                    </Box>
                    {
                        wishListarray.map((wishlist) => (
                            <Paper className={class1.mainpaperbox}>
                                <Box className={class1.maincontainer}>
                                    <Box>
                                        <Box className={class1.mainbookbox}>
                                            <Box><img src={wishlist.book_Image} style={{ width: '80px', height: '80px' }} /></Box>
                                            <Box>< DeleteIcon onClick={() => deleteWishlist(wishlist.wishListId)} sx={{ color: '#9D9D9D' }} /></Box>
                                        </Box>
                                        <Box className={class1.bookdetailsbox} >
                                            <Box sx={{ fontWeight: 700 }}>{wishlist.book_Name}</Box>
                                            <Box sx={{ color: '#878787', fontSize: '12px' }}>by {wishlist.author_Name}</Box>
                                            <Box className={class1.bookpricebox}>
                                                <Box sx={{ fontWeight: 700 }}>Rs. {wishlist.discount_Price}</Box>
                                                <Box sx={{ color: '#878787', textDecorationLine: 'line-through', fontSize: '12px', position: 'relative', top: '5px' }}>Rs. {wishlist.price}</Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        ))
                    }
                </Box>
            </Box>
        </div>
    )
}

export default WishList
