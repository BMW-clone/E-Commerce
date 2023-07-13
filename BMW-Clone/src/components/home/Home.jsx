import React from 'react'
import HeroSection from '../heroSection/HeroSection.jsx'
import Cards from '../card/Card.jsx'
import './Home.css'
import AboutUsHome from '../aboutUsHome/AboutUsHome.jsx'
const Home = () => {
  console.log("test")
  return (
    
    <div className='home-wrap'>
      <HeroSection/>
      <AboutUsHome/>
      <div className="collection">
        <h1>All Collection</h1>
        <Cards/>
      </div>
      
      
      
    </div>
  )
}

export default Home