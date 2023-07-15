import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import IconCart from "./IconCart.jsx"


const EditProfilePage = () => {
  useEffect(() => {
    userinfo()
  }, [])
  const [data, setData] = useState([])
  //!get user info from token
  const userinfo = () => {
    const cookie = new Cookies()
    const token = jwtDecoder(cookie.get("jwt-token"))
    console.log(token);
    if (token.role === "Seller") {
      axios.post("http://localhost:3000/seller/findOne", { username: token.username })
        .then((res) => { setData(res.data) })
        .catch((err) => console.log(err))
    } else return
  }
  const navigate = useNavigate()
  const onHomeTextClick = useCallback(() => {
    navigate("/home")
  }, [])


  return (
    <div className="profilePage">
      <div className="backgroundImage" />
      <div className="down">
        <div className="down1">
          <div className="aboutParent">
            <b className="about">About</b>
            <div className="products">Product</div>
            <div className="resources">Resource</div>
            <div className="faqs">FAQ</div>
          </div>
          <div className="companyParent">
            <b className="about">Company</b>
            <div className="products">Our Team</div>
            <div className="resources">Partner With Us</div>
            <div className="faqs">Features</div>
          </div>
        </div>
        <b className="logo"><img src="https://www.bmw-tunisia.com/content/dam/bmw/marketB4R1/bmw-tunisia_com/BMWM_XXL.jpg" width="150" /></b>
      </div>
      <div className="banners">
        <img className="coverImage" alt="" src="../vectors//cover-image@2x.png" />
        <div className="editProfile">
          <img className="vectorIcon" alt="" src="../vectors//vector1.svg" />
          <div className="editProfile1">Edit Profile</div>
        </div>
        <img className="profilePic" alt="" src="{props.data.profilePic}" />
        <div className="text1">
          <div className="name">{data.firstname + " " + data.lastname}</div>
          <div className="surName">@{data.username}</div>
        </div>
      </div>
      <div className="card1">
        <div className="rectangle" />
        <div className="title">car title</div>
        <b className="price">car price $</b>
        <img className="rectangle-icon" alt="" src="/rectangle-23@2x.png" />
      </div>
    </div>
  )
}

export default EditProfilePage
