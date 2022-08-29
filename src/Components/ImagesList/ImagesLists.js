import React, { useState } from 'react'
import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import { Box } from '@mui/material';



let arrList = [Travel4,Travel3, Travel6, Travel8, Travel9,]



const ImagesLists = ({item}) => {

  // const [productIamge, setProductImage] = useState(arrList[Math.floor(Math.random()*arrList.length)])

  return (
    <Box
                  className="placeImage"
                  component={"img"}
                  src={item}
                  alt="Place Image"
                  width={{ xs: "10px", md: "130px" }}
                  maxHeight={"80vh"}
                  sx={{
                    opacity: 0.8,
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                    },
                    maxHeight:"98px",
                    minHeight:"98px"
                  }}
                />
  )
}

export default ImagesLists
