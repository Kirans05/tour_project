import { Box, Typography } from '@mui/material'
import React from 'react'
import Header from '../../HeaderComponents/Header'

const AboutPage = () => {
  return (
    <Box>
        <Header />
        <Box className='mainBody'
        sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"flex-start",
          justifyContent:"flex-start",
          padding:{xs:"0%",md:"0% 5% 0% 5%"},
          width:{xs:"100%",md:"60%"},
          rowGap:1
        }}
        >
          <Typography
          sx={{
            fontSize:{xs:"18px",md:"20px"},
            fontWeight:"bold"
          }}
          >About Us</Typography>
          <Typography
          sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >Mekatourizm, a Tripadvisor company, makes it easy to find and book something you'll love to do. With access to the world's largest selection of high-quality experiences, there's always something new to discover, both near and far from home. From must-do moments to who-knew discoveries, see the familiar in a new way, or the unknown for the first time!</Typography>
          <Typography
          sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >With industry-leading flexibility and last-minute availability, it's never too late to make any day extraordinary. Plan ahead, or decide that morning. Change your dates. Or change your mind entirely! This is your time off, your way, and we're here to help.</Typography>
          <Typography
          sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >We also know that your time off is precious. So we ruthlessly focus on quality, and we specialise in experiences so incredible, you'll want to tell your friends. Spend less time searching, and more time making memories. Discover story-worthy experiences, anytime, anywhere.</Typography>
          <Typography
          sx={{
            fontSize:{xs:"18px",md:"20px"},
            fontWeight:"bold"
          }}
          >Why choose Mekatourizm?</Typography>
          <Box>
            <ul style={{fontSize:"18px"}}>
              <li>Exceptional flexibility You’re in control, with free cancellation and payment options to satisfy any plan or budget.</li>
              <li>Quality you can trust Our experiences meet high quality standards and are backed by millions of reviews, so you know you’re getting the best.</li>
              <li>Experiences to remember Browse and book tours and activities so incredible, you’ll want to tell your friends.</li>
              <li>Award-winning support Find a lower price? Have a change in plans? No problem. We’re here to help, 24/7.</li>
            </ul>
          </Box>
          <Typography
           sx={{
            fontSize:{xs:"18px",md:"20px"},
            fontWeight:"bold"
          }}
          >Are you a tour operator?</Typography>
          <Typography
           sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >As one of the first online marketplaces for things to do, Mekatourizm makes it easy for you to grow your business and reach customers worldwide. Get access to market-specific insights and tailored coaching to help your products stand out from the rest. Use our intuitive Experiences Management Centre to spend less time managing your business and more time creating memorable moments.</Typography>
          <Typography
           sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >From individual to multi-national operators, Mekatourizm is your trusted partner to grow your business and share your passion with the world. Click here to get started.</Typography>
          <Typography
           sx={{
            fontSize:{xs:"18px",md:"20px"},
            fontWeight:"bold"
          }}
          >Are you a travel agent?</Typography>
          <Typography
           sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >Sign up for our Travel Agent Platform here and start earning 8% commissions on all tours and activities you sell on our Travel Agent booking site. You'll get paid monthly and enjoy robust reporting to help you manage your bookings and earnings.</Typography>
          <Typography
           sx={{
            fontSize:{xs:"18px",md:"20px"},
            fontWeight:"bold"
          }}
          >What does Mekatourizm mean?</Typography>
          <Typography
           sx={{
            fontSize:{xs:"16px",md:"18px"}
          }}
          >The word Mekatourizm originates from the Latin word viāre and means traveller.</Typography>
        </Box>
    </Box>
  )
}

export default AboutPage