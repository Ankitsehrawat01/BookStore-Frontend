import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { forgetApi } from '../../Services/userService';

const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

const useStyle = makeStyles({
    Paperbox: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100vw',
        height: '8vh',
        backgroundColor: '#A03037 !important',
    },
    Mainbox: {
        display: 'flex',
        flexDirection: 'column',
        postion: 'relative',
        border: '0px solid black',
        height: '5vh',
        width: '30vw'
    },
    Content: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        border: '0px solid red',
        top: '18px',
        left: '100px',
        color: 'white'
    },
    Text: {
        display: 'flex',
        flexDirection: 'row',
        position: 'relative',
        left: '110px',
    },
    Paperbox2: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        top: '100px'
    },
    Main: {
        //border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '23vw',
        height: '50vh',
        top: '150px',
        left: '550px',
        rowGap: '10px'
    },
    Toptext: {
        //border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
    },
    mainpaper: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100%',
        height: '80%'
    },
    Paperinput: {
        //border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '70%',
        height: '100%',
        left: '50px',
    },
    belowtext: {
        color: '#878787 !important',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        top: '30px'
    },
    inputtext: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        rowGap: '20px',
        top: '40px'
    },
    Txtemail: {
        display: 'flex',
        textAlign: 'left !important',
        fontSize: '10px',
        border: '0px solid red',
        fontWeight: 600
    },
    resetbtn: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#A03037 !important',
        textTransform: 'capitalize !important'
    },
    createbtn: {
        color: 'black !important',
        fontWeight: '700 !important',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        bottom: '50px',
        backgroundColor: '#E4E4E4 !important',
    }
})

function ForgetPassword(props) {

    const classes4 = useStyle()

    const [emailIdobj, setemailIdobj] = useState({
        email: ""
    })

    const [regexObj, setRegexobj] = useState({
        emailIdborder: false,
        emailIdhelper: ""
    })

    const takeEmailId = (event) => {
        console.log(event.target.value)
        setemailIdobj((prevState) => ({ ...prevState, email: event.target.value }))
    }
    const navigate = useNavigate()
    const reset = () => {
        console.log(emailIdobj)
        let checkemailId = emailRegex.test(emailIdobj.email)

        if (checkemailId === true) {
            setRegexobj((prevState) => ({ ...prevState, emailIdborder: false, emailIdhelper: "" }))
        }
        else if (checkemailId === false) {
            setRegexobj((prevState) => ({ ...prevState, emailIdborder: true, emailIdhelper: "Enter your correct email" }))
        }
        //API Call
        if (checkemailId === true) {
            forgetApi(emailIdobj.email)
                .then((response) => {
                    console.log(response)
                    localStorage.setItem("token", response.data.data)
                })
                .catch((error) => { console.log(error) })
            console.log("Mail sent successfulLy")
            navigate('/resetpassword')
        }
    }


    return (
        <Box>
            <Box>
                <Paper className={classes4.Paperbox}>
                    <Box className={classes4.Mainbox}>
                        <Box className={classes4.Content}>
                            <Box className={classes4.Text}>
                                <Typography>Bookstore</Typography>
                            </Box>
                            <Box>
                                <img src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Aa5b33713-5c6d-45cb-8c64-81e6721d4f29&params=version%3A0&token=1671684819_da39a3ee_e0bf0fc73b97761325e60496c26d47db938a99eb&api_key=CometServer1' />
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Box className={classes4.Main}>
                <Box className={classes4.Toptext}>
                    <Typography style={{ fontWeight: 600, fontSize: 20 }}>Forget Your Password?</Typography>
                </Box>
                <Paper elevation={3} className={classes4.mainpaper}>
                    <Box className={classes4.Paperinput}>
                        <Box>
                            <Box>
                                <Typography style={{ fontSize: 15 }} className={classes4.belowtext}>Enter your email and we'll send you a link to reset your password</Typography>
                            </Box>
                            <Box>
                                <Box className={classes4.inputtext}>
                                    <Box><span className={classes4.Txtemail}>Email Id</span>
                                        <TextField variant="outlined" size="small" fullWidth='true' onChange={takeEmailId} error={regexObj.emailIdborder} helperText={regexObj.emailIdhelper} />
                                    </Box>
                                    <Box>
                                        <Button variant="contained" fullWidth='true' className={classes4.resetbtn} onClick={reset}>Reset Password</Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Paper>
                <Box>
                    <Button variant="outlined" fullWidth='true' className={classes4.createbtn} size='large'>Create Acccount</Button>
                </Box>
            </Box>
        </Box>
    )
}

export default ForgetPassword
