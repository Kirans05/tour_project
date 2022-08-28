import { Typography, Box, Button, Rating, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Footer from '../FooterComponents/Footer'
import Header from '../HeaderComponents/Header'
import Image2 from "../../assets/images/img2.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { useNavigate } from 'react-router-dom'
import CheckIcon from "@mui/icons-material/Check";
import BookingProductCart from '../../Components/BookingProductCart/BookingProductCart'


let arr = [1,2,3,4,5,6]

const BookingPage = () => {

  const navigate = useNavigate()

  return (
    <Box>
      <Header />
<Box
        sx={{
        padding:{xs:"2% 3% 2% 3%",md:"2% 6% 3% 6%"},
        width:{xs:"94%",md:"88%"},
        display:"flex",
        flexDirection:"column",
        rowGap:2,
        alignItems:"flex-start",
        justifyContent:"flex-start"
        }}
        >
          <Box className='1stPart'>
              <Typography
              sx={{
                fontSize:{xs:"16px",md:"20px"},
                fontWeight:"bold"
              }}
              >My Bookings</Typography>
              <Typography
              sx={{
                fontSize:{xs:"14px",md:"16px"}
              }}
              >Your list of tours that has been booked</Typography>
          </Box>
        
        <Box className='AllWishListProducts'
        sx={{
          display:"flex",
          flexDirection:{xs:"column",md:"row"},
          alignItems:{xs:"flex-start",md:"center"},
          justifyContent:{xs:"flex-start",md:"space-evenly"},
          flexWrap:{xs:"nowrap",md:"wrap"},
          width:{xs:"100%",md:"100%"},
          rowGap:6,
          // columnGap:2
        }}
        >
          {
            arr.map((item, index) => {
              return <BookingProductCart key={index} />
            })
          }
    </Box>
    </Box>

      {/* <Footer /> */}
    </Box>
  )
}

export default BookingPage