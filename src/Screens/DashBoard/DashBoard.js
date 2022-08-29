import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  ListItemText,
  Menu,
  MenuItem,
  Radio,
  RadioGroup,
  Rating,
  Slide,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image1 from "../../assets/images/img1.webp";
import Image2 from "../../assets/images/img2.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import HorizontalSlider from "react-horizontal-slider";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
// import ArtCulture from "../Tours Componnets/ArtCulture";
import { useNavigate } from "react-router-dom";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import KeyboardArrowUp from "@mui/icons-material/KeyboardArrowUp";
import "./DashBoard.css";
import Footer from "../FooterComponents/Footer";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {totalProductReducer, displayProductReducer, filterProductByCityReducer} from "../../redux/reducer/reducer"
import {individualProductAction, productAction, displayProductAction, countryListAction, filterProductByCityAction} from "../../redux/action/index"
import {useSelector, useDispatch} from "react-redux"
import axios from "axios"
import Header from "../HeaderComponents/Header";
import ProductCards from "../../Components/ProductCard/ProductCards";
import Skeleton from "../../Components/skeleton/SkeletonPattern";
import SkeletonPattern from "../../Components/skeleton/SkeletonPattern";
import { fontWeight } from "@mui/system";
import { Parser } from 'html-to-react'

// amsterdam images
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




function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 20;
const Base_url = process.env.REACT_APP_Axios_Base_urls




const DashBoard = () => {



  const navigate = useNavigate();
  const [logoutRender, setlogoutRender] = useState(true)
  const totalProductList = useSelector((state) => state.totalProductReducer)
  const allProductList = useSelector((state) => state.displayProductReducer) 
  const selectedCity = useSelector((state) => state.filterProductByCityReducer) 
  const myCartItems = useSelector((state) => state.cratItemReducer);

  
 
  const dispatch = useDispatch()
  const [minPrice, setMInPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10)
  const [rangePrice, setRangePrice] = useState([0,1000])
  const [tripDuration, setTripDuration] = useState([0,12])
  const [tripRating, setTripRatings] = useState(1)
  const [listOfCountries, setListOfCountries] = useState([])
  

  // const [arts_culture, setArts_culture] = useState(true);
  // const [classes_workspaces, setclasses_workspaces] = useState(true);
  // const [food_drink, setFood_drinnk] = useState(true);
  // const [likelyToSellOut, setLikelyToSellOut] = useState(true);
  // const [outDoorActivity, setOutDoorActivity] = useState(true);
  // const [seasonal_specialOcation, setSeasonal_specialOcation] = useState(true);
  // const [ticketsAndPasses, setTicketsAndPasses] = useState(true);
  const [tours_sightseeing, setTours_sightseeing] = useState(false);
  // const [travel_Transportation, setTravel_Transportation] = useState(true);
  // const [uniqueExperience, setUniqueExperience] = useState(true);

  const [value1, setValue1] = React.useState([20, 37]);
  const [dateValue, setDateValue] = useState(new Date());

  const [FirstArtState, setFirstArtState] = useState("");
  const [FirstClass_workshopState, setFirstClass_workshopState] = useState("");
  const [FirstFood_DrinkState, setFirstFood_DrinkState] = useState("");
  const [FirstOutDoorActivitesState, setFirstOutDoorActivitesState] =
    useState("");
  const [FirstSeasonl_SpecialState, setFirstSeasonl_SpecialState] =
    useState("");
  const [FirstTickets_PassesState, setFirstTickets_PassesState] = useState("");
  const [FirstTour_sightseeingState, setFirstTour_sightseeingState] =
    useState("");
  const [FirstTravel_TransportState, setFirstTravel_TransportState] =
    useState("");

  const [secondArtState, setsecondArtState] = useState(true);
  const [secondArtDesignState, setsecondArtDesignState] = useState(true);
  const [secondTourSightSeeingState, setSecondTourSightSeeingState] =
    useState(null);
  const [tourState, setTourState] = useState({
    crusisSailing: false,
    getAround: false,
    private_Luxury: false,
    sightseeingTour: false,
    toursByDuration: false,
  });


  const [addFavorite, setAddFovirate] = useState(false)

  const handleChange1 = (event, newValue, activeThumb) => {
    setRangePrice(newValue)
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
    // setMInPrice(newValue[0])
    // setMaxPrice(newValue[1])

    // const filterElements = totalProductList.filter(item => item.price >= newValue[0] && item.price <= newValue[1] )
    // dispatch(displayProductAction(filterElements))
  };

  const handleDateTimeChange = (newValue) => {
    setDateValue(newValue);
  };


  function disableWeekends(date) {
    return date.getDay() === 0 || date.getDay() === 6;
  }

const productClicked = (item) => {
    dispatch(individualProductAction(item))
}


const handleRadioGroupChange = (e) => {
  // console.log(e)
  let filterElements 
  if(e.target.value == "five"){
    setTripRatings(5)
    // filterElements = totalProductList.filter(item => item.stars >= 5)
  }else if(e.target.value == "four"){
    setTripRatings(4)
    // filterElements = totalProductList.filter(item => item.stars >= 4)    
  }else if(e.target.value == "three"){
    setTripRatings(3)
    // filterElements = totalProductList.filter(item => item.stars >= 3)        
  }else if(e.target.value =="two"){
    setTripRatings(2)
    // filterElements = totalProductList.filter(item => item.stars >= 2)            
  }else if(e.target.value == "one"){
    setTripRatings(1)
    // filterElements = totalProductList.filter(item => item.stars >= 1)                
  }
  // dispatch(displayProductAction(filterElements))
}



const handleRadioDurationChange = (e) => {
  // let filterElements 
  if(e.target.value == "Up to 1 hour"){
    setTripDuration([0,1])
    // filterElements = totalProductList.filter(item => item.duration > 1)
  }else if(e.target.value == "1 to 4 hours"){
    setTripDuration([1,4])
    // filterElements = totalProductList.filter(item => item.duration > 4)
  }else if(e.target.value == "4 hours to 1 day"){
    setTripDuration([4,12])
    // filterElements = totalProductList.filter(item => item.duration > 6)
  }
  // dispatch(displayProductAction(filterElements))
}



const clearHandler = () => {
    setRangePrice([0,1000])
    setTripDuration([0,12])
    setTripRatings(1)
    dispatch(filterProductByCityAction(""))
    setlogoutRender(!logoutRender)
}



const ApplyHandler = () => {
    setlogoutRender(!logoutRender)
}



const fetchAllTourProducts = async () => {
  let options = {
    url:`${Base_url}/tour/allProducts`,
    method:"GET",
    headers:{
      "content-type":"application/json",
    }
  }


  try{
    let {data} = await axios(options)
    dispatch(productAction(data))
    let min = data[0].price
    let max = data[0].price
    let cityObj = {}
    let arr = []
    const filterElements = data.filter(item => {
      if(min > item.price){
        min = item.price
      }
      if(item.price > max){
        max = item.price
      }
      if(item.city in cityObj){
      
      }else{
        cityObj[item.city] = item.city
        arr.push(item.city)
      }
      if(selectedCity == "" && item.price >= rangePrice[0] && item.price <= rangePrice[1] && item.duration >= tripDuration[0] && item.duration <= tripDuration[1] && item.stars >= tripRating){
        return item
      }
    
      if(item.city.toLowerCase().startsWith(selectedCity.toLowerCase()) && item.price >= rangePrice[0] && item.price <= rangePrice[1] && item.duration >= tripDuration[0] && item.duration <= tripDuration[1] && item.stars >= tripRating){
        return item
      }
    })
    setMInPrice(min)
    setMaxPrice(max)
    dispatch(displayProductAction(filterElements))
    dispatch(countryListAction(arr))
  }catch(error){

  }

}


useEffect(()=>{
  fetchAllTourProducts()
},[logoutRender])




  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        className="dashBoardBody"
        sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
      >
        <Header logoutRender={logoutRender} setlogoutRender={setlogoutRender}/>
        <Box
          className="mainBody"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 1,
            width: "100%",
          }}
        >
          <Box
            className="FirstMainBody"
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 1,
              backgroundColor: "white",
              width: { xs: "94%", md: "88%" },
              padding: { xs: "0% 3% 0% 3%", md: "0% 6% 0% 6%" },
            }}
          >
            <Typography sx={{ fontSize: {xs:"20px",md:"25px"}, fontWeight: "bold" }} className="Typography">
              Tours, Tickets, & Excursions
            </Typography>
            <DesktopDatePicker
              inputFormat="MM/dd/yyyy"
              value={dateValue}
              onChange={handleDateTimeChange}
              disablePast
              renderInput={(params) => {
               return  <TextField
               className="inputRounded"
                  sx={{
                    display: { xs: "flex", md: "none" },
                    width: "100%",
                  }}
                  {...params}
                />
              }}
            />
          </Box>


          {/* second Main Bo0dy  */}
          <Box
            className="SecondMainBody"
            sx={{
              width: { xs: "94%", md: "88%" },
              display: "flex",
              justifyContent: "space-between",
              columnGap: 2,
              zIndex: 15,
              padding: { xs: "0% 3% 0% 3%", md: "0% 6% 0% 6%" },
            }}
          >
            {/* Left half Of Secoond Main Body */}
            <Box
              className="LeftHalf"
              sx={{
                width: "24%",
                boxShadow: "0px 1px 1px 1px #e6e8eb",
                height: "fit-content",
                display: { xs: "none", md: "flex" },
                flexDirection: "column",
                rowGap: 3,
                padding: "1% 1% 1% 1%",
              }}
            >
              {/* date picker for travelling */}
              <Box
                sx={{
                  backgroundColor: "#136125",
                  color: "white",
                  padding: "6%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  position: "sticky",
                  top: "10px",
                  left: "0px",
                  zIndex: 10000,
                  rowGap: 2,
                }}
              >
                <Typography sx={{ fontSize: {xs:"8px",md:"14px"} }}>
                  When are you travelling?
                </Typography>
                <Box
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "fit-content",
                    width: "fit-content",
                    borderRadius:"10px"
                  }}
                >
                  <DesktopDatePicker
                    // label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={dateValue}
                    onChange={handleDateTimeChange}
                    renderInput={(params) => <TextField 
                      className="inputRounde"
                      {...params} />}
                    shouldDisableDate={disableWeekends}
                    disablePast
                  />
                </Box>
              </Box>

              {/* different filter for travelling */}
              <Box
                className="filters"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 3,
                  zIndex: 10,
                }}
              >
                {/* popular filters */}
                <Box className="popular filter"
                sx={{
                  display:"none",
                  flexDirection:"column",
                  rowGap:3
                }}
                >
                  <Typography sx={{ fontSize: {xs:"8px",md:"16px"},fontWeight:"bold" }}>Popular</Typography>
                  <Box>
                    <Box>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox color="success" />}
                          label={<Typography
                          sx={{
                            fontSize: {xs:"8px",md:"14px"}
                          }}
                          >Good for avoiding crowdss</Typography>}
                        />
                        <FormControlLabel
                          control={<Checkbox color="success" />}
                          label={<Typography
                            sx={{
                              fontSize: {xs:"8px",md:"14px"}
                            }}
                            >Taking safety measures</Typography>}
                        />
                        <FormControlLabel
                          disabled
                          control={<Checkbox />}
                          label={<Typography
                            sx={{
                              fontSize: {xs:"8px",md:"14px"}
                            }}
                            >Virtual experiences</Typography>}
                          sx={{
                            "&:hover": { cursor: "not-allowed" },
                          }}
                        />
                        <FormControlLabel
                          disabled
                          control={<Checkbox />}
                          label={<Typography
                            sx={{
                              fontSize: {xs:"8px",md:"14px"}
                            }}
                            >Kid friendly</Typography>}
                          sx={{
                            "&:hover": { cursor: "not-allowed" },
                          }}
                        />
                      </FormGroup>
                    </Box>
                  </Box>
                </Box>
                <Divider />

                {/* all london tours */}
                <Box className="All London Tours"
                sx={{
                  display:"flex",
                  flexDirection:"column",
                  rowGap:3
                }}
                >
                  <Typography
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                      fontSize: "16px",
                      fontWeight:"bold"
                    }}
                  >
                    All Tours
                  </Typography>

                  {/* arts and Culture */}
                  {/* <Box className="Art & Culture">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() => setArts_culture(!arts_culture)}
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "16px",
                        }}
                      >
                        Art & Culture
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: arts_culture ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !arts_culture ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box> */}

                  {/* art and culture sub filters */}
                  {/* <ArtCulture /> */}

                  {/* Classes & Workshops */}
                  {/* <Box className="Classes & Workshops">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() => setclasses_workspaces(!classes_workspaces)}
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "16px",
                        }}
                      >
                        Classes & Workshops
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: classes_workspaces ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !classes_workspaces ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box> */}

                  {/* Food & Drink */}
                  {/* <Box className="Food & Drink">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() => setFood_drinnk(!food_drink)}
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "16px",
                        }}
                      >
                        Food & Drink
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: food_drink ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !food_drink ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box> */}

                  {/* Likely To Sell Out */}
                  {/* <Box className="Likely To Sell Out">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() => setLikelyToSellOut(!likelyToSellOut)}
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "16px",
                        }}
                      >
                        Likely To Sell Out
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: likelyToSellOut ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !likelyToSellOut ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box> */}

                  {/* Outdoor Activities */}
                  {/* <Box className="Outdoor Activities ">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() => setOutDoorActivity(!outDoorActivity)}
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "16px",
                        }}
                      >
                        Outdoor Activities
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: outDoorActivity ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !outDoorActivity ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box> */}

                  {/* Seasonal & Special Occasions */}
                  {/* <Box className="Seasonal & Special Occasions">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() =>
                        setSeasonal_specialOcation(!seasonal_specialOcation)
                      }
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "16px",
                        }}
                      >
                        Seasonal & Special Occasions
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: seasonal_specialOcation ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !seasonal_specialOcation ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box> */}

                  {/* Tickets & Passes */}
                  {/* <Box className="Tickets & Passes">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() => setTicketsAndPasses(!ticketsAndPasses)}
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "16px",
                        }}
                      >
                        Tickets & Passes
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: ticketsAndPasses ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !ticketsAndPasses ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box> */}

                  {/* Tours, Sightseeing & Cruises */}
                  <Box className="Tours, Sightseeing & Cruises">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      // onClick={() => {
                      //   if (secondTourSightSeeingState == null) {
                      //     setSecondTourSightSeeingState("");
                      //     setTours_sightseeing(!tours_sightseeing);
                      //   } else {
                      //     setSecondTourSightSeeingState(null);
                      //     setTours_sightseeing(!tours_sightseeing);
                      //   }
                      // }}
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "14px",
                        }}
                      >
                        Tours, Sightseeing & Cruises
                      </Typography>
                      <Box className="arrows"
                      sx={{
                        "&:hover":{
                          cursor:"pointer"
                        }
                      }}
                      >
                        <KeyboardArrowDownIcon
                          sx={{
                            display: !tours_sightseeing ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: tours_sightseeing ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* Travel & Transportation Services */}
                  {/* <Box className="Travel & Transportation Services">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() =>
                        setTravel_Transportation(!travel_Transportation)
                      }
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "16px",
                        }}
                      >
                        Travel & Transportation Services
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: travel_Transportation ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !travel_Transportation ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box> */}

                  {/* Unique Experiences */}
                  {/* <Box className="Unique Experiences">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() => setUniqueExperience(!uniqueExperience)}
                    >
                      <Typography
                        sx={{
                          "&:hover": {
                            textDecoration: "underLine",
                            cursor: "pointer",
                          },
                          fontSize: "16px",
                        }}
                      >
                        Unique Experiences
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: uniqueExperience ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !uniqueExperience ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box> */}
                </Box>

                {secondTourSightSeeingState == "" ? (
                  <Box
                    className="mainTravel&TransporationServices"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 2,
                    }}
                  >
                    {/* back Button London Tour*/}
                    {/* <Box className="mainTour,SightSeeing&Cruises" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     />
     <Typography>Back To Tour</Typography>
   </Box> */}

                    <Box
                      className="mainBody"
                      sx={{
                        paddingLeft: "10%",
                        fontSize: "16px",
                        display: "flex",
                        flexDirection: "column",
                        rowGap: 3,
                      }}
                    >
                      <Typography>All Tours, Sightseeing & Cruises</Typography>

                      {/* Cruises & Sailing*/}
                      <Box
                        className="Cruises & Sailing"
                        onClick={() =>
                          setSecondTourSightSeeingState("Cruises & Sailing")
                        }
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              "&:hover": {
                                // textDecoration: "underLine",
                                cursor: "pointer",
                              },
                              fontSize: "16px",
                            }}
                          >
                            Cruises & Sailing
                          </Typography>
                          <Box className="arrows">
                            <KeyboardArrowDownIcon />
                          </Box>
                        </Box>
                      </Box>

                      {/* How To Get Around*/}
                      <Box
                        className="How To Get Around"
                        onClick={() =>
                          setSecondTourSightSeeingState("How To Get Around")
                        }
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              "&:hover": {
                                // textDecoration: "underLine",
                                cursor: "pointer",
                              },
                              fontSize: "16px",
                            }}
                          >
                            How To Get Around
                          </Typography>
                          <Box className="arrows">
                            <KeyboardArrowDownIcon />
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
                          }}
                        >
                          <Typography
                            sx={{
                              "&:hover": {
                                // textDecoration: "underLine",
                                cursor: "pointer",
                              },
                              fontSize: "16px",
                            }}
                          >
                            Private And Luxury
                          </Typography>
                        </Box>
                      </Box>

                      {/* SightSeeing Tours*/}
                      <Box
                        className="SightSeeing Tours"
                        onClick={() =>
                          setSecondTourSightSeeingState("SightSeeing Tours")
                        }
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              "&:hover": {
                                // textDecoration: "underLine",
                                cursor: "pointer",
                              },
                              fontSize: "16px",
                            }}
                          >
                            SightSeeing Tours
                          </Typography>
                          <Box className="arrows">
                            <KeyboardArrowDownIcon />
                          </Box>
                        </Box>
                      </Box>

                      {/* Tours By Duration*/}
                      <Box
                        className="Tours By Duration"
                        onClick={() =>
                          setSecondTourSightSeeingState("Tours By Duration")
                        }
                      >
                        <Box
                          sx={{
                            display: "flex",
                            justifyContent: "space-between",
                          }}
                        >
                          <Typography
                            sx={{
                              "&:hover": {
                                // textDecoration: "underLine",
                                cursor: "pointer",
                              },
                              fontSize: "16px",
                            }}
                          >
                            Tours By Duration
                          </Typography>
                          <Box className="arrows">
                            <KeyboardArrowDownIcon />
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                ) : secondTourSightSeeingState == "Cruises & Sailing" ? (
                  <Box
                    className="Cruises & Sailing"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 3,
                      paddingLeft: "10%",
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
                        onClick={() => {
                          setSecondTourSightSeeingState("");
                          setTourState({
                            ...tourState,
                            crusisSailing: !tourState.crusisSailing,
                          });
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                        Tours, SightSeeing & Cruises
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      All Cruises & Sailing
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Catamaran Cruises
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Day Cruises
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Dinner Cruises
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Gandala Cruises
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Night Cruises
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Parts of Call Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Share Excursions
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      SightSeeing Cruises
                    </Typography>
                  </Box>
                ) : secondTourSightSeeingState == "How To Get Around" ? (
                  <Box
                    className="How To Get Around"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 3,
                      paddingLeft: "10%",
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
                        onClick={() => {
                          setSecondTourSightSeeingState("");
                          setTourState({
                            ...tourState,
                            getAround: !tourState.getAround,
                          });
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                        Tours, SightSeeing & Cruises
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      All How To Get Around
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Air Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Bike Rentals
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Bike Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Bus Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Car Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Classic Car Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      E-Bike Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Helicopter Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Hot Air Balloon Rides
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Limousine Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Luxury Car Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Mountain Bike Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Pedicab Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Power Boats
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Public Transporatation Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Rail Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Rentals
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Road Trip
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Self Giuded Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Speed Boat Rentals
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Vespa, Scooter & Moped Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Walking Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Water Tours
                    </Typography>
                  </Box>
                ) : secondTourSightSeeingState == "SightSeeing Tours" ? (
                  <Box
                    className="SightSeeing Tours"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 3,
                      paddingLeft: "10%",
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
                        onClick={() => {
                          setSecondTourSightSeeingState("");
                          setTourState({
                            ...tourState,
                            sightseeingTour: !tourState.sightseeingTour,
                          });
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                        Tours, SightSeeing & Cruises
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      All SightSeeing Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Adventure Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      City Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Hop on Hop off Buses
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Night Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Observation Decks
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Private SightSeeing Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      SightSeeing Cruises
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      SightSeeing Passes
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Skip The Line Tickets
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      SkyScrappers & Towers
                    </Typography>
                  </Box>
                ) : secondTourSightSeeingState == "Tours By Duration" ? (
                  <Box
                    className="Tours By Duration"
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      rowGap: 3,
                      paddingLeft: "10%",
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
                        onClick={() => {
                          setSecondTourSightSeeingState("");
                          setTourState({
                            ...tourState,
                            toursByDuration: !tourState.toursByDuration,
                          });
                        }}
                      />
                      <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                        Tours, SightSeeing & Cruises
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      All Tours By Duration
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Day Trips
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Full-Day Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Half-Day Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Layover Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Multi-Day Tours
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: { xs: "14px", md: "16px" },
                        "&:hover": { cursor: "pointer" },
                      }}
                    >
                      Overnight Tours
                    </Typography>
                  </Box>
                ) : null}

                <Divider />

                {/* price filter */}
                <Box className="price Filter"
                sx={{
                  display:"flex",
                  flexDirection:"column",
                  rowGap:3
                }}
                >
                  <Typography sx={{ fontSize: "16px", fontWeight:"bold" }}>Price</Typography>
                  <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="on"
                    getAriaValueText={valuetext}
                    disableSwap
                    min={minPrice}
                    max={maxPrice}
                    sx={{
                      color:"blue",
                    }}
                  />
                  {/* <Typography
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    value : {value1}
                  </Typography> */}
                </Box>

                <Divider />

                {/* duration lfilter */}
      <FormControl>
           <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    onChange={handleRadioDurationChange}
  >
    <FormControlLabel value="Up to 1 hour" control={<Radio color="success" />} 
    label={ <Box
      className="4star"
      sx={{ display: "flex", alignItems: "center" }}
    >
     <Typography  sx={{ fontSize: "14px" }}>Up to 1 hour</Typography>
    </Box>}
    />
    <FormControlLabel value="1 to 4 hours" control={<Radio  color="success"  />} 
    label={ <Box
      className="4star"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Typography sx={{ fontSize: "14px" }}>1 to 4 hours</Typography>
    </Box>}
     />
    <FormControlLabel value="4 hours to 1 day" control={<Radio  color="success" />}
      label={ <Box
        className="4star"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: "14px" }}>4 hours to 1 day</Typography>
      </Box>}
      />
    {/* <FormControlLabel value="1 to 3 days" control={<Radio  color="success"  />}
      label={ <Box
        className="4star"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: "14px" }}>1 to 3 days</Typography>
      </Box>}
      />
    <FormControlLabel value="3+ days" control={<Radio  color="success" />}
      label={ <Box
        className="4star"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Typography sx={{ fontSize: "14px" }}>3+ days</Typography>
      </Box>}
      /> */}
  </RadioGroup>
                  </FormControl>





                {/* <Divider /> */}

                {/* Time of day */}
                {/* <Box className="TimeOfDay"
                sx={{
                  display:"flex",
                  flexDirection:"column",
                  rowGap:3
                }}
                >
                  <Typography sx={{ fontSize: "16px",fontWeight:"bold" }}>Time Of Day</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label={<Typography sx={{fontSize:"14px"}}>6am—12pm</Typography>}
                      />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label={<Typography sx={{fontSize:"14px"}}>12pm—5pm</Typography>}
                      />
                    <FormControlLabel control={<Checkbox color="success"/>} 
                      label={<Typography sx={{fontSize:"14px"}}>5pm—12am</Typography>}
                    />
                  </FormGroup>
                </Box> */}

                <Divider />

                {/* Rating */}
                <Box className="ratings"
                sx={{
                  display:"flex",
                  flexDirection:"column",
                  rowGap:3
                }}
                >
                  <Typography sx={{ fontSize: "16px",fontWeight:"bold" }}>Rating</Typography>
                  {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box
                      className="5star"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Checkbox />
                      <Rating name="read-only" value={5} readOnly sx={{fontSize:"22px"}}/>
                    </Box>
                    <Box
                      className="4star"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Checkbox />
                      <Rating name="read-only" value={4} readOnly sx={{fontSize:"22px"}}/>
                      <Typography sx={{ fontSize: "14px" }}>& up</Typography>
                    </Box>
                    <Box
                      className="3star"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Checkbox />
                      <Rating name="read-only" value={3} readOnly sx={{fontSize:"22px"}}/>
                      <Typography sx={{ fontSize: "14px" }}>& up</Typography>
                    </Box>
                    <Box
                      className="2star"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Checkbox />
                      <Rating name="read-only" value={2} readOnly  sx={{fontSize:"22px"}}/>
                      <Typography sx={{ fontSize: "14px" }}>& up</Typography>
                    </Box>
                    <Box
                      className="1star"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <Checkbox />
                      <Rating name="read-only" value={1} readOnly  sx={{fontSize:"22px"}} />
                      <Typography sx={{ fontSize: "14px" }}>& up</Typography>
                    </Box>
                  </Box> */}
                  <FormControl>
           <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="female"
    name="radio-buttons-group"
    onChange={handleRadioGroupChange}
  >
    <FormControlLabel value="five" control={<Radio color="success" />} 
    label={ <Box
      className="4star"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Rating name="read-only" value={5} readOnly sx={{fontSize:"22px"}}/>
    </Box>}
    />
    <FormControlLabel value="four" control={<Radio  color="success"  />} 
    label={ <Box
      className="4star"
      sx={{ display: "flex", alignItems: "center" }}
    >
      <Rating name="read-only" value={4} readOnly sx={{fontSize:"22px"}}/>
      <Typography sx={{ fontSize: "14px" }}>& up</Typography>
    </Box>}
     />
    <FormControlLabel value="three" control={<Radio  color="success" />}
      label={ <Box
        className="4star"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Rating name="read-only" value={3} readOnly sx={{fontSize:"22px"}}/>
        <Typography sx={{ fontSize: "14px" }}>& up</Typography>
      </Box>}
      />
    <FormControlLabel value="two" control={<Radio  color="success"  />}
      label={ <Box
        className="4star"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Rating name="read-only" value={2} readOnly sx={{fontSize:"22px"}}/>
        <Typography sx={{ fontSize: "14px" }}>& up</Typography>
      </Box>}
      />
    <FormControlLabel value="one" control={<Radio  color="success" />}
      label={ <Box
        className="4star"
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Rating name="read-only" value={1} readOnly sx={{fontSize:"22px"}}/>
        <Typography sx={{ fontSize: "14px" }}>& up</Typography>
      </Box>}
      />
  </RadioGroup>
                  </FormControl>
                </Box>

                <Divider />

                {/* Specials */}
                <Box className="Specials"
                sx={{
                  display:"none",
                  flexDirection:"column",
                  rowGap:3
                }}
                >
                  <Typography sx={{ fontSize: "16px",fontWeight:"bold" }}>Specials</Typography>
                  <FormGroup>
                    <FormControlLabel
                      disabled
                      control={<Checkbox color="success" />}
                      label={<Typography sx={{fontSize:"14px"}}>Deals & Discounts</Typography>}
                      sx={{
                        "&:hover": { cursor: "not-allowed" },
                      }}
                      />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label={<Typography sx={{fontSize:"14px"}}>Free Cancellation</Typography>}
                      />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label={<Typography sx={{fontSize:"14px"}}>Likely to Sell Out</Typography>}
                      />
                    <FormControlLabel
                      disabled
                      control={<Checkbox color="success" />}
                      label={<Typography sx={{fontSize:"14px"}}>Skip-The-Line</Typography>}
                      sx={{
                        "&:hover": { cursor: "not-allowed" },
                      }}
                      />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label={<Typography sx={{fontSize:"14px"}}>Private Tour</Typography>}
                      />
                    <FormControlLabel
                      disabled
                      control={<Checkbox color="success" />}
                      label={<Typography sx={{fontSize:"14px"}}>Travel Exclusive</Typography>}
                      sx={{
                        "&:hover": { cursor: "not-allowed" },
                      }}
                      />
                    <FormControlLabel
                      disabled
                      control={<Checkbox color="success" />}
                      label={<Typography sx={{fontSize:"14px"}}>New on Mekatourizm</Typography>}
                      sx={{
                        "&:hover": { cursor: "not-allowed" },
                      }}
                    />
                  </FormGroup>
                </Box>
              </Box>

              <Box
              sx={{
                display:"flex",
                flexDirection:"row",
                alignItems:"center",
                justifyContent:"space-evenly"
              }}
              >
                <Button variant="contained" color="warning" 
                onClick={clearHandler}
                >Clear</Button>
                <Button variant="contained" color="success"
                onClick={ApplyHandler}
                >Apply</Button>
              </Box>
            </Box>

            {/* right half of second mainBody */}
            <Box
              className="rightHalf"
              sx={{
                width: { xs: "100%", md: "74%" },
                display: "flex",
                flexDirection: "column",
                rowGap: 2,
              }}
            >
              <Box className="countAvailableContents">
                <Typography sx={{
                  fontSize:{xs:"14px",md:"14px"}
                  }}
                >{allProductList.length} results</Typography>
              </Box>
              {/* <Box
                className="travelData"
                sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
              > */}
                {
                  allProductList.length == 0  &&  totalProductList.length == 0  ? <SkeletonPattern />
                  : allProductList.length == 0 && totalProductList.length > 0 ?
                  <Box 
                  sx={{
                    height:{xs:"70vh",md:"70vh"},
                    display:"flex",
                    flexDirection:"row",
                    alignItems:"center",
                    justifyContent:"center"
                  }}>
                      <Typography sx={{fontSize:{xs:"16px",md:"18px"}}}>No Product To Display</Typography>
                    </Box>
                    : <Box
                    className="travelData"
                    sx={{ display: "flex", flexDirection: "column", rowGap: 2,
                    width:"100%",
                    }}>
                      {
                       allProductList.map((item,index) => {
                          return  <ProductCards  key={index} item={item}/>
                        })
                      }
                    </Box> 
                }
              {/* </Box> */}
            </Box>
          </Box>
        </Box>
        <Footer />
      </Box>
    </LocalizationProvider>
  );
};

export default DashBoard;
