import { Box, Button, Rating, TextField, Typography } from "@mui/material";
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
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { display } from "@mui/system";


const TourDetails = () => {
  const [value, setValue] = React.useState(new Date());
  const [peopleCount, setPeopleCount] = useState("2 Adults");

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        className="mainBody"
        sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
      >
        <Header />
        <Box
          className="tourDetailsBox"
          sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
        >
          <Box className="PlaceTitTle">
            <Typography sx={{ fontSize: {xs:"18px",md:"35px"} }}>
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
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 ,alignItems:"center"}}
              >
                <Rating name="read-only" value={4} readOnly  sx={{fontSize:{xs:"20px",md:"30px"}}} />
                <Typography sx={{ "&:hover": { cursor: "pointer" },fontSize:{xs:"15px",md:"20px"} }}>
                  3046 Reviews
                </Typography>
              </Box>
              <Box
                className="share&saveToWatchList"
                sx={{ display: {xs:"none",md:"flex"}, flexDirection: "row", columnGap: 2 }}
              >
                <Box
                  className="share"
                  sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
                >
                  <IosShareIcon />
                  <Typography sx={{ "&:hover": { cursor: "pointer" } }}>
                    Share
                  </Typography>
                </Box>
                <Box
                  className="saveToWishList"
                  sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
                >
                  <FavoriteBorderIcon />
                  <Typography sx={{ "&:hover": { cursor: "pointer" } }}>
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
                flexDirection: {xs:"column",md:"row"},
                alignItems:"center",
                width: "100%",
                height: "100%",
                columnGap: 3,
                rowGap:{xs:2,md:0}
              }}
            >
              <Box
                className="placeImage"
                component={"img"}
                src={Image1}
                alt="Place Image"
                width={{xs:"350px",md:"1050px"}}
                maxHeight={"80vh"}
              />
              <Box
                className="PriceDetails"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  width: {xs:"90%",md:"40%"},
                  padding: {xs:"5% 5% 5% 5%",md:"2% 3% 3% 3%"},
                  backgroundColor: "#ebeff5",
                  rowGap: 2,
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
                  <Typography>from</Typography>
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
                <Typography>Lowest Price Guarantee</Typography>
                <Box
                  className="date&TravelleerDeatils"
                  sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    Select Date and Travellers
                  </Typography>
                  <DesktopDatePicker
                    label="Date desktop"
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
                  >
                    <PermIdentityIcon />
                    <Typography>{peopleCount}</Typography>
                  </Box>
                  <Button color="success" variant="contained">
                    Check Availability
                  </Button>
                </Box>
                <Box
                  className="reservationDetailsBox"
                  sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
                >
                  <Typography>Reserve Now & Pay Later</Typography>
                  <Typography>
                    Secure your spot while staying flexible
                  </Typography>
                  <Typography>Free cancellation</Typography>
                  <Box
                    className="timings&learnMore"
                    sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
                  >
                    <Typography>Up to 24 hours in advance.</Typography>
                    <Typography sx={{ "&:hover": { cursor: "pointer" } }}>
                      Learn more
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>


        
        <Box
          className="otherDetails"
          sx={{ display: "flex", flexDirection: "row", columnGap: 2 }}
        >
          <Box
            className="lefthalf"
            sx={{
              display: {xs:"none",md:"flex"},
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
                justifyContent: "space-between",
              }}
            >
              <Typography>London Tours</Typography>
              <KeyboardArrowDownIcon />
            </Box>
            <Box
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
            </Box>
          </Box>
          <Box className="rightHalf" sx={{display:"flex",flexDirection:"column",rowGap:{xs:2}}}>
            <Box
              className="safetyMeasures&otherDetails"
              sx={{ display: "flex", flexDirection: {xs:"column",md:"row"}, columnGap: 2,rowGap:2 }}
            >
              <Box
                className="safettyMeasures"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <SafetyCheckIcon />
                <Typography>Safety Measures</Typography>
              </Box>
              <Box
                className="AccessTime"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <AccessTimeIcon />
                <Typography>12 hours 30 mintutes (approx.)</Typography>
              </Box>
              <Box
                className="mobileTicket"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <SmartphoneIcon />
                <Typography>Mobile Ticket</Typography>
              </Box>
              <Box
                className="Offers"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <QuestionAnswerIcon />
                <Typography>Offered in : English</Typography>
              </Box>
            </Box>
            <Box className="overView" sx={{display:"flex",flexDirection:"column",rowGap:2}}>
              <Typography sx={{fontWeight:"bold",fontSize:{xs:"22px",md:"25px"}}}>Overview</Typography>
              <Box className="overViewDetails" >
                <Typography sx={{fontSize:{xs:"17px",md:"20px"}}}>
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
                <Box className="unOrderList" >
                  <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:1}}>
                  <FiberManualRecordIcon sx={{fontSize:{xs:"10px"}}} />
                    <Typography>Visit Stonehenge with a guide</Typography>
                  </Box>
                  <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:1}}>
                  <FiberManualRecordIcon sx={{fontSize:{xs:"10px"}}} />
                    <Typography>Sit down for lunch (or dinner) at a traditional English pub</Typography>
                  </Box>
                  <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:1}}>
                  <FiberManualRecordIcon sx={{fontSize:{xs:"10px"}}} />
                    <Typography>Enjoy a coach tour of the beautiful Georgian city of Bath,
                    home of the famous author Jane Austen</Typography>
                  </Box>
                  <Box sx={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:1}}>
                  <FiberManualRecordIcon sx={{fontSize:{xs:"10px"}}} />
                    <Typography>Go for a walking tour of Windsor or visit Windsor Castle
                    (depending on selection chosen)</Typography>
                  </Box>
                </Box>
              </Box>


              <Box className="travellersChoice" sx={{display:"flex",flexDirection:"column",rowGap:1}}>    
                <Typography sx={{fontWeight:"bold",fontSize:{xs:"18px",md:"20px"}}}>Why Travellers Choose This Tour</Typography>
                <Typography>In addition to the multiple sightseeing stops, this tour includes lunch in a traditional, 14th-century pub.</Typography>
              </Box>


            </Box>
            <Box className="What's Included" sx={{display:"flex",flexDirection:"column",rowGap:1}}>
              <Typography sx={{fontSize:{xs:"18px",md:"20px"},fontWeight:"bold"}}>What's Included</Typography>
              <Box className="FullItems" sx={{display:"flex",flexDirection:"row",columnGap:2}}>
                <Box className="IncludedItems">
                    <Box className="1stItem" sx={{display:"flex",flexDirection:"row",columnGap:1,alignItems:"center"}}>
                        <CheckIcon /> 
                        <Typography>Visit Stonehenge, an UNESCO World Heritage Site (if option selected)</Typography>
                        </Box>
                    <Box className="2ndItem"  sx={{display:"flex",flexDirection:"row",columnGap:1,alignItems:"center"}}>
                        <CheckIcon />
                        <Typography>Entry to Windsor Castle (if option selected)</Typography>
                        </Box>
                    <Box className="3rdItem" sx={{display:"flex",flexDirection:"row",columnGap:1,alignItems:"center"}}>
                        <CheckIcon />
                        <Typography>Panoramic tour of Georgian city of Bath</Typography>
                        </Box>
                </Box>
              <Box className="excludedItem" sx={{display:{xs:"none",md:"flex"},flexDirection:{xs:"column",md:"column"}}}>
                <Box className="1stitem" sx={{display:"flex",flexDirection:"row",columnGap:1,alignItems:"center"}}>
                    <ClearIcon />
                    <Typography>Hotel pick-up & drop-off</Typography>
                </Box>
                <Box className="2nditem" sx={{display:"flex",flexDirection:"row",columnGap:1,alignItems:"center"}}>
                    <ClearIcon />
                    <Typography>Gratuities</Typography>
                </Box>
                <Box className="3rditem" sx={{display:"flex",flexDirection:"row",columnGap:1,alignItems:"center"}}>
                    <ClearIcon />
                    <Typography>Entry to Roman Baths</Typography>
                </Box>
              </Box>
              </Box>
              <Typography sx={{display:{xs:"flex",md:"none"},"&:hover":{cursor:"pointer",textDecoration:"underLine"}}}>see 3 More</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default TourDetails;
