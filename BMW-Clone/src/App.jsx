import React from 'react'
import './App.css'
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Login from "./components/signUp_Login/Login.jsx"
import SignUp from "./components/signUp_Login/SignUp.jsx"
import Home from "./components/homepage/Homepage.jsx"
import NewCars from "./components/allproducts/newcars/newcars.jsx"
import UsedCars from "./components/allproducts/usedcars/usedcars.jsx"
import AboutUs from "./components/aboutUs/AboutUs.jsx"
import Profile from "./components/userprofile/UserProfile.jsx"
import Dashboard from "./components/admin/Dashboard.jsx"

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/NewCars" element={<NewCars />} />
        <Route path="/UsedCars" element={<UsedCars />} />
        <Route path="/AboutUs" element={<AboutUs />} />
        <Route path="/UserProfile" element={<Profile />} />
        <Route path="/AdminDashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter >

  )

}


export default App;
