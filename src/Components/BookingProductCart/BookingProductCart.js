import React, { useState } from 'react'
import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import { Box, Rating, Typography } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CheckIcon from "@mui/icons-material/Check";



let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]

const BookingProductCart = () => {

    const [productimage, setProductIamge] = useState(arr[Math.floor(Math.random()*arr.length)])


  return (
    <Box className='individualProduct'
    sx={{
      width:{xs:"100%",md:"400px"},
      maxHeight:{xs:"100%",md:"420px"},
      minHeight:{xs:"100%",md:"420px"},
      border:"2px solid #f0efed",
      "&:hover":{
        boxShadow:"0px 0px 5px 3px #d9d8d7",
        cursor:"pointer"
      },
      display:"flex",
      flexDirection:{xs:"row",md:"column"},
      columnGap:{xs:2,md:0},
    }}
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
          // onClick={removeWishListHandler}
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
          >Harry Potter Tour of Warner Bros. Studio with Transport from London</Typography>
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
            >543.4</Typography>
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
              >GBP</Typography>
              <Typography
              sx={{
                fontSize:{xs:"14px",md:"16px"},
                fontWeight:"bold",
              }}
              >453</Typography>
            </Box>  
          </Box>
    </Box>
             </Box>
  )
}

export default BookingProductCart