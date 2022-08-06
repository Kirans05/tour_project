import React from 'react'
import { Link, Route, Routes } from "react-router-dom"
import AgreementPage from './DashBoardComponents/AgreementPage'
import DashBoard from './DashBoardComponents/DashBoard'
import Header from './DashBoardComponents/Header'
import LoginInPage from './DashBoardComponents/LoginInPage'
import PrivacyPolicy from './DashBoardComponents/PrivacyPolicy'
import SignUpPage from './DashBoardComponents/SignUpPage'
import TermsAndCondition from './DashBoardComponents/TermsAndCondition'
import BookingPage from "./DashBoardComponents/BookingPage"
import HomePage from "./DashBoardComponents/HomePage"
import HelpPage from "./DashBoardComponents/HelpPage"
const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<DashBoard />} />
      <Route path='/signup' element={<SignUpPage />} />
      <Route path='/login' element={<LoginInPage />} />
      <Route path='/TermsAndCondition' element={<TermsAndCondition />} />
      <Route path='/PrivacyPolicy' element={<PrivacyPolicy />} />
      <Route path='/agreement' element={<AgreementPage />} />
      <Route path='/bookingPage' element={<BookingPage />} />
      <Route path='/HomePage' element={<HomePage />} />
      <Route path='/helpPage' element={<HelpPage />} />

    </Routes>
    </div>
  )
}

export default App