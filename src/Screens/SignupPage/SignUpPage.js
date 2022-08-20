import {
  Alert,
  Box,
  Button,
  Divider,
  FormLabel,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import AppleIcon from "@mui/icons-material/Apple";
import { useNavigate } from "react-router-dom";
import "../LoginPage/Login.css";
import {signUpEmail} from "../../redux/action/index"
import {useDispatch, useSelector} from "react-redux"
import {signUpInfo} from "../../redux/reducer/reducer"
import Header from "../HeaderComponents/Header";
import Footer from "../FooterComponents/Footer";

const SignUpPage = () => {
  const navigate = useNavigate();
  const myState = useSelector((state) => state.signUpInfo)
  const dispatch = useDispatch()


  const [SnakBarOpen, setSnakBarOpen] = React.useState(false);


  const handleSnakBarClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnakBarOpen(false);
  };

  const submitHandler = () => {
    if(myState.email == ""){
      setSnakBarOpen(true);  
    }else{
      navigate("/signupUserDetails")
    }
  }


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
          height: { xs: "80vh", md: "80vh" },
          rowGap: 2,
        }}
      >
        <Typography sx={{ fontSize: { xs: "20px", md: "30px" } }}>
          Sign up and get exploring
        </Typography>
        <Typography sx={{ fontSize: { xs: "20px", md: "30px" } }}>
          Log into your account with your email, or create one below. Quick and
          easy - promise!
        </Typography>
        {/* <FormLabel>Email</FormLabel> */}
        <TextField id="outlined-basic" label="Email" variant="outlined" onChange={(e) => dispatch(signUpEmail(e.target.value))}  value={myState.email}   />
        {/* <br /> */}
        <Button
          variant="contained"
          color="success"
          sx={{ minWidth: "200px" }}
          onClick={submitHandler}
        >
          Continue
        </Button>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <Typography>or Continue with</Typography>
        </Box>
        <Box
          className="loginOptions"
          sx={{
            display: "flex",
            flexDirection: "row",
            columnGap: 3,
            alignItems: "center",
            width: { xs: "250px", md: "500px" },
            justifyContent: "center",
          }}
        >
          <GoogleIcon
            sx={{
              border: "1px solid black",
              padding: "5%",
              width: { xs: "30px", md: "80px" },
              color: "blue",
            }}
          />
          <FacebookIcon
            sx={{
              border: "1px solid black",
              padding: "5%",
              width: { xs: "30px", md: "80px" },
              color: "blue",
            }}
          />
          <AppleIcon
            sx={{
              border: "1px solid black",
              padding: "5%",
              width: { xs: "30px", md: "80px" },
            }}
          />
        </Box>
        <Box>
          <Typography>
            By creating an account, you agree to our{" "}
            <span
              className="hover"
              onClick={() => navigate("/TermsAndCondition")}
            >
              Terms & Conditions
            </span>
            ,{" "}
            <span className="hover" onClick={() => navigate("/PrivacyPolicy")}>
              Privacy Policy
            </span>{" "}
            and{" "}
            <span className="hover" onClick={() => navigate("/agreement")}>
              Agreement with Travel
            </span>
            .
          </Typography>
        </Box>
      </Box>
      <Snackbar open={SnakBarOpen} autoHideDuration={3000} onClose={handleSnakBarClose}>
        <Alert onClose={handleSnakBarClose} severity="warning" sx={{ width: '150%' }}>
          Please Fill Email Field
        </Alert>
      </Snackbar>
      <Footer />
    </Box>
  );
};

export default SignUpPage;
