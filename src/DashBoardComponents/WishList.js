import { Typography, Box, Button } from '@mui/material'
import React from 'react'
import Footer from './Footer'
import Header from './Header'

const WishList = () => {
  return (
    <Box>
        <Header />
        <Box className='wishListDetails'
        sx={{
            height:"90vh",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent:"center",
            rowGap:2
        }}
        >
            <Typography sx={{fontSize:"30px",fontWeight:"bold"}}>Your wishlist is empty</Typography>
            <Typography>The world is waiting for you. Fill up on amazing things to do from Paris to Sydney.</Typography>
            <Button variant='contained' color='success'>Continue Shopping</Button>
        </Box>
        <Footer />
    </Box>
  )
}

export default WishList