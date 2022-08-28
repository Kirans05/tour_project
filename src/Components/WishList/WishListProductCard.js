import { Typography, Box, Button, Rating, Divider } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Image2 from "../../assets/images/img2.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { singleProductReducer, cratItemReducer } from '../../redux/reducer/reducer';
import { individualProductAction,cartItemAction } from '../../redux/action/index';
import { useDispatch, useSelector } from 'react-redux';
import CheckIcon from "@mui/icons-material/Check";
import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import { useNavigate } from "react-router-dom";


let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]




const WishListProductCard = ({item}) => {

  const navigate = useNavigate()

  const [productimage, setProductIamge] = useState(arr[Math.floor(Math.random()*arr.length)])
  const myCartItems = useSelector((state) => state.cratItemReducer)
  const dispatch = useDispatch();

  const removeWishListHandler = () => {
    let filterdProducts = myCartItems.filter(product => product.id  != item.id)
    dispatch(cartItemAction(filterdProducts))
  }


  const clickHandler = () => {
    dispatch(individualProductAction(item))
    navigate("/TourDeatils")
  }




  return (
    <Box className='individualProduct'
    sx={{
      width:{xs:"100%",md:"400px"},
      maxHeight:{xs:"100%",md:"460px"},
      minHeight:{xs:"100%",md:"460px"},
      border:"2px solid #f0efed",
      "&:hover":{
        boxShadow:"0px 0px 5px 3px #d9d8d7",
        cursor:"pointer"
      },
      display:"flex",
      flexDirection:{xs:"row",md:"column"},
      columnGap:{xs:2,md:0},
    }}
    onClick={clickHandler}
    >
      <Box className='images&AddToWishList'
      sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        justifyContent:"flex-start",
        position:"relative",
        width:{xs:"170px",md:"400px"},
        height:{xs:"170px",md:"250px"}
      }}
      >
          <Box 
          component={"img"}
          src={productimage}
          alt={"wishListImages"}
          sx={{
            width:{xs:"170px",md:"400px"},
            height:{xs:"170px",md:"250px"}
          }}
          />
          <Box className='favoriteIcons'
          sx={{
            position:"absolute",
            right:"10px",
            top:"10px",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"flex-start",
            "&:hover":{
              cursor:"pointer"
            }
          }}
          onClick={removeWishListHandler}
          >
            <FavoriteIcon 
            sx={{
              color:"red",
              display:"flex"
            }}
            />
            {/* <FavoriteBorderIcon  
            sx={{
              display: "flex"
            }}
            /> */}
          </Box>
      </Box>
      <Box className='tourDescriptions'
      sx={{
          display:"flex",
          flexDirection:"column",
          alignItems:"flex-start",
          justifyContent:"flex-start",
          rowGap:1,
          padding:{xs:"1%",md:"2%"}
      }}
      >
          <Typography
          sx={{
            fontSize:{xs:"14px",md:"16px"}
          }}
          >{item.name}</Typography>
          <Box className='rating&Reviews'
          sx={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"flex-start",
            columnGap:1
          }}
          >
            <Rating name="read-only" value={4} readOnly 
            sx={{
              fontSize:{xs:"16px",md:"18px"}
            }}
            />
            <Typography
            sx={{
              fontSize:{xs:"12px",md:"14px"}
            }}
            >{item.price}</Typography>
          </Box>
          <Box className='accessTimeAndFreeCancellation'>
             <Box className='hoursTime'
          sx={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"flex-start",
            columnGap:1
          }}
          >
            <AccessTimeIcon 
            sx={{
              fontSize:{xs:"11px",md:"12px"}
            }}
            />
            <Typography
            sx={{
              fontSize:{xs:"11px",md:"12px"}
            }}
            >7 hours</Typography>
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
            <CheckIcon sx={{ fontSize: {xs:"11px",md:"12px"} }} />
            <Typography sx={{ fontSize: {xs:"11px",md:"12px"}, }}>
              Free Cancellation
            </Typography>
          </Box>
          </Box>
         
          <Box className='priceDetails'
          sx={{
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"flex-start",
            columnGap:1
          }}
          >
            <Typography
            sx={{
              fontSize:{xs:"12px",md:"10px"}
            }}
            >from </Typography>
            <Box className='price'
            sx={{
              display:"flex",
              flexDirection:"row",
              alignItems:"center",
              justifyContent:"flex-start",
            }}
            >
              {/* <CurrencyRupeeIcon 
              sx={{
                fontSize:{xs:"16px",md:"18px"}
              }}
              /> */}
              <Typography
              sx={{
                marginRight:"2px",
                fontWeight:"bold",
                fontSize:{xs:"14px",md:"16px"}
              }}
              >{item.currency}</Typography>
              <Typography
              sx={{
                fontSize:{xs:"14px",md:"16px"},
                fontWeight:"bold",
              }}
              >{item.price}</Typography>
            </Box>  
          </Box>
    </Box>
  </Box>
  )
}

export default WishListProductCard