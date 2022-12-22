import { Box, Button, Paper, TextField } from '@mui/material'
import React, { useState } from 'react'
import { makeStyles } from '@mui/styles';
import { signUpApi } from '../../Services/userService';

const fullnameRegex = /^[A-Z]{1}[a-z]{2,}$/;
const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;
const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;
const phoneRegex = /^[6-9]{1}[0-9]{9}$/;

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

    const [signupobj, setsignupobj] = useState ({
        fullName: "",
        email_Id: "",
        password: "",
        mobile_Number: 0,
    })
    const [regexObj, setRegexobj] = useState({
        fullnameborder: false,
        fullnamehelper: "",
        emailborder: false,
        emailhelper: "",
        passwordborder: false,
        passwordhelper: "",
        mobileborder: false,
        mobilehelper: "",
    })
    const enterFulltName = (event) => {
        console.log(event.target.value)
        setsignupobj((prevState) => ({ ...prevState, fullName: event.target.value }))
    }
    const enterEmail = (event) => {
        console.log(event.target.value)
        setsignupobj((prevState) => ({ ...prevState, email_Id: event.target.value }))
    }
    const enterPassword = (event) => {
        console.log(event.target.value)
        setsignupobj((prevState) => ({ ...prevState, password: event.target.value }))
    }
    const enterMobile = (event) => {
        console.log(event.target.value)
        setsignupobj((prevState) => ({ ...prevState, mobile_Number: Number(event.target.value) }))
    }

    const accountCreated = () => {
        console.log(signupobj)
        let checkFullName = fullnameRegex.test(signupobj.fullName)
        let checkEmail = emailRegex.test(signupobj.email_Id)
        let checkPassword = passwordRegex.test(signupobj.password)
        let checkMobile = phoneRegex.test(signupobj.mobile_Number)

        if (checkFullName === true) {
            setRegexobj((prevState) => ({ ...prevState, fullnameborder: false, fullnamehelper: "" }))
        }
        else if (checkFullName === false) {
            setRegexobj((prevState) => ({ ...prevState, fullnameborder: true, fullnamehelper: "Enter your correct Name" }))
        }

        if (checkEmail === true) {
            setRegexobj((prevState) => ({ ...prevState, emailborder: false, emailhelper: "" }))
        }
        else if (checkEmail === false) {
            setRegexobj((prevState) => ({ ...prevState, emailborder: true, emailhelper: "Enter your correct Mail" }))
        }

        if (checkPassword === true) {
            setRegexobj((prevState) => ({ ...prevState, passwordborder: false, passwordhelper: "" }))
        }
        else if (checkPassword === false) {
            setRegexobj((prevState) => ({ ...prevState, passwordborder: true, passwordhelper: "Enter your correct Password" }))
        }

        if (checkMobile === true) {
            setRegexobj((prevState) => ({ ...prevState, mobileborder: false, mobilehelper: "" }))
        }
        else if (checkMobile === false) {
            setRegexobj((prevState) => ({ ...prevState, mobileborder: true, mobilehelper: "Enter your correct Mobile" }))
        }

        if (checkFullName === true && checkEmail === true && checkPassword === true && checkMobile === true) {
            signUpApi (signupobj)
                .then((response) => { console.log(response) })
                .catch((error) => { console.log(error) })
            console.log("Account Created")
        }
    }
    const openLoginpage = () => {
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
                            <TextField variant="outlined" size="small" onChange={enterFulltName} error={regexObj.fullnameborder} helperText={regexObj.fullnamehelper} fullWidth='true' />
                        </Box>
                        <Box><span className={classes2.Emailtxt} >Email Id</span>
                            <TextField variant="outlined" size="small" onChange={enterEmail} error={regexObj.emailborder} helperText={regexObj.emailhelper} fullWidth='true' />
                        </Box>
                        <Box><span className={classes2.Emailtxt}>Password</span>
                            <TextField variant="outlined" size="small" onChange={enterPassword} error={regexObj.passwordborder} helperText={regexObj.passwordhelper} fullWidth='true' />
                        </Box>
                        <Box><span className={classes2.Emailtxt}>Mobile Number</span>
                            <TextField variant="outlined" size="small" onChange={enterMobile} error={regexObj.mobileborder} helperText={regexObj.mobilehelper} fullWidth='true' />
                        </Box>
                        <Box>
                            <Button className={classes2.loginbtn} variant="contained" fullWidth='true' onClick={accountCreated} >Signup</Button>
                        </Box>
                    </Box>

                </Box>
            </Paper>
        </Box>
    )
}

export default SignUp
