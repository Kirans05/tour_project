import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const SignUpUserDetails = () => {

    const navigate = useNavigate()

  return (
    <Box>
      <Header />
      <Box
        className="mainBox"
        sx={{
          height: "85vh",
          display:"flex",
          flexDirection:"column",
          alignItems:"center",
          justifyContent:"center",
          rowGap:3
        }}
      >
        <Box className="fisrtPart"
        sx={{
            width:"35%",
            display:"flex",
            flexDirection:"column",
            alignItems:"flex-start",
            justifyContent:"flex-start",
            rowGap:3
        }}
        >
          <Box className="firstRow">
            <Typography sx={{fontSize:{xs:"20px",md:"30px"},fontWeight:"bold"}}>Sign Up</Typography>
          </Box>
          <Box className="secondRow"
          sx={{
            width:"100%",
            display:"flex",
            flexDirection:"row",
            alignItems:"flex-start",
            justifyContent:"space-between",
          }}
          >
            <Box className="firstColumn">
              <Typography sx={{fontSize:{xs:"16px",md:"20px"}}}>First Name</Typography>
              <TextField type={"text"} placeholder="FirstName" />
            </Box>
            <Box className="secondColumn">
              <Typography sx={{fontSize:{xs:"16px",md:"20px"}}}>Last Name</Typography>
              <TextField type={"text"} placeholder="LastName" />
            </Box>
          </Box>
          <Box className="thirdRow "  sx={{width:"100%"}}>
            <Typography sx={{fontSize:{xs:"16px",md:"20px"}}}>Create password</Typography>
            <TextField type={"password"} fullWidth  sx={{width:"100%"}}/>
          </Box>
          <Button variant="contained" color="success" sx={{
            width:"100%"
          }}>
            Create an account
          </Button>
        </Box>
        <Box className="secondPart">
        <Typography>By creating an account, you agree to our <span className="hover" onClick={()=>navigate("/TermsAndCondition")}>Terms & Conditions</span>, <span className="hover" onClick={()=>navigate("/PrivacyPolicy")}>Privacy Policy</span> and <span className="hover" onClick={()=>navigate("/agreement")}>Agreement with Travel</span>.</Typography>
       </Box>
      </Box>
    </Box>
  );
};

export default SignUpUserDetails;
