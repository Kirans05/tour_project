import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import { Box, Button, Menu, MenuItem, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import CloseIcon from "@mui/icons-material/Close";
import HomeIcon from "@mui/icons-material/Home";
import SportsScoreIcon from "@mui/icons-material/SportsScore";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import SearchIcon from '@mui/icons-material/Search';
// import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  const navigate = useNavigate();

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [NearBystate, setNearBYState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [Recommendationstate, setRecommendationState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [AttractionsState, setAttractionsState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [UniqueExperienceState, setUniqueExperienceState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [TravelTransportState, setTravelTransportState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [TourSightSeeingState, setTourSightSeeingState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [Ticket_PassesState, setTicket_PassesState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [Seasonal_OccasionState, setSeasonal_OccasionState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [OutDoorActivitiesState, setOutDoorActivitiesState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [FoodDrinkState, setFoodDrinkState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [Classes_WorkshopState, setClasses_WorkshopState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [ArtCultureState, setArtCultureState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });


  const [FirstArtState,setFirstArtState] = useState("")
  const [FirstClass_workshopState,setFirstClass_workshopState] = useState("")
  const [FirstFood_DrinkState,setFirstFood_DrinkState] = useState("")
  const [FirstOutDoorActivitesState,setFirstOutDoorActivitesState] = useState("")
  const [FirstSeasonl_SpecialState, setFirstSeasonl_SpecialState] = useState("")
  const [FirstTickets_PassesState, setFirstTickets_PassesState] = useState("")
  const [FirstTour_sightseeingState, setFirstTour_sightseeingState] = useState("")
  const [FirstTravel_TransportState, setFirstTravel_TransportState] = useState("")


  
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };


  // main toogle drawer
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  //  nearby toggle drawer
  const NearbyToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setNearBYState({ ...NearBystate, [anchor]: open });
  };

  // recommendation toggle drawer
  const RecommendationToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setRecommendationState({ ...Recommendationstate, [anchor]: open });
  };

  // attractions
  const AttractionsToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setAttractionsState({ ...AttractionsState, [anchor]: open });
  };

  // unique Experience
  const UniqueExperienceToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setUniqueExperienceState({ ...UniqueExperienceState, [anchor]: open });
  };

  // Travel , Transportation And service
  const Travel_TransportationToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setTravelTransportState({ ...TravelTransportState, [anchor]: open });
  };

  // tour, sighitseeing and cruises
  const Tour_SightSeeingToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setTourSightSeeingState({ ...TourSightSeeingState, [anchor]: open });
  };

  // Ticket And Passes
  const Ticket_PassesToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setTicket_PassesState({ ...Ticket_PassesState, [anchor]: open });
  };

  // seasonal nad special occasions
  const Seasonal_special_occasionsToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setSeasonal_OccasionState({ ...Seasonal_OccasionState, [anchor]: open });
  };

  // outDoor Activites
  const OutDoor_ActivitesToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOutDoorActivitiesState({ ...OutDoorActivitiesState, [anchor]: open });
  };

  // Food NAd Drink
  const Food_DrinkToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setFoodDrinkState({ ...FoodDrinkState, [anchor]: open });
  };

  // classes and workshops
  const Classes_WorkshopToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setClasses_WorkshopState({ ...Classes_WorkshopState, [anchor]: open });
  };

  // art and culture
  const Art_CultureToggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setArtCultureState({ ...ArtCultureState, [anchor]: open });
  };


  //  main toggle Drawer
  const list = (anchor) => (
    <Box
      sx={{
       width:{xs:"250px",md:"350px"},
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
        zIndex:1000000000000
      }}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      {/* title */}
      <Box
        className="title"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={toggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* registeration signup or login */}
      <Box
        className="registeration"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          paddingLeft: "10%",
        }}
      >
        <Typography onClick={()=>navigate("/login")}>Login</Typography>
        <Typography onClick={()=>navigate("/login")}>SignUp</Typography>
      </Box>

      <Divider />

      {/* basic pages like home booking etc */}
      <Box
        className="basic Pages"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          paddingLeft: "10%",
        }}
      >
        <Box
          className="Home"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/HomePage")}
        >
          <HomeIcon />
          <Typography>Home</Typography>
        </Box>
        <Box
          className="Booking"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/bookingPage")}
        >
          <Typography>Bookings</Typography>
        </Box>
        <Box
          className="Help"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={() => navigate("/helpPage")}
        >
          <HelpOutlineIcon />
          <Typography>help</Typography>
        </Box>
        <Box
          className="En"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <SportsScoreIcon />
          <Typography>En</Typography>
        </Box>
        <Box
          className="INR"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 1,
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <CurrencyRupeeIcon />
          <Typography>INR</Typography>
        </Box>
      </Box>

      <Divider />

      {/* Explore London */}
      <Box
        className="Explore London"
        sx={{
          display: "flex",
          flexDirection: "column",
          rowGap: 2,
          paddingLeft: "10%",
        }}
      >
        <Typography>Explore London</Typography>
        <Typography>London Tours</Typography>
        <Box
          className="All London Tours"
          sx={{ display: "flex", flexDirection: "column", rowGap: 2 }}
        >
          <Typography variant="h6"
          onClick={()=>navigate("/")}
          sx={{
            "&:hover":{
              cursor:"pointer"
            }
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
                // "&:hover":{
                //   backgroundColor:"#f2fcfc"
                // }
              }}
              onClick={Art_CultureToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Art & Culture
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box>

          {/* Audio Guides */}
          <Box className="Audio Guides">
            <Typography>Audio Guides</Typography>
          </Box>

          {/* Classes & Workshops */}
          <Box className="Classes & Workshops">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={Classes_WorkshopToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Classes & Workshops
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
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
              onClick={Food_DrinkToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Food & Drink
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box>

          {/* Kid Friendly */}
          <Box className="Kid Friendly">
            <Typography>Kid Friendly</Typography>
          </Box>

          {/* Likely To Sell Out */}
          <Box className="Likely To Sell Out">
            <Typography>Likely To Sell Out</Typography>
          </Box>

          {/* Outdoor Activities */}
          <Box className="Outdoor Activities ">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={OutDoor_ActivitesToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Outdoor Activities
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
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
              onClick={Seasonal_special_occasionsToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Seasonal & Special Occasions
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
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
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
                onClick={Ticket_PassesToggleDrawer("left", true)}
              >
                Tickets & Passes
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
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
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
                onClick={Tour_SightSeeingToggleDrawer("left", true)}
              >
                Tours, Sightseeing & Cruises
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box>

          {/* TRavel TRansportation And Services */}
          <Box className="Travel & Transportation Services">
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
              onClick={Travel_TransportationToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Travel & Transportation Services
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
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
              onClick={UniqueExperienceToggleDrawer("left", true)}
            >
              <Typography
                sx={{
                  "&:hover": {
                    textDecoration: "underLine",
                    cursor: "pointer",
                  },
                }}
              >
                Unique Experiences
              </Typography>
              <Box
                className="arrows"
              >
                <KeyboardArrowRightIcon />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Attractions */}
      <Box
        className="attractions"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10%",
        }}
        onClick={AttractionsToggleDrawer("left", true)}
      >
        <Typography>Attractions</Typography>
        <KeyboardArrowRightIcon />
      </Box>

      {/* Recommendations */}
      <Box
        className="Recommendations "
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10%",
        }}
        onClick={RecommendationToggleDrawer("left", true)}
      >
        <Typography>Recommendations</Typography>
        <KeyboardArrowRightIcon />
      </Box>

      {/* NearBy */}
      <Box
        className="NearBy"
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: "10%",
        }}
        onClick={NearbyToggleDrawer("left", true)}
      >
        <Typography>NearBy</Typography>
        <KeyboardArrowRightIcon />
      </Box>
    </Box>
  );

  // nearby modal
  const NearByModal = (anchor) => (
    <Box
    sx={{
     width:{xs:"250px",md:"350px"},
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
    }}
    role="presentation"
  >
    {/* title */}
    <Box
      className="artCulturetitle"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CloseIcon
        sx={{ fontSize: "30px" }}
        onClick={NearbyToggleDrawer(anchor, false)}
      />
      <Typography variant="h5">Travel</Typography>
    </Box>

    {/* back Button */}
    <Box className="BackButton" sx={{
      display:"flex",
      flexDirection:"row",
      columnGap:1,
      paddingLeft:"10%"
    }}>
      <KeyboardBackspaceIcon 
      sx={{
        "&:hover":{cursor:"pointer"}
      }}
      onClick={NearbyToggleDrawer(anchor, false)}
      />
      <Typography>Back To Main</Typography>
    </Box>

    <Divider />

    <Box className="differnet Items" sx={{
      display:"flex",
      flexDirection:"column",
      rowGap:2,
      paddingLeft:"10%"
    }}>
      <Typography>England Tours</Typography>
      <Typography>Harley</Typography>
      <Typography>Stansted Mountfitchet</Typography>
      <Typography>Cambridge</Typography>
      <Typography>Oxford</Typography>
      <Typography>Southampton</Typography>
      <Typography>Birmingham</Typography>
      <Typography>Bristol</Typography>
      <Typography>Cardiff</Typography>
      <Typography>Bruges</Typography>
      <Typography>Lille</Typography>
      <Typography>Manchester</Typography>
      <Typography>LiverPool</Typography>
      <Typography>Soth East England</Typography>
      <Typography>East of England</Typography>
      <Typography>Nord-Pas de Calais</Typography>
    </Box>


    </Box>
  );

  // recommendationModal
  const recommendationModal = (anchor) => (
    <Box
    sx={{
     width:{xs:"250px",md:"350px"},
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
    }}
    role="presentation"
  >
    {/* title */}
    <Box
      className="artCulturetitle"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CloseIcon
        sx={{ fontSize: "30px" }}
        onClick={RecommendationToggleDrawer(anchor, false)}
      />
      <Typography variant="h5">Travel</Typography>
    </Box>

    {/* back Button */}
    <Box className="BackButton" sx={{
      display:"flex",
      flexDirection:"row",
      columnGap:1,
      paddingLeft:"10%"
    }}>
      <KeyboardBackspaceIcon 
      sx={{
        "&:hover":{cursor:"pointer"}
      }}
      onClick={RecommendationToggleDrawer(anchor, false)}
      />
      <Typography>Back To Main</Typography>
    </Box>

    <Divider />

    <Box className="differnet Items" sx={{
      display:"flex",
      flexDirection:"column",
      rowGap:2,
      paddingLeft:"10%"
    }}>
      <Typography>All Recommendations</Typography>
      <Typography>Ways To Beat The Crowd in London</Typography>
      <Typography>Don't Miss these Must-Do Activites in London</Typography>
      <Typography>How To Spend 3 Days in London</Typography>
      <Typography>Private Walking Tours in London</Typography>
      <Typography>Top Parks & Gardens in London</Typography>
      <Typography>doctor who Tours in London</Typography>
      <Typography>London FootBall Tours</Typography>
    </Box>


    </Box>
  );

  // AttractionsModal
  const AttractionsModal = (anchor) => (
    <Box
    sx={{
     width:{xs:"250px",md:"350px"},
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
    }}
    role="presentation"
  >
    {/* title */}
    <Box
      className="artCulturetitle"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CloseIcon
        sx={{ fontSize: "30px" }}
        onClick={AttractionsToggleDrawer(anchor, false)}
      />
      <Typography variant="h5">Travel</Typography>
    </Box>

    {/* back Button */}
    <Box className="BackButton" sx={{
      display:"flex",
      flexDirection:"row",
      columnGap:1,
      paddingLeft:"10%"
    }}>
      <KeyboardBackspaceIcon 
      sx={{
        "&:hover":{cursor:"pointer"}
      }}
      onClick={AttractionsToggleDrawer(anchor, false)}
      />
      <Typography>Back To Main</Typography>
    </Box>

    <Divider />

    <Box className="differnet Items" sx={{
      display:"flex",
      flexDirection:"column",
      rowGap:2,
      paddingLeft:"10%"
    }}>
      <Typography>Things To Do In London</Typography>
      <Typography>Stonehenge Tours & Tickets</Typography>
      <Typography>London Eye Tours & Tickets</Typography>
      <Typography>Thames River Tours & Tickets</Typography>
      <Typography>Changing Of The Gaurd Tours & Tickets</Typography>
      <Typography>Buckingham Palace Tours & Tickets</Typography>
      <Typography>House Of Parliament & Big Ben Tours & Tickets</Typography>
    </Box>


    </Box>
  );

  // UniqueExperinecModal
  const uniqueExperienceModal = (anchor) => (
    <Box
    sx={{
     width:{xs:"250px",md:"350px"},
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
    }}
    role="presentation"
  >
    {/* title */}
    <Box
      className="artCulturetitle"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CloseIcon
        sx={{ fontSize: "30px" }}
        onClick={UniqueExperienceToggleDrawer(anchor, false)}
      />
      <Typography variant="h5">Travel</Typography>
    </Box>

    {/* back Button */}
    <Box className="BackButton" sx={{
      display:"flex",
      flexDirection:"row",
      columnGap:1,
      paddingLeft:"10%"
    }}>
      <KeyboardBackspaceIcon 
      sx={{
        "&:hover":{cursor:"pointer"}
      }}
      onClick={UniqueExperienceToggleDrawer(anchor, false)}
      />
      <Typography>Back To Main</Typography>
    </Box>

    <Divider />



      {/* main body */}
      <Box className="mainUnique Experience">
    
        {/* back Button London Tour*/}
        <Box className="mainUnique Experience" sx={{
         display:"flex",
         flexDirection:"row",
         columnGap:1,
         paddingLeft:"10%"
       }}>
         <KeyboardBackspaceIcon 
         sx={{
           "&:hover":{cursor:"pointer"}
         }}
         onClick={UniqueExperienceToggleDrawer(anchor, false)}
         />
         <Typography>London Tour</Typography>
       </Box>
    
       <Box className="mainBody" sx={{
         paddingLeft:"10%",
         fontSize:"30px",
         display:"flex",
         flexDirection:"column",
         rowGap:3
       }}>
         <Typography>All Unique Experiences</Typography>
         <Typography>Volunteer Tours</Typography>

       </Box>
    
       </Box>


    </Box>
  );

  // Travel , TRansport & service Modal
  const Travel_Transport_serviceModal = (anchor) => (
    <Box
    sx={{
     width:{xs:"250px",md:"350px"},
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
    }}
    role="presentation"
  >
    {/* title */}
    <Box
      className="artCulturetitle"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CloseIcon
        sx={{ fontSize: "30px" }}
        onClick={Travel_TransportationToggleDrawer(anchor, false)}
      />
      <Typography variant="h5">Travel</Typography>
    </Box>

    {/* back Button */}
    <Box className="BackButton" sx={{
      display:"flex",
      flexDirection:"row",
      columnGap:1,
      paddingLeft:"10%"
    }}>
      <KeyboardBackspaceIcon 
      sx={{
        "&:hover":{cursor:"pointer"}
      }}
      onClick={Travel_TransportationToggleDrawer(anchor, false)}
      />
      <Typography>Back To Main</Typography>
    </Box>

    <Divider />


      {
        FirstTravel_TransportState == ""?
        <Box className="mainTravel&TransporationServices">
    
        {/* back Button London Tour*/}
        <Box className="mainTravel&TransporationServices" sx={{
         display:"flex",
         flexDirection:"row",
         columnGap:1,
         paddingLeft:"10%"
       }}>
         <KeyboardBackspaceIcon 
         sx={{
           "&:hover":{cursor:"pointer"}
         }}
         onClick={Travel_TransportationToggleDrawer(anchor, false)}
         />
         <Typography>London Tour</Typography>
       </Box>
    
       <Box className="mainBody" sx={{
         paddingLeft:"10%",
         fontSize:"30px",
         display:"flex",
         flexDirection:"column",
         rowGap:3
       }}>
         <Typography>All Travel & Transporation Services</Typography>
    
    
         {/* Services*/}
         <Box className="Services"
         onClick={()=>setFirstTravel_TransportState("Services")}
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
                 }}
               >
                 Services
               </Typography>
               <Box
                 className="arrows"
               >
                 <KeyboardArrowRightIcon />
               </Box>
             </Box>
           </Box>
    
    
           
                 
         {/* Transfers*/}
         <Box className="Transfers"
         onClick={()=>setFirstTravel_TransportState("Transfers")}
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
                 }}
               >
                 Transfers
               </Typography>
               <Box
                 className="arrows"
               >
                 <KeyboardArrowRightIcon />
               </Box>
             </Box>
           </Box>
    
    
    
    
        
                      {/* Transportations*/}
         <Box className="Transportations"
         onClick={()=>setFirstTravel_TransportState("Transportation")}
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
                 }}
               >
                 Transportations
               </Typography>
               <Box
                 className="arrows"
               >
                 <KeyboardArrowRightIcon />
               </Box>
             </Box>
           </Box>
    
       </Box>
    
       </Box>
       : FirstTravel_TransportState == "Services" ?
       <Box className="Services" sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        paddingLeft:"10%"
      }}>
    
           {/* back Button Services*/}
        <Box className="BackButtonServices" sx={{
         display:"flex",
         flexDirection:"row",
         columnGap:1,
         paddingLeft:"10%"
       }}>
         <KeyboardBackspaceIcon 
         sx={{
           "&:hover":{cursor:"pointer"}
         }}
         onClick={()=>setFirstTravel_TransportState("")}
         />
         <Typography>Travel & Transporation Services</Typography>
       </Box>
       <Typography>All Services</Typography>
       <Typography>Discount Cards</Typography>
       <Typography>Photo Shoots</Typography>
       <Typography>Shopping Passes & Offers</Typography>
       <Typography>Shopping Tours</Typography>
      </Box>
      : FirstTravel_TransportState == "Transportation" ? 
      <Box className="Transportation" sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        paddingLeft:"10%"
      }}>
    
           {/* back Button Transportation*/}
        <Box className="BackButtonServices" sx={{
         display:"flex",
         flexDirection:"row",
         columnGap:1,
         paddingLeft:"10%"
       }}>
         <KeyboardBackspaceIcon 
         sx={{
           "&:hover":{cursor:"pointer"}
         }}
         onClick={()=>setFirstTravel_TransportState("")}
         />
         <Typography>Travel & Transporation Services</Typography>
       </Box>
       <Typography>All Transportation</Typography>
       <Typography>Bus Services</Typography>
       <Typography>Private Drivers</Typography>
       <Typography>Rail Services</Typography>
       <Typography>Transportational Rental</Typography>
       <Typography>Transportational Services</Typography>
      </Box>
      : FirstTravel_TransportState == "Transfers" ? 
      <Box className="Transfers" sx={{
        display:"flex",
        flexDirection:"column",
        rowGap:3,
        paddingLeft:"10%"
      }}>
    
           {/* back Button Transfers*/}
        <Box className="BackButtonServices" sx={{
         display:"flex",
         flexDirection:"row",
         columnGap:1,
         paddingLeft:"10%"
       }}>
         <KeyboardBackspaceIcon 
         sx={{
           "&:hover":{cursor:"pointer"}
         }}
         onClick={()=>setFirstTravel_TransportState("")}
         />
         <Typography>Travel & Transporation Services</Typography>
       </Box>
       <Typography>All Transfers</Typography>
       <Typography>Airport & Hotel Transfers</Typography>
       <Typography>Port Transfers</Typography>
       <Typography>Rail Transfers</Typography>
      </Box>
      : null
      }
    </Box>
  );

  // Tour, sightseeing & cruises
  const Tour_sightseeing_Modal = (anchor) => (
    <Box
    sx={{
     width:{xs:"250px",md:"350px"},
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
    }}
    role="presentation"
  >
    {/* title */}
    <Box
      className="artCulturetitle"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CloseIcon
        sx={{ fontSize: "30px" }}
        onClick={Ticket_PassesToggleDrawer(anchor, false)}
      />
      <Typography variant="h5">Travel</Typography>
    </Box>

    {/* back Button */}
    <Box className="BackButton" sx={{
      display:"flex",
      flexDirection:"row",
      columnGap:1,
      paddingLeft:"10%"
    }}>
      <KeyboardBackspaceIcon 
      sx={{
        "&:hover":{cursor:"pointer"}
      }}
      onClick={Tour_SightSeeingToggleDrawer(anchor, false)}
      />
      <Typography>Back To Main</Typography>
    </Box>

    <Divider />



      {
        FirstTour_sightseeingState == "" ?
        <Box className="mainTravel&TransporationServices">
    
    {/* back Button London Tour*/}
    <Box className="mainTour,SightSeeing&Cruises" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={Tour_SightSeeingToggleDrawer(anchor, false)}
     />
     <Typography>London Tour</Typography>
   </Box>

   <Box className="mainBody" sx={{
     paddingLeft:"10%",
     fontSize:"30px",
     display:"flex",
     flexDirection:"column",
     rowGap:3
   }}>
     <Typography>All Tours, Sightseeing & Cruises</Typography>


     {/* Cruises & Sailing*/}
     <Box className="Cruises & Sailing"
     onClick={()=>setFirstTour_sightseeingState("Cruises & Sailing")}
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
             }}
           >
             Cruises & Sailing
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>


       
             
     {/* How To Get Around*/}
     <Box className="How To Get Around"
     onClick={()=>setFirstTour_sightseeingState("How To Get Around")}
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
             }}
           >
             How To Get Around
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>




             {/* Private And Luxury*/}
     <Box className="Private And Luxury"
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
             }}
           >
             Private And Luxury
           </Typography>
         </Box>
       </Box>



                  {/* SightSeeing Tours*/}
     <Box className="SightSeeing Tours"
     onClick={()=>setFirstTour_sightseeingState("SightSeeing Tours")}
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
             }}
           >
             SightSeeing Tours
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>




                 {/* Tours By Duration*/}
     <Box className="Tours By Duration"
     onClick={()=>setFirstTour_sightseeingState("Tours By Duration")}
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
             }}
           >
             Tours By Duration
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>


   </Box>

   </Box>
   : FirstTour_sightseeingState == "Cruises & Sailing" ?
   <Box className="Cruises & Sailing" sx={{
    display:"flex",
    flexDirection:"column",
    rowGap:3,
    paddingLeft:"10%"
  }}>

       {/* back Button Cruises & Sailing*/}
    <Box className="BackButtonCruises & Sailing" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={()=>setFirstTour_sightseeingState("")}
     />
     <Typography>Tours, SightSeeing & Cruises</Typography>
   </Box>
   <Typography>All Cruises & Sailing</Typography>
   <Typography>Catamaran Cruises</Typography>
   <Typography>Day Cruises</Typography>
   <Typography>Dinner Cruises</Typography>
   <Typography>Gandala Cruises</Typography>
   <Typography>Night Cruises</Typography>
   <Typography>Parts of Call Tours</Typography>
   <Typography>Share Excursions</Typography>
   <Typography>SightSeeing Cruises</Typography>
  </Box>
  : FirstTour_sightseeingState == "How To Get Around" ?
  <Box className="How To Get Around" sx={{
    display:"flex",
    flexDirection:"column",
    rowGap:3,
    paddingLeft:"10%"
  }}>

       {/* back Button How To Get Around*/}
    <Box className="BackButtonHow To Get Around" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={()=>setFirstTour_sightseeingState("")}
     />
     <Typography>Tours, SightSeeing & Cruises</Typography>
   </Box>
   <Typography>All How To Get Around</Typography>
   <Typography>Air Tours</Typography>
   <Typography>Bike Rentals</Typography>
   <Typography>Bike Tours</Typography>
   <Typography>Bus Tours</Typography>
   <Typography>Car Tours</Typography>
   <Typography>Classic Car Tours</Typography>
   <Typography>E-Bike Tours</Typography>
   <Typography>Helicopter Tours</Typography>
   <Typography>Hot Air Balloon Rides</Typography>
   <Typography>Limousine Tours</Typography>
   <Typography>Luxury Car Tours</Typography>
   <Typography>Mountain Bike Tours</Typography>
   <Typography>Pedicab Tours</Typography>
   <Typography>Power Boats</Typography>
   <Typography>Public Transporatation Tours</Typography>
   <Typography>Rail Tours</Typography>
   <Typography>Rentals</Typography>
   <Typography>Road Trip</Typography>
   <Typography>Self Giuded Tours</Typography>
   <Typography>Speed Boat Rentals</Typography>
   <Typography>Vespa, Scooter & Moped Tours</Typography>
   <Typography>Walking Tours</Typography>
   <Typography>Water Tours</Typography>
  </Box>
    : FirstTour_sightseeingState == "SightSeeing Tours" ? 
    <Box className="SightSeeing Tours" sx={{
      display:"flex",
      flexDirection:"column",
      rowGap:3,
      paddingLeft:"10%"
    }}>
  
         {/* back Button SightSeeing Tours*/}
      <Box className="BackButtonSightSeeing Tours" sx={{
       display:"flex",
       flexDirection:"row",
       columnGap:1,
       paddingLeft:"10%"
     }}>
       <KeyboardBackspaceIcon 
       sx={{
         "&:hover":{cursor:"pointer"}
       }}
       onClick={()=>setFirstTour_sightseeingState("")}
       />
       <Typography>Tours, SightSeeing & Cruises</Typography>
     </Box>
     <Typography>All SightSeeing Tours</Typography>
     <Typography>Adventure Tours</Typography>
     <Typography>City Tours</Typography>
     <Typography>Hop on Hop off Buses</Typography>
     <Typography>Night Tours</Typography>
     <Typography>Observation Decks</Typography>
     <Typography>Private SightSeeing Tours</Typography>
     <Typography>SightSeeing Cruises</Typography>
     <Typography>SightSeeing Passes</Typography>
     <Typography>Skip The Line Tickets</Typography>
     <Typography>SkyScrappers & Towers</Typography>
    </Box>
    : FirstTour_sightseeingState == "Tours By Duration" ?
    <Box className="Tours By Duration" sx={{
      display:"flex",
      flexDirection:"column",
      rowGap:3,
      paddingLeft:"10%"
    }}>
  
         {/* back Button Tours By Duration*/}
      <Box className="BackButtonTours By Duration" sx={{
       display:"flex",
       flexDirection:"row",
       columnGap:1,
       paddingLeft:"10%"
     }}>
       <KeyboardBackspaceIcon 
       sx={{
         "&:hover":{cursor:"pointer"}
       }}
       onClick={()=>setFirstTour_sightseeingState("")}
       />
       <Typography>Tours, SightSeeing & Cruises</Typography>
     </Box>
     <Typography>All Tours By Duration</Typography>
     <Typography>Day Trips</Typography>
     <Typography>Full-Day Tours</Typography>
     <Typography>Half-Day Tours</Typography>
     <Typography>Layover Tours</Typography>
     <Typography>Multi-Day Tours</Typography>
     <Typography>Overnight Tours</Typography>
    </Box>
    : null
      }
    </Box>
  );

  // Ticket & Passes
  const Ticket_PassesModal = (anchor) => (
    <Box
    sx={{
     width:{xs:"250px",md:"350px"},
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
    }}
    role="presentation"
  >
    {/* title */}
    <Box
      className="artCulturetitle"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CloseIcon
        sx={{ fontSize: "30px" }}
        onClick={Ticket_PassesToggleDrawer(anchor, false)}
      />
      <Typography variant="h5">Travel</Typography>
    </Box>

    {/* back Button */}
    <Box className="BackButton" sx={{
      display:"flex",
      flexDirection:"row",
      columnGap:1,
      paddingLeft:"10%"
    }}>
      <KeyboardBackspaceIcon 
      sx={{
        "&:hover":{cursor:"pointer"}
      }}
      onClick={Ticket_PassesToggleDrawer(anchor, false)}
      />
      <Typography>Back To Main</Typography>
    </Box>

    <Divider />

    {
      FirstTickets_PassesState == "" ?
      <Box className="mainTour,SightSeeing&Cruises">
    
          {/* back Button London Tour*/}
          <Box className="mainSeasonal&SpecialOccasions" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={Ticket_PassesToggleDrawer(anchor, false)}
           />
           <Typography>London Tour</Typography>
         </Box>
      
         <Box className="mainBody" sx={{
           paddingLeft:"10%",
           fontSize:"30px",
           display:"flex",
           flexDirection:"column",
           rowGap:3
         }}>
           <Typography>All Tickets & Passes</Typography>
      
      
           {/* Amusement Parks*/}
           <Box className="Amusement Parks"
           onClick={()=>setFirstTickets_PassesState("Amusement Parks")}
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
                   }}
                 >
                   Amusement Parks
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
             
                   
           {/* Attraction & Messeums*/}
           <Box className="Attraction & Messeums"
           onClick={()=>setFirstTickets_PassesState("Attractions & Messeums")}
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
                   }}
                 >
                   Attraction & Messeums
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>




                   {/* Packages & Special Events*/}
           <Box className="Packages & Special Events"
           onClick={()=>setFirstTickets_PassesState("Packages & Special Events")}
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
                   }}
                 >
                   Packages & Special Events
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>



                        {/* Shows & Performances*/}
           <Box className="Shows & Performances"
           onClick={()=>setFirstTickets_PassesState("Shows & Performances")}
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
                   }}
                 >
                   Shows & Performances
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>




                       {/* Sporting Events*/}
           <Box className="Sporting Events"
           onClick={()=>setFirstTickets_PassesState("Sporting Events")}
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
                   }}
                 >
                   Sporting Events
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>

      
         </Box>
      
         </Box>
         : FirstTickets_PassesState == "Amusement Parks"?
         <Box className="Amusement Parks" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Amusement Parks*/}
          <Box className="BackButtonAmusement Parks" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstTickets_PassesState("")}
           />
           <Typography>Tickets & Passes</Typography>
         </Box>
         <Typography>All Amusement Parks</Typography>
         <Typography>Theme Parks</Typography>
        </Box>
        : FirstTickets_PassesState == "Attractions & Messeums" ?
        <Box className="Attractions & Messeums" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Attractions & Messeums*/}
          <Box className="BackButtonAttractions & Messeums" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstTickets_PassesState("")}
           />
           <Typography>Tickets & Passes</Typography>
         </Box>
         <Typography>All Attractions & Messeums</Typography>
         <Typography>Ancient Ruins</Typography>
         <Typography>Aquariums</Typography>
         <Typography>Arena Tours</Typography>
         <Typography>Art Galleries</Typography>
         <Typography>Castle Tours</Typography>
         <Typography>Factory Tours</Typography>
         <Typography>Monuments and Memorials</Typography>
         <Typography>Messeum Tickets And Passes</Typography>
         <Typography>National Parks</Typography>
         <Typography>Natural Attractions</Typography>
         <Typography>Parks</Typography>
         <Typography>Planetariums</Typography>
         <Typography>Religious Sites</Typography>
        </Box>
        : FirstTickets_PassesState == "Packages & Special Events" ?
        <Box className="Packages & Special Events" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Packages & Special Events*/}
          <Box className="BackButtonPackages & Special Events" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstTickets_PassesState("")}
           />
           <Typography>Tickets & Passes</Typography>
         </Box>
         <Typography>All Packages & Special Events</Typography>
         <Typography>City Packages</Typography>
        </Box>
        : FirstTickets_PassesState == "Shows & Performances" ?
        <Box className="Shows & Performances" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Shows & Performances*/}
          <Box className="BackButtonShows & Performances" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstTickets_PassesState("")}
           />
           <Typography>Tickets & Passes</Typography>
         </Box>
         <Typography>All Shows & Performances</Typography>
         <Typography>Adults -only Shows</Typography>
         <Typography>Cabaret</Typography>
         <Typography>Circus Shows</Typography>
         <Typography>Comedy Shows</Typography>
         <Typography>Concerts</Typography>
         <Typography>Dinner & Ticket Shows</Typography>
         <Typography>Family -Friendly Shows</Typography>
         <Typography>Fashion Shows</Typography>
         <Typography>Festivals</Typography>
         <Typography>Jazz Shows</Typography>
         <Typography>Musicals</Typography>
         <Typography>NightLife</Typography>
         <Typography>opera Performances</Typography>
         <Typography>Shows</Typography>
         <Typography>Theater Shows</Typography>
        </Box>
        : FirstTickets_PassesState == "Sporting Events" ?
        <Box className="Sporting Events" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Sporting Events*/}
          <Box className="BackButtonSporting Events" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstTickets_PassesState("")}
           />
           <Typography>Tickets & Passes</Typography>
         </Box>
         <Typography>All Sporting Events</Typography>
         <Typography>Archery</Typography>
         <Typography>Motor Sports</Typography>
         <Typography>Soccer</Typography>
        </Box>
        : null
    }

    </Box>
  );

  // Seasonal & special Occasions
  const Seasonal_special_oCCasionModal = (anchor) => (
    <Box
    sx={{
     width:{xs:"250px",md:"350px"},
      display: "flex",
      flexDirection: "column",
      rowGap: 2,
    }}
    role="presentation"
  >
    {/* title */}
    <Box
      className="artCulturetitle"
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CloseIcon
        sx={{ fontSize: "30px" }}
        onClick={Seasonal_special_occasionsToggleDrawer(anchor, false)}
      />
      <Typography variant="h5">Travel</Typography>
    </Box>

    {/* back Button */}
    <Box className="BackButton" sx={{
      display:"flex",
      flexDirection:"row",
      columnGap:1,
      paddingLeft:"10%"
    }}>
      <KeyboardBackspaceIcon 
      sx={{
        "&:hover":{cursor:"pointer"}
      }}
      onClick={Seasonal_special_occasionsToggleDrawer(anchor, false)}
      />
      <Typography>Back To Main</Typography>
    </Box>

    <Divider />


      {
        FirstSeasonl_SpecialState == "" ?
        <Box className="mainSeasonal&SpecialOccasions">
    
          {/* back Button London Tour*/}
          <Box className="mainSeasonal&SpecialOccasions" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={Seasonal_special_occasionsToggleDrawer(anchor, false)}
           />
           <Typography>London Tour</Typography>
         </Box>
      
         <Box className="mainBody" sx={{
           paddingLeft:"10%",
           fontSize:"30px",
           display:"flex",
           flexDirection:"column",
           rowGap:3
         }}>
           <Typography>All Seasonal & Specail Occasions</Typography>
      
      
           {/* Holidays*/}
           <Box className="Holidays"
           onClick={()=>setFirstSeasonl_SpecialState("Holidays")}
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
                   }}
                 >
                   Holidays
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
             {/* Once In a LifeTime Experience */}
           <Box className="Once In a LifeTime Experience"
          //  onClick={()=>setFirstSeasonl_SpecialState("Once In a LifeTime Experience")}
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
                   }}
                 >
                   Once In a LifeTime Experience
                 </Typography>
                
               </Box>
             </Box>
      
      
             {/* Weddings & Celebrations */}
           <Box className="Weddings & Celebrations"
           onClick={()=>setFirstSeasonl_SpecialState("Wedding & Celebrations")}
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
                   }}
                 >
                   Weddings & Celebrations
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
         </Box>
      
         </Box>
         : FirstSeasonl_SpecialState == "Holidays" ?
         <Box className="Holidays" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Classes And Workshop*/}
          <Box className="BackButtonHolidays" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstSeasonl_SpecialState("")}
           />
           <Typography>Seasonal & Special Occasions</Typography>
         </Box>
         <Typography>All Holidays</Typography>
         <Typography>Boxing Day</Typography>
         <Typography>carnival</Typography>
         <Typography>Halloween</Typography>
         <Typography>New Years</Typography>
         <Typography>Spring Break</Typography>
        </Box>
        : FirstSeasonl_SpecialState == "Wedding & Celebrations" ?
        <Box className="Wedding & Celebrations" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Classes And Workshop*/}
          <Box className="BackButtonWedding & Celebrations" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstSeasonl_SpecialState("")}
           />
           <Typography>Seasonal & Special Occasions</Typography>
         </Box>
         <Typography>All Wedding & Celebrations</Typography>
         <Typography>Honeymoon Packages</Typography>
         <Typography>Romantic Tours</Typography>
         <Typography>Wedding Ceremonies</Typography>
         <Typography>Wedding Packages</Typography>
        </Box>
        : null
      }
    </Box>
  );

  // outDoor Activites
  const outDoorActivitesModal = (anchor) => (
    <Box
      sx={{
       width:{xs:"250px",md:"350px"},
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={OutDoor_ActivitesToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box className="BackButton" sx={{
        display:"flex",
        flexDirection:"row",
        columnGap:1,
        paddingLeft:"10%"
      }}>
        <KeyboardBackspaceIcon 
        sx={{
          "&:hover":{cursor:"pointer"}
        }}
        onClick={OutDoor_ActivitesToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />


      {
          FirstOutDoorActivitesState == "" ? 
          <Box className="mainOutDoorAndActivitees">
    
          {/* back Button London Tour*/}
          <Box className="mainOutDoorAndActivitees" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={OutDoor_ActivitesToggleDrawer(anchor, false)}
           />
           <Typography>London Tour</Typography>
         </Box>
      
         <Box className="mainBody" sx={{
           paddingLeft:"10%",
           fontSize:"30px",
           display:"flex",
           flexDirection:"column",
           rowGap:3
         }}>
           <Typography>All OutDoor Activities</Typography>
      
      
           {/* Active & Outdoor Classes*/}
           <Box className="Active & Outdoor Classes"
           onClick={()=>setFirstOutDoorActivitesState("Active & Outdoor Classes")}
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
                   }}
                 >
                   Active & Outdoor Classes
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
             {/* Extreme Sports */}
           <Box className="Extreme Sports"
           onClick={()=>setFirstOutDoorActivitesState("Extreme Sports")}
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
                   }}
                 >
                   Extreme Sports
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
             {/* Fun & Games */}
           <Box className="Fun & Games"
           onClick={()=>setFirstOutDoorActivitesState("Fun & Games")}
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
                   }}
                 >
                   Fun & Games
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
      
                   {/* In The Air */}
           <Box className="In The Air"
           onClick={()=>setFirstOutDoorActivitesState("in The Air")}
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
                   }}
                 >
                   In The Air
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
      
                   {/* Motor Sports */}
           <Box className="Motor Sports"
                      onClick={()=>setFirstOutDoorActivitesState("Motor Sports")}
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
                   }}
                 >
                   Motor Sports
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
      
                    {/* Nature and WildLife Tours */}
           <Box className="Nature and WildLife Tours"
                      onClick={()=>setFirstOutDoorActivitesState("Nature and WildLife Tours")}
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
                   }}
                 >
                   Nature and WildLife Tours
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
      
      
                     {/* On The Ground */}
           <Box className="On The Ground"
                      onClick={()=>setFirstOutDoorActivitesState("On The Ground")}
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
                   }}
                 >
                   On The Ground
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
      
                     {/* On The water */}
           <Box className="On The water"
                      onClick={()=>setFirstOutDoorActivitesState("On The Water")}
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
                   }}
                 >
                   On The water
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
      
      
      
      
         </Box>
      
         </Box>
         : FirstOutDoorActivitesState == "Active & Outdoor Classes" ?
         <Box className="Active & Outdoor Classes" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Classes And Workshop*/}
          <Box className="BackButtonActive & Outdoor Classes" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstOutDoorActivitesState("")}
           />
           <Typography>Outdoor Activities</Typography>
         </Box>
         <Typography>All Active & Outdoor Classes</Typography>
         <Typography>Boxing Classes</Typography>
         <Typography>Crossfit Classes</Typography>
         <Typography>Cycling Classes</Typography>
         <Typography>Dance Lessons</Typography>
         <Typography>Fitness Classes</Typography>
         <Typography>Gymnastics Classes</Typography>
         <Typography>Soccer Classes</Typography>
         <Typography>Sports Lessons</Typography>
         <Typography>Yoga Classes</Typography>
        </Box>
        : FirstOutDoorActivitesState == "Extreme Sports" ?
        <Box className="Extreme Sports" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Extreme Sports*/}
          <Box className="BackButtonExtreme Sports" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstOutDoorActivitesState("")}
           />
           <Typography>Outdoor Activities</Typography>
         </Box>
         <Typography>All Extreme Sports</Typography>
         <Typography>4WD Tours</Typography>
         <Typography>Axe Throwing</Typography>
        </Box>
        : FirstOutDoorActivitesState == "Fun & Games" ?
        <Box className="Fun & Games" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Fun & Games*/}
          <Box className="BackButtonFun & Games" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstOutDoorActivitesState("")}
           />
           <Typography>Outdoor Activities</Typography>
         </Box>
         <Typography>All Fun & Games</Typography>
         <Typography>Escape Rooms</Typography>
         <Typography>VR Experiences</Typography>
        </Box>
        : FirstOutDoorActivitesState == "in The Air" ? 
        <Box className="in The Air" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button in The Air*/}
          <Box className="BackButtonin The Air" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstOutDoorActivitesState("")}
           />
           <Typography>Outdoor Activities</Typography>
         </Box>
         <Typography>All in The Air</Typography>
         <Typography>Air Tours</Typography>
         <Typography>Helicopter Tours</Typography>
         <Typography>Hot Air Ballon Rides</Typography>
         <Typography>VR Experiences</Typography>
        </Box>
        : FirstOutDoorActivitesState == "Motor Sports" ?
        <Box className="Motor Sports" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Motor Sports*/}
          <Box className="BackButtonMotor Sports" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstOutDoorActivitesState("")}
           />
           <Typography>Outdoor Activities</Typography>
         </Box>
         <Typography>All Motor Sports</Typography>
         <Typography>4WD Tours</Typography>
        </Box>
        : FirstOutDoorActivitesState == "Nature and WildLife Tours" ?
        <Box className="Nature and WildLife Tours" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button Nature and WildLife Tours*/}
          <Box className="BackButtonNature and WildLife Tours" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstOutDoorActivitesState("")}
           />
           <Typography>Outdoor Activities</Typography>
         </Box>
         <Typography>All Nature and WildLife Tours</Typography>
         <Typography>Aquarims</Typography>
         <Typography>Natural Attractions</Typography>
         <Typography>Natural Parks</Typography>
         <Typography>Natural Walks</Typography>
         <Typography>WildLife Encounters</Typography>
        </Box>
        : FirstOutDoorActivitesState == "On The Ground" ?
        <Box className="On The Ground" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button On The Ground*/}
          <Box className="BackButtonOn The Ground" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstOutDoorActivitesState("")}
           />
           <Typography>Outdoor Activities</Typography>
         </Box>
         <Typography>All On The Ground</Typography>
         <Typography>Bike Rentals</Typography>
         <Typography>Climbing</Typography>
         <Typography>Hiking Tours</Typography>
         <Typography>Mountain Bike Tours</Typography>
         <Typography>Obastacle Courses</Typography>
         <Typography>outback Tours</Typography>
         <Typography>Pedicab Tours</Typography>
         <Typography>Roller Skating</Typography>
         <Typography>Running Tours</Typography>
         <Typography>Scavenger Hunts</Typography>
        </Box>
        : FirstOutDoorActivitesState == "On The Water" ?
        <Box className="On The Water" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>
      
             {/* back Button On The Water*/}
          <Box className="BackButtonOn The Water" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstOutDoorActivitesState("")}
           />
           <Typography>Outdoor Activities</Typography>
         </Box>
         <Typography>All On The Water</Typography>
         <Typography>Catamaran Cruises</Typography>
         <Typography>Dinner Cruises</Typography>
         <Typography>Gandala Cruises</Typography>
         <Typography>Jet Boat Rental</Typography>
         <Typography>Night Cruises</Typography>
         <Typography>Power Boats</Typography>
         <Typography>Sightseeing Cruises</Typography>
         <Typography>Speed Boat Rentals</Typography>
        </Box>
        : null
      }

    </Box>
  );

  // Food & drink Modal
  const Food_DrinkModal = (anchor) => (
    <Box
      sx={{
       width:{xs:"250px",md:"350px"},
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={Classes_WorkshopToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box className="BackButton" sx={{
        display:"flex",
        flexDirection:"row",
        columnGap:1,
        paddingLeft:"10%"
      }}>
        <KeyboardBackspaceIcon 
        sx={{
          "&:hover":{cursor:"pointer"}
        }}
        onClick={Food_DrinkToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />


        {
          FirstFood_DrinkState == "" ?
          <Box className="mainFoodAndDrink">
    
    {/* back Button London Tour*/}
    <Box className="mainFoodAndDrink" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={Food_DrinkToggleDrawer(anchor, false)}
     />
     <Typography>London Tour</Typography>
   </Box>

   <Box className="mainBody" sx={{
     paddingLeft:"10%",
     fontSize:"30px",
     display:"flex",
     flexDirection:"column",
     rowGap:3
   }}>
     <Typography>All Food & Drink</Typography>


     {/* Coffee & Tea */}
     <Box className="Coffee & Tea"
     onClick={()=>setFirstFood_DrinkState("Coffee & Tea")}
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
             }}
           >
             Coffee & Tea
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>


       {/* Desserts And Sweets */}
     <Box className="Desserts And Sweets"
     onClick={()=>setFirstFood_DrinkState("Desserts & Sweets")}
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
             }}
           >
             Desserts And Sweets
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>


       {/* Dining Experiences */}
     <Box className="Dining Experiences"
     onClick={()=>setFirstFood_DrinkState("Dinig Experience")}
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
             }}
           >
             Dining Experiences
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>



             {/* Food And Drink Classes */}
     <Box className="Food And Drink Classes"
     onClick={()=>setFirstFood_DrinkState("Food & Drink Classes")}
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
             }}
           >
             Food And Drink Classes
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>



             {/* Food Tours */}
     <Box className="Food Tours"
                onClick={()=>setFirstFood_DrinkState("Food Tours")}
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
             }}
           >
             Food Tours
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>



              {/* Wine,Bear & Spirits */}
     <Box className="Wine,Bear & Spirits"
                onClick={()=>setFirstFood_DrinkState("Wine,Bear & Spirits")}
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
             }}
           >
             Wine,Bear & Spirits
           </Typography>
           <Box
             className="arrows"
           >
             <KeyboardArrowRightIcon />
           </Box>
         </Box>
       </Box>




   </Box>

   </Box>
   : FirstFood_DrinkState == "Coffee & Tea" ?
   <Box className="Coffee & Tea" sx={{
    display:"flex",
    flexDirection:"column",
    rowGap:3,
    paddingLeft:"10%"
  }}>

       {/* back Button Classes And Workshop*/}
    <Box className="BackButtonCoffee & Tea" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={()=>setFirstFood_DrinkState("")}
     />
     <Typography>Food & Drink</Typography>
   </Box>
   <Typography>All Coffee & Tea</Typography>
   <Typography>Coffee & Tea Tours</Typography>
   <Typography>High Tea</Typography>
  </Box>
  : FirstFood_DrinkState == "Desserts & Sweets" ? 
  <Box className="Desserts & Sweets" sx={{
    display:"flex",
    flexDirection:"column",
    rowGap:3,
    paddingLeft:"10%"
  }}>

       {/* back Button Desserts & Sweets*/}
    <Box className="BackButtonDesserts & Sweets" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={()=>setFirstFood_DrinkState("")}
     />
     <Typography>Food & Drink</Typography>
   </Box>
   <Typography>All Desserts & Sweets</Typography>
   <Typography>Chocolate Tours</Typography>
   <Typography>Dessert Tours</Typography>
   <Typography>Donut Walking Tours</Typography>
   <Typography>Pastry Tours</Typography>
  </Box>
  : FirstFood_DrinkState == "Dinig Experience" ? 
  <Box className="Dinig Experience" sx={{
    display:"flex",
    flexDirection:"column",
    rowGap:3,
    paddingLeft:"10%"
  }}>

       {/* back Button Desserts & Sweets*/}
    <Box className="BackButtonDinig Experience" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={()=>setFirstFood_DrinkState("")}
     />
     <Typography>Food & Drink</Typography>
   </Box>
   <Typography>All Dinig Experience</Typography>
   <Typography>Dinner</Typography>
   <Typography>Dinner Cruises</Typography>
   <Typography>Dinner & Show Tickets</Typography>
   <Typography>Lunch</Typography>
   <Typography>Restaurants</Typography>
  </Box>
  : FirstFood_DrinkState == "Food & Drink Classes" ?
  <Box className="Food & Drink Classes" sx={{
    display:"flex",
    flexDirection:"column",
    rowGap:3,
    paddingLeft:"10%"
  }}>

       {/* back Button Food & Drink Classes*/}
    <Box className="BackButtonFood & Drink Classes" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={()=>setFirstFood_DrinkState("")}
     />
     <Typography>Food & Drink</Typography>
   </Box>
   <Typography>All Food & Drink Classes</Typography>
   <Typography>Cocktail Tastings</Typography>
   <Typography>Cooking Classes</Typography>
   <Typography>Wine Making Workshops</Typography>
  </Box>
  : FirstFood_DrinkState == "Food Tours" ? 
  <Box className="Food Tours" sx={{
    display:"flex",
    flexDirection:"column",
    rowGap:3,
    paddingLeft:"10%"
  }}>

       {/* back Button Food Tours*/}
    <Box className="BackButtonFood Tours" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={()=>setFirstFood_DrinkState("")}
     />
     <Typography>Food & Drink</Typography>
   </Box>
   <Typography>All Food Tours</Typography>
   <Typography>Culinary Tours</Typography>
   <Typography>donuut walking Tours</Typography>
   <Typography>Markets</Typography>
   <Typography>Street Food Tours</Typography>
   <Typography>Wine Tastings</Typography>
  </Box>
  : FirstFood_DrinkState == "Wine,Bear & Spirits" ?
  <Box className="Wine,Bear & Spirits" sx={{
    display:"flex",
    flexDirection:"column",
    rowGap:3,
    paddingLeft:"10%"
  }}>

       {/* back Button Wine,Bear & Spirits*/}
    <Box className="BackButtonWine,Bear & Spirits" sx={{
     display:"flex",
     flexDirection:"row",
     columnGap:1,
     paddingLeft:"10%"
   }}>
     <KeyboardBackspaceIcon 
     sx={{
       "&:hover":{cursor:"pointer"}
     }}
     onClick={()=>setFirstFood_DrinkState("")}
     />
     <Typography>Food & Drink</Typography>
   </Box>
   <Typography>All Wine,Bear & Spirits</Typography>
   <Typography>Bar Tours</Typography>
   <Typography>Beer & Brewery Tours</Typography>
   <Typography>Distillery Tours</Typography>
   <Typography>Wine Making Workshops</Typography>
   <Typography>Wine Tastings</Typography>
   <Typography>Wine Tours</Typography>
  </Box>
  : null
        }
    </Box>
  );

  // Classes And Workshops
  const classes_workShopsModal = (anchor) => (
    <Box
      sx={{
       width:{xs:"250px",md:"350px"},
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={Classes_WorkshopToggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box className="BackButton" sx={{
        display:"flex",
        flexDirection:"row",
        columnGap:1,
        paddingLeft:"10%"
      }}>
        <KeyboardBackspaceIcon 
        sx={{
          "&:hover":{cursor:"pointer"}
        }}
        onClick={Classes_WorkshopToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />


        {
          FirstClass_workshopState == "" ?
          <Box className="mainClassesAndWorshop">
    
          {/* back Button London Tour*/}
          <Box className="mainClassesAndWorshop" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={Classes_WorkshopToggleDrawer(anchor, false)}
           />
           <Typography>London Tour</Typography>
         </Box>
   
         <Box className="mainBody" sx={{
           paddingLeft:"10%",
           fontSize:"30px",
           display:"flex",
           flexDirection:"column",
           rowGap:3
         }}>
           <Typography>All Classes And Workshops</Typography>
   
   
           {/* Active And Outdoor Classes */}
           <Box className="Active And Outdoor Classes"
           onClick={()=>setFirstClass_workshopState("AllActiveAndOutdoorClasses")}
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
                   }}
                 >
                   Active And Outdoor Classes
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
             {/* Art And Culture Calvsses */}
           <Box className="Art And Culture Calsses"
           onClick={()=>setFirstClass_workshopState("ArtAndCultureClasses")}
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
                   }}
                 >
                   Art And Culture Calsses
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
             {/* Food & Drink Classes */}
           <Box className="Food & Drink Classes"
           onClick={()=>setFirstClass_workshopState("FoodAndDrinkClasses")}
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
                   }}
                 >
                   Food & Drink Classes
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
   
                   {/* Language Classes */}
           <Box className="Language Classes"
           onClick={()=>setFirstClass_workshopState("Language Classes")}
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
                   }}
                 >
                   Language Classes 
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
   
                   {/* Wellness Classes */}
           <Box className="Wellness Classes"
                      onClick={()=>setFirstClass_workshopState("Wellness Classes")}
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
                   }}
                 >
                   Wellness Classes
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
   
   
   
         </Box>
   
         </Box>
         :
         FirstClass_workshopState == "AllActiveAndOutdoorClasses" ?
         <Box className="AllActiveAndOutdoorClasses" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Classes And Workshop*/}
          <Box className="BackButtonClassesAndWorkshop" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstClass_workshopState("")}
           />
           <Typography>Classes & Workshops</Typography>
         </Box>
         <Typography>All Active & Outdoor Classes</Typography>
         <Typography>Boxing Classes</Typography>
         <Typography>Crossfit Classes</Typography>
         <Typography>Cycling Classes</Typography>
         <Typography>Dance Classes</Typography>
         <Typography>Fitness Classes</Typography>
         <Typography>Gymnastics Classes</Typography>
         <Typography>Soccer Classes</Typography>
         <Typography>Sports Lessons</Typography>
         <Typography>Yoga Classes</Typography>
        </Box>
        : FirstClass_workshopState == "ArtAndCultureClasses" ?
        <Box className="ArtAndCultureClasses" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Classes And Workshop*/}
          <Box className="BackButtonClassesAndWorkshop" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstClass_workshopState("")}
           />
           <Typography>Classes & Workshops</Typography>
         </Box>
         <Typography>All Art & Culture Classes</Typography>
         <Typography>Art Classes</Typography>
         <Typography>Craft Classes</Typography>
         <Typography>Dance Lessons</Typography>
         <Typography>English Lessons</Typography>
         <Typography>Music Classes</Typography>
         <Typography>Painting Classes</Typography>
         <Typography>Pottery Classes</Typography>
        </Box>
        : FirstClass_workshopState == "FoodAndDrinkClasses" ?
        <Box className="FoodAndDrinkClasses" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Classes And Workshop*/}
          <Box className="BackButtonClassesAndWorkshop" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstClass_workshopState("")}
           />
           <Typography>Classes & Workshops</Typography>
         </Box>
         <Typography>All Food & Drink Classes</Typography>
         <Typography>Cocktail Tastings</Typography>
         <Typography>Cooking   Classes</Typography>
         <Typography>Wine Making Workshops</Typography>
        </Box>
        : FirstClass_workshopState == "Language Classes" ?
        <Box className="Language Classes" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Classes And Workshop*/}
          <Box className="BackButtonClassesAndWorkshop" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstClass_workshopState("")}
           />
           <Typography>Classes & Workshops</Typography>
         </Box>
         <Typography>All Language Classes</Typography>
         <Typography>Engliosh Lessons</Typography>
        </Box>
        : FirstClass_workshopState == "Wellness Classes" ? 
        <Box className="Wellness Classes" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Classes And Workshop*/}
          <Box className="BackButtonClassesAndWorkshop" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstClass_workshopState("")}
           />
           <Typography>Classes & Workshops</Typography>
         </Box>
         <Typography>All Wellness Classes</Typography>
         <Typography>Yoga Classes</Typography>
        </Box>
        : null
        }

    </Box>
  );

  //  Art And Culture Modal
  const Art_cultureModal = (anchor) => (
    <Box
      sx={{
       width:{xs:"250px",md:"350px"},
        display: "flex",
        flexDirection: "column",
        rowGap: 2,
      }}
      role="presentation"
      // onKeyDown={NearbyToggleDrawer(anchor, false)}
    >
      {/* title */}
      <Box
        className="artCulturetitle"
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <CloseIcon
          sx={{ fontSize: "30px" }}
          onClick={Art_CultureToggleDrawer(anchor, false)}
          // onClick={toggleDrawer(anchor, false)}
        />
        <Typography variant="h5">Travel</Typography>
      </Box>

      {/* back Button */}
      <Box className="BackButton" sx={{
        display:"flex",
        flexDirection:"row",
        columnGap:1,
        paddingLeft:"10%"
      }}>
        <KeyboardBackspaceIcon 
        sx={{
          "&:hover":{cursor:"pointer"}
        }}
        onClick={Art_CultureToggleDrawer(anchor, false)}
        />
        <Typography>Back To Main</Typography>
      </Box>

      <Divider />

        {
          FirstArtState == "" ?  
          <Box className="mainAllArtAndCulture">
    
          {/* back Button London Tour*/}
          <Box className="BackButtonLondonTour" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={Art_CultureToggleDrawer(anchor, false)}
           />
           <Typography>London Tour</Typography>
         </Box>
   
         <Box className="mainBody" sx={{
           paddingLeft:"10%",
           fontSize:"30px",
           display:"flex",
           flexDirection:"column",
           rowGap:3
         }}>
           <Typography>All Art & Culture</Typography>
   
   
           {/* arts and Culture */}
           <Box className="Art & Culture"
           onClick={()=>setFirstArtState("AllArtAndCultureClasses")}
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
                   }}
                 >
                   Art & Culture classes
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
             {/* arts and Design */}
           <Box className="Art & Design"
           onClick={()=>setFirstArtState("ArtsAndDesign")}
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
                   }}
                 >
                   Art & Design
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
             {/* Culture */}
           <Box className="Culture"
           onClick={()=>setFirstArtState("Culture")}
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
                   }}
                 >
                   Culture
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
   
                   {/* pop Culture */}
           <Box className="Pop Culture"
           onClick={()=>setFirstArtState("PopCulture")}
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
                   }}
                 >
                   Pop Culture 
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
   
                   {/* Shows and Performance */}
           <Box className="Shows and Performance"
                      onClick={()=>setFirstArtState("ShowsAndPerformances")}
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
                   }}
                 >
                   Shows and Performance
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
   
             {/* Traditional Wellness */}
           <Box className=" Traditional Wellness"
                      onClick={()=>setFirstArtState("TraditionalWellness")}
           
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
                   }}
                 >
                    Traditional Wellness
                 </Typography>
                 <Box
                   className="arrows"
                 >
                   <KeyboardArrowRightIcon />
                 </Box>
               </Box>
             </Box>
   
   
         </Box>
   
         </Box>
         : FirstArtState == "AllArtAndCultureClasses" ? 
         <Box className="AllArtAndCultureClasses" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Art Culture*/}
          <Box className="BackButtonArtCulture" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstArtState("")}
           />
           <Typography>Art & Culture</Typography>
         </Box>
         <Typography>All Art And Culture Classes</Typography>
         <Typography>Art Classes</Typography>
         <Typography>Craft Classes</Typography>
         <Typography>Dance Lessons</Typography>
         <Typography>Engllish Lessons</Typography>
         <Typography>Music Classes</Typography>
         <Typography>Painting Classes</Typography>
         <Typography>pottery Classes</Typography>
        </Box>
        : FirstArtState == "ArtsAndDesign" ? 
        <Box className="ArtsAndDesign" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Art Culture*/}
          <Box className="BackButtonArtCulture" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstArtState("")}
          //  onClick={Art_CultureToggleDrawer(anchor, false)}
           />
           <Typography>Art & Culture</Typography>
         </Box>
         <Typography>All Art & Design</Typography>
         <Typography>Architecture Tours</Typography>
         <Typography>Art Galleries</Typography>
         <Typography>Art Tours</Typography>
         <Typography>Musseums</Typography>
        </Box>
        : FirstArtState == "Culture" ? 
        <Box className="Culture" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Art Culture*/}
          <Box className="BackButtonArtCulture" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstArtState("")}
          //  onClick={Art_CultureToggleDrawer(anchor, false)}
           />
           <Typography>Art & Culture</Typography>
         </Box>
         <Typography>All Culture</Typography>
         <Typography>Ancient Ruins</Typography>
         <Typography>Archaeology Tours </Typography>
         <Typography>Castle Tours</Typography>
         <Typography>Costume Dress Experiences</Typography>
         <Typography>Cultural Tours</Typography>
         <Typography>Factory Tours</Typography>
         <Typography>Fashion Tours</Typography>
         <Typography>Historical Tours</Typography>
         <Typography>Literary Tours</Typography>
         <Typography>Musseums</Typography>
         <Typography>Music Tours</Typography>
         <Typography>Photography Tours</Typography>
         <Typography>Religious Tours</Typography>
         <Typography>Underground Tours</Typography>
        </Box>
        : FirstArtState == "PopCulture" ?
        <Box className="PopCulture" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Art Culture*/}
          <Box className="BackButtonArtCulture" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstArtState("")}
          //  onClick={Art_CultureToggleDrawer(anchor, false)}
           />
           <Typography>Art & Culture</Typography>
         </Box>
         <Typography>All Pop Culture</Typography>
         <Typography>Crime Tours</Typography>
         <Typography>Game Of Thrones Tour</Typography>
         <Typography>Ghost Tours</Typography>
         <Typography>Harry Potter Tours</Typography>
         <Typography>Movies Tours</Typography>
         <Typography>Street Art Tours</Typography>
         <Typography>TV Tours</Typography>
        </Box>
        : FirstArtState == "ShowsAndPerformances" ? 
        <Box className="ShowsAndPerformances" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Art Culture*/}
          <Box className="BackButtonArtCulture" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstArtState("")}
          //  onClick={Art_CultureToggleDrawer(anchor, false)}
           />
           <Typography>Art & Culture</Typography>
         </Box>
         <Typography>All Shows And Performances</Typography>
         <Typography>Adults Only Shows</Typography>
         <Typography>Cabaret</Typography>
         <Typography>Circus Shows</Typography>
         <Typography>Concerts</Typography>
         <Typography>Dinner And Show Tickets</Typography>
         <Typography>Family - frinedly Shows</Typography>
         <Typography>Fashion Shows</Typography>
         <Typography>Festivals</Typography>
         <Typography>Jazz Shows</Typography>
         <Typography>Musicals</Typography>
         <Typography>NightLife</Typography>
         <Typography>Oprea Performances</Typography>
         <Typography>Shows</Typography>
         <Typography>TheaterShows</Typography>
        </Box>
        : FirstArtState == "TraditionalWellness" ? 
        <Box className="TraditionalWellness" sx={{
          display:"flex",
          flexDirection:"column",
          rowGap:3,
          paddingLeft:"10%"
        }}>

             {/* back Button Art Culture*/}
          <Box className="BackButtonArtCulture" sx={{
           display:"flex",
           flexDirection:"row",
           columnGap:1,
           paddingLeft:"10%"
         }}>
           <KeyboardBackspaceIcon 
           sx={{
             "&:hover":{cursor:"pointer"}
           }}
           onClick={()=>setFirstArtState("")}
          //  onClick={Art_CultureToggleDrawer(anchor, false)}
           />
           <Typography>Art & Culture</Typography>
         </Box>
         <Typography>All Traditional Wellness</Typography>
         <Typography>Spas</Typography>
        </Box>
        : null
        }
    </Box>
    
  );

  return (
    <Box
      sx={{
        fontSize: "10px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: {xs:"space-between",md:"space-between"},
        paddingTop:{sm:"0%",md:"0%"},
        paddingLeft:{xs:"1%"},
        paddingRight:{xs:"1%"},
      }}
    >
      <Box
        className={"leftPart"}
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          columnGap: 2,
        }}
      >
        <MenuIcon
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          onClick={toggleDrawer("left", true)}
        />
        <Typography variant="h4" onClick={()=>navigate("/")} sx={{
          "&:hover":{cursor:"pointer"}
        }}>Travel</Typography>
      </Box>
      <Box
        className="rightPart"
        sx={{
          display: {xs:"none",md:"flex"},
          flexDirection: "row",
          alignItems: "center",
          columnGap: 3,
        }}
      >
        <Box className="textField&SearchIcons" sx={{display:"flex",flexDirection:"row",alignItems:"center",columnGap:2,"&:hover":{border:"1px solid black"},border:"1px solid white",padding:"2px"}}>
        <input type={"text"} placeholder="Search for Paris or Colosseum" style={{outline:"none",height:"40px",width:"320px",border:"1px solid white"}}/>
        <SearchIcon />
        </Box>
        <Typography
          variant="h6"
          sx={{
            borderBottom: "3px solid white",
            "&:hover": {
              borderBottom: "3px solid green",
              cursor: "pointer",
            },
          }}
        >
          En
        </Typography>
        <Typography
          variant="h6"
          sx={{
            borderBottom: "3px solid white",
            "&:hover": {
              borderBottom: "3px solid green",
              cursor: "pointer",
            },
          }}
        >
          Rs
        </Typography>
        <Box
          className="help"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "3px solid white",
            "&:hover": {
              borderBottom: "3px solid green",
              cursor: "pointer",
            },
            columnGap: 1,
          }}
        >
          <HelpOutlineIcon />
          <Typography variant="h6">Help</Typography>
        </Box>
        <Box
          className="booking"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "3px solid white",
            "&:hover": {
              borderBottom: "3px solid green",
              cursor: "pointer",
            },
            columnGap: 1,
          }}
        >
          <Typography variant="h6">Booking</Typography>
        </Box>
        <Box
          className="account"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            borderBottom: "3px solid white",
            "&:hover": {
              borderBottom: "3px solid green",
              cursor: "pointer",
            },
            columnGap: 1,
          }}
        >
          <PermIdentityIcon />
          <Typography variant="h6" onClick={handleClick}>Account</Typography>
        </Box>
        
      </Box>
      <Box className="rightPartMediaQuery" sx={{display:{xs:"flex",md:"none"}}}>
          <SearchIcon sx={{fontSize:"30px"}} />
      </Box>

      {/* NearBy Drawer */}
      <Drawer
        anchor={"left"}
        open={NearBystate["left"]}
        onClose={NearbyToggleDrawer("left", false)}
      >
        {NearByModal("left")}
      </Drawer>

      {/* Recommendation Drawer */}
      <Drawer
        anchor={"left"}
        open={Recommendationstate["left"]}
        onClose={RecommendationToggleDrawer("left", false)}
      >
        {recommendationModal("left")}
      </Drawer>

      {/* Attractions Drawer */}
      <Drawer
        anchor={"left"}
        open={AttractionsState["left"]}
        onClose={AttractionsToggleDrawer("left", false)}
      >
        {AttractionsModal("left")}
      </Drawer>

      {/* unique Experience Drawer */}
      <Drawer
        anchor={"left"}
        open={UniqueExperienceState["left"]}
        onClose={UniqueExperienceToggleDrawer("left", false)}
      >
        {uniqueExperienceModal("left")}
      </Drawer>

      {/* Travel, TRansportaion & services Drawer */}
      <Drawer
        anchor={"left"}
        open={TravelTransportState["left"]}
        onClose={Travel_TransportationToggleDrawer("left", false)}
      >
        {Travel_Transport_serviceModal("left")}
      </Drawer>

      {/* Tour , sightSeeing and cruises Drawer */}
      <Drawer
        anchor={"left"}
        open={TourSightSeeingState["left"]}
        onClose={Tour_SightSeeingToggleDrawer("left", false)}
      >
        {Tour_sightseeing_Modal("left")}
      </Drawer>

      {/* Ticket and Passes Drawer */}
      <Drawer
        anchor={"left"}
        open={Ticket_PassesState["left"]}
        onClose={Ticket_PassesToggleDrawer("left", false)}
      >
        {Ticket_PassesModal("left")}
      </Drawer>

      {/* Seasonal & special Ocassions Drawer */}
      <Drawer
        anchor={"left"}
        open={Seasonal_OccasionState["left"]}
        onClose={Seasonal_special_occasionsToggleDrawer("left", false)}
      >
        {Seasonal_special_oCCasionModal("left")}
      </Drawer>

      {/* OutDoor Activites Drawer */}
      <Drawer
        anchor={"left"}
        open={OutDoorActivitiesState["left"]}
        onClose={OutDoor_ActivitesToggleDrawer("left", false)}
      >
        {outDoorActivitesModal("left")}
      </Drawer>

      {/* Food And Drink Drawer */}
      <Drawer
        anchor={"left"}
        open={FoodDrinkState["left"]}
        onClose={Food_DrinkToggleDrawer("left", false)}
      >
        {Food_DrinkModal("left")}
      </Drawer>

      {/* classes and workshops Drawer */}
      <Drawer
        anchor={"left"}
        open={Classes_WorkshopState["left"]}
        onClose={Classes_WorkshopToggleDrawer("left", false)}
      >
        {classes_workShopsModal("left")}
      </Drawer>

      {/* Art And culture  Drawer */}
      <Drawer
        anchor={"left"}
        open={ArtCultureState["left"]}
        onClose={Art_CultureToggleDrawer("left", false)}
      >
        {Art_cultureModal("left")}
      </Drawer>

      {/* Main Drawer */}
      <Drawer
        anchor={"left"}
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={()=>navigate("/login")}>SignUp</MenuItem>
        <MenuItem onClick={()=>navigate("/login")}>Login</MenuItem>
      </Menu>
    </Box>
  );
};

export default Header;
