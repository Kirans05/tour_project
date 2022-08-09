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
import TourDetails from './DashBoardComponents/TourDetails'
import AboutPage from './DashBoardComponents/AboutPage'
import CarrersPage from './DashBoardComponents/CarrersPage'
import SiteMapPgae from './DashBoardComponents/SiteMapPgae'
import SupplierSignUpPage from './DashBoardComponents/SupplierSignUpPage'
import TravelAgentPage from './DashBoardComponents/TravelAgentPage'
import AffiliatePage from './DashBoardComponents/AffiliatePage'
import NewsPage from './DashBoardComponents/NewsPage'
import BlogPage from './DashBoardComponents/BlogPage'
import UserProfile from './userInformation/UserProfile'
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
      <Route path='/TourDeatils' element={<TourDetails />} />
      <Route path='/aboutPage' element={<AboutPage />} />
      <Route path='/carrerPage' element={<CarrersPage />} />
      <Route path='/siteMapPage' element={<SiteMapPgae />} />
      <Route path='/supplierSignUpPgae' element={<SupplierSignUpPage />} />
      <Route path='/TravelAgentPage' element={<TravelAgentPage />} />
      <Route path='/AffiliatePage' element={<AffiliatePage />} />
      <Route path='/NewsPage' element={<NewsPage />} />
      <Route path='/blogPage' element={<BlogPage />} />
      <Route path='/useProfilePage' element={<UserProfile />} />
    </Routes>
    </div>
  )
}

export default App