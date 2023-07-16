import { useCallback, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import SellerProfileDetails from "./SellerProfileDetails";

const SellerProfile = () => {
  useEffect(() => {
    userinfo();
  }, []);
  const [data, setData] = useState([]);
  //!get user info from token
  const userinfo = () => {
    const cookie = new Cookies();
    const token = jwtDecoder(cookie.get("jwt-token"));
    console.log(token);
    if (token.role === "Seller") {
      axios
        .post("http://localhost:3000/seller/findOne", {
          username: token.username,
        })
        .then((res) => {
          setData(res.data);
        })
        .catch((err) => console.log(err));
    }
  };
  return (
    <div>

      <div>
        <SellerProfileDetails data={data} />
      </div>

      <div>
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
          <b className="logo">
            <img
              src="https://www.bmw-tunisia.com/content/dam/bmw/marketB4R1/bmw-tunisia_com/BMWM_XXL.jpg"
              width="150"
            />
          </b>
        </div>
      </div>
    </div>
  );
};

export default SellerProfile;
