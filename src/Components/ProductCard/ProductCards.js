import { Box, Rating, Typography } from '@mui/material'
import React, { useEffect, useState } from "react";
import Image1 from "../../images/img1.webp";
import Image2 from "../../images/img2.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import { useNavigate } from "react-router-dom";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {useSelector, useDispatch} from "react-redux"
import axios from "axios"
import { singleProductReducer } from '../../redux/reducer/reducer';
import { individualProductAction } from '../../redux/action/index';



const ProductCards = ({item}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <Box
    className="firstImage"
    sx={{
      display: "flex",
      flexDirection: "row",
      columnGap: { xs: 2, md: 3 },
      padding: { xs: "1%", md: "2%" },
      "&:hover": {
        cursor: "pointer",
        boxShadow: "0px 0px 5px 0px #505752",
      },
    }}
  >
    <Box className="imgBox"
    sx={{
      maxWidth: { xs: "130px", md: "250px" },
      minWidth: { xs: "130px", md: "250px" },
      maxHeight: { xs: "150px", md: "250px" },
      borderRadius: "20px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContent:"flex-start",
      position:"relative",
    }}
    >

    <Box
      component={"img"}
      src={Image1}
      alt="place image"
      sx={{
        maxWidth: { xs: "100%", md: "100%" },
        maxHeight: { xs: "100%", md: "100%" },
        minHeight: { xs: "100%", md: "100%" },
        borderRadius: "20px",
      }}
    />
      <Box className="wishlistIcon"
      sx={{
        display:"flex",
        flexDirection:"row",
        position:"absolute",
        right:"10px",
        top:"10px"
      }}
      >
          {/* <FavoriteIcon sx={{
            color:"red",
            display:"flex"
          }}/> */}
          <FavoriteBorderIcon  sx={{
            display: "flex" 
          }}/>
      </Box>
    </Box>
    <Box
      className="placeDetails"
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        padding: { xs: "0", md: "1%" },
        width: "900px",
        columnGap: 2,
      }}
      onClick={() => {
        if(localStorage.getItem("accessToken") != null){
        dispatch(individualProductAction(item))
        navigate("/TourDeatils")
        }else{
          navigate("/signup")
        }

      }}
      // onClick={()=>productClicked("item")}
    >
      <Box
        className="placeDescriptions"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          rowGap: { xs: 0, md: 1 },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "16px", md: "20px" },
            fontWeight: "bold",
          }}
        >
          {item.name}
        </Typography>
        <Box
          className="ratingBox"
          sx={{ display: "flex", columnGap: 1 }}
        >
          <Rating
            name="read-only"
            value={4}
            readOnly
            sx={{ fontSize: { xs: "15px", md: "20px" } }}
          />
          <Typography
            sx={{ fontSize: { xs: "15px", md: "16px" } }}
          >
            3047
          </Typography>
        </Box>
        <Box
          className="aboutPlace"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          <Typography
            sx={{ fontSize: "16px", display: "inline-block" }}
          >
            {item.description}
            <span className="more">more</span>
          </Typography>
        </Box>
        <Box
          className="AccessTime"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <AccessTimeIcon
            sx={{ fontSize: { xs: "15px", md: "20px" } }}
          />
          <Typography
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            12 hours 30 minutes
          </Typography>
        </Box>
        <Box
          className="concellationBox"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            alignItems: "center",
          }}
        >
          <CheckIcon
            sx={{ fontSize: { xs: "15px", md: "20px" } }}
          />
          <Typography
            sx={{ fontSize: { xs: "14px", md: "16px" } }}
          >
            Free Cancellation
          </Typography>
        </Box>
      </Box>
      <Box
        className="PriceDetails"
        sx={{
          display: { xs: "flex", md: "flex" },
          flexDirection: { xs: "row", md: "column" },
          justifyContent: { xs: "flex-start", md: "flex-start" },
          alignItems: { xs: "center", md: "flex-end" },
          columnGap: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
          from
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            columnGap:1
          }}
        >
          {/* <CurrencyRupeeIcon sx={{ fontSize: "19px" }} /> */}
          <Typography sx={{fontSize:{xs:"14px",md:"16px"}}}>{item.currency}</Typography>
          <Typography
            sx={{ fontSize: { xs: "15px", md: "20px" } }}
          >
            {item.price}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
  )
}

export default ProductCards