import { Box, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles({
    paperthing3: {
        display: 'flex',
        position: 'relative',
        border: '0px solid red',
        width: '55vw',
        height: '10vh',
        top: '80px',
        left: '230px'
    }
})

function OrderSummary(props) {
    const class5 = useStyle()

    const openOrder=() =>{
        props.openOrderDetails()
    }

    return (
        <div>
            <Paper className={class5.paperthing3} elevation={5} onClick={openOrder}>
                <Box sx={{ fontSize: '20px', fontWeight: 500, position: 'relative', top: '20px', left: '20px' }}>Order Summary</Box>
            </Paper>
        </div>
    )
}

export default OrderSummary
