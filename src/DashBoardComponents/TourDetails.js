import {
  Box,
  Button,
  Menu,
  MenuItem,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import Image1 from "../images/img1.webp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
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
import { useNavigate } from "react-router-dom";
// import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import {useSelector,useDispatch} from "react-redux"
import {addTravelMembers, booking_date_day} from "../redux/reducer/reducer"
import {addChild, removeChild, addAdults, removeAdults, tourBookingDate} from "../redux/action/index"


const TourDetails = () => {

  // redux states and dispatch functions
  const memberPresentstate = useSelector((state) => state.addTravelMembers)
  const memberBookingDate = useSelector((state) => state.booking_date_day)
  const dispatch = useDispatch()


  const navigate = useNavigate();
  const [value, setValue] = React.useState(new Date());
  const [peopleCount, setPeopleCount] = useState("2 Adults");
  const [Availability, setAvailability] = useState(false);
  const [menuVisible, setmenuVisible] = useState(false);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (newValue) => {
    dispatch(tourBookingDate(newValue))

    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        className="mainBody"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          width: "100%",
        }}
      >
        <Header />
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
            <Typography sx={{ fontSize: { xs: "20px", md: "30px" } }}>
              Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock
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
                  value={4}
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
                <Box
                  className="share"
                  sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
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
                <Box
                  className="saveToWishList"
                  sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
                >
                  <FavoriteBorderIcon />
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
              <Box
                className="verticalImages"
                sx={{
                  display: { xs: "none", md: "flex" },
                  flexDirection: "column",
                  rowGap: 1,
                  alignItems: "center",
                }}
              >
                <Box
                  className="placeImage"
                  component={"img"}
                  src={Image1}
                  alt="Place Image"
                  width={{ xs: "10px", md: "130px" }}
                  maxHeight={"80vh"}
                  sx={{
                    opacity: 0.7,
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                    },
                  }}
                />
                <Box
                  className="placeImage"
                  component={"img"}
                  src={Image1}
                  alt="Place Image"
                  width={{ xs: "10px", md: "130px" }}
                  maxHeight={"80vh"}
                  sx={{
                    opacity: 0.7,
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                    },
                  }}
                />
                <Box
                  className="placeImage"
                  component={"img"}
                  src={Image1}
                  alt="Place Image"
                  width={{ xs: "10px", md: "130px" }}
                  maxHeight={"80vh"}
                  sx={{
                    opacity: 0.7,
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                    },
                  }}
                />
                <Box
                  className="placeImage"
                  component={"img"}
                  src={Image1}
                  alt="Place Image"
                  width={{ xs: "10px", md: "130px" }}
                  maxHeight={"80vh"}
                  sx={{
                    opacity: 0.7,
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                    },
                  }}
                />
                <Box
                  className="placeImage"
                  component={"img"}
                  src={Image1}
                  alt="Place Image"
                  width={{ xs: "10px", md: "130px" }}
                  maxHeight={"80vh"}
                  sx={{
                    opacity: 0.7,
                    "&:hover": {
                      cursor: "pointer",
                      opacity: 1,
                    },
                  }}
                />
              </Box>

              <Box
                className="placeImage"
                component={"img"}
                src={Image1}
                alt="Place Image"
                width={{ xs: "350px", md: "1050px" }}
                maxHeight={"80vh"}
              />
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
                    <CurrencyRupeeIcon /> 8719.53
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
                    renderInput={(params) => (
                      <TextField
                        sx={{ backgroundColor: "white" }}
                        {...params}
                      />
                    )}
                  />

                  {/* no of people adult or child */}
                  <Box
                    className="noOfPeople"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 1,
                      border: "1px solid black",
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
                              if(memberPresentstate.adult > 2){
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
                    onClick={() => setAvailability(!Availability)}
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
            width: { xs: "100%^", md: "88%" },
            padding: { xs: "2%", md: "2% 6% 2% 6%" },
          }}
        >
          <Box
            className="lefthalf"
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              rowGap: 2,
              width: "20%",
            }}
          >
            <Box
              className="LondonTours"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                columnGap: 1,
              }}
            >
              <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                Tours, SightSeeing & Cruises
              </Typography>
              <KeyboardArrowDownIcon />
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
          <Box className="rightHalf"
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: { xs: 3 },
              width: { xs: "100%", md: "80%" },
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
                    padding: "2% 3% 2% 3%",
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
                          rowGap:1
                        }}
                      >
                        <CurrencyRupeeIcon />
                        <Typography>14600.85</Typography>
                      </Box>
                      <Typography>per group (up to 8)</Typography>
                    </Box>
                    <Button variant="outlined" color="warning">
                      Reserve Now & Pay Later
                    </Button>
                    <Button
                      variant="contained"
                      color="warning"
                      onClick={() => navigate("/checkoutPage")}
                    >
                      Book Now
                    </Button>
                  </Box>
                </Box>
                <Box
                  className="secondHalf"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "1%",
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

              <Box
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
              </Box>
            </Box>

            {/* other details */}
            <Box
              className="safetyMeasures&otherDetails"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                columnGap: 2,
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
            <Box
              className="overView"
              sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
            >
              <Typography
                sx={{
                  fontWeight: "bold",
                  fontSize: { xs: "22px", md: "25px" },
                }}
              >
                Overview
              </Typography>
              <Box className="overViewDetails">
                <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  Avoid the hassle of renting a car to see rural England’s
                  highlights with help from this full-day tour which includes
                  round-trip transport from London. Choose from two options to
                  find what best suits your preferences, and travel by
                  air-conditioned coach bus with onboard Wi-Fi. You can either
                  combine a visit to Stonehenge with a pub lunch in Lacock and a
                  walking tour of Windsor, or opt to visit both Windsor Castle
                  and Stonehenge with a break for a traditional English pub
                  lunch. Both options also pass by the city of Bath, hometown of
                  Jane Austen.
                </Typography>
                <Box className="unOrderList">
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 1,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: { xs: "10px" } }} />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Visit Stonehenge with a guide
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 1,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: { xs: "10px" } }} />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Sit down for lunch (or dinner) at a traditional English
                      pub
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 1,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: { xs: "10px" } }} />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Enjoy a coach tour of the beautiful Georgian city of Bath,
                      home of the famous author Jane Austen
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      columnGap: 1,
                    }}
                  >
                    <FiberManualRecordIcon sx={{ fontSize: { xs: "10px" } }} />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Go for a walking tour of Windsor or visit Windsor Castle
                      (depending on selection chosen)
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                className="travellersChoice"
                sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}
              >
                <Typography
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "18px", md: "20px" },
                  }}
                >
                  Why Travellers Choose This Tour
                </Typography>
                <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                  In addition to the multiple sightseeing stops, this tour
                  includes lunch in a traditional, 14th-century pub.
                </Typography>
              </Box>
            </Box>
            <Box
              className="What's Included"
              sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "18px", md: "20px" },
                  fontWeight: "bold",
                }}
              >
                What's Included
              </Typography>
              <Box
                className="FullItems"
                sx={{ display: "flex", flexDirection: "row", columnGap: 2 }}
              >
                <Box className="IncludedItems">
                  <Box
                    className="1stItem"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 1,
                      alignItems: "center",
                    }}
                  >
                    <CheckIcon />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Visit Stonehenge, an UNESCO World Heritage Site (if option
                      selected)
                    </Typography>
                  </Box>
                  <Box
                    className="2ndItem"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 1,
                      alignItems: "center",
                    }}
                  >
                    <CheckIcon />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Entry to Windsor Castle (if option selected)
                    </Typography>
                  </Box>
                  <Box
                    className="3rdItem"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 1,
                      alignItems: "center",
                    }}
                  >
                    <CheckIcon />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Panoramic tour of Georgian city of Bath
                    </Typography>
                  </Box>
                </Box>
                <Box
                  className="excludedItem"
                  sx={{
                    display: { xs: "none", md: "flex" },
                    flexDirection: { xs: "column", md: "column" },
                  }}
                >
                  <Box
                    className="1stitem"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 1,
                      alignItems: "center",
                    }}
                  >
                    <ClearIcon />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Hotel pick-up & drop-off
                    </Typography>
                  </Box>
                  <Box
                    className="2nditem"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 1,
                      alignItems: "center",
                    }}
                  >
                    <ClearIcon />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Gratuities
                    </Typography>
                  </Box>
                  <Box
                    className="3rditem"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      columnGap: 1,
                      alignItems: "center",
                    }}
                  >
                    <ClearIcon />
                    <Typography sx={{ fontSize: { xs: "14px", md: "16px" } }}>
                      Entry to Roman Baths
                    </Typography>
                  </Box>
                </Box>
              </Box>
              <Typography
                sx={{
                  display: { xs: "flex", md: "none" },
                  "&:hover": { cursor: "pointer", textDecoration: "underLine" },
                }}
              >
                see 3 More
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default TourDetails;
