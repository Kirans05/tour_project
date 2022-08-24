import React, { useState } from 'react'
import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import { Box, Typography } from '@mui/material';


let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]
let touristName = ["Ajanta Caves","Eiffel Tower","Great Wall of China","Elephanta Caves","Statue of Liberty","Bara Imambara","İstanbul","Hawa Mahal","Stonehenge"]



const TopAttraction = () => {

    const [productimage, setProductImage] = useState(arr[Math.floor(Math.random()*arr.length)])
    const [productnames, setProductName] = useState(touristName[Math.floor(Math.random()*touristName.length)])

  return (
    <Box
    className="1stImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      columnGap: 2,
      "&:hover": { cursor: "pointer" },
    }}
  >
    <Box
      component={"img"}
      src={productimage}
      alt={"alternate image"}
      sx={{ width: "120px" }}
    />
    <Box
      className="plcaeDescriptions"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        rowGap:1
      }}
    >
      <Typography sx={{ fontSize: {xs:"12px",md:"16px"}, fontWeight: "bold" ,
    "&:hover":{cursor:"pointer",textDecoration:"underLine"}
    }}>
        {productnames}
      </Typography>
      <Typography sx={{ fontSize: "13px" }}>
        206 Tours and Activities
      </Typography>
    </Box>
  </Box>
  )
}

export default TopAttraction