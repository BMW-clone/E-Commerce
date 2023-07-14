import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";


const EditProfilePage = () => {
  const navigate = useNavigate()

  const onHomeTextClick = useCallback(() => {
    navigate("/home")
  }, [])


  return (
    <div className="edit-profile-page">
      <div className="background-image" />
      <div className="footer">
        <div className="footer1">
          <div className="about-parent">
            <b className="about">About</b>
            <div className="product">Product</div>
            <div className="resource">Resource</div>
            <div className="faq">FAQ</div>
          </div>
          <div className="company-parent">
            <b className="about">Company</b>
            <div className="product">Our Team</div>
            <div className="resource">Partner With Us</div>
            <div className="term-condition">{`Privacy & Policy`}</div>
            <div className="faq">Features</div>
          </div>
          <div className="contact-parent">
            <b className="about">Contact</b>
            <div className="product">+012 3456789</div>
            <div className="resource">adorableprogrammer@gmail.com</div>
          </div>
        </div>
        <b className="logo"><img src="https://www.bmw-tunisia.com/content/dam/bmw/marketB4R1/bmw-tunisia_com/BMWM_XXL.jpg" width="150"/></b>
      </div>
      <div className="banner">
        <img className="cover-image-icon" alt="" src="../vectors//cover-image@2x.png" />
        <div className="edit-profile">
          <img className="vector-icon" alt="" src="../vectors//vector1.svg" />
          <div className="edit-profile1">Edit Profile</div>
        </div>
        <img className="profile-pic-icon" alt="" src="{props.data.profilePic}" />
        <div className="text">
          <div className="farhan-khan">Wassim Aziza</div>
          <div className="farhan">@wassim</div>
          <div className="caption">
          a German automobile manufacturer known for producing luxury vehicles and motorcycles. The company was founded in 1916 and has since established itself as one of the leading names in the automotive industry
          </div>
        </div>
      </div>
      <div className="card1">
          <div className="rectangle-div" />
          <div className="secret-rare">Secret Rare</div>
          <div className="secret-rare1">Secret Rare</div>
          <div className="secret-rare2">Secret Rare</div>
          <b className="lorem-ipsum">Lorem Ipsum</b>
          <b className="eth">0.005 ETH</b>
          <img className="rectangle-icon" alt="" src="/rectangle-23@2x.png" />
          <div className="fa0051">FA#0051</div>
          <div className="fa00511">FA#0051</div>
          <div className="fa00512">FA#0051</div>
        </div>
      <div className="header">
        <b className="logo1">Logo</b>
        <div className="home" onClick={onHomeTextClick}>
          Home
        </div>
        <div className="personal-collection">Products</div>
        <div className="search-bar">
            Search
        </div>
        <div className="explore-parent">
          <div className="explore">About us </div>
        </div>
        <div className="wallet-wrapper">
          <div className="wallet"> Cart </div>
        </div>
      </div>
    </div>
  )
}

export default EditProfilePage
