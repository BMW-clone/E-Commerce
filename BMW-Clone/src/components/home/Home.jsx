import React from 'react'
import HeroSection from '../heroSection/HeroSection.jsx'
import Cards from '../card/Card.jsx'
import AboutUsHome from '../aboutUsHome/AboutUsHome.jsx'
import './Home.css'
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import { useEffect, useState } from 'react'
import { Grid } from '@mui/material'

const Home = () => {
  useEffect(() => {
    userinfo()
    getCars()
    getUsedCars()
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
  const [newcars, setNewcars] = useState([]);
  const [usedcars, setUsedcars] = useState([]);
  const getCars = () => {
    axios
        .get('http://localhost:3000/newcars')
        .then((res) => {
            setNewcars(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
};
const getUsedCars = () => {
  axios.get('http://localhost:3000/usedcars/getall')
      .then((res) => {
        setUsedcars(res.data);
      })
      .catch((err) => {
          console.log(err);
      });
};

  
  return (

    <div className='home-wrap'>
      <HeroSection />
     
      <div className="collectionHome">
        <h1>About Us</h1>
        <span>Dive into these new worlds with us, get inspired, and experience something new, unusual and helpful every day. At BMW our digital interpretation of the sheer pleasure of driving</span>

        <AboutUsHome />
      </div>
      <div className="collectionHome">
        <h1>All Collection</h1>
        <Grid item xs={12} md={12}>
                <div className='card-columns-home'>
                    {newcars.slice(0, 3).map((car) => (
                        <Cards
                            key={car.id}
                            brand={car.brand}
                            price={car.price}
                            category={car.category}
                            color={car.color}
                            year={car.year}
                            image={car.image}
                            mileage={car.mileage}
                            model={car.model}
                            transmission={car.transmission}
                            hp={car.hp}
                            carburant={car.carburant}
                            rate={car.rate}
                        />
                    ))}
                </div>
                <Grid>
                <div className='card-columns-home'>
                {usedcars.slice(0, 3).map((car) => (
                        <Cards
                            key={car.id}
                            brand={car.brand}
                            price={car.price}
                            category={car.category}
                            color={car.color}
                            year={car.year}
                            image={car.image}
                            mileage={car.mileage}
                            model={car.model}
                            transmission={car.transmission}
                            hp={car.hp}
                            carburant={car.carburant}
                            rate={car.rate}
                        />
                    ))}
                    </div>
                </Grid>
            </Grid>
            
      </div>



    </div>
  )
}

export default Home