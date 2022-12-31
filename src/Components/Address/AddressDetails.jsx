import { Box, Paper } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'

const useStyle = makeStyles({
    paperthing2: {
        display: 'flex',
        position: 'relative',
        border: '0px solid red',
        width: '55vw',
        height: '10vh',
        top: '50px',
        left: '230px'
    },
})

function AddressDetails(props) {
    const class4 = useStyle()

    const openDetails = () => {
        props.openAddressDetails()
    }

    return (
        <div>
            <Paper className={class4.paperthing2} elevation={5} onClick={openDetails}>
                <Box sx={{ fontSize: '20px', fontWeight: 500, position: 'relative', top: '20px', left: '20px' }}>Address Details</Box>
            </Paper>
        </div>
    )
}

export default AddressDetails
