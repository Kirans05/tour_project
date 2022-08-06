import {
  Avatar,
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  FormGroup,
  Menu,
  MenuItem,
  Rating,
  Slide,
  Slider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "./Header";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Image1 from "../images/img1.webp";
import Image2 from "../images/img2.jpg";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckIcon from "@mui/icons-material/Check";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import HorizontalSlider from "react-horizontal-slider";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import ArtCulture from "../Tours Componnets/ArtCulture";


function valuetext(value) {
  return `${value}°C`;
}

const minDistance = 10;

const DashBoard = () => {
  const [arts_culture, setArts_culture] = useState(true);
  const [classes_workspaces, setclasses_workspaces] = useState(true);
  const [food_drink, setFood_drinnk] = useState(true);
  const [likelyToSellOut, setLikelyToSellOut] = useState(true);
  const [outDoorActivity, setOutDoorActivity] = useState(true);
  const [seasonal_specialOcation, setSeasonal_specialOcation] = useState(true);
  const [ticketsAndPasses, setTicketsAndPasses] = useState(true);
  const [tours_sightseeing, setTours_sightseeing] = useState(true);
  const [travel_Transportation, setTravel_Transportation] = useState(true);
  const [uniqueExperience, setUniqueExperience] = useState(true);

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


const [secondArtState , setsecondArtState]  = useState(true)
const [secondArtDesignState , setsecondArtDesignState]  = useState(true)




  const handleChange1 = (event, newValue, activeThumb) => {
    if (!Array.isArray(newValue)) {
      return;
    }

    if (activeThumb === 0) {
      setValue1([Math.min(newValue[0], value1[1] - minDistance), value1[1]]);
    } else {
      setValue1([value1[0], Math.max(newValue[1], value1[0] + minDistance)]);
    }
  };

  const handleDateTimeChange = (newValue) => {
    setDateValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <Box
        className="dashBoardBody"
        sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
      >
        <Header />
        <Box
          className="mainBody"
          sx={{ display: "flex", flexDirection: "column", rowGap: 1 }}
        >
          <Box
            className="FirstMainBody"
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 1,
              backgroundColor: "white",
            }}
          >
            <Typography variant="h5">Top London Full-day Tours</Typography>
          </Box>
          <Box
            className="horizontalSlider"
            sx={{
              display: "flex",
              alignItems: "center",
              columnGap: 2,
              backgroundColor: "white",
              paddingBottom: "1%",
              position: "sticky",
              top: "0px",
              left: "0px",
              paddingTop: "1%",
              paddingLeft: "1%",
              zIndex: 100,
            }}
          >
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                backgroundColor: "white",
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
            <Box
              sx={{
                border: "2px solid black",
                display: "flex",
                flexDirection: "row",
                width: "fit-content",
                padding: "1%",
                columnGap: 1,
                alignItems: "center",
                borderRadius: "120px",
                "&:hover": {
                  cursor: "pointer",
                },
              }}
            >
              <Avatar sx={{ bgcolor: "red" }}>N</Avatar>
              <Typography>Day Trips</Typography>
            </Box>
          </Box>

          {/* second Main Bo0dy  */}
          <Box
            className="SecondMainBody"
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
              columnGap: 2,
              zIndex: 15,
            }}
          >
            {/* Left half Of Secoond Main Body */}
            <Box
              className="LeftHalf"
              sx={{
                width: "24%",
                boxShadow: "0px 1px 1px 1px black",
                height: "fit-content",
                display: "flex",
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
                  alignItems: "center",
                  position: "sticky",
                  top: "110px",
                  left: "0px",
                  zIndex: 10000,
                }}
              >
                <Typography>When are you travelling?</Typography>
                <Box
                  sx={{
                    backgroundColor: "white",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "70px",
                  }}
                >
                  <DesktopDatePicker
                    label="Date desktop"
                    inputFormat="MM/dd/yyyy"
                    value={dateValue}
                    onChange={handleDateTimeChange}
                    renderInput={(params) => <TextField {...params} />}
                  />
                </Box>
              </Box>

              {/* different filter for travelling */}
              <Box
                className="filters"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 2,
                  zIndex: 10,
                }}
              >
                {/* popular filters */}
                <Box className="popular filter">
                  <Typography sx={{ fontSize: "25px" }}>Popular</Typography>
                  <Box>
                    <Box>
                      <FormGroup>
                        <FormControlLabel
                          control={<Checkbox color="success" />}
                          label="Good for avoiding crowds"
                        />
                        <FormControlLabel
                          control={<Checkbox color="success" />}
                          label="Taking safety measures"
                        />
                        <FormControlLabel
                          disabled
                          control={<Checkbox />}
                          label="Virtual experiences"
                          sx={{
                            "&:hover": { cursor: "not-allowed" },
                          }}
                        />
                        <FormControlLabel
                          disabled
                          control={<Checkbox />}
                          label="Kid friendly"
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
                <Box className="All London Tours">
                  <Typography
                    sx={{
                      "&:hover": {
                        cursor: "pointer",
                        textDecoration: "underLine",
                      },
                      fontSize: "25px",
                    }}
                  >
                    All London Tours
                  </Typography>

                  {/* arts and Culture */}
                  <Box className="Art & Culture">
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
                  </Box>
                  
                  {/* art and culture sub filters */}
                  <ArtCulture />

                  
                  {/* Classes & Workshops */}
                  <Box className="Classes & Workshops">
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
                  </Box>

                  {/* Food & Drink */}
                  <Box className="Food & Drink">
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
                  </Box>

                  {/* Likely To Sell Out */}
                  <Box className="Likely To Sell Out">
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
                  </Box>

                  {/* Outdoor Activities */}
                  <Box className="Outdoor Activities ">
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
                  </Box>

                  {/* Seasonal & Special Occasions */}
                  <Box className="Seasonal & Special Occasions">
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
                  </Box>

                  {/* Tickets & Passes */}
                  <Box className="Tickets & Passes">
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
                  </Box>

                  {/* Tours, Sightseeing & Cruises */}
                  <Box className="Tours, Sightseeing & Cruises">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                      }}
                      onClick={() => setTours_sightseeing(!tours_sightseeing)}
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
                        Tours, Sightseeing & Cruises
                      </Typography>
                      <Box className="arrows">
                        <KeyboardArrowDownIcon
                          sx={{
                            display: tours_sightseeing ? "flex" : "none",
                          }}
                        />
                        <KeyboardArrowUpIcon
                          sx={{
                            display: !tours_sightseeing ? "flex" : "none",
                          }}
                        />
                      </Box>
                    </Box>
                  </Box>

                  {/* Tours, Sightseeing & Cruises */}
                  <Box className="Travel & Transportation Services">
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
                  </Box>

                  {/* Unique Experiences */}
                  <Box className="Unique Experiences">
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
                  </Box>
                </Box>

                <Divider />

                {/* price filter */}
                <Box className="price Filter">
                  <Typography>Price</Typography>
                  <Slider
                    getAriaLabel={() => "Minimum distance"}
                    value={value1}
                    onChange={handleChange1}
                    valueLabelDisplay="off"
                    getAriaValueText={valuetext}
                    disableSwap
                  />
                  <Typography
                    sx={{
                      fontSize: "16px",
                    }}
                  >
                    value : {value1}
                  </Typography>
                </Box>

                <Divider />

                {/* duration lfilter */}
                <Box className="durationFilter">
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label="Up to 1 hour"
                    />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label="1 to 4 hours"
                    />
                    <FormControlLabel
                      control={<Checkbox />}
                      label="4 hours to 1 day"
                    />
                    <FormControlLabel
                      disabled
                      control={<Checkbox />}
                      label="1 to 3 days"
                      sx={{
                        "&:hover": { cursor: "not-allowed" },
                      }}
                    />
                    <FormControlLabel
                      disabled
                      control={<Checkbox />}
                      label="3+ days"
                      sx={{
                        "&:hover": { cursor: "not-allowed" },
                      }}
                    />
                  </FormGroup>
                </Box>

                <Divider />

                {/* Time of day */}
                <Box className="TimeOfDay">
                  <Typography sx={{ fontSize: "16px" }}>Time Of Day</Typography>
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label="6am—12pm"
                    />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label="12pm—5pm"
                    />
                    <FormControlLabel control={<Checkbox />} label="5pm—12am" />
                  </FormGroup>
                </Box>

                <Divider />

                {/* Rating */}
                <Box className="ratings">
                  <Typography sx={{ fontSize: "16px" }}>Rating</Typography>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box className="5star">
                      <Checkbox />
                      <Rating name="read-only" value={5} readOnly />
                    </Box>
                    <Box className="4star" sx={{ display: "flex" }}>
                      <Checkbox />
                      <Rating name="read-only" value={4} readOnly />
                      <Typography>& up</Typography>
                    </Box>
                    <Box className="3star" sx={{ display: "flex" }}>
                      <Checkbox />
                      <Rating name="read-only" value={3} readOnly />
                      <Typography>& up</Typography>
                    </Box>
                    <Box className="2star" sx={{ display: "flex" }}>
                      <Checkbox />
                      <Rating name="read-only" value={2} readOnly />
                      <Typography>& up</Typography>
                    </Box>
                    <Box className="1star" sx={{ display: "flex" }}>
                      <Checkbox />
                      <Rating name="read-only" value={1} readOnly />
                      <Typography>& up</Typography>
                    </Box>
                  </Box>
                </Box>

                <Divider />

                {/* Specials */}
                <Box className="Specials">
                  <Typography sx={{ fontSize: "16px" }}>Specials</Typography>
                  <FormGroup>
                    <FormControlLabel
                      disabled
                      control={<Checkbox color="success" />}
                      label="Deals & Discounts"
                      sx={{
                        "&:hover": { cursor: "not-allowed" },
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label="Free Cancellation"
                    />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label="Likely to Sell Out"
                    />
                    <FormControlLabel
                      disabled
                      control={<Checkbox color="success" />}
                      label="Skip-The-Line"
                      sx={{
                        "&:hover": { cursor: "not-allowed" },
                      }}
                    />
                    <FormControlLabel
                      control={<Checkbox color="success" />}
                      label="Private Tour"
                    />
                    <FormControlLabel
                      disabled
                      control={<Checkbox color="success" />}
                      label="Travel Exclusive"
                      sx={{
                        "&:hover": { cursor: "not-allowed" },
                      }}
                    />
                    <FormControlLabel
                      disabled
                      control={<Checkbox color="success" />}
                      label="New on Travel"
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
                width: "74%",
              }}
            >
              <Box className="countAvailableContents">
                <Typography>531 results</Typography>
              </Box>
              <Box
                className="travelData"
                sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
              >
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
                <Box
                  className="firstImage"
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    columnGap: 3,
                    padding: "2%",
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: "0px 0px 5px 0px #505752",
                    },
                  }}
                >
                  <Box
                    component={"img"}
                    src={Image1}
                    alt="place image"
                    sx={{
                      maxWidth: "250px",
                      maxHeight: "250px",
                      borderRadius: "20px",
                    }}
                  />

                  <Box
                    className="placeDetails"
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      padding: "1%",
                    }}
                  >
                    <Box className="placeDescriptions">
                      <Typography sx={{ fontSize: "20px", fontWeight: "bold" }}>
                        Stonehenge, Windsor Castle and Bath with Pub Lunch in
                        Lacock
                      </Typography>
                      <Box
                        className="ratingBox"
                        sx={{ display: "flex", columnGap: 1 }}
                      >
                        <Rating name="read-only" value={4} readOnly />
                        <Typography>3047</Typography>
                      </Box>
                      <Typography sx={{ fontSize: "15px" }}>
                        Avoid the hassle of renting a car to see rural England’s
                        highlights with help from this full-day tour which
                        includes round-trip transport from London. Choose from
                        two options to find what best suits your preferences,
                        and travel by air-conditioned coach bus with onboard
                        Wi-Fi. You can either combine a visit to Stonehenge with
                        a pub lunch in Lacock and a walking tour of Windsor, or
                        opt to visit both Windsor Castle and Stonehenge with a
                        break for a traditional English pub lunch. Both options
                        also pass by the city of Bath, hometown of Jane Austen.
                      </Typography>
                      <Box
                        className="AccessTime"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <AccessTimeIcon />
                        <Typography>12 hours 30 minutes</Typography>
                      </Box>
                      <Box
                        className="concellationBox"
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          columnGap: 1,
                        }}
                      >
                        <CheckIcon />
                        <Typography>Free Cancellation</Typography>
                      </Box>
                    </Box>
                    <Box className="PriceDetails">
                      <Typography>from</Typography>
                      <Typography>8747.68</Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </LocalizationProvider>
  );
};

export default DashBoard;
