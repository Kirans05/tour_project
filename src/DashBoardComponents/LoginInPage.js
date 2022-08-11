import { Box, Button, Divider, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import "./Login.css"

const LoginInPage = () => {
  const navigate = useNavigate();
  return (
    <Box sx={{ display: "flex", flexDirection: "column", rowGap: 5 }}>
      <Header />
      <Box
        className="loginDiv"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-around",
          height:{xs:"80vh",md:"80vh"},
          rowGap: 2,
        }}
      >
        <Typography sx={{fontSize:{xs:"20px",md:"30px"}}}>Log in and get exploring</Typography>
        <Typography sx={{fontSize:{xs:"20px",md:"30px"}}}>
          Log into your account with your email, or create one below. Quick and
          easy - promise!
        </Typography>
        {/* <FormLabel>Email</FormLabel> */}
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        {/* <br /> */}
        <Button variant="contained" color="success" sx={{ minWidth: "200px" }}>
          Continue
        </Button>
        <Box sx={{display:"flex",flexDirection:"row"}}>
          <Typography>or Continue with</Typography>
        </Box>
        <Box
          className="loginOptions"
          sx={{ display: "flex", flexDirection: "row", columnGap: 3 ,
        alignItems:"center",
         width:{xs:"250px",md:"500px"},
        justifyContent:"center"
        }}
        >
          <GoogleIcon sx={{border:"1px solid black",padding:"5%",width:{xs:"30px",md:"80px"}}}/>
          <FacebookIcon  sx={{border:"1px solid black",padding:"5%",width:{xs:"30px",md:"80px"}}} />
          <AppleIcon  sx={{border:"1px solid black",padding:"5%",width:{xs:"30px",md:"80px"}}} />
        </Box>
       <Box>
        <Typography>By creating an account, you agree to our <span className="hover" onClick={()=>navigate("/TermsAndCondition")}>Terms & Conditions</span>, <span className="hover" onClick={()=>navigate("/PrivacyPolicy")}>Privacy Policy</span> and <span className="hover" onClick={()=>navigate("/agreement")}>Agreement with Travel</span>.</Typography>
       </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default LoginInPage;
