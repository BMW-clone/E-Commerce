import { useEffect, useState } from "react";
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import axios from "axios";
import SellerProfileDetails from "../sellerProfile/SellerProfileDetails.jsx"
import UsedCarsOneSeller from "../sellerProfile/UsedCarsOneSeller.jsx"
// import "./Seller.css"
// import Post from "../allproducts/usedcars/Post.jsx";
import UsedCarsDetails from "../allproducts/usedcars/UsedCarsDetails.jsx";


const SellerProfile = () => {
  useEffect(() => {
    userinfo();
  }, []);
  const [data, setData] = useState([]);
  const [id,setId] = useState(null)
console.log();

  //!get user info from token
  const userinfo = () => {
    const cookie = new Cookies();
    const token = jwtDecoder(cookie.get("jwt-token"));
    console.log("token",token);
    if (token.role === "Seller") {
      axios
        .post("http://localhost:3000/seller/findOne", {
          username: token.username,
        })
        .then((res) => {
          setData(res.data);
          console.log(res.data)
          setId(res.data.id)
          console.log(res.data.id)
        })
        .catch((err) => console.log(err));
    }
  };
  

  
console.log(id)

  return (
    <div>

      <div>
        <SellerProfileDetails data={data} />
      </div>
    <div>
      <UsedCarsOneSeller id= {data?.id} />
    {/* </div>
    <UsedCarsDetails/>
      <div> */}
     
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
