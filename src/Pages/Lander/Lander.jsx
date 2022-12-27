import React, { useState } from 'react'
import Box from '@mui/material/Box'
import { makeStyles } from '@mui/styles'
import Login from '../Sign-in/Login'
import SignUp from '../Sign-up/SignUp'

const useStyle = makeStyles({
    container: {
        width: '100vw',
        height: '100vh',
        backgroundColor: '#A8A8A8',
        zIndex: '1',
    },
    main2: {
        width: '45%',
        height: '50%',
        backgroundColor: '#F5F5F5',
        position: 'absolute',
        top: '120px',
        left: '360px',
        zIndex: 5,
        borderRadius: '21px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        opacity: '1',
        zIndex: '2',
    },
    imgtext: {
        width: '50%',
        height: '76%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    maintext: {
        fontSize: 'large',
        fontWeight: '500',
        position: 'relative',
        left: '15px',
    },
    image: {
        border: '0px solid red',
        height: '85%',
        width: '75%',
    },
    image1: {
        border: '0px solid red',
        height: '100%',
        width: '100%',
        borderRadius: '180px',
        position: 'relative',
        bottom: '30px'
    },
    image2: {
        border: '0px solid red',
        height: '30px',
        width: '30px',
        position: 'relative',
        opacity: '4',
        zIndex: '6',
        top: '50px',
        left: '70px',
    }
})

function Lander() {
    const [toggle, setToggle] = useState(false)

    const listenTologin1 = () => {
        setToggle(true)
    }
    const listenTosignup1 = () => {
        setToggle(false)
    }
    const classes = useStyle()
    return (
        <div>
            <Box className={classes.container}>
                <Box className={classes.main2}>
                    <Box className={classes.imgtext}>
                        <Box className={classes.image}>
                            <img className={classes.image2} src='./assets/component.png' />
                            <img className={classes.image1} src='./assets/mainprofile.png ' />
                        </Box>
                        <Box className={classes.maintext}>ONLINE BOOK SHOPPING</Box>
                    </Box>
                </Box>
                <div>
                    {
                        toggle ? <SignUp listenTosignup1={listenTosignup1} /> : <Login listenTologin1={listenTologin1} />
                    }
                </div>
            </Box>
        </div>
    )
}

export default Lander
