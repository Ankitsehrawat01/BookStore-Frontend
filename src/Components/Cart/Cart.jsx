import { Box, Button, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect, useState } from 'react'
import Header from '../Header/Header'
import PlaceIcon from '@mui/icons-material/Place';
import Address from '../Address/Address';
import AddressDetails from '../Address/AddressDetails';
import OrderSummary from '../OrderSummary/OrderSummary';
import OrderSummaryDetails from '../OrderSummary/OrderSummaryDetails';
import { getCartAPI } from '../../Services/dataservice';


const useStyle = makeStyles({
    hometextthing: {
        width: '10vw',
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '0px solid red',
        left: '230px',
        top: '10px'
    },
    hometext: {
        color: '#9D9D9D',
        fontSize: '12px',
    },
    carttext: {
        color: '#0A0102',
        fontSize: '12px',
        position: 'relative',
        left: '4px',
    },
    headerbox2: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '0px solid red',
        width: '95%',
        justifyContent: 'space-between'
    },
    paperthing1: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: '0px solid red',
        width: '55vw',
        height: '40vh',
        left: '230px',
        top: '20px'
    },
    belowbox1: {
        display: 'flex',
        flexDirection: 'column',
        border: '0px solid red',
        width: '100%',
    },
    imageBox: {
        display: 'flex',
        flexDirection: 'row',
        border: '0px solid red',
        position: 'relative',
        top: '25px',
        width: '95%',
        left: '20px'
    },
    bookdetailsbox2: {
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
    },
    bookpricebox2: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '0px solid red',
        width: '40%',
        justifyContent: 'space-between',
    },
    placeorderbtn: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '0px solid red',
        justifyContent: 'flex-end',
        width: '95%',
        bottom: '20px'
    },
    // paperthing2: {
    //     display: 'flex',
    //     position: 'relative',
    //     border: '0px solid red',
    //     width: '55vw',
    //     height: '10vh',
    //     top: '50px',
    //     left: '230px'
    // },
    // paperthing3: {
    //     display: 'flex',
    //     position: 'relative',
    //     border: '0px solid red',
    //     width: '55vw',
    //     height: '10vh',
    //     top: '80px',
    //     left: '230px'
    // }
})

function Cart() {
    const class2 = useStyle()

    const [toggle, setToggle] = useState(false)

    const [toggle1, setToggle1] = useState(false)

    const [cartArray, setCartArray] = useState([])

    const openAddressDetails = () => {
        setToggle(true)
    }
    const closeAddressDetails = () => {
        setToggle(false)
    }

    const openOrderDetails = () => {
        setToggle1(true)
    }
    const closeOrderDetails = () => {
        setToggle1(false)
    }

    useEffect(() => {
        getCartAPI()
            .then((response) => {
                console.log(response)
                setCartArray(response.data.data)
            }).catch((error) => { console.log(error) })
    }, [])

    return (
        <div>
            <Box>
                <Header />
                <Box className={class2.hometextthing}>
                    <Box className={class2.hometext}>Home</Box>
                    <Box className={class2.carttext} style={{ fontWeight: 600 }}> / My Cart</Box >
                </Box>
                <Paper className={class2.paperthing1} elevation={5}>
                    <Box className={class2.belowbox1}>
                        <Box className={class2.headerbox2} >
                            <Box style={{ fontSize: '20px', fontWeight: 700, height: '7vh', position: 'relative', top: '10px', left: '20px' }}>My Cart (01)</Box>
                            <Box sx={{ position: 'relative', top: '10px' }}>
                                <select>
                                    <PlaceIcon />
                                    <option value="Use current location"> Use current location</option>
                                    <option value="Mumbai">Mumbai</option>
                                    <option value="Gurugram">Gurugram</option>
                                    <option value="New Delhi">New Delhi</option>
                                    <option value="Kolkata">Kolkata</option>
                                    <option value="Pune">Pune</option>
                                    <option value="Banglore">Banglore</option>
                                </select>
                            </Box>
                        </Box>
                        <Box>
                            {
                                cartArray.map((cart) => (
                                    <Box>
                                        <Box className={class2.imageBox}>
                                            <Box><img src={cart.book_Image} style={{ width: '80px', height: '80px' }} /></Box>
                                        </Box>
                                        <Box className={class2.bookdetailsbox2}>
                                            <Box sx={{ fontWeight: 700 }}>{cart.book_Name}</Box>
                                            <Box sx={{ color: '#878787', fontSize: '12px' }}>By {cart.author_Name}</Box>
                                            <Box className={class2.bookpricebox2}>
                                                <Box sx={{ fontWeight: 700 }}>Rs. {cart.discount_Price}</Box>
                                                <Box sx={{ color: '#878787', textDecorationLine: 'line-through', fontSize: '12px', position: 'relative', top: '3px' }}>Rs. {cart.price}</Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                ))
                            }
                            <Box className={class2.placeorderbtn}>
                                <Button variant="contained">Place Order</Button>
                            </Box>
                        </Box>
                    </Box>
                </Paper>

                <div>
                    {
                        toggle ? <Address closeAddressDetails={closeAddressDetails} /> : <AddressDetails openAddressDetails={openAddressDetails} />
                    }
                    <div>
                        {
                            toggle1 ? <OrderSummaryDetails closeOrderDetails={closeOrderDetails} /> : <OrderSummary openOrderDetails={openOrderDetails} />
                        }
                    </div>
                </div>
                <div>

                </div>
            </Box>
        </div>
    )
}

export default Cart
