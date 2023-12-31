import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter, useLocation } from "react-router-dom"
import Navbar from './components/navbar/Navbar.jsx';
import Login from "./components/signUp_Login/SignIn/Login.jsx"
import SignUp from "./components/signUp_Login/SignUp/SignUp.jsx"
import Home from "./components/home/Home.jsx"
import NewCars from "./components/allproducts/newcars/newcars.jsx"
import UserProfile from "./components/userprofile/UserProfile.jsx"
import Dashboard from "./components/admin/Dashboard.jsx"
import UsedCarsList from './components/allproducts/usedcars/UsedCarsList.jsx';
import NewCarsSearchResults from './components/searchResult/NewCarsSearchResults';
import SellerProfile from "./components/sellerProfile/SellerProfile.jsx"
import UserUpdate from "./components/userprofile/UserUpdate.jsx"


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
        <Route path="/UserProfile" element={<UserProfile />} />
        <Route path="/AdminDashboard" element={<Dashboard />} />
        <Route path="/UsedCarsList" element={<UsedCarsList />} />
        <Route path="/SellerProfile" element={<SellerProfile/>} />
        <Route path="/UserUpdate" element={<UserUpdate />} />
        <Route path="/newcars/search/:keyword" element={<NewCarsSearchResults /> } />
      </Routes>
    </>

  )

}


export default App;