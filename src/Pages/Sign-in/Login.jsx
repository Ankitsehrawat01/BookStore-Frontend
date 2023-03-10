import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
import { Box, Divider, Paper } from '@mui/material';

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
        top: '20px',
    },
    Emailtxt: {
        display: 'flex',
        textAlign: 'left !important',
        fontSize: '10px',
        border: '0px solid red'
    },
    forgettext: {
        display: 'flex',
        flexDirection: 'row',
        color: '#0A0102 !important',
        fontSize: '10px !important',
        position: "relative",
        left: '110px',
        textTransform: 'capitalize !important',
        opacity: '0.7'
    },
    loginbtn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: '#A03037 !important',
        textTransform: 'capitalize !important'
    },
    ortext: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        fontWeight: 'bold',
        position: 'relative'
    },
    below: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        position: 'relative',
        width: '100%'
    },
    fbtn: {
        fontWeight: '500 !important',
        textTransform: 'capitalize !important',
        width: '45%'
        
    },
    googlebtn: {
        color: 'black !important',
        fontWeight: '500 !important',
        textTransform: 'capitalize !important',
    }
})
function Login(props) {
    const classes1 = useStyle()

    const openSignup = () => {
        props.listenTologin1()
    }

    return (
        <Box>
            <Paper className={classes1.paperbox} elevation={5}>
                <Box className={classes1.mainbox}>
                    <Box className={classes1.text}>
                        <Button className={classes1.loginbutton}>LOGIN</Button>
                        <Button onClick={openSignup} className={classes1.loginbutton}>SIGNUP</Button>
                    </Box>
                    <Box className={classes1.input} >
                        <Box><span className={classes1.Emailtxt}>Email Id</span>
                            <TextField variant="outlined" size="small" fullWidth='true' />
                        </Box>
                        <Box><span className={classes1.Emailtxt}>Password</span>
                            <TextField variant="outlined" size="small" fullWidth='true' />
                            <Button className={classes1.forgettext} size="x-small" variant='text' >Forget Password?</Button>
                        </Box>
                        <Box>
                            <Button className={classes1.loginbtn} variant="contained" fullWidth='true'>Login</Button>
                        </Box>
                        <Box className={classes1.ortext}><Divider sx={{ borderBottomWidth: 3, width: '30%' }} />OR <Divider sx={{ borderBottomWidth: 3, width: '30%' }} /></Box>
                        <Box className={classes1.below}>
                            <Button variant="contained" className={classes1.fbtn}>Facebook</Button>
                            <Button variant="contained" className={classes1.googlebtn} disabled sx={{ width: '45%', color: 'black' }}>Google</Button>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default Login
