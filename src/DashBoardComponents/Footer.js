import React from 'react'
import { Box } from "@mui/material"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PinterestIcon from '@mui/icons-material/Pinterest';


const Footer = () => {
  return (
   <Box sx={{backgroundColor:"black",display:"flex",alignItems:"center",justifyContent:"center"}}>
      <Box sx={{display:"flex",flexDirection:"row",columnGap:4}}>
        <FacebookIcon  sx={{color:"white"}}/>
        <TwitterIcon sx={{color:"white"}}/>
        <InstagramIcon sx={{color:"white"}}/>
        <YouTubeIcon sx={{color:"white"}}/>
        <PinterestIcon sx={{color:"white"}}/>
      </Box>
   </Box>
  )
}

export default Footer