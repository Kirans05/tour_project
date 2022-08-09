import { Button, TextareaAutosize, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import Header from '../DashBoardComponents/Header'
import ProfileChoice from './ProfileChoice'

const TravelPireferences = () => {

    const [editButton, setEditButton] = useState(false)

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
       <Typography sx={{fontSize:"30px",fontWeight:"bold"}}>Travel Preferences</Typography>

        {
            !editButton ?
            <Box className="Special Requirements" sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:1
               }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between"
                }}>
                <Typography>Special Requirements</Typography>
                <Typography 
                sx={{
                    color:"green",
                    "&:hover":{cursor:"pointer",textDecoration:"underLine"}
                }}
                onClick={()=>setEditButton(true)}
                >Add</Typography>
                </Box>
                <Typography>Not Provided</Typography>
               </Box>
               : <Box className="Special RequirementsEdits" sx={{
                display:"flex",
                flexDirection:"column",
                rowGap:2,
                width:"100%",
               }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"space-between",
                    width:"100%"
                }}>
                <Typography>Special Requirements</Typography>
                <Typography 
                sx={{
                    color:"green",
                    "&:hover":{cursor:"pointer",textDecoration:"underLine"}
                }}
                onClick={()=>setEditButton(false)}
                >Cancel</Typography>
                </Box>
                <TextareaAutosize type={"text"}  placeholder={"Dietary,restrictions,accessibility needs etc."} sx={{
                    width:"100px"
                }}/>
                <Box>
                <Button variant='contained' color='success'
                    
                    onClick={()=>setEditButton(false)}
                    >
                    Save
                </Button>
                    </Box>
               </Box>
        }

       


       


    </Box>
  </Box>
  </Box>
  )
}

export default TravelPireferences