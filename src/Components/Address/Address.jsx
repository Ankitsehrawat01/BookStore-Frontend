import { Box, Button, Paper, TextField } from '@mui/material'
import React from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { makeStyles } from '@mui/styles';
import { width } from '@mui/system';

const useStyle = makeStyles({
    mainaddressbox: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        border: '0px solid red',
        width: '55vw',
        height: '70vh',
        left: '230px',
        top: '50px'
    },
    childaddressbox: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'column',
        border: '0px solid red',
        width: '65%',
        height: '90%',
        left: '20px',
        top: '30px',
        rowGap: '20px'
    },
    mainaddaddressbox: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        textTransform: 'capitalize !important',
        border: '0px solid red',
        justifyContent: 'space-between',
        width: '92%',
        top: '20px',
        left: '20px',
    },
    addrestxt: {
        display: 'flex',
        textAlign: 'left !important',
        fontSize: '15px',
        border: '0px solid red',

    },
    fullnamebox: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        border: '0px solid red',
        justifyContent: 'space-between'
    },
    addressfield: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        border: '0px solid red',
        justifyContent: 'flex-start'
    },
    cityTxt: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        border: '0px solid red',
        justifyContent: 'space-between'
    },
    typeTxt: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        border: '0px solid red',
        justifyContent: 'flex-start'
    },
    continurbox: {
        display: 'flex',
        position: 'relative',
        flexDirection: 'row',
        border: '0px solid red',
        justifyContent: 'flex-end',
        width: '95%',
        bottom: '40px'
    },

})
function Address(props) {
    const class3 = useStyle()

    const closeDetails = () => {
        props.closeAddressDetails()
    }
    return (
        <div>
            <Box>
                <Paper className={class3.mainaddressbox} elevation={5} onClick={closeDetails}>
                    <Box className={class3.mainaddaddressbox}>
                        <Box sx={{fontSize: '20px', fontWeight: 500}}>Address Details</Box>
                        <Button variant="outlined" color='error'>Add New Address</Button>
                    </Box>
                    <Box className={class3.childaddressbox}>

                        <Box className={class3.fullnamebox}>
                            <Box><span className={class3.addrestxt}>Full Name</span>
                                <TextField size='small' />
                            </Box>
                            <Box><span className={class3.addrestxt}>Mobile Number</span>
                                <TextField size='small' />
                            </Box>
                        </Box>
                        <Box className={class3.addressfield}>
                            <Box><span className={class3.addrestxt}>Address</span>
                                <TextField size='large' sx={{ width: '35.8vw' }} />
                            </Box>
                        </Box>
                        <Box className={class3.cityTxt}>
                            <Box><span className={class3.addrestxt}>City/Town</span>
                                <TextField size='small' />
                            </Box>
                            <Box><span className={class3.addrestxt}>State</span>
                                <TextField size='small' />
                            </Box>
                        </Box>
                        <Box className={class3.typeTxt}>
                            <Box><span className={class3.addrestxt}>Type</span>
                                <FormControl className={class3.addrestxt}>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="row-radio-buttons-group"
                                    >
                                        <FormControlLabel value="Work" control={<Radio />} label="Work" />
                                        <FormControlLabel value="Home" control={<Radio />} label="Home" />
                                        <FormControlLabel value="other" control={<Radio />} label="Other" />
                                    </RadioGroup>
                                </FormControl>
                            </Box>
                        </Box>
                    </Box>
                    <Box className={class3.continurbox}>
                        <Button variant="contained">Continue</Button>
                    </Box>
                </Paper>
            </Box>
        </div>
    )
}

export default Address
