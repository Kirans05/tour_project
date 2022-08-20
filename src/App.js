import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import { Box } from '@mui/material'
import DashBoard from './Screens/DashBoard/DashBoard'
import SignUpPage from './Screens/SignupPage/SignUpPage'
import LoginInPage from './Screens/LoginPage/LoginInPage'
import TermsAndCondition from './Screens/FooterComponents/TermsAndCondition/TermsAndCondition'
import PrivacyPolicy from './Screens/FooterComponents/PrivacyPolicy/PrivacyPolicy'
import HomePage from './Screens/HomePage/HomePage'
import AboutPage from './Screens/FooterComponents/About/AboutPage'
import CheckOutPage from './Screens/CheckOutPage/CheckOutPage'
import BookingPage from "./DashBoardComponents/BookingPage"
import HelpPage from "./DashBoardComponents/HelpPage"
import TourDetails from "./DashBoardComponents/TourDetails"
import WishList from "./DashBoardComponents/WishList"
import UserSettings from "./userInformation/UserSettings"
import SignUpUserDetails from "./DashBoardComponents/SignUpUserDetails"



const App = () => {
  return (
    <Box>
    <Routes>
      <Route path='/' element={<DashBoard />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginInPage />} />
      <Route path='/TermsAndCondition' element={<TermsAndCondition />} />
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
      <Route path='/bookingPage' element={<BookingPage />} />
      <Route path='/HomePage' element={<HomePage />} />
      <Route path='/helpPage' element={<HelpPage />} />
      <Route path='/TourDeatils' element={<TourDetails />} />
      <Route path='/aboutPage' element={<AboutPage />} />
      <Route path='/wishList' element={<WishList />} />
      <Route path='/userProfile' element={<UserSettings />} />
      <Route path='/checkoutPage' element={<CheckOutPage />} />
      <Route path='/signupUserDetails' element={<SignUpUserDetails />} />

    </Routes>
    </Box>
  )
}

export default App