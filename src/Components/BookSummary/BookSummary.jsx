import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Divider } from '@mui/material';
import Rating from '@mui/material/Rating';
import InputBase from '@mui/material/InputBase';
import Header from '../Header/Header';
import { Navigate, useNavigate } from 'react-router-dom';
import { addCartAPI, addToCart, addWishlist, getwishlistAPI, getwishlistAPIa, retriveById } from '../../Services/dataservice';
import { useState } from 'react';
import WishList from '../WishList/WishList';


const useStyle = makeStyles({
  headerbsummary: {
    width: '98vw',
    height: '8vh',
    border: '0px solid red',
    display: 'flex',
    alignItems: 'center',
  },
  homebook: {
    display: 'flex',
    flexDirection: 'row',
    position: 'relative',
    left: '240px',
  },
  homebsummary: {
    color: '#9D9D9D',
    fontSize: '12px',
  },
  bookbsummary: {
    color: '#0A0102',
    fontSize: '12px',
    position: 'relative',
    left: '4px',
  },
  container3: {
    width: '72vw',
    height: '120vh',
    border: '0px solid red',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'flex-start',
    position: 'relative',
    left: '240px',
  },
  bookimages: {
    width: '5%',
    height: '120px',
    display: 'flex',
    flexDirection: 'column',
    border: '0px solid blue',
  },
  bookimage1: {
    width: '100%',
    height: '50%',
    border: '1px solid #7C1E1E',
    backgroundColor: '#FFE7E9',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookimage2: {
    width: '100%',
    height: '50%',
    border: '1px solid #D1D1D1',
    borderRadius: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container4: {
    width: '96%',
    height: '100%',
    border: '0px solid black',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  bookimgbtn: {
    width: '36%',
    height: '56%',
    border: '0px solid purple',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookdetails: {
    width: '65%',
    height: '100%',
    border: '0px solid purple',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  bookimg1: {
    width: '100%',
    height: '90%',
    border: '1px solid #D1D1D1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bookbtn: {
    width: '100%',
    height: '10%',
    display: 'flex',
    alignItems: 'flex-end',
  },
  bookbtns: {
    width: '100%',
    height: '80%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addbag: {
    width: '45%',
    backgroundColor: '#A03037 !important',
    borderRadius: '0px',
  },
  addfav: {
    width: '45%',
    backgroundColor: '#333333 !important',
  },
  bookdetails1: {
    width: '93%',
    height: '95%',
    border: '0px solid orange',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  booktitle1: {
    fontSize: '25px',
    fontWeight: '500',
  },
  bookauthor1: {
    fontSize: '18px',
    color: '#878787',
  },
  bookpoints1: {
    width: '12%',
    height: '4%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookratings1: {
    width: '60%',
    height: '60%',
    backgroundColor: '#388E3C',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    color: 'white',
  },
  bookquantity1: {
    width: '30%',
    color: '#878787',
    fontFamily: 'normal normal normal Roboto',
    fontSize: '15px',
  },
  bookprice1: {
    width: '26%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bookdiscount1: {
    fontWeight: '500',
    fontSize: '20px',
  },
  bookcost1: {
    color: '#878787',
    textDecorationLine: 'line-through',
    fontSize: '14px',
  },
  bookparagraph: {
    width: '80%',
    height: '23%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  para1: {
    width: '100%',
    height: '55%',
    border: '0px solid blue',
    overflow: 'hidden',
    textAlign: 'justify',
  },
  paratext: {
    opacity: '0.7'
  },
  customerfeedback: {
    height: '5%',
    border: '0px solid blue',
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
    color: '#0A0102',
  },
  feedbackrating: {
    width: '80%',
    height: '25%',
    border: '0px solid red',
    backgroundColor: '#F5F5F5',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  feedbackrate: {
    width: '95%',
    height: '86%',
    border: '0px solid pink',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start'
  },
  stars: {
    width: '10%',
    height: '22%',
  },
  inputbase: {
    width: '100%',
    height: '37%',
    backgroundColor: 'white',
    textAlign: 'left',
  },
  feedbackbutton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    position: 'relative',
  },
  firstfeedback: {
    width: '80%',
    height: '10%',
    border: '0px solid orange',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    top: '6px',
  },
  ac: {
    width: '27px',
    height: '27px',
    backgroundColor: '#F5F5F5',
    border: '1px solid #E4E4E4',
    color: '#707070',
    borderRadius: '50%',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondfeedback: {
    width: '80%',
    height: '10%',
    border: '0px solid orange',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    position: 'relative',
    top: '40px',
  },
  sb: {
    width: '27px',
    height: '27px',
    backgroundColor: '#F5F5F5',
    border: '1px solid #E4E4E4',
    color: '#707070',
    borderRadius: '50%',
    fontSize: '12px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  stars1: {
    position: 'relative',
    bottom: '5px',
  }

})

function BookSummary() {
  const classes8 = useStyle()

  const [bookDetail, setBookDetail] = useState([])

  const bookId = JSON.parse(localStorage.getItem("bookId"));

  const navigate = useNavigate()


  const cartlistener =() => {
    console.log(localStorage.getItem('bookId'))
    addCartAPI(localStorage.getItem('bookId'))
      .then((response) => {
        console.log(response)
        localStorage.setItem("cartId", response.data.data)
        navigate('/cart')
      })
      .catch((error) => { console.log(error) })
    console.log(" add to cart successful")
  }

  const wishListlistener = () => {
    console.log(localStorage.getItem('bookId'))
    addWishlist(localStorage.getItem('bookId'))
      .then((response) => {
        console.log(response)
        navigate('/wishlist')
      })
      .catch((error) => { console.log(error) })
    console.log(" add to wishlist successful")
  }

  useEffect(() => {
    retriveById(bookId)
      .then((response) => {
        console.log(response)
        setBookDetail(response.data.response)
      }).catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <div>
      <Box>
        <Header />
        <Box className={classes8.headerbsummary}>
          <Box className={classes8.homebook}>
            <Box className={classes8.homebsummary}>Home /</Box>
            <Box className={classes8.bookbsummary}> Book({bookDetail.bookId})</Box>
          </Box>
        </Box>
        <Box className={classes8.container3}>
          <Box className={classes8.bookimages}>
            <Box className={classes8.bookimage1}><img src={bookDetail.book_Image} width='90%' height='90%' /></Box>
            <Box className={classes8.bookimage2}><img src={bookDetail.book_Image} width='100%' height='100%' /></Box>
          </Box>
          <Box sx={{ width: '0.2%' }}></Box>
          <Box className={classes8.container4}>
            <Box className={classes8.bookimgbtn}>
              <Box className={classes8.bookimg1}><img src={bookDetail.book_Image} width='85%' height='85%' /></Box>
              <Box className={classes8.bookbtn}>
                <Box className={classes8.bookbtns}>
                  <Button variant="contained" className={classes8.addbag} onClick={cartlistener}>Add to Bag</Button>
                  <Button variant="contained" className={classes8.addfav} onClick={wishListlistener} startIcon={<FavoriteIcon />}>Wishlist</Button>
                </Box>
              </Box>
            </Box>
            <Box className={classes8.bookdetails}>
              <Box className={classes8.bookdetails1}>
                <Box className={classes8.booktitle1}>
                  {/* Don't Make Me Think  */}
                  {bookDetail.book_Name}</Box>
                <Box sx={{ height: '1%' }}></Box>
                <Box className={classes8.bookauthor1}>{bookDetail.author_Name}</Box>
                <Box sx={{ height: '0.6%' }}></Box>
                <Box className={classes8.bookpoints1}>
                  <Box className={classes8.bookratings1}>
                    <Box sx={{ fontSize: '12px' }}>{bookDetail.rating}</Box>
                    <StarIcon fontSize="10px" sx={{ color: 'white' }} />
                  </Box>
                  <Box className={classes8.bookquantity1}>({bookDetail.rating_Count})</Box>
                </Box>
                <Box className={classes8.bookprice1}>
                  <Box className={classes8.bookdiscount1}>Rs.{bookDetail.discount_Price}</Box>
                  <Box className={classes8.bookcost1}>Rs. {bookDetail.price}</Box>
                </Box>
                <Box sx={{ width: '80%', position: 'relative', top: '15px' }}><Divider sx={{ borderBottomWidth: 2, width: '100%' }} /></Box>
                <Box className={classes8.bookparagraph}>
                  <Box className={classes8.para1}>
                    <span style={{ color: '#878787', display: 'flex', alignItems: 'center' }}> <Box style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: '#878787' }}></Box>&nbsp;Book Detail</span>
                    <Box className={classes8.paratext} sx={{ marginLeft: '9px', fontSize: '12px', opacity: '0.8' }}>
                      {bookDetail.description}
                    </Box>
                  </Box>
                </Box>
                <Box sx={{ width: '80%' }}><Divider sx={{ borderBottomWidth: 2, width: '100%' }} /></Box>
                <Box className={classes8.customerfeedback}>
                  <span style={{ fontWeight: '500' }}>Customer Feedback</span>
                </Box>
                <Box className={classes8.feedbackrating}>
                  <Box className={classes8.feedbackrate}>
                    <Box sx={{ fontSize: '14px', height: '18%' }}>Overall rating</Box>
                    <Box className={classes8.stars}>
                      <Rating defaultValue={0} size="medium" style={{ color: 'black !important' }} name="half-rating" precision={0.5} />
                    </Box>
                    <Box className={classes8.inputbase}><InputBase sx={{ marginLeft: '8px' }} placeholder='write your review' />
                    </Box>
                    <Box className={classes8.feedbackbutton}><Button variant="contained" sx={{ width: '13%', height: '80%', textTransform: 'capitalize' }}>Submit</Button></Box>
                  </Box>
                </Box>
                <Box className={classes8.firstfeedback}>
                  <Box sx={{ display: 'flex' }}>
                    <Box className={classes8.ac}>AC</Box>
                    <Box sx={{ marginLeft: '8px', fontSize: '15px', fontWeight: '500' }}>Aniket Chile</Box>
                  </Box>
                  <Box sx={{ height: '28%', }}>
                    <Rating className={classes8.stars1} defaultValue={3} size="medium" style={{ color: 'black !important', marginLeft: '35px' }} readOnly />
                  </Box>
                  <Box sx={{ height: '50%', marginLeft: '35px', fontSize: '12px', textAlign: 'justify', color: '#707070' }}>
                    <span >Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking.
                      Chanakya has written on many different topics and his writings are succinct.</span>
                  </Box>
                </Box>
                <Box className={classes8.secondfeedback}>
                  <Box sx={{ display: 'flex' }}>
                    <Box className={classes8.sb}>SB</Box>
                    <Box sx={{ marginLeft: '8px', fontSize: '14px', fontWeight: '500' }}>Shweta Bodkar</Box>
                  </Box>
                  <Box sx={{ height: '27%' }}>
                    <Rating className={classes8.stars1} defaultValue={4} size="medium" style={{ color: 'black !important', marginLeft: '35px' }} readOnly />
                  </Box>
                  <Box sx={{ height: '50%', marginLeft: '35px', fontSize: '12px', textAlign: 'justify', color: '#707070' }}>
                    <span>Good product. Even though the translation could have been better, Chanakya's neeti are thought provoking.
                      Chanakya has written on many different topics and his writings are succinct.</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </div>
  )
}

export default BookSummary