import { Box, Button, Paper, TextField } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';

const useStyle = makeStyles({
    paperbox: {
        border: '0px solid red',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        left: '700px',
        top: '100px',
        width: '25vw',
        height: '55vh',
        opacity: '3',
        zIndex: '2',
    },
    mainbox: {
        border: '0px solid black',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '55vh',
        width: '20vw',
        left: '35px',
    },
    text: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        top: '20px'
    },
    loginbutton: {
        fontSize: "25px !important",
        fontWeight: 'bold !important',
        color: '#0A0102 !important',
        font: 'normal normal medium 25px / 33px Roboto',
        letterSpacing: '0px',
        textTransform: 'uppercase'
    },
    input: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        position: 'relative',
        rowGap: '15px',
        top: '20px'
    },
    Emailtxt: {
        display: 'flex',
        textAlign: 'left !important',
        fontSize: '10px',
        border: '0px solid red'
    },
    loginbtn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#A03037 !important',
        textTransform: 'capitalize !important'
    },
})

function SignUp(props) {
    const classes2 = useStyle()

    const openLoginpage=()=>{
        props.listenTosignup1()
    }
    return (
        <Box>
            <Paper className={classes2.paperbox} elevation={5}>
                <Box className={classes2.mainbox}>
                    <Box className={classes2.text}>
                        <Button onClick={openLoginpage} className={classes2.loginbutton}>LOGIN</Button>
                        <Button className={classes2.loginbutton}>SIGNUP</Button>
                    </Box>
                    <Box className={classes2.input}>
                        <Box><span className={classes2.Emailtxt}>Full Name</span>
                            <TextField variant="outlined" size="small" fullWidth='true' />
                        </Box>
                        <Box><span className={classes2.Emailtxt}>Email Id</span>
                            <TextField variant="outlined" size="small" fullWidth='true' />
                        </Box>
                        <Box><span className={classes2.Emailtxt}>Password</span>
                            <TextField variant="outlined" size="small" fullWidth='true'/>
                        </Box>
                        <Box><span className={classes2.Emailtxt}>Mobile Number</span>
                            <TextField variant="outlined" size="small" fullWidth='true'/>
                        </Box>
                        <Box>
                            <Button className={classes2.loginbtn} variant="contained" fullWidth='true'>Signup</Button>
                        </Box>
                    </Box>

                </Box>
            </Paper>
        </Box>
    )
}

export default SignUp
