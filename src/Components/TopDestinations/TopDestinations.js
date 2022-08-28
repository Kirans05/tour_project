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
                  src={productimage}
                  alt="destinationPlaces"
                  sx={{
                    width: {xs:"150px",md:"250px"},
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