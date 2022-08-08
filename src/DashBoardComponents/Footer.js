import React from 'react'
import { Box } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';
import { styled } from '@mui/material/styles';
import Rating from '@mui/material/Rating';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';




const Footer = () => {
  return (
   <Box sx={{backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Box className='socialMediaIcons' sx={{display:"flex",flexDirection:"row",columnGap:4}}>
        <FacebookIcon  sx={{color:"white"}}/>
        <TwitterIcon sx={{color:"white"}}/>
        <InstagramIcon sx={{color:"white"}}/>
        <YouTubeIcon sx={{color:"white"}}/>
        <PinterestIcon sx={{color:"white"}}/>
      </Box>
      <Box className='ratings'>
      <Rating name="size-medium" defaultValue={4} readOnly/>
      </Box>  
   </Box>
  )
}

export default Footer