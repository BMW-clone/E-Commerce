import React from 'react'
import HeroSection from '../heroSection/HeroSection.jsx'
import Cards from '../card/Card.jsx'
import AboutUsHome from '../aboutUsHome/AboutUsHome.jsx'
import './Home.css'
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import { useEffect, useState } from 'react'

const Home = () => {
  useEffect(() => {
    userinfo()
  }, [])
  const [data, setData] = useState([])
  //!get user info from token
  const userinfo = () => {
    const cookie = new Cookies()
    const token = jwtDecoder(cookie.get("jwt-token"))
    console.log(token);
    if (token.role === "Client") {
      axios.post("http://localhost:3000/client/findOne", { username: token.username })
        .then((res) => { setData(res.data) })
        .catch((err) => console.log(err))
    } else return
  }
  return (

    <div className='home-wrap'>
      <HeroSection />
      <AboutUsHome />
      <div className="collection">
        <h1>All Collection</h1>
        <Cards />
      </div>



    </div>
  )
}

export default Home