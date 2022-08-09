import {
  Box,
  FormControlLabel,
  Radio,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import Header from "./Header";
import Travel2 from "../images/travel2.jpg";
import Travel1 from "../images/travel1.jpg";
import Image1 from "../images/img1.webp";
import Image2 from "../images/img2.jpg";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Footer from "./Footer";

const HomePage = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}>
      <Header />
      <Box
        className="mainPart"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          alignItems: "center",
        }}
      >
        <Box
          className="firstPart"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            component={"img"}
            src={Travel2}
            alt="homePageImages"
            sx={{
              maxWidth: "100%",
              minWidth: "100%",
              maxHeight: { xs: "50vh", md: "60vh" },
              minHeight: { xs: "50vh", md: "60vh" },
            }}
          />
        </Box>

        <Box
          className="secondPart"
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Why book with Travel
          </Typography>
          <Box
            className="choice"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              columnGap: { xs: 0, md: 2 },
              alignItems: "center",
              justifyContent: "center",
              padding: { xs: "2% 2% 2% 2%", md: "0% 5% 0% 5%" },
              rowGap: { xs: 3, md: 0 },
            }}
          >
            <Box
              className="ultimateFlexibilty"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: { xs: "100%", md: "25%" },
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Ultimate flexibility
              </Typography>
              <Typography>
                You’re in control, with free cancellation and payment options to
                satisfy any plan or budget.
              </Typography>
            </Box>
            <Box
              className="Memorable Experiences"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: { xs: "100%", md: "25%" },
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Memorable experiences
              </Typography>
              <Typography>
                Browse and book tours and activities so incredible, you’ll want
                to tell your friends.
              </Typography>
            </Box>
            <Box
              className="Quality at our core"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: { xs: "100%", md: "25%" },
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Qualmti at our core
              </Typography>
              <Typography>
                High quality standards. Millions of reviews. A Tripadvisor
                company.
              </Typography>
            </Box>
            <Box
              className="Award-wining support"
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: { xs: "100%", md: "25%" },
              }}
            >
              <Typography sx={{ fontSize: "18px", fontWeight: "bold" }}>
                Award-wining support
              </Typography>
              <Typography>
                New price? New plan? No problem. We’re here to help, 24/7.
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className="thirdPart">
          <Typography
            sx={{
              "&:hover": { cursor: "pointer" },
              fontSize: { xs: "16px", md: "20px" },
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
          <Typography sx={{ fontWeight: "bold", fontSize: "25px" }}>
            Recently Viewed
          </Typography>
          <Box
            className="recentlyVIewdInformation"
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              justifyContent: "center",
              columnGap: { xs: 0, md: 2 },
              rowGap: { xs: 2, md: 0 },
            }}
          >
            <Box
              className="firstImage"
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 1,
                width: { xs: "100%", md: "300px" },
                backgroundColor: "#f5f7fa",
                padding: "7px",
                "&:hover": { cursor: "pointer" },
              }}
            >
              <Box
                component={"img"}
                src={Image1}
                alt="recentlyViewdImage"
                sx={{
                  width: { xs: "100%", md: "300px" },
                  borderRadius: "10px",
                }}
              />
              <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock
              </Typography>
              <Box
                className="ratings&reviews"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <Rating
                  name="read-only"
                  value={4}
                  readOnly
                  sx={{ fontSize: "17px" }}
                />
                <Typography>8259</Typography>
              </Box>
              <Box
                className="priceDetails"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>from</Typography>
                <Box
                  className="price"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CurrencyRupeeIcon sx={{ fontSize: "18px" }} />
                  <Typography>8327.94</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              className="firstImage"
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 1,
                width: { xs: "100%", md: "300px" },
                backgroundColor: "#f5f7fa",
                padding: "7px",
                "&:hover": { cursor: "pointer" },
              }}
            >
              <Box
                component={"img"}
                src={Image1}
                alt="recentlyViewdImage"
                sx={{
                  width: { xs: "100%", md: "300px" },
                  borderRadius: "10px",
                }}
              />
              <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock
              </Typography>
              <Box
                className="ratings&reviews"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <Rating
                  name="read-only"
                  value={4}
                  readOnly
                  sx={{ fontSize: "17px" }}
                />
                <Typography>8259</Typography>
              </Box>
              <Box
                className="priceDetails"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>from</Typography>
                <Box
                  className="price"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CurrencyRupeeIcon sx={{ fontSize: "18px" }} />
                  <Typography>8327.94</Typography>
                </Box>
              </Box>
            </Box>
            <Box
              className="firstImage"
              sx={{
                display: "flex",
                flexDirection: "column",
                rowGap: 1,
                width: { xs: "100%", md: "300px" },
                backgroundColor: "#f5f7fa",
                padding: "7px",
                "&:hover": { cursor: "pointer" },
              }}
            >
              <Box
                component={"img"}
                src={Image1}
                alt="recentlyViewdImage"
                sx={{
                  width: { xs: "100%", md: "300px" },
                  borderRadius: "10px",
                }}
              />
              <Typography sx={{ fontWeight: "bold", fontSize: "15px" }}>
                Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock
              </Typography>
              <Box
                className="ratings&reviews"
                sx={{ display: "flex", flexDirection: "row", columnGap: 1 }}
              >
                <Rating
                  name="read-only"
                  value={4}
                  readOnly
                  sx={{ fontSize: "17px" }}
                />
                <Typography>8259</Typography>
              </Box>
              <Box
                className="priceDetails"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography sx={{ fontSize: "15px" }}>from</Typography>
                <Box
                  className="price"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CurrencyRupeeIcon sx={{ fontSize: "18px" }} />
                  <Typography>8327.94</Typography>
                </Box>
              </Box>
            </Box>
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
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "23px", md: "30px" }, fontWeight: "bold" }}
            >
              Keep Things
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "23px", md: "30px" }, fontWeight: "bold" }}
            >
              flexible
            </Typography>
            <Typography>
              Use Reserve Now & Pay Later to secure the activities you don't
              want to miss without being locked in.
            </Typography>
          </Box>
        </Box>

        <Box className="sixthPart" sx={{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        rowGap:2,
        width:"100%"
        }}>
          <Typography sx={{fontSize:"22px",fontWeight:"bold"}}>Top attractions near London</Typography>
          <Box className="topAttractionsplaces"
          sx={{
            display:"flex",
            flexDirection:"row",
            justifyContent:{xs:"flex-start",md:"center"},
            alignItems:"center",
            columnGap:4,
            width:{xs:"100%",md:"100%"},
            overflow:"auto",
            padding:{xs:"3% 4% 3% 4%",md:"3% 4% 3% 4%"}
          }}
          >
            <Box className="1stColumn" sx={{
              display:"flex",
              flexDirection:"column",
              rowGap:3,
            }}>
              <Box
                className="1stImage"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  "&:hover":{cursor:"pointer"}
                }}
              >
                <Box
                  component={"img"}
                  src={Travel1}
                  alt={"alternate image"}
                  sx={{ width: "120px" }}
                />
                <Box
                  className="plcaeDescriptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Stonehenge
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    206 Tours and Activities
                  </Typography>
                </Box>
              </Box>
              <Box
                className="1stImage"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  "&:hover":{cursor:"pointer"}
                }}
              >
                <Box
                  component={"img"}
                  src={Travel1}
                  alt={"alternate image"}
                  sx={{ width: "120px" }}
                />
                <Box
                  className="plcaeDescriptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Stonehenge
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    206 Tours and Activities
                  </Typography>
                </Box>
              </Box>
              <Box
                className="1stImage"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  "&:hover":{cursor:"pointer"}
                }}
              >
                <Box
                  component={"img"}
                  src={Travel1}
                  alt={"alternate image"}
                  sx={{ width: "120px" }}
                />
                <Box
                  className="plcaeDescriptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Stonehenge
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    206 Tours and Activities
                  </Typography>
                </Box>
              </Box>
            </Box>
             <Box className="2ndColumn" sx={{
              display:"flex",
              flexDirection:"column",
              rowGap:3,
            }}>
              <Box
                className="1stImage"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  "&:hover":{cursor:"pointer"}
                }}
              >
                <Box
                  component={"img"}
                  src={Travel1}
                  alt={"alternate image"}
                  sx={{ width: "120px" }}
                />
                <Box
                  className="plcaeDescriptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Stonehenge
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    206 Tours and Activities
                  </Typography>
                </Box>
              </Box>
              <Box
                className="1stImage"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  "&:hover":{cursor:"pointer"}
                }}
              >
                <Box
                  component={"img"}
                  src={Travel1}
                  alt={"alternate image"}
                  sx={{ width: "120px" }}
                />
                <Box
                  className="plcaeDescriptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Stonehenge
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    206 Tours and Activities
                  </Typography>
                </Box>
              </Box>
              <Box
                className="1stImage"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  "&:hover":{cursor:"pointer"}
                }}
              >
                <Box
                  component={"img"}
                  src={Travel1}
                  alt={"alternate image"}
                  sx={{ width: "120px" }}
                />
                <Box
                  className="plcaeDescriptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Stonehenge
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    206 Tours and Activities
                  </Typography>
                </Box>
              </Box>
            </Box>
            <Box className="3rdColumn" sx={{
              display:"flex",
              flexDirection:"column",
              rowGap:3,
            }}>
              <Box
                className="1stImage"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  "&:hover":{cursor:"pointer"}
                }}
              >
                <Box
                  component={"img"}
                  src={Travel1}
                  alt={"alternate image"}
                  sx={{ width: "120px" }}
                />
                <Box
                  className="plcaeDescriptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Stonehenge
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    206 Tours and Activities
                  </Typography>
                </Box>
              </Box>
              <Box
                className="1stImage"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  "&:hover":{cursor:"pointer"}
                }}
              >
                <Box
                  component={"img"}
                  src={Travel1}
                  alt={"alternate image"}
                  sx={{ width: "120px" }}
                />
                <Box
                  className="plcaeDescriptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Stonehenge
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    206 Tours and Activities
                  </Typography>
                </Box>
              </Box>
              <Box
                className="1stImage"
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  columnGap: 1,
                  "&:hover":{cursor:"pointer"}
                }}
              >
                <Box
                  component={"img"}
                  src={Travel1}
                  alt={"alternate image"}
                  sx={{ width: "120px" }}
                />
                <Box
                  className="plcaeDescriptions"
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                    Stonehenge
                  </Typography>
                  <Typography sx={{ fontSize: "13px" }}>
                    206 Tours and Activities
                  </Typography>
                </Box>
              </Box>
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
            }}
          >
            <Typography
              sx={{ fontSize: { xs: "23px", md: "30px" }, fontWeight: "bold" }}
            >
             Free
            </Typography>
            <Typography
              sx={{ fontSize: { xs: "23px", md: "30px" }, fontWeight: "bold" }}
            >
              cancellation
            </Typography>
            <Typography>
            You'll receive a full refund if you cancel at least 24 hours in advance of most experiences.
            </Typography>
          </Box>
        </Box>

      </Box>
      <Footer />
    </Box>
  );
};

export default HomePage;
