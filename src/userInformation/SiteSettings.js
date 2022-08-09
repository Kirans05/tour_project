import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import Header from '../DashBoardComponents/Header'
import ProfileChoice from './ProfileChoice'

const SiteSettings = () => {
  return (
    <Box>
    <Header />
    <Box
      className="mainBody"
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: "row",
        columnGap: 2,
      }}
    >
      <ProfileChoice />
      <Box
        className="rightPart"
        sx={{
          width: "70%",
          border: "2px solid #e6e7e8",
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          padding: "2%",
        }}
      >
    <Typography sx={{fontSize:"30px",fontWeight:"bold"}}>Site Settings</Typography>
    </Box>
  </Box>
  </Box>
  )
}

export default SiteSettings