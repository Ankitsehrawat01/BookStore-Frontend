import { makeStyles } from '@mui/styles'
import React from 'react'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';


const useStyle = makeStyles({
    main2: {
        width: '15vw',
        height: '37vh',
        border: '1px solid #D3D3D3',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        marginLeft: '32px',
        marginBottom: '32px'
        //top: '60px'
    },
    bookimage: {
        width: '100%',
        height: '60%',
        backgroundColor: '#F5F5F5',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bookimg: {
        width: '100%',
        height: '100%',
    },
    bookimage2: {
        width: '45%',
        height: '80%'
    },
    bookdetail: {
        width: '100%',
        height: '40%',
        display: 'flex',
        border: '0px solid red',
        justifyContent: 'center',
        alignItems: 'center',
    },
    booktext: {
        width: '85%',
        height: '80%',
        border: '0px solid blue',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        textAlign: 'left',
        lineHeight: '1.5'
    },
    booktitle: {
        height: '22%',
        fontWeight: '500',
        fontFamily: 'normal normal normal 14px/19px Roboto',
        color: '#0A0102',
    },
    bookauthor: {
        height: '22%',
        color: '#878787',
        fontFamily: 'normal normal normal 10px/13px Roboto',
        fontSize: '14px'
    },
    bookdetail1: {
        width: '35%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '0px solid red',
        position: 'relative',
        top:'5px'
    },
    bookratings: {
        width: '60%',
        backgroundColor: '#388E3C',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        color: 'white',
        border: '0px solid red',
    },
    mark: {
        width: '30%',
        color: '#878787',
        fontFamily: 'normal normal normal Roboto',
        fontSize: '14px',
        border: '0px solid red',
    },
    bookprice: {
        width: '65%',
        height: '22%',
        display: 'flex',
        flexDirection: 'row',
       justifyContent: 'space-between',
        alignItems: 'center',
        display: 'flex',
        position:'relative',
        border: '0px solid red',
        top: '5px'
    },
    bookdiscount: {
        fontWeight: '500',
        fontSize: '15px',
    },
    bookcost: {
        color: '#878787',
        textDecorationLine: 'line-through',
        fontSize: '12px',
    }
})

function Book(props) {
    const classes = useStyle()
    return (
        <div>
            <Paper elevation={1} className={classes.main2}>
                <Box className={classes.bookimage}>
                    <Box className={classes.bookimage2}><img className={classes.bookimg} src={props.book.book_Image} /></Box>
                </Box>
                <Box className={classes.bookdetail}>
                    <Box className={classes.booktext}>
                        <Box className={classes.booktitle}>{props.book.book_Name}</Box>
                        <Box className={classes.bookauthor}>by {props.book.author_Name}</Box>
                        <Box className={classes.bookdetail1}>
                            <Box className={classes.bookratings}>
                                <Box sx={{ fontSize: '12px' }}>{props.book.rating}</Box>
                                <StarIcon fontSize="12px" sx={{ color: 'white' }} />
                            </Box>
                            <Box className={classes.mark}>({props.book.rating_Count})</Box>
                        </Box>
                        <Box className={classes.bookprice}>
                            <Box className={classes.bookdiscount}>Rs. {props.book.discount_Price}</Box>
                            <Box className={classes.bookcost}>Rs. {props.book.price}</Box>
                        </Box>
                    </Box>
                </Box>
            </Paper>
        </div>
    )
}

export default Book