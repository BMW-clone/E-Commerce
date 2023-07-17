import React from "react";
import './Hero.css';
import { useNavigate } from "react-router-dom";
const HeroSection = () => {
  const navigate = useNavigate()
  return (
    <div className="HeroSection">
      <div className="content">
        <div className="text-content">
          <h1 id="heroTitle">BMW</h1>
          <p className="text_contenr-text">BMW, a car of dreams,Swift and sleek, it gleams.Powerful engine, tires grip,
            Speeding along, in a thrilling trip.
          </p>
        </div>
        <div className="button-group">
          <button className="btn-hero-1" onClick={() => navigate("/UsedCarsList")}>Explore now!</button>
          <button className="btn-hero-2">Create</button>
        </div>
        <div className="stats">
          <div className="stat">
            <span>100+</span>
            <span className="brandHome">Cars</span>
          </div>
          <div className="stat">
            <span>120k+</span>
            <span className="brandHome">Employees</span>
          </div>
          <div className="stat">
            <span>100+</span>
            <span className="brandHome">Years of production </span>
          </div>
        </div>
      </div>
      <div className="image-group">
        <div className="card">
          <div className="card2">
            <img id="img2" src="https://images.pexels.com/photos/3689532/pexels-photo-3689532.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Antique Camera" />
          </div>
        </div>
        <div className="card">
          <div className="card2">
            <img id="img3" src="https://images.pexels.com/photos/5629048/pexels-photo-5629048.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Cash Register" />

          </div>
        </div>
        <div className="card">
          <div className="card2">
            <img id="img4" src="https://images.pexels.com/photos/2062789/pexels-photo-2062789.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Old Clock" />

          </div>
        </div>
        <div className="card">
          <div className="card2">
            <img id="img5" src="https://images.pexels.com/photos/2948297/pexels-photo-2948297.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Compass" />

          </div>
        </div>
        <div className="card3">
          <div className="card4">
            <img id="img6" src="https://images.pexels.com/photos/16119672/pexels-photo-16119672/free-photo-of-allume-la-bmw.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Lighter" />

          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;