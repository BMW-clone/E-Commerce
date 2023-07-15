import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom"
import Navbar from './components/navbar/Navbar.jsx';
import Login from "./components/signUp_Login/SignIn/Login.jsx"
import SignUp from "./components/signUp_Login/SignUp/SignUp.jsx"
import Home from "./components/home/Home.jsx"
import NewCars from "./components/allproducts/newcars/newcars.jsx"
import UsedCars from "./components/allproducts/usedcars/usedcars.jsx"
import Profile from "./components/userprofile/UserProfileDetails.jsx"
import Dashboard from "./components/admin/Dashboard.jsx"
import AboutUsHome from './components/aboutUsHome/AboutUsHome.jsx';
import UsedCarsList from './components/allproducts/usedcars/UsedCarsList.jsx';
import NewCarsSearchResults from './components/searchResult/NewCarsSearchResults';

const App = () => {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
};
const AppRoutes = () => {
  const location = useLocation();
  // use isAuth when you store jwt in cookies 
  // first page will be register then login 
  const isAuthPage = location.pathname === "/" || location.pathname === "/SignUp";
  return (
    <>
      {!isAuthPage && <Navbar />}

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/NewCars" element={<NewCars />} />
        <Route path="/UsedCars" element={<UsedCars />} />
        <Route path="/AboutUs" element={<AboutUsHome />} />
        <Route path="/UserProfile" element={<Profile />} />
        <Route path="/AdminDashboard" element={<Dashboard />} />
        <Route path="/UsedCarsList" element={<UsedCarsList />} />

        <Route path="/newcars/search/:keyword" element={<NewCarsSearchResults /> } />

      </Routes>
    </>

  )

}


export default App;