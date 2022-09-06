import {
  Alert,
  Box,
  Breadcrumbs,
  Button,
  Divider,
  List,
  ListItem,
  ListSubheader,
  Menu,
  MenuItem,
  Rating,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Header from "../HeaderComponents/Header";
import "./TourDeatils.css"
import Image1 from "../../assets/images/img1.webp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { DesktopDatePicker, LocalizationProvider, MonthPicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import IosShareIcon from "@mui/icons-material/IosShare";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import SafetyCheckIcon from "@mui/icons-material/SafetyCheck";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AdUnitsIcon from "@mui/icons-material/AdUnits";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import { display } from "@mui/system";
import { Link, useLocation, useNavigate } from "react-router-dom";
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {useSelector,useDispatch} from "react-redux"
import {addTravelMembers, booking_date_day, cratItemReducer, singleProductReducer,travelDetails} from "../../redux/reducer/reducer"
import {addChild, removeChild, addAdults, removeAdults, tourBookingDate, cartItemAction} from "../../redux/action/index"
import CloseIcon from "@mui/icons-material/Close";
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";

import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import ImagesLists from "../../Components/ImagesList/ImagesLists";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import EmailIcon from '@mui/icons-material/Email';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import Footer from "../FooterComponents/Footer";
import { Parser } from 'html-to-react'


import Amsterdam1 from "../../assets/amsterdam/amsterdam1.jpg"
import Amsterdam2 from "../../assets/amsterdam/amsterdam2.jpg"
import Amsterdam3 from "../../assets/amsterdam/amsterdam3.jpg"
import Amsterdam4 from "../../assets/amsterdam/amsterdam4.jpg"
import Amsterdam5 from "../../assets/amsterdam/amsterdam5.jpg"
import Amsterdam6 from "../../assets/amsterdam/amsterdam6.jpg"
import Amsterdam7 from "../../assets/amsterdam/amsterdam7.jpg"
import Amsterdam8 from "../../assets/amsterdam/amsterdam8.jpg"
import Amsterdam9 from "../../assets/amsterdam/amsterdam9.jpg"

// dubai images
import Dubai1 from "../../assets/dubai/dubai1.jpg"
import Dubai2 from "../../assets/dubai/dubai2.jpg"
import Dubai3 from "../../assets/dubai/dubai3.jpg"
import Dubai4 from "../../assets/dubai/dubai4.jpg"
import Dubai5 from "../../assets/dubai/dubai5.jpg"

// edenburgh images
import Edenburgh1 from "../../assets/edenburgh/edenburgh1.jpg"
import Edenburgh2 from "../../assets/edenburgh/edenburgh2.jpg"
import Edenburgh3 from "../../assets/edenburgh/edenburgh3.jpg"
import Edenburgh4 from "../../assets/edenburgh/edenburgh4.jpg"
import Edenburgh5 from "../../assets/edenburgh/edenburgh5.jpg"
import Edenburgh6 from "../../assets/edenburgh/edenburgh6.jpg"
import Edenburgh7 from "../../assets/edenburgh/edenburgh7.jpg"
import Edenburgh8 from "../../assets/edenburgh/edenburgh8.jpg"

// florence images
import Florence1 from "../../assets/florence/florence1.jpg"
import Florence2 from "../../assets/florence/florence2.jpg"
import Florence3 from "../../assets/florence/florence3.jpg"
import Florence4 from "../../assets/florence/florence4.jpg"
import Florence5 from "../../assets/florence/florence5.jpg"
import Florence6 from "../../assets/florence/florence6.jpg"
import Florence7 from "../../assets/florence/florence7.jpg"


// istanbul images
import Istanbul1 from "../../assets/istanbul/istanbul1.jpg"
import Istanbul2 from "../../assets/istanbul/istanbul2.jpg"
import Istanbul3 from "../../assets/istanbul/istanbul3.jpg"
import Istanbul4 from "../../assets/istanbul/istanbul4.jpg"
import Istanbul5 from "../../assets/istanbul/istanbul5.jpg"

// krakow
//  krakow imamges
import Krakow1 from "../../assets/krakow/krakow1.jpg"
import Krakow2 from "../../assets/krakow/krakow2.jpg"
import Krakow3 from "../../assets/krakow/krakow3.jpg"
import Krakow4 from "../../assets/krakow/krakow4.jpg"
import Krakow5 from "../../assets/krakow/krakow5.jpg"
import Krakow6 from "../../assets/krakow/krakow6.jpg"
import Krakow7 from "../../assets/krakow/krakow7.jpg"
import Krakow8 from "../../assets/krakow/krakow8.jpg"


// london images
import London1 from "../../assets/london/london1.jpg"
import London2 from "../../assets/london/london2.jpg"
import London3 from "../../assets/london/london3.jpg"
import London4 from "../../assets/london/london4.jpg"
import London5 from "../../assets/london/london5.jpg"
import London6 from "../../assets/london/london6.jpg"
import London7 from "../../assets/london/london7.jpg"
import London8 from "../../assets/london/london8.jpg"

// raykjavik images
import Raykjavik1 from "../../assets/raykjavik/raykjavik1.jpg"
import Raykjavik2 from "../../assets/raykjavik/raykjavik2.jpg"
import Raykjavik3 from "../../assets/raykjavik/raykjavik3.jpg"
import Raykjavik4 from "../../assets/raykjavik/raykjavik4.jpg"
import Raykjavik5 from "../../assets/raykjavik/raykjavik5.jpg"
import Raykjavik6 from "../../assets/raykjavik/raykjavik6.jpg"
import Raykjavik7 from "../../assets/raykjavik/raykjavik7.jpg"
import Raykjavik8 from "../../assets/raykjavik/raykjavik8.jpg"

//  rome images
import Rome1 from "../../assets/rome/romeImage1.jpg"
import Rome2 from "../../assets/rome/romeImage2.jpg"
import Rome3 from "../../assets/rome/romeImage3.jpg"
import Rome4 from "../../assets/rome/romeImage4.jpg"
import Rome5 from "../../assets/rome/romeImage5.jpg"
import Rome6 from "../../assets/rome/romeImage6.jpg"
import Rome7 from "../../assets/rome/romeImage7.jpg"
import Rome8 from "../../assets/rome/romeImage8.jpg"

// venice images
import Venice1 from "../../assets/venice/venice1.jpg"
import Venice2 from "../../assets/venice/venice2.jpg"
import Venice3 from "../../assets/venice/venice3.jpg"
import Venice4 from "../../assets/venice/venice4.jpg"
import Venice5 from "../../assets/venice/venice5.jpg"
import Venice6 from "../../assets/venice/venice6.jpg"
import Venice7 from "../../assets/venice/venice7.jpg"


import Turkey1 from "../../assets/turkey/turkey1.jpg"
import Turkey2 from "../../assets/turkey/turkey2.jpg"
import Turkey3 from "../../assets/turkey/turkey3.webp"
import Turkey4 from "../../assets/turkey/turkey4.jpg"
import Turkey5 from "../../assets/turkey/turkey5.jpg"
import axios from "axios";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';


// let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]


// let arrList = [Travel4,Travel3, Travel6, Travel8, Travel9,Travel11]




let AmsertdamArr = [Amsterdam1, Amsterdam2, Amsterdam3, Amsterdam4, Amsterdam5, Amsterdam6, Amsterdam7, Amsterdam8, Amsterdam9]

let DubaiArr = [Dubai1, Dubai2, Dubai3, Dubai4, Dubai5]

let EdenBurghArr = [Edenburgh1, Edenburgh2, Edenburgh3, Edenburgh4, Edenburgh5, Edenburgh6, Edenburgh7, Edenburgh8]

let FlorenceArr = [Florence1, Florence2, Florence3, Florence4, Florence5, Florence6, Florence7]

let IstanBulArr = [Istanbul1, Istanbul2, Istanbul3, Istanbul4, Istanbul5]

let KrakowArr = [Krakow1, Krakow2, Krakow3, Krakow4, Krakow5, Krakow6, Krakow7, Krakow8]

let LondonArr = [London1, London2, London3, London4, London5, London6, London7, London8]

let raykjavikArr = [Raykjavik1, Raykjavik2, Raykjavik3, Raykjavik4, Raykjavik5, Raykjavik6, Raykjavik7, Raykjavik8]

let RomeArr = [Rome1, Rome2, Rome3, Rome4, Rome5, Rome6, Rome7, Rome8]

let VeniceArr = [Venice1, Venice2, Venice3, Venice4, Venice5, Venice6, Venice7]

let TurkeyArr = [Turkey1, Turkey2, Turkey3, Turkey4, Turkey5]
const Base_url = process.env.REACT_APP_Axios_Base_urls








const TourDetails = () => {




  const memberPresentstate = useSelector((state) => state.addTravelMembers)
  const booking_dateDetails = useSelector((state) => state.booking_date_day)
  const singleTourDetails = useSelector((state) => state.singleProductReducer)
  const cartItems = useSelector((state) => state.cratItemReducer)
  const travellerData = useSelector((state) => state.travelDetails)
  const [EurPrice, setEuroPrice] = useState("") 
  const [verticalImages, setVerticalImages] = useState([])
  const [tourImage, setTourImage] = useState(singleTourDetails.imageUrl)
  const [imageIndex, setImageIndex] = useState(0)


  const dispatch = useDispatch()
  const item = singleTourDetails

  // const [productImage, setProductImage] = useState(arr[Math.floor(Math.random() * arr.length)]) 

  const [coopyState, setCopyState] = useState({
    value: `${window.location.href}`,
    copied: false,
  })


  // redux states and dispatch functions
 


  const navigate = useNavigate();
  const [value, setValue] = React.useState(new Date());
  const [Availability, setAvailability] = useState(false);
  const [FirstTour_sightseeingState, setFirstTour_sightseeingState] =
    useState(null);
    const [SnakBarOpen, setSnakBarOpen] = React.useState(false);
  const [alertMessage, setAlertMessage] = useState("")
  const [wishListitem, setwishListItem] = useState(false)
  const [reRender, setReRender] = useState(false)

  const handleSnakBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnakBarOpen(false);
  };



  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorElShare, setAnchorElShare] = React.useState(null);
  const open = Boolean(anchorEl);
  const openShare = Boolean(anchorElShare);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


const handleShareClickOption = (event) => {
  setAnchorElShare(event.currentTarget);
}

  const handleShareOptions = () => {
    setAnchorElShare(null);
  }

  const handleChange = (newValue) => {
    dispatch(tourBookingDate(newValue))
    setValue(newValue);
  };


  const checkWishListAdded = () => {
      let filterElement = cartItems.filter(product => product.id == singleTourDetails.id)
      if(filterElement.length){
        setwishListItem(true)
      }else{
        setwishListItem(false)
      }
  }


const addItemToWishList = () => {
  if (cartItems.length == 0) {
    //  adding cart item for first time
    dispatch(cartItemAction([singleTourDetails]));
  } else {
    //  checking cartItem if it is present or not
    let filterProduct = cartItems.filter(
      (product) => product.id == singleTourDetails.id
    );
    if (filterProduct.length == 0) {
      //  if it is not present we are adding it
      dispatch(cartItemAction([...cartItems, singleTourDetails]));
    } else {
      //  if it is present we are removing it
      let filterCurrentItem = cartItems.filter(
        (product) => product.id != singleTourDetails.id
      );
      dispatch(cartItemAction(filterCurrentItem));
    }
  }
  setReRender(!reRender)
}



const imageChanger =  (imageUrl, index) => {
  if(index > 0){
    setImageIndex(index)
    setTourImage(imageUrl)
  }else{
    setImageIndex(0)
    setTourImage(singleTourDetails.imageUrl)
  }
} 


const arrowImageChangerRight = () => {
  if(imageIndex == 0){
    setImageIndex(1)
    setTourImage(`${Base_url}/tour/image/${verticalImages[0].id}`)
  }else if(imageIndex == 1){
    setImageIndex(2)
    setTourImage(`${Base_url}/tour/image/${verticalImages[1].id}`)
  }else if(imageIndex == 2){
    setImageIndex(3)
    setTourImage(`${Base_url}/tour/image/${verticalImages[2].id}`)
  }else if(imageIndex == 3){
    setImageIndex(4)
    setTourImage(`${Base_url}/tour/image/${verticalImages[3].id}`)
  }else if(imageIndex == 4){
    setImageIndex(5)
    setTourImage(`${Base_url}/tour/image/${verticalImages[4].id}`)
  }else if(imageIndex == 5){
    setImageIndex(0)
    setTourImage(singleTourDetails.imageUrl)
  }
}



const arrowImageChangerLeft = () => {
  if(imageIndex == 0){
    setImageIndex(5)
    setTourImage(`${Base_url}/tour/image/${verticalImages[4].id}`)
  }else if(imageIndex == 5){
    setImageIndex(4)
    setTourImage(`${Base_url}/tour/image/${verticalImages[3].id}`)
  }else if(imageIndex == 4){
    setImageIndex(3)
    setTourImage(`${Base_url}/tour/image/${verticalImages[2].id}`)
  }else if(imageIndex == 3){
    setImageIndex(2)
    setTourImage(`${Base_url}/tour/image/${verticalImages[1].id}`)
  }else if(imageIndex == 2){
    setImageIndex(1)
    setTourImage(`${Base_url}/tour/image/${verticalImages[0].id}`)
  }else if(imageIndex == 1){
    setImageIndex(0)
    setTourImage(singleTourDetails.imageUrl)
  }
}




const fetchVerticalImages = async () => {
  let option = {
    url:`${Base_url}/tour/get-product-images?id=${localStorage.getItem("tourId")}`,
    method:"GET",
    headers:{
      "content-type":"application/json",
      "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
    }
  }


  try{
    let {data} = await axios(option)
    if(data.status == "success"){
      setVerticalImages(data.data.images)
    }
  }catch(error){

  }
}


const fetchIdividualTour = async () => {
    let options = {
      url:`${Base_url}/tour/product?id=${localStorage.getItem("tourId")}`,
      method:"GET",
      headers:{
        "content-type":"application/json",
        "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
      }
    }

    try{
      let {data} = await axios(options)
      console.log(data)
      // dispatch(individualProductAction(item));
    }catch(error){

    }
}


useEffect(()=>{
  // fetchIdividualTour()
  fetchVerticalImages()
  checkWishListAdded()
},[reRender])


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        className="mainBody"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          // width: "100%",
        }}
      >
        <Header />
        <Box
        sx={{paddingLeft:"6%"}}
        >
        <Breadcrumbs aria-label="breadcrumb">
            <Typography color="text.primary" sx={{fontSize:{xs:"12px",md:"16px","&:hover":{cursor:"pointer",textDecoration:"underLine"}}}}
            onClick={()=>navigate("/dashBoard")}
            >DashBoard</Typography>
            <Typography color="text.primary" sx={{fontSize:{xs:"12px",md:"16px","&:hover":{cursor:"pointer",textDecoration:"underLine"}}}}
            onClick={()=>navigate("/dashBoard")}
            >Tours, Sightseeing & Cruises</Typography>
        </Breadcrumbs>
        </Box>
        <Box
          className="tourDetailsBox"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
            padding: { xs: "0%", md: "0% 6% 0% 6%" },
            width: { xs: "100%", md: "88%" },
          }}
        >
          <Box className="PlaceTitTle">
            <Typography sx={{ fontSize: { xs: "20px", md: "30px" } ,
          padding:{xs: "2% 6% 0% 6%",md:"0%"}
          }}>
              {singleTourDetails.name}
            </Typography>
          </Box>
          <Box
            className="ratings&TourDetails"
            sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}
          >
            <Box
              className="ratings"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding:{xs: "0% 6% 0% 6%",md:"0%"}
              }}
            >
              <Box
                className="ratings&reviewCount"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  columnGap: 1,
                  alignItems: "center",
                }}
              >
                <Rating
                  name="read-only"
                  value={singleTourDetails.stars}
                  readOnly
                  sx={{ fontSize: { xs: "20px", md: "20px" } }}
                />
                <Typography
                  sx={{
                    "&:hover": { cursor: "pointer" },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  3046 Reviews
                </Typography>
              </Box>
              <Box
                className="share&saveToWatchList"
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "row",
                  columnGap: 2,
                }}
              >
                {/* share options */}
                <Box
                  className="share"
                  sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
                  onClick={handleShareClickOption}
                >
                  <IosShareIcon />
                  <Typography
                    sx={{
                      "&:hover": { cursor: "pointer" },
                      fontSize: { xs: "16px", md: "20px" },
                    }}
                  >
                    Share
                  </Typography>
                </Box>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorElShare}
                    open={openShare}
                    onClose={handleShareOptions}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    sx={{
                      marginTop:{xs:"5px",md:"5px"}
                    }}
                  >
                    <MenuItem
                      sx={{
                        width: {xs:"100px",md:"150px"},
                        "&:hover": {
                          cursor: "pointer",
                          backgroundColor: "white",
                        },
                      }}
                    >
                      <Box
                        className="copyLinkOptions"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: { xs: "100%", md: "100%" },
                          columnGap:1
                        }}
                      >
                        <ContentCopyIcon />
                        <CopyToClipboard text={coopyState.value}
          onCopy={() => setCopyState({...coopyState,copied: true})}>
                        <Typography>Copy Link</Typography>
          </CopyToClipboard>
            
                      </Box>
                    </MenuItem>
                    {/* <MenuItem
                      sx={{
                        width: {xs:"100px",md:"150px"},
                        "&:hover": {
                          cursor: "pointer",
                          backgroundColor: "white",
                        },
                      }}
                    >
                    <Box
                        className="copyLinkOptions"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-start",
                          width: { xs: "100%", md: "100%" },
                          columnGap:1
                        }}
                      >
                        <EmailIcon />
                        <Typography>Email</Typography>
                     
                      </Box>
                    </MenuItem> */}
                  </Menu>



                    {/* save to wishlist options */}
                <Box
                  className="saveToWishList"
                  sx={{ display: "flex", flexDirection: "row", columnGap: 1,
                "&:hover":{cursor:"pointer"}
                }}
                  onClick={addItemToWishList}
                >
                  <Box className="wishListIcon">
                  <FavoriteBorderIcon  sx={{
                    display:!wishListitem ? "flex" : "none"
                  }}/>
                  <FavoriteIcon  sx={{
                    color:"red",
                    display:wishListitem ? "flex" : "none"
                  }}/>
                  </Box>
                  <Typography
                    sx={{
                      "&:hover": { cursor: "pointer" },
                      fontSize: { xs: "16px", md: "20px" },
                    }}
                  >
                    Save To WishList
                  </Typography>
                </Box>
              </Box>
            </Box>

            {/* image and the pricing details */}
            <Box
              className="placeImages&PriceDetails"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                alignItems: "center",
                width: "100%",
                height: "100%",
                columnGap: 3,
                rowGap: { xs: 2, md: 0 },
              }}
            >
              {/* {
                item.city == "London" ?
                <Box
                className="verticalImages"
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  rowGap: 2,
                  alignItems: "center",
                  width:"15%"
                }}
              >
               {
                LondonArr.map((item,index) => {
                  if(index < 5){
                    return <ImagesLists  key={index}  item={item} />
                  }
                })
               } 
              
              </Box>
              : item.city == "Rome" ?
              <Box
              className="verticalImages"
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                rowGap: 2,
                alignItems: "center",
                width:"15%"
              }}
            >
             {
              RomeArr.map((item,index) => {
                if(index < 5){
                  return <ImagesLists  key={index}  item={item}/>
                }
              })
             } 
            
            </Box>
             : item.city == "Krakow"?
             <Box
             className="verticalImages"
             sx={{
               display: { xs: "none", md: "flex" },
               flexDirection: "column",
               rowGap: 2,
               alignItems: "center",
               width:"15%"
             }}
           >
            {
             KrakowArr.map((item,index) => {
              if(index < 5){
                return <ImagesLists  key={index}  item={item}/>
              }
             })
            } 
           
           </Box>
           : item.city == "Florence" ?
           <Box
           className="verticalImages"
           sx={{
             display: { xs: "none", md: "flex" },
             flexDirection: "column",
             rowGap: 2,
             alignItems: "center",
             width:"15%"
           }}
         >
          {
           FlorenceArr.map((item,index) => {
            if(index < 5){
              return <ImagesLists  key={index}  item={item}/>
            }
           })
          } 
         
            </Box>
            : item.city == "Edinburgh" ?
            <Box
            className="verticalImages"
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              rowGap: 2,
              alignItems: "center",
              width:"15%"
            }}
          >
           {
            EdenBurghArr.map((item,index) => {
              if(index < 5){
                return <ImagesLists  key={index}  item={item}/>
              }
            })
           } 
          
          </Box>
          : item.city == "venice" ?
          <Box
          className="verticalImages"
          sx={{
            display: { xs: "none", md: "flex" },
            flexDirection: "column",
            rowGap: 2,
            alignItems: "center",
            width:"15%"
          }}
        >
         {
          VeniceArr.map((item,index) => {
            if(index < 5){
              return <ImagesLists  key={index}  item={item}/>
            }
          })
         } 
        
        </Box>
        : item.city == "Raykjavik" ? 
        <Box
        className="verticalImages"
        sx={{
          display: { xs: "none", md: "flex" },
          flexDirection: "column",
          rowGap: 2,
          alignItems: "center",
          width:"15%"
        }}
      >
       {
        raykjavikArr.map((item,index) => {
          if(index < 5){
            return <ImagesLists  key={index}  item={item}/>
          }
        })
       } 
      
      </Box>
              : item.city == "Amsterdam" ?
              <Box
              className="verticalImages"
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                rowGap: 2,
                alignItems: "center",
                width:"15%"
              }}
            >
             {
              AmsertdamArr.map((item,index) => {
                if(index < 5){
                  return <ImagesLists  key={index}  item={item}/>
                }
              })
             } 
            
            </Box>
                  : item.city == "Istanbul" ?
                  <Box
                  className="verticalImages"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    flexDirection: "column",
                    rowGap: 2,
                    alignItems: "center",
                    width:"15%"
                  }}
                >
                 {
                  IstanBulArr.map((item,index) => {
                    if(index < 5){
                      return <ImagesLists  key={index}  item={item}/>
                    }
                  })
                 } 
                
                </Box>
                :  item.city == "Dubai" ?
                <Box
                className="verticalImages"
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  rowGap: 2,
                  alignItems: "center",
                  width:"15%"
                }}
              >
               {
                DubaiArr.map((item,index) => {
                  if(index < 5){
                    return <ImagesLists  key={index}  item={item}/>
                  }
                })
               } 
              
              </Box>
              :  <Box
              className="verticalImages"
              sx={{
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                rowGap: 2,
                alignItems: "center",
                width:"15%"
              }}
            >
             {
              TurkeyArr.map((item,index) => {
                if(index < 5){
                  return <ImagesLists  key={index}  item={item}/>
                }
              })
             } 
            
            </Box>
              } */}




              {/* <Box
                className="verticalImages"
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  rowGap: 2,
                  alignItems: "center",
                  width:"15%"
                }}
              >
               {
                arrList.map((item,index) => {
                  if(index < 5){
                    return <ImagesLists  key={index}  item={item}/>
                  }
                })
               } 
              
              </Box> */}

          <Box
                className="verticalImages"
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  rowGap: 2,
                  alignItems: "center",
                  width:"15%"
                }}
              >
               {
                verticalImages.map((item,index) => {
                    return <ImagesLists  key={index}  item={item} imageChanger={imageChanger} index={index+1}/>
                })
               } 
              
              </Box>


               <Box
               sx={{
                maxWidth:{xs:"100%",md:"50%"},
                minWidth:{xs:"100%",md:"50%"},
                minHeight:{xs:"100%",md:"555px"},
                maxHeight:{xs:"100%",md:"555px"},
                "&:hover":{cursor:"pointer"},
                position:"relative"
              }}
               >
              <Box
                className="placeImage"
                component={"img"}
                src={tourImage}
                alt="Place Image"
                sx={{
                  maxWidth:{xs:"100%",md:"100%"},
                  minWidth:{xs:"100%",md:"100%"},
                  minHeight:{xs:"300px",md:"555px"},
                  maxHeight:{xs:"300px",md:"555px"},
                  "&:hover":{cursor:"pointer"}
                }}
                onClick={()=>imageChanger("not",0)}
              />
              <KeyboardArrowLeftIcon 
              sx={{
                fontSize:{xs:"25px",md:"50px"},
                position:"absolute",
                top:"50%",
                left:{xs:"3%",md:"1%"},
                border:"1px solid white",
                borderRadius:"50%",
                backgroundColor:"white",
                opacity:0.8,
                // display:{xs:"none",md:"flex"}
              }}
              onClick={arrowImageChangerLeft}
              />
              <KeyboardArrowRightIcon 
               sx={{
                fontSize:{xs:"25px",md:"50px"},
                position:"absolute",
                top:"50%",
                right:{xs:"3%",md:"1%"},
                border:"1px solid white",
                borderRadius:"50%",
                backgroundColor:"white",
                opacity:0.8,
                // opacity:0.8,display:{xs:"none",md:"flex"}
              }}
              onClick={arrowImageChangerRight}
              />
               </Box>
              <Box
                className="PriceDetails"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: { xs: "90%", md: "40%" },
                  padding: { xs: "5% 5% 5% 5%", md: "2% 3% 3% 3%" },
                  backgroundColor: "#ebeff5",
                  rowGap: 2,
                  position: "relative",
                  height:{xs:"100%",md:"490px"}

                }}
              >
                <Box
                  className="price"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 1,
                    alignItems: "center",
                  }}
                >
                  <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                    from
                  </Typography>
                  <Typography
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      fontWeight: "bold",
                    }}
                  >
                    {/* <CurrencyRupeeIcon /> 8719.53 */}
                    {travellerData.currencyCode} {travellerData.currencyCode == "GBP" ? item.price : (travellerData.currencyValue*item.price).toFixed(2)}
                  </Typography>
                </Box>
                <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  Lowest Price Guarantee
                </Typography>
                <Box
                  className="date&TravelleerDeatils"
                  sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
                >
                  <Typography
                    sx={{
                      fontWeight: "bold",
                      fontSize: { xs: "16px", md: "20px" },
                    }}
                  >
                    Select Date and Travellers
                  </Typography>
                  <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={value}
                    onChange={handleChange}
                    disablePast
                    renderInput={(params) => (
                      <TextField
                        sx={{ backgroundColor: "white" }}
                        {...params}
                      />
                    )}
                  />
                  {/* <MonthPicker
                    inputFormat="MM"
                    value={value}
                    onChange={handleChange}
                    renderInput={(params) => (
                      <TextField
                        sx={{ backgroundColor: "white" }}
                        {...params}
                      />
                    )}
                  /> */}

                  {/* no of people adult or child */}
                  <Box
                    className="noOfPeople"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 1,
                      border: "1px solid #dcdee0",
                      padding: "2%",
                      "&:hover": { cursor: "pointer" },
                      backgroundColor: "white",
                    }}
                    // onClick={()=>setmenuVisible(!menuVisible)}
                    onClick={handleClick}
                  >
                    <PermIdentityIcon />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      {memberPresentstate.adult} Adult, {memberPresentstate.child} Child
                    </Typography>
                  </Box>

                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      "aria-labelledby": "basic-button",
                    }}
                    sx={{
                      marginTop:{xs:"5px",md:"5px"}
                    }}
                  >
                    <MenuItem
                      sx={{
                        width: {xs:"320px",md:"360px"},
                        "&:hover": {
                          cursor: "pointer",
                          backgroundColor: "white",
                        },
                      }}
                    >
                      <Box
                        className="Adults"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: { xs: "100%", md: "100%" },
                        }}
                      >
                        <Box
                          className="leftPart"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: "12px", md: "14px" },
                            }}
                          >
                            Adult (18-110)
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { xs: "12px", md: "14px" },
                            }}
                          >
                            Minimum: 1, Maximum: 15
                          </Typography>
                        </Box>
                        <Box
                          className="rightPart"
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            columnGap: 2,
                          }}
                        >
                          <RemoveCircleOutlineIcon
                            sx={{
                              fontSize: { xs: "16px", md: "20px" },
                            }}
                           
                            onClick={()=>{
                              if(memberPresentstate.adult > 1){
                                dispatch(removeAdults(1))
                              }
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: { xs: "12px", md: "14px" },
                            }}
                          >
                            {memberPresentstate.adult}
                          </Typography>
                          <AddCircleOutlineIcon
                            sx={{
                              fontSize: { xs: "16px", md: "20px" },
                            }}
                            onClick={()=>{
                              if(memberPresentstate.adult < 15){
                                dispatch(addAdults(1))
                              }
                            }}
                          />
                        </Box>
                      </Box>
                    </MenuItem>
                    <MenuItem
                      sx={{
                        width: {xs:"320px",md:"360px"},
                        "&:hover": {
                          cursor: "pointer",
                          backgroundColor: "white",
                        },
                      }}
                    >
                      <Box
                        className="child"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "space-between",
                          width: { xs: "100%", md: "100%" },
                        }}
                      >
                        <Box
                          className="leftPart"
                          sx={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: { xs: "12px", md: "14px" },
                            }}
                          >
                            child (5-17)
                          </Typography>
                          <Typography
                            sx={{
                              fontSize: { xs: "12px", md: "14px" },
                            }}
                          >
                            Minimum: 0, Maximum: 15
                          </Typography>
                        </Box>
                        <Box
                          className="rightPart"
                          sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            columnGap: 2,
                          }}
                        >
                          <RemoveCircleOutlineIcon
                          
                            sx={{
                              fontSize: { xs: "16px", md: "20px" },
                            }}
                            onClick={()=>{
                              if(memberPresentstate.child >0){
                                dispatch(removeChild(1))
                              }
                            }}
                          />
                          <Typography
                            sx={{
                              fontSize: { xs: "12px", md: "14px" },
                            }}
                          >
                            {memberPresentstate.child}
                          </Typography>
                          <AddCircleOutlineIcon
                            sx={{
                              fontSize: { xs: "16px", md: "20px" },
                            }}
                            onClick={()=>{
                              if(memberPresentstate.child < 15){
                                dispatch(addChild(1))
                              }
                            }}
                          />
                        </Box>
                      </Box>
                    </MenuItem>
                  </Menu>

                  {/* check availability button */}
                  <Button
                    color="success"
                    variant="contained"
                    onClick={() => {
                      if(booking_dateDetails.BookDate == ""){
                        setAlertMessage("please select date of booking")
                        setSnakBarOpen(true)
                      }else{
                        setAvailability(!Availability)
                      }
                    }}
                  >
                    Check Availability
                  </Button>
                </Box>
                <Box className="reservationDetailsBox"
                  sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
                >
                  <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                    Reserve Now & Pay Later
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                    Secure your spot while staying flexible
                  </Typography>
                  <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                    Free cancellation
                  </Typography>
                  <Box
                    className="timings&learnMore"
                    sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
                  >
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Up to 24 hours in advance.
                    </Typography>
                    <Typography sx={{ "&:hover": { cursor: "pointer" } }}>
                      Learn more
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box  className="otherDetails"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 2,
            width: { xs: "88%^", md: "88%" },
            padding: { xs: "2% 6% 2% 6%", md: "2% 6% 2% 6%" },
          }}
        >


          {/* left part */}
          <Box
            className="lefthalf"
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              rowGap: 2,
              width: "22%",
            }}
          >
            <Box
              className="LondonTours"
              sx={{
                display: "none",
                flexDirection: "row",
                justifyContent: "flex-start",
                columnGap: 1,
              }}
            >
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" },
            "&:hover":{textDecoration:"underLine",cursor:"pointer"}
            }}
            onClick={()=>navigate("/")}
            // onClick={()=>{
            //   if(FirstTour_sightseeingState == "nothing"){
            //     setFirstTour_sightseeingState("")
            //   }else{
            //     setFirstTour_sightseeingState("nothing")
            //   }
            // }}
            >
                Tours, SightSeeing & Cruises
              </Typography>
              <Box className="arrows"
              sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"flex-start",
                "&:hover":{cursor:"pointer"}
              }}
              // onClick={() => {
              //   if(FirstTour_sightseeingState == null){
              //     setFirstTour_sightseeingState("")
              //   }else{
              //     setFirstTour_sightseeingState(null)
              //   }
              // }}
              >
                <KeyboardArrowDownIcon 
                sx={{
                  display:FirstTour_sightseeingState == null ? "flex":"none"
                }}
                />
                <KeyboardArrowUp 
                sx={{
                  display:FirstTour_sightseeingState !== null ? "flex" : "none" 
                }}
                />
              </Box>
            </Box>

              {/* sub parts of tour, sightseeing and cruises */}
              <Box
                 sx={{
                   width: { xs: "250px", md: "350px" },
                   display: "flex",
                   flexDirection: "column",
                   rowGap: 2,
                 }}
                    role="presentation"
    >
      {/* title */}
      {/* <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: { xs: "25px", md: "30px" } }}
        />
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "22px" },
          }}
        >
          Travel
        </Typography>
      </Box> */}

      {/* back Button */}
      {/* <Box
        className="BackButton"
        sx={{
          display: "flex",
          flexDirection: "row",
          columnGap: 1,
          alignItems: "center",
          paddingLeft: "10%",
        }}
      >
        <KeyboardBackspaceIcon
          sx={{
            "&:hover": { cursor: "pointer" },
            fontSize: { xs: "25px", md: "30px" },
          }}
        />
        <Typography
          sx={{
            fontSize: { xs: "20px", md: "22px" },
          }}
        >
          Back To Main
        </Typography>
      </Box> */}


      {FirstTour_sightseeingState == "" ? (
        <Box
          className="mainTravel&TransporationServices"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
            width:"70%"
          }}
        >
          {/* back Button London Tour*/}
          <Box
            className="mainTour,SightSeeing&Cruises"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              alignItems: "center",
              paddingLeft: "0%",
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={()=>setFirstTour_sightseeingState(null)}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Back To Tour
            </Typography>
          </Box>

          <Box
            className="mainBody"
            sx={{
              paddingLeft: "0%",
              fontSize: "30px",
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
            }}
          >

            {/* Cruises & Sailing*/}
            <Box
              className="Cruises & Sailing"
              onClick={() => setFirstTour_sightseeingState("Cruises & Sailing")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  Cruises & Sailing
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* How To Get Around*/}
            <Box
              className="How To Get Around"
              onClick={() => setFirstTour_sightseeingState("How To Get Around")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  How To Get Around
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Private And Luxury*/}
            <Box
              className="Private And Luxury"
              //  onClick={()=>setFirstTour_sightseeingState("SightSeeing Tours")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  Private And Luxury
                </Typography>
              </Box>
            </Box>

            {/* SightSeeing Tours*/}
            <Box
              className="SightSeeing Tours"
              onClick={() => setFirstTour_sightseeingState("SightSeeing Tours")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  SightSeeing Tours
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>

            {/* Tours By Duration*/}
            <Box
              className="Tours By Duration"
              onClick={() => setFirstTour_sightseeingState("Tours By Duration")}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  sx={{
                    "&:hover": {
                      // textDecoration: "underLine",
                      cursor: "pointer",
                    },
                    fontSize: { xs: "14px", md: "16px" },
                  }}
                >
                  Tours By Duration
                </Typography>
                <Box className="arrows">
                  <KeyboardArrowRightIcon />
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ) : FirstTour_sightseeingState == "Cruises & Sailing" ? (
        <Box
          className="Cruises & Sailing"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "0%",
          }}
        >
          {/* back Button Cruises & Sailing*/}
          <Box
            className="BackButtonCruises & Sailing"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              //  paddingLeft:"10%"
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTour_sightseeingState("")}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
              }}
            >
              Tours, SightSeeing & Cruises
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            All Cruises & Sailing
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Catamaran Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Day Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Dinner Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Gandala Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Night Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Parts of Call Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Share Excursions
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            SightSeeing Cruises
          </Typography>
        </Box>
      ) : FirstTour_sightseeingState == "How To Get Around" ? (
        <Box
          className="How To Get Around"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "0%",
          }}
        >
          {/* back Button How To Get Around*/}
          <Box
            className="BackButtonHow To Get Around"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              //  paddingLeft:"10%"
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTour_sightseeingState("")}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Tours, SightSeeing & Cruises
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            All How To Get Around
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Air Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Bike Rentals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Bike Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Bus Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Car Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Classic Car Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            E-Bike Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Helicopter Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Hot Air Balloon Rides
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Limousine Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Luxury Car Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Mountain Bike Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Pedicab Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Power Boats
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Public Transporatation Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Rail Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Rentals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Road Trip
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Self Giuded Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Speed Boat Rentals
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Vespa, Scooter & Moped Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Walking Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Water Tours
          </Typography>
        </Box>
      ) : FirstTour_sightseeingState == "SightSeeing Tours" ? (
        <Box
          className="SightSeeing Tours"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "0%",
          }}
        >
          {/* back Button SightSeeing Tours*/}
          <Box
            className="BackButtonSightSeeing Tours"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              //  paddingLeft:"10%"
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTour_sightseeingState("")}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Tours, SightSeeing & Cruises
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            All SightSeeing Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Adventure Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            City Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Hop on Hop off Buses
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Night Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Observation Decks
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Private SightSeeing Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            SightSeeing Cruises
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            SightSeeing Passes
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Skip The Line Tickets
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            SkyScrappers & Towers
          </Typography>
        </Box>
      ) : FirstTour_sightseeingState == "Tours By Duration" ? (
        <Box
          className="Tours By Duration"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 3,
            paddingLeft: "0%",
          }}
        >
          {/* back Button Tours By Duration*/}
          <Box
            className="BackButtonTours By Duration"
            sx={{
              display: "flex",
              flexDirection: "row",
              columnGap: 1,
              //  paddingLeft:"10%"
            }}
          >
            <KeyboardBackspaceIcon
              sx={{
                "&:hover": { cursor: "pointer" },
              }}
              onClick={() => setFirstTour_sightseeingState("")}
            />
            <Typography
              sx={{
                fontSize: { xs: "14px", md: "16px" },
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              Tours, SightSeeing & Cruises
            </Typography>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            All Tours By Duration
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Day Trips
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Full-Day Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Half-Day Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Layover Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Multi-Day Tours
          </Typography>
          <Typography
            sx={{
              fontSize: { xs: "14px", md: "16px" },
              "&:hover": {
                cursor: "pointer",
              },
            }}
          >
            Overnight Tours
          </Typography>
        </Box>
      ) : null}
    </Box>



            {/* <Box
              className="Attractions"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography>Attractions</Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Box
              className="Recommendations"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography>Recommendations</Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Box
              className="nearby"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Typography>Nearby</Typography>
              <KeyboardArrowDownIcon />
            </Box> */}
          </Box>


          {/* right part */}
          <Box className="rightHalf"
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: { xs: 3,md:10 },
              width: { xs: "100%", md: "78%" },
            }}
          >
            {/* booking options */}
            <Box
              className="bookingOptions"
              sx={{
                display: Availability ? "flex" : "none",
                flexDirection: "column",
                alignItems: "stretch",
                justifyContent: "center",
                rowGap: 1,
              }}
            >
              <Box className="options1"
                sx={{
                  border: "1px solid #f0efed",
                  "&:hover": { cursor: "pointer" },
                  display:"flex",
                  flexDirection:"column",
                  rowGap:1
                }}
              >
                <Box
                  className="topHalf"
                  sx={{
                    border: "1px solid #f0efed",
                    display: "flex",
                    flexDirection: {xs:"column",md:"row"},
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    padding: "2% 4% 2% 4%",
                    rowGap:1
                  }}
                >
                  <Box className="leftPart"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      rowGap: 2,
                    }}
                  >
                    <Typography>Option1</Typography>
                    <Typography>8 Seater Van Airport Pickup</Typography>
                    <Typography>
                      Up to 8 passengers + 8 medium luggage + 8 hand luggage per
                      group. Pickup included
                    </Typography>
                  </Box>
                  <Box className="rightPart"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: {xs:"flex-start",md:"flex-end"},
                      rowGap: 2,
                    }}
                  >
                    <Box
                      className="priceBox"
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: {xs:"flex-start",md:"flex-end"},
                        rowGap:1
                      }}
                    >
                      <Box
                        className="priceDetails"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "flex-end",
                          rowGap:1,
                          columnGap:1
                        }}
                      >

{/* {travellerData.currencyCode == "GBP" ? item.price : (travellerData.currencyValue*item.price).toFixed(2)} */}

                        {travellerData.currencyCode} 
                        {/* <Typography>{(memberPresentstate.adult*singleTourDetails.price)+(memberPresentstate.child*singleTourDetails.price)}</Typography> */}
                        {/* (memberPresentstate.adult*singleTourDetails.price)+(memberPresentstate.child*singleTourDetails.price) */}
                         {/* <Typography>{travellerData.currencyCode == "GBP" ?(memberPresentstate.adult*singleTourDetails.price)+(memberPresentstate.child*singleTourDetails.price)
                         :  (memberPresentstate.adult*singleTourDetails.price*travellerData.currencyValue)+(memberPresentstate.child*singleTourDetails.price*travellerData.currencyValue).toFixed(2)  }</Typography> */}
                         <Typography
                         sx={{
                          display:travellerData.currencyCode == "GBP" ? "flex" : "none"
                         }}
                         >{(memberPresentstate.adult*singleTourDetails.price)+(memberPresentstate.child*singleTourDetails.price)}</Typography>
                         <Typography
                         sx={{
                          display:travellerData.currencyCode != "GBP" ? "flex":"none"
                         }}
                         >
                        {(memberPresentstate.adult*singleTourDetails.price*travellerData.currencyValue+memberPresentstate.child*singleTourDetails.price*travellerData.currencyValue).toFixed(2)}
                         </Typography>
                      </Box>
                      <Typography>per group (up to 8)</Typography>
                    </Box>
                    {/* <Button variant="outlined" color="warning">
                      Reserve Now & Pay Later
                    </Button> */}
                    <Button
                      variant="contained"
                      color="primary"
                      // onClick={() => navigate("/checkoutPage")}
                      onClick={()=>{
                         if (localStorage.getItem("accessToken") != null) {
            // dispatch(individualProductAction(item));
            navigate("/checkoutPage");
          } else {
            navigate("/signup");
          }
                      }}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
                <Box
                  className="secondHalf"
                  sx={{
                    display: "none",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "2% 4% 2% 4%",
                    border: "1px solid #f0efed",
                  }}
                >
                  <Typography>
                    Reserve Now & Pay Later is an easy way to secure your spot
                    while keeping your plans flexible. Pay at any time up to 2
                    days before your experience. Cancelling is simple too. Learn
                    More
                  </Typography>
                </Box>
              </Box>

              {/* <Box
                className="options2"
                sx={{
                  display: "flex",
                  flexDirection: {xs:"column",md:"row"},
                  alignItems: {xs:"flex-start",md:"center"},
                  justifyContent: "space-between",
                  padding: "2% 3% 2% 3%",
                  border: "1px solid #f0efed",
                  "&:hover": { cursor: "pointer" },
                  rowGap:2
                }}
              >
                <Box
                  className="leftPart"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                  }}
                >
                  <Typography>Options 2</Typography>
                  <Typography>Baby / Child / Booster car seat</Typography>
                </Box>
                <Box
                  className="rightPart"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 1,
                    alignItems: {xs:"flex-start",md:"flex-end"},
                  }}
                >
                  <Box
                    className="priceBox"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <CurrencyRupeeIcon />
                    <Typography>493.27</Typography>
                  </Box>
                  <Typography>per group (up to 4)</Typography>
                </Box>
              </Box>

              <Box
                className="options3"
                sx={{
                  display: "flex",
                  flexDirection: {xs:"column",md:"row"},
                  alignItems: {xs:"flex-start",md:"center"},
                  justifyContent: "space-between",
                  padding: "2% 3% 2% 3%",
                  border: "1px solid #f0efed",
                  "&:hover": { cursor: "pointer" },
                  rowGap:2
                }}
              >
                <Box
                  className="leftPart"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                  }}
                >
                  <Typography>Options 3</Typography>
                  <Typography>MPV+ Airport Pickup</Typography>
                </Box>
                <Box
                  className="rightPart"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 1,
                    alignItems: {xs:"flex-start",md:"flex-end"},
                  }}
                >
                  <Box
                    className="priceBox"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <CurrencyRupeeIcon />
                    <Typography>13318.34</Typography>
                  </Box>
                  <Typography>per group (up to 4)</Typography>
                </Box>
              </Box>

              <Box
                className="options4"
                sx={{
                  display: "flex",
                  flexDirection: {xs:"column",md:"row"},
                  alignItems: {xs:"flex-start",md:"center"},
                  justifyContent: "space-between",
                  padding: "2% 3% 2% 3%",
                  border: "1px solid #f0efed",
                  "&:hover": { cursor: "pointer" },
                  rowGap:2
                }}
              >
                <Box
                  className="leftPart"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 2,
                  }}
                >
                  <Typography>Options 4</Typography>
                  <Typography>MPV Airport Pickup</Typography>
                </Box>
                <Box
                  className="rightPart"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    rowGap: 1,
                    alignItems: {xs:"flex-start",md:"flex-end"},
                  }}
                >
                  <Box
                    className="priceBox"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <CurrencyRupeeIcon />
                    <Typography>12529.11</Typography>
                  </Box>
                  <Typography>per group (up to 4)</Typography>
                </Box>
              </Box> */}
            </Box>

            {/* other details */}
            <Box
              className="safetyMeasures&otherDetails"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                columnGap: 4,
                rowGap: 2,
              }}
            >
              <Box
                className="safettyMeasures"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <SafetyCheckIcon />
                <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  Safety Measures
                </Typography>
              </Box>
              <Box
                className="AccessTime"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <AccessTimeIcon />
                <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  12 hours 30 mintutes (approx.)
                </Typography>
              </Box>
              <Box
                className="mobileTicket"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <SmartphoneIcon />
                <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  Mobile Ticket
                </Typography>
              </Box>
              <Box
                className="Offers"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <QuestionAnswerIcon />
                <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  Offered in : English
                </Typography>
              </Box>
            </Box>

          

<Box >
      {Parser().parse(singleTourDetails.description)}
    </Box>


          </Box>
        </Box>



        <Snackbar open={SnakBarOpen} autoHideDuration={3000} onClose={handleSnakBarClose}>
        <Alert onClose={handleSnakBarClose} severity="warning" sx={{ width: '150%' }}>
        {alertMessage}
        </Alert>
      </Snackbar>
      <Footer />
      </Box>
    </LocalizationProvider>
  );
};

export default TourDetails;
