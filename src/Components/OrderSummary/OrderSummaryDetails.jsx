import { Box, Button, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles({
    mainpaperbox2: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '0px solid red',
        width: '55vw',
        //left: '230px',
        //top: '20px'
    },
    mainpaperbox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: '0px solid red',
        width: '55vw',
        height: '35vh',
        left: '230px',
        top: '80px'
    },
    maincontainer: {
        display: 'flex',
        flexDirection: 'column',
        border: '0px solid red',
        width: '100%',

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
        width: '40%',
        justifyContent: 'space-between',
    },
    checkoutbtn: {
        border: '0px solid red',
        display: 'flex',
        justifyContent: 'flex-end',
        width: '95%',
        position: 'relative',
        bottom: '80px'
    }
})

function OrderSummaryDetails(props) {
    const class5 = useStyle()

    const closeOrder=() =>{
        props.closeOrderDetails()
    }


    return (
        <div>
            <Box>
                <Box>

                    <Paper className={class5.mainpaperbox} elevation={5} onClick={closeOrder} >
                        <Box className={class5.mainpaperbox2}  >
                            <Box style={{ fontSize: '20px', fontWeight: 500, height: '7vh', position: 'relative', top: '10px', left: '20px' }}>Order Summary</Box>
                        </Box>
                        <Box className={class5.maincontainer}>
                            <Box>
                                <Box className={class5.mainbookbox}>
                                    <Box><img src='./assets/mainprofile.png' style={{ width: '80px', height: '80px' }} /></Box>
                                </Box>
                                <Box className={class5.bookdetailsbox} >
                                    <Box sx={{ fontWeight: 650 }}>Don't Make Me Think</Box>
                                    <Box sx={{ color: '#878787', fontSize: '12px' }}>By Steve Krug</Box>
                                    <Box className={class5.bookpricebox}>
                                        <Box sx={{ fontWeight: 750 }}>Rs. 1500</Box>
                                        <Box sx={{ color: '#878787', textDecorationLine: 'line-through', fontSize: '12px', position: 'relative', top: '5px' }}>Rs. 2500</Box>
                                    </Box>
                                </Box>
                                <Box className={class5.checkoutbtn}>
                                    <Button variant="contained">Checkout</Button>
                                </Box>
                            </Box>
                        </Box>

                    </Paper>
                </Box>
            </Box>
        </div>
    )
}

export default OrderSummaryDetails
