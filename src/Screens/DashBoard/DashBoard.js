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
import {individualProductAction, productAction, displayProductAction, countryListAction} from "../../redux/action/index"
import {useSelector, useDispatch} from "react-redux"
import axios from "axios"
import Header from "../HeaderComponents/Header";
import ProductCards from "../../Components/ProductCard/ProductCards";
import Skeleton from "../../Components/skeleton/SkeletonPattern";
import SkeletonPattern from "../../Components/skeleton/SkeletonPattern";
import { fontWeight } from "@mui/system";
import { Parser } from 'html-to-react'



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
  
 
  const dispatch = useDispatch()
  const [minPrice, setMInPrice] = useState(0)
  const [maxPrice, setMaxPrice] = useState(10)
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
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }

    const filterElements = totalProductList.filter(item => item.price >= newValue[0] && item.price <= newValue[1] )
    dispatch(displayProductAction(filterElements))
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
  console.log(e)
  let filterElements 
  if(e.target.value == "five"){
    filterElements = totalProductList.filter(item => item.stars >= 5)
  }else if(e.target.value == "four"){
    filterElements = totalProductList.filter(item => item.stars >= 4)    
  }else if(e.target.value == "three"){
    filterElements = totalProductList.filter(item => item.stars >= 3)        
  }else if(e.target.value =="two"){
    filterElements = totalProductList.filter(item => item.stars >= 2)            
  }else if(e.target.value == "one"){
    filterElements = totalProductList.filter(item => item.stars >= 1)                
  }
  dispatch(displayProductAction(filterElements))
}



const handleRadioDurationChange = (e) => {
  let filterElements 
  if(e.target.value == "Up to 1 hour"){
    filterElements = totalProductList.filter(item => item.duration > 1)
  }else if(e.target.value == "1 to 4 hours"){
    filterElements = totalProductList.filter(item => item.duration > 4)
  }else if(e.target.value == "4 hours to 1 day"){
    filterElements = totalProductList.filter(item => item.duration > 6)
  }
  dispatch(displayProductAction(filterElements))
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
      if(selectedCity == ""){
        return item
      }
      if(item.city.startsWith(selectedCity)){
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


// useEffect(()=>{
  
// },[logoutRender])



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
                  allProductList.length == 0 ? <SkeletonPattern />
                  :<Box
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
