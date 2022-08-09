import {
  Avatar,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Header from "../DashBoardComponents/Header";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import PaymentIcon from "@mui/icons-material/Payment";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import CardTravelIcon from "@mui/icons-material/CardTravel";
import SettingsIcon from "@mui/icons-material/Settings";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";

const UserProfile = () => {
  const [userNameEdit, setUserNameEdit] = useState(false);
  const [passwordVisibility,setPasswordVisibility]  = useState(false)
  const [userEmailEdit,setUserEmailEdit] = useState(false)

  return (
    <Box>
      <Header />
      <Box
        className="mainBody"
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "row",
          columnGap: 2,
        }}
      >
        <Box
          className="leftpart"
          sx={{
            width: "20%",
            border: "2px solid #e6e7e8",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            rowGap: 3,
            padding: "1% 1% 1% 1%",
          }}
        >
          <Box className="profileImage">
            <Avatar sx={{ bgcolor: "red", width: "70px", height: "70px" }}>
              OP
            </Avatar>
          </Box>
          <Box
            className="userSettingsChoice"
            sx={{
              display: "flex",
              flexDirection: "column",
              rowGap: 2,
            }}
          >
            <Box
              className="personalInformation"
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 1,
                alignItems: "center",
                "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
              }}
            >
              <PermIdentityIcon />
              <Typography sx={{ fontSize: "25px" }}>
                Personal Information
              </Typography>
            </Box>
            <Divider />
            <Box
              className="loginInformation"
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 1,
                alignItems: "center",
                "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
              }}
            >
              <VpnKeyIcon />
              <Typography sx={{ fontSize: "25px" }}>
                Login Information
              </Typography>
            </Box>
            <Divider />
            <Box
              className="PaymentMethod"
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 1,
                alignItems: "center",
                "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
              }}
            >
              <PaymentIcon />
              <Typography sx={{ fontSize: "25px" }}>Payment Method</Typography>
            </Box>
            <Divider />
            <Box
              className="Notifications"
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 1,
                alignItems: "center",
                "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
              }}
            >
              <NotificationsActiveIcon />
              <Typography sx={{ fontSize: "25px" }}>Notifications</Typography>
            </Box>
            <Divider />
            <Box
              className="TravellerPreferences"
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 1,
                alignItems: "center",
                "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
              }}
            >
              <CardTravelIcon />
              <Typography sx={{ fontSize: "25px" }}>
                Traveller Preferences
              </Typography>
            </Box>
            <Divider />
            <Box
              className="SiteSettings"
              sx={{
                display: "flex",
                flexDirection: "row",
                columnGap: 1,
                alignItems: "center",
                "&:hover": { cursor: "pointer", backgroundColor: "#f2f4f7" },
              }}
            >
              <SettingsIcon />
              <Typography sx={{ fontSize: "25px" }}>Site Settings</Typography>
            </Box>
          </Box>
        </Box>
        <Box
          className="rightPart"
          sx={{
            width: "70%",
            border: "2px solid #e6e7e8",
            display: "flex",
            flexDirection: "column",
            rowGap: 2,
            padding: "2%",
          }}
        >
          <Typography sx={{ fontSize: "30px", fontWeight: "bold" }}>
            Personal Information
          </Typography>

          {!userNameEdit ? (
            <Box
              className="userName"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Box>
                <Typography sx={{ fontSize: "20px" }}>Full Name</Typography>
                <Typography sx={{ fontSize: "20px" }}>kiran</Typography>
              </Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "green",
                  "&:hover": { cursor: "pointer", textDecoration: "underLine" },
                }}
                onClick={() => setUserNameEdit(true)}
              >
                Edit
              </Typography>
            </Box>
          ) : (
            <Box
              className="userNameEdit"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                justifyContent: "space-between",
              }}
            >
              <Box
                className="1stColumn"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 1,
                }}
              >
                <Typography sx={{ fontSize: "20px" }}>Full Name</Typography>
                <TextField type={"text"} placeholder={"kiran"} />
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => setUserNameEdit(false)}
                >
                  Save
                </Button>
              </Box>
              <Box
                className="2ndColumn"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  rowGap: 1,
                }}
              >
                <Typography>LastName</Typography>
                <TextField type={"text"} placeholder={"s"} />
              </Box>
              <Typography
                sx={{
                  fontSize: "20px",
                  color: "green",
                  "&:hover": { cursor: "pointer", textDecoration: "underLine" },
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-start",
                  justifyContent: "flex-start",
                }}
                onClick={() => setUserNameEdit(false)}
              >
                Cancel
              </Typography>
            </Box>
          )}

          <Divider />


        {
            !userEmailEdit ? 
            <Box
            className="userEmail"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px" }}>Email</Typography>
              <Typography sx={{ fontSize: "20px" }}>kira@gmail.com</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "green",
                "&:hover": { cursor: "pointer", textDecoration: "underLine" },
              }}
              onClick={()=>setUserEmailEdit(true)}
            >
              Edit
            </Typography>
          </Box>
          : <Box
          className="userEmailEdit"
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "space-between",
            rowGap:1
          }}
        >
          <Box
            className="emailLabel&cancelButton"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography sx={{ fontSize: "20px" }}>Email</Typography>
            <Typography
              sx={{
                fontSize: "20px",
                "&:hover": { cursor: "pointer", textDecoration: "underLine" },
                color: "green",
              }}
              onClick={()=>setUserEmailEdit(false)}
            >
              Cancel
            </Typography>
          </Box>
          <TextField
            type={"text"}
            placeholder={"kiran@gmail.com"}
            fullWidth
          />
          <Typography sx={{ fontSize: "20px" }}>Confirm Password</Typography>
          <Box
            className="passwordBox"
            sx={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TextField
              type={passwordVisibility ? "text" : "password"}
              placeholder={"confirm Password"}
              fullWidth
            />
            <Box className="eyeButton" sx={{display:"flex",flexDirection:"row",justifyContent:"flex-start"}}>
              <Button sx={{display:!passwordVisibility ? "flex":"none"}} 
              onClick={()=>setPasswordVisibility(!passwordVisibility)}
              >
                <VisibilityIcon />
              </Button>
              <Button sx={{display:passwordVisibility ? "flex" : "none"}}
              onClick={()=>setPasswordVisibility(!passwordVisibility)}
              >
                <VisibilityOffIcon />
              </Button>
            </Box>
          </Box>
          <Button variant="contained" color="success"
          onClick={()=>setUserEmailEdit(false)}
          >Save</Button>
        </Box>
        }
        
          <Divider />

          <Box
            className="UserPhoneNumber"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px" }}>Phone Number</Typography>
              <Typography sx={{ fontSize: "20px" }}>Not Provided</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "green",
                "&:hover": { cursor: "pointer", textDecoration: "underLine" },
              }}
            >
              Add
            </Typography>
          </Box>
          <Divider />
          <Box
            className="userDOB"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px" }}>Date of Birth</Typography>
              <Typography sx={{ fontSize: "20px" }}>Not Provided</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "green",
                "&:hover": { cursor: "pointer", textDecoration: "underLine" },
              }}
            >
              Add
            </Typography>
          </Box>
          <Divider />
          <Box
            className="userHomeTown"
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography sx={{ fontSize: "20px" }}>Home Town</Typography>
              <Typography sx={{ fontSize: "20px" }}>Not Provided</Typography>
            </Box>
            <Typography
              sx={{
                fontSize: "20px",
                color: "green",
                "&:hover": { cursor: "pointer", textDecoration: "underLine" },
              }}
            >
              Edit
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default UserProfile;
