import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import AppStore from "./redux/Store";
import { createTheme, ThemeProvider } from "@mui/material";
const root = ReactDOM.createRoot(document.getElementById("root"));

const theme = createTheme({
  typography: {
    // fontFamily: ['Poppins', "sans-serif"].join(",")
    // fontFamily: ['Ibarra Real Nova', "serif"].join(",")
    fontFamily: ['Poppins'].join(",")
  },
});


// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#F7F6FA',
//     },
//     secondary: {
//       light: '#0066ff',
//       main: '#0044ff',
//       contrastText: '#ffcc00',
//     },
//     contrastThreshold: 3,
//     tonalOffset: 0.2,
//   },
//   typography : {
//     fontFamily : [
//       'Poppins'
//     ]
//   },
//   spacing: 8
// });



root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={AppStore}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
