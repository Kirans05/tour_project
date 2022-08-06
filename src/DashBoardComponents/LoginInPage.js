import { Box, Button, FormLabel, TextField, Typography } from "@mui/material";
import React from "react";
import Header from "./Header";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

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
          justifyContent: "space-between",
          // border: "2px solid red",
          rowGap: 2,
        }}
      >
        <Typography variant="h3">Log in and get exploring</Typography>
        <Typography variant="h6">
          Log into your account with your email, or create one below. Quick and
          easy - promise!
        </Typography>
        {/* <FormLabel>Email</FormLabel> */}
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        {/* <br /> */}
        <Button variant="contained" color="success" sx={{ minWidth: "200px" }}>
          Continue
        </Button>
        <h3>or continue with</h3>
        <Box
          className="loginOptions"
          sx={{ display: "flex", flexDirection: "row", columnGap: 3 }}
        >
          <GoogleIcon />
          <FacebookIcon />
          <AppleIcon />
        </Box>
        <Typography sx={{ display: "flex" }}>
          By creating an account, you agree to our
          <Typography
            sx={{ "&:hover": { textDecoration: "underLine" } }}
            onClick={() => navigate("/TermsAndCondition")}
          >
            Terms & Conditions
          </Typography>
          ,
          <Typography
            sx={{ "&:hover": { textDecoration: "underLine" } }}
            onClick={() => navigate("/PrivacyPolicy")}
          >
            Privacy Policy{" "}
          </Typography>
          and
          <Typography
            sx={{ "&:hover": { textDecoration: "underLine" } }}
            onClick={() => navigate("/agreement")}
          >
            {" "}
            Agreement with Travel{" "}
          </Typography>
          .
        </Typography>
      </Box>
      <Footer />
    </Box>
  );
};

export default LoginInPage;
