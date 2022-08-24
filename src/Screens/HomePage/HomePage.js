import {
  Box,
  Button,
  FormControlLabel,
  Radio,
  Rating,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Image2 from "../../assets/images/img2.jpg";
import Travel2 from "../../assets/images/travel2.jpg"
import Image1 from "../../assets/images/img1.webp";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Footer from "./../FooterComponents/Footer";
import SearchIcon from "@mui/icons-material/Search";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import Image3 from "../../assets/images/travel2.jpg";
import axios from "axios";
import Header from "../HeaderComponents/Header";
import { textAlign } from "@mui/system";
import Travel3 from "../../assets/images/travel3.jpg";
import Travel4 from "../../assets/images/travel4.webp";
import Travel6 from "../../assets/images/travel6.jpg";
import Travel8 from "../../assets/images/travel8.jpg";
import Travel9 from "../../assets/images/travel9.jpg";
import Travel10 from "../../assets/images/travel10.jpg";
import Travel11 from "../../assets/images/travel11.jpg";
import Travel12 from "../../assets/images/travel312.jpg";
import TopAttraction from "../../Components/TopAttraction/TopAttraction";
import TopDestinations from "../../Components/TopDestinations/TopDestinations";
import RecentlyViewed from "../../Components/RecentlyViewed/RecentlyViewed";
import HomeImage1 from "../../assets/images/homePage1.jpg"
import HomeImage2 from "../../assets/images/homePage2.jpg"
import HomeImage3 from "../../assets/images/homePage3.webp"
import HomeImage4 from "../../assets/images/homePage4.jpg"
import HomeImage5 from "../../assets/images/homePage5.jpg"
import HomeImage6 from "../../assets/images/homePage6.jpg"


let arr = [ Travel4,Travel3, Travel6, Travel8, Travel9, Travel10, Travel11, Travel12]
let arrLsit = [1,2,3]
let destinationArr = [1,2,3,4,5,6,7,8]


const Base_url = process.env.REACT_APP_Axios_Base_urls

const HomePage = () => {
  const [dateValue, setDateValue] = useState(new Date());
  const [imageState, setImageState] = useState([HomeImage5, 2]);
  const [dotClicked, setDotClicked] = useState({
    first: false,
    second: true,
    third: false,
  });
  const handleChange = (newValue) => {
    setDateValue(newValue);
  };

  setTimeout(() => {
    if (imageState[1] == 1) {
      setImageState([HomeImage6, 2]);
      setDotClicked({
        first: false,
        second: true,
        third: false,
      });
    } else if (imageState[1] == 2) {
      setImageState([HomeImage4, 3]);
      setDotClicked({
        first: false,
        second: false,
        third: true,
      });
    } else {
      setImageState([HomeImage5, 1]);
      setDotClicked({
        first: true,
        second: false,
        third: false,
      });
    }
  }, 5000);



  const fetchCurrentUserData = async () => {
    let options = {
      url:`${Base_url}/user/me`,
      method:"GET",
      headers:{
          "content-type":"application/json",
          "Authorization":`Bearer ${localStorage.getItem("accessToken")}`
      }
    }


    let {data} = await axios(options)
    localStorage.setItem("userData",data)
  }


  useEffect(()=>{
    fetchCurrentUserData()
  },[])

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
        <Header />
        <Box
          className="mainPart"
          sx={{
            display: "flex",
            flexDirection: "column",
            rowGap: 5,
            alignItems: "center",
          }}
        >
          <Box
            className="firstPart"
            sx={{
              width: {xs:"100%",md:"100%"},
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <Box
              component={"img"}
              src={imageState[0]}
              alt="homePageImages"
              sx={{
                maxWidth: {xs:"100%",md:"100%"},
                minWidth: {xs:"100%",md:"100%"},
                maxHeight: { xs: "50vh", md: "70vh" },
                minHeight: { xs: "50vh", md: "70vh" },
              }}
            />
            <Box
              className="amazingThings"
              sx={{
                border: "2px solid #f5f2f2",
                display: "flex",
                flexDirection: "column",
                rowGap: {xs:1,md:2},
                padding: { xs: "3% 2% 3% 2% ", md: "2%" },
                backgroundColor: "#f2f2f2",
                position: "absolute",
                left: { xs: "10px", md: "50px" },
                width: { xs: "90%", md: "30%" },
                opacity:0.9
              }}
            >
              <Typography
                sx={{
                  fontSize: { xs: "16px", md: "25px" },
                  fontWeight: "bold",
                }}
              >
                Find amazing things to do.
              </Typography>
              <Typography sx={{ fontSize:{xs:"16px",md:"25px"}, fontWeight: "bold" }}>
                Anytime, anywhere
              </Typography>
              <Box
                className="secondBox"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  rowGap: 2,
                }}
              >
                <Box
                  className="searchBox"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    width: "90%",
                    columnGap: 2,
                    border: "2px solid #ebf1fa",
                    padding: "2%",
                    backgroundColor: "white",
                  }}
                >
                  <SearchIcon />
                  <input
                    type={"text"}
                    placeholder={"Las Vegas, London, Paris..."}
                    style={{
                      width: "80%",
                      height: "25px",
                      outline: "none",
                      border: "none",
                    }}
                  />
                </Box>
                <Box
                  className="datePicker"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    columnGap: 2,
                  }}
                >
                  <DesktopDatePicker
                    inputFormat="MM/dd/yyyy"
                    value={dateValue}
                    onChange={handleChange}
                    disablePast
                    renderInput={(params) => (
                      <TextField
                        sx={{ backgroundColor: "white" }}
                        {...params}
                      />
                    )}
                  />
                  <Button variant="contained" color="success">
                    Search
                  </Button>
                </Box>
              </Box>
            </Box>
            <Box
              className="dots"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                columnGap: 1,
                position: "absolute",
                bottom: "20px",
                left: {xs:"40%",md:"50%"},
              }}
            >
              <Box
                className="1stDot"
                sx={{
                  backgroundColor: dotClicked.first ? "gold" : "white",
                  borderRadius: "50%",
                  color: "white",
                  width: "10px",
                  height: "10px",
                }}
                // onClick={() => {
                //   setImageState([Travel1, 1]);
                //   setDotClicked({
                //     first: true,
                //     second: false,
                //     third: false,
                //   });
                // }}
              ></Box>
              <Box
                className="2ndDot"
                sx={{
                  backgroundColor: dotClicked.second ? "gold" : "white",
                  borderRadius: "50%",
                  color: "white",
                  width: "10px",
                  height: "10px",
                }}
                // onClick={() => {
                //   setImageState([Travel2, 2]);
                //   setDotClicked({
                //     first: false,
                //     second: true,
                //     third: false,
                //   });
                // }}
              ></Box>

              <Box
                className="3rdDot"
                sx={{
                  backgroundColor: dotClicked.third ? "gold" : "white",
                  borderRadius: "50%",
                  color: "white",
                  width: "10px",
                  height: "10px",
                }}
                // onClick={() => {
                //   setImageState([Travel3, 3]);
                //   setDotClicked({
                //     first: false,
                //     second: false,
                //     third: true,
                //   });
                // }}
              ></Box>
            </Box>
          </Box>
            

          <Box
            className="secondPart"
            sx={{
              width: {xs:"96%",md:"98%"},
              display: "flex",
              flexDirection: "column",
              rowGap: 3,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: {xs:"20px",md:"25px"} }}>
              Why book with Travel
            </Typography>
            <Box
              className="choice"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                columnGap: { xs: 0, md: 1 },
                alignItems: "flex-start",
                justifyContent: "space-between",
                padding: { xs: "2% 2% 2% 2%", md: "0% 5% 0% 5%" },
                rowGap: { xs: 3, md: 0 },
                width:{xs:"95%",md:"89%"},
              }}
            >
              <Box
                className="ultimateFlexibilty"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "100%", md: "25%" },
                  justifyContent:"center",
                  rowGap:1,
                }}
                >
                <Typography sx={{ fontSize: {xs:"16px",md:"20px"}, fontWeight: "bold" }}>
                  Ultimate flexibility
                </Typography>
                <Box className="ultimateFlexibiltyDetails"
                sx={{
                  width:"75%",
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"center",
                  textAlign:"center"
                }}
                >
                <Typography sx={{
                  fontSize:{xs:"14px",md:"16px"},
                }}>
                  You’re in control, with free cancellation and payment options
                  to satisfy any plan or budget.
                </Typography>
                </Box>
             
              </Box>
              <Box
                className="Memorable experiences"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "100%", md: "25%" },
                  justifyContent:"center",
                  rowGap:1,
                }}
                >
                <Typography sx={{ fontSize: {xs:"16px",md:"20px"}, fontWeight: "bold" }}>
                Memorable experiences
                </Typography>
                <Box className="Memorable experiencesDetails"
                sx={{
                  width:"75%",
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"center",
                  textAlign:"center"
                }}
                >
                <Typography sx={{
                  fontSize:{xs:"14px",md:"16px"},
                }}>
                  Browse and book tours and activities so incredible, you’ll want to tell your friends.
                </Typography>
              </Box>
              </Box>
              <Box
                className="Quality at our core"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "100%", md: "25%" },
                  justifyContent:"center",
                  rowGap:1,
                }}
                >
                <Typography sx={{ fontSize: {xs:"16px",md:"20px"}, fontWeight: "bold" }}>
                Quality at our core
                </Typography>
                <Box className="Quality at our core Details"
                sx={{
                  width:"75%",
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"center",
                  textAlign:"center"
                }}
                >
                <Typography sx={{
                  fontSize:{xs:"14px",md:"16px"},
                }}>
                  High quality standards. Millions of reviews. A Tripadvisor company.
                </Typography>
              </Box>
              </Box>
              <Box
                className="Award-winning support"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  width: { xs: "100%", md: "25%" },
                  justifyContent:"center",
                  rowGap:1,
                }}
                >
                <Typography sx={{ fontSize: {xs:"16px",md:"20px"}, fontWeight: "bold" }}>
                Award-winning supports
                </Typography>
                <Box className="Award-winning supportDetails"
                sx={{
                  width:"75%",
                  display:"flex",
                  flexDirection:"row",
                  justifyContent:"center",
                  textAlign:"center"
                }}
                >
                <Typography sx={{
                  fontSize:{xs:"14px",md:"16px"},
                  // width:"75%"
                }}>
                  New price? New plan? No problem. We’re here to help, 24/7.
                </Typography>
              </Box>
              </Box>
              
            </Box>
          </Box>


            
          <Box className="thirdPart">
            <Typography
              sx={{
                "&:hover": { cursor: "pointer" },
                fontSize: { xs: "14px", md: "14px" },
              }}
            >
              Why you are seeing these recommendations
            </Typography>
          </Box>

          <Box
            className="recentlyViewd"
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: {xs:"20px",md:"25px"}}}>
              Recently Viewed
            </Typography>
            <Box
              className="recentlyVIewdInformation"
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                flexWrap:{xs:"wrap",md:"nowrap"},
                alignItems: "flex-start",
                justifyContent: "center",
                columnGap: { xs: 0, md: 2 },
                rowGap: { xs: 2, md: 0 },
                padding:{xs:"1% 3% 1% 3%",md:"0%"},
                width:{xs:"93%",md:"100%"},
              }}
            >
              {
                arrLsit.map((item,index) => {
                  return <RecentlyViewed key={index} />
                })
              }
            </Box>
          </Box>

          <Box
            className="fifthPart"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: "100%",
              backgroundColor: "#e6edf7",
              padding: { xs: "0%", md: "2% 0 2% 0" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", md: "30%" },
                padding:{xs:"3%  1% 3% 1%",md:"1%"},
                rowGap:2
              }}
            >
              <Box
              sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
              }}
              >
              <Typography
               sx={{ fontWeight: "bold", fontSize: {xs:"20px",md:"30px"} }}
              >
                Keep Things
              </Typography>
              <Typography
               sx={{ fontWeight: "bold", fontSize: {xs:"20px",md:"30px"} }}
              >
                flexible
              </Typography>
              </Box>
              <Typography
              sx={{
                width:"70%",
                textAlign:"center"
              }}
              >
                Use Reserve Now & Pay Later to secure the activities you don't
                want to miss without being locked in.
              </Typography>
            </Box>
          </Box>

          <Box
            className="sixthPart"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              rowGap: 2,
              width: "100%",
            }}
          >
            <Typography sx={{ fontWeight: "bold", fontSize: {xs:"20px",md:"25px"} }}>
              Top attractions 
            </Typography>
            <Box
              className="topAttractionsplaces"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: { xs: "flex-start", md: "space-evenly" },
                alignItems: "center",
                columnGap: 4,
                width: { xs: "92%", md: "92%" },
                overflow: "auto",
                padding: { xs: "3% 4% 3% 4%", md: "3% 4% 3% 4%" },
              }}
            >
              <Box
                className="1stColumn"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 3,
                }}
              >
                {
                  arrLsit.map((item, index) => {
                    return <TopAttraction key={index} />
                  })
                }

              </Box>
              <Box
                className="1stColumn"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 3,
                }}
              >
                {
                  arrLsit.map((item, index) => {
                    return <TopAttraction key={index} />
                  })
                }

              </Box>
              <Box
                className="1stColumn"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 3,
                }}
              >
                {
                  arrLsit.map((item, index) => {
                    return <TopAttraction key={index} />
                  })
                }

              </Box>
             
            
             
            </Box>
          </Box>

          <Box
            className="seventhPart"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              width: {xs:"98%",md:"100%"},
              backgroundColor: "#e6edf7",
              padding: { xs: "3% 1% 3% 1%", md: "2% 0 2% 0" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                width: { xs: "100%", md: "30%" },
                rowGap:2
              }}
            >
              <Box
              sx={{
                display:"flex",
                flexDirection:"column",
                alignItems:"center"
              }}
              >
              <Typography
                sx={{
                  fontSize: { xs: "23px", md: "30px" },
                  fontWeight: "bold",
                }}
              >
                Free
              </Typography>
              <Typography
                sx={{
                  fontSize: { xs: "23px", md: "30px" },
                  fontWeight: "bold",
                }}
              >
                cancellation
              </Typography>
              </Box>
              
              <Typography
              sx={{
                width:"70%",
                textAlign:"center"
              }}
              >
                You'll receive a full refund if you cancel at least 24 hours in
                advance of most experiences.
              </Typography>
            </Box>
          </Box>

          <Box
            className="eighthPart"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              rowGap: 2,
              width: { xs: "100%" },
            }}
          >
            <Typography
              sx={{
                fontSize: {xs:"23px",md:"30px"},
                fontWeight: "bold",
              }}
            >
              Top Destinations
            </Typography>
            <Box
              className="Top Destinations Places"
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: { xs: "flex-start", md: "space-evenly" },
                flexWrap: { xs: "nowrap", md: "wrap" },
                width: { xs: "94%", md: "80%" },
                rowGap: 3,
                overflow: { xs: "auto", md: "none" },
                padding: { xs: "1% 3% 1% 3%", md: "2% 0% 2% 0%" },
                columnGap: { xs: 2, md: 0 },
              }}
            >

              {
                destinationArr.map((item, index) => {
                  return <TopDestinations key={index}/>
                })
              }
            </Box>
          </Box>

        
        </Box>
        <Footer />
      </Box>
    </LocalizationProvider>
  );
};

export default HomePage;
