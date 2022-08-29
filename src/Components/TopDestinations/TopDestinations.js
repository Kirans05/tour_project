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
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { filterProductByCityAction } from '../../redux/action';

import Amsterdam1 from "../../assets/amsterdam/amsterdam1.jpg"
import Florence1 from "../../assets/florence/florence1.jpg"
import Edenburgh1 from "../../assets/edenburgh/edenburgh1.jpg"
import Dubai1 from "../../assets/dubai/dubai1.jpg"
import London1 from "../../assets/london/london1.jpg"
import Krakow1 from "../../assets/krakow/krakow1.jpg"
import Istanbul1 from "../../assets/istanbul/istanbul1.jpg"
import Venice1 from "../../assets/venice/venice1.jpg"
import Rome1 from "../../assets/rome/romeImage1.jpg"
import Raykjavik1 from "../../assets/raykjavik/raykjavik1.jpg"



let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]
let touristName = ["Ajanta Caves","Eiffel Tower","Great Wall of China","Elephanta Caves","Statue of Liberty","Bara Imambara","İstanbul","Hawa Mahal"]



const TopDestinations = ({item}) => {


    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [productimage, setProductImage] = useState(arr[Math.floor(Math.random()*arr.length)])
    const [productnames, setProductName] = useState(touristName[Math.floor(Math.random()*touristName.length)])


  const clickHandler = () => {
    dispatch(filterProductByCityAction(item))
    navigate("/")
  }

  return (
    <Box
                className="1stImage"
                sx={{
                  width: {xs:"150px",md:"250px"},
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  opacity: 0.7,
                  "&:hover": { cursor: "pointer", opacity: 1 },
                }}
                onClick={clickHandler}
              >
                <Box
                  component={"img"}
                  src={item == "London" ? London1 : item == "Rome" ? Rome1 : item == "Krakow" ? Krakow1 : item == "Florence" ? Florence1 : item == "Edinburgh" ? Edenburgh1 : item == "venice" ? Venice1 : item == "raykjavik" ? Raykjavik1 : item == "Amsterdam" ? Amsterdam1 : item == "istanbul" ? Istanbul1 : Dubai1}
                  alt="destinationPlaces"
                  sx={{
                    width: {xs:"150px",md:"250px"},
                    height:{xs:"100px",md:"120px"},
                    borderRadius: "20px",
                  }}
                />
                <Typography
                  sx={{
                    fontSize: "25px",
                    fontWeight: "bold",
                    color: "white",
                    position: "absolute",
                    fontSize:{xs:"16px",md:"18px"}
                  }}
                >
                  {item}
                </Typography>
              </Box>
  )
}

export default TopDestinations