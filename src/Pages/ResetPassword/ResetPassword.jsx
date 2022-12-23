import { Box, Button, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { resetApi } from '../../Services/userService';

const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&-+=()])([a-zA-Z0-9]*).{8,}$/;

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
    textcolumn: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        top: '130px'
    },
    paperthing: {
        //border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '23vw',
        height: '37vh',
        left: '585px',
        top: '150px'
    },
    inputcolumn: {
        //border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100%',
        width: '80%',
        left: '35px',
        rowGap: '20px',
        top: '20px'
    },
    nextbtn: {
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#A03037 !important',
        textTransform: 'capitalize !important'
    },

})

function ResetPassword() {

    const classes5 = useStyle()

    const [resetobj, setresetobj] = useState({
        newpassword: "",
        confirmpassword: ""
    })
    const [regexObj, setRegexobj] = useState({
        newpassborder: false,
        newpasshelper: "",
        confirmpasborder: false,
        confirmpasshelper: ""
    })
    const takeNewPassword = (event) => {
        console.log(event.target.value)
        setresetobj((prevState) => ({ ...prevState, newpassword: event.target.value }))
    }

    const confirmNewPassword = (event) => {
        console.log(event.target.value)
        setresetobj((prevState) => ({ ...prevState, confirmpassword: event.target.value }))
    }

    const navigate = useNavigate()

    const resetSuccessful = () => {
        console.log(resetobj)
        let checknewpassword = passwordRegex.test(resetobj.newpassword)
        let checkconfirmpassword = passwordRegex.test(resetobj.confirmpassword)

        if (checknewpassword === true) {
            setRegexobj((prevState) => ({ ...prevState, newpassborder: false, newpasshelper: "" }))
        }
        else if (checknewpassword === false) {
            setRegexobj((prevState) => ({ ...prevState, newpassborder: true, newpasshelper: "Enter your correct password" }))
        }

        if (checkconfirmpassword === true) {
            setRegexobj((prevState) => ({ ...prevState, confirmpasborder: false, confirmpasshelper: "" }))
        }
        else if (checkconfirmpassword === false) {
            setRegexobj((prevState) => ({ ...prevState, confirmpasborder: true, confirmpasshelper: "Enter your correct Password" }))
        }

        //API Call
        if (checknewpassword === true && checkconfirmpassword === true) {
            resetApi(resetobj)
                .then((response) => {
                    console.log(response)
                })
                .catch((error) => { console.log(error) })
            console.log("Reset Password successful")
            navigate('/')
        }
    }

    return (
        <Box>
            <Box>
                <Paper className={classes5.Paperbox}>
                    <Box className={classes5.Mainbox}>
                        <Box className={classes5.Content}>
                            <Box className={classes5.Text}>
                                <Typography>Bookstore</Typography>
                            </Box>
                            <Box>
                                <img src='https://public-v2links.adobecc.com/d096df37-ca37-4026-553f-8cfa6bec09ec/component?params=component_id%3Aa5b33713-5c6d-45cb-8c64-81e6721d4f29&params=version%3A0&token=1671684819_da39a3ee_e0bf0fc73b97761325e60496c26d47db938a99eb&api_key=CometServer1' />
                            </Box>
                        </Box>
                    </Box>
                </Paper>
            </Box>
            <Box className={classes5.textcolumn}>
                <Typography style={{ fontWeight: 600, fontSize: 25 }}>Reset Password</Typography>
            </Box>
            <Paper elevation={3} className={classes5.paperthing}>
                <Box className={classes5.inputcolumn}>
                    <Box><span style={{ fontWeight: 600, fontSize: 15 }}>Enter new password</span>
                        <TextField variant="outlined" size="small" fullWidth='true' onChange={takeNewPassword} error={regexObj.newpassborder} helperText={regexObj.newpasshelper} />
                    </Box>
                    <Box><span style={{ fontWeight: 600, fontSize: 15 }}>Confirm password</span>
                        <TextField variant="outlined" size="small" fullWidth='true' onChange={confirmNewPassword} error={regexObj.confirmpasborder} helperText={regexObj.confirmpasshelper} />
                    </Box>
                    <Box>
                        <Button variant="contained" fullWidth="true" className={classes5.nextbtn} onClick={resetSuccessful}>Next</Button>
                    </Box>
                </Box>
            </Paper>
        </Box>
    )
}

export default ResetPassword
