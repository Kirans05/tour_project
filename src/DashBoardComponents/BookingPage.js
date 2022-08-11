import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const BookingPage = () => {

  const navigate = useNavigate()

  return (
    <Box>
      <Header />
      <Box className='bookingDetails' 
      sx={{
        height:"90vh",
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"center",
        rowGap:2
      }}
      >
        <Typography 
        sx={{
          fontSize:{xs:"20px",md:"30px"},
          fontWeight:"bold"
        }}
        >
          No Active Booking
          </Typography>
          <Typography sx={{fontSize:{xs:"16px",md:"20px"}}}>Find your next unforgettable experience on Travel.</Typography>
          <Button variant='contained' color='warning'
          onClick={()=>navigate("/HomePage")}
          >Start Exploring</Button>
      </Box>
      <Footer />
    </Box>
  )
}

export default BookingPage