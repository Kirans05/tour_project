import { Box,Switch,Typography } from '@mui/material'
import React from 'react'
import Header from '../DashBoardComponents/Header'
import ProfileChoice from './ProfileChoice'

const label = { inputProps: { 'aria-label': 'Switch demo' } };

const NotificationPage = () => {
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
        <Typography sx={{fontSize:"30px",fontWeight:"bold"}}>Notifications</Typography>
        <Typography>Marketing emails</Typography>
        <Box sx={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
        }}>
            <Typography>Viator will send you weekly emails with travel inspirations, tips, recommendations and company updates</Typography>
            <Switch {...label} defaultChecked color="success" />
        </Box>
    </Box>
  </Box>
  </Box>
  )
}

export default NotificationPage