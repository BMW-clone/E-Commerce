import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import "../SignUp/SignUp.css"
const SignUp = () => {

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [firstname, setFirstname] = useState("")
    const [lastname, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [profilepic, setProfilePic] = useState("https://res.cloudinary.com/dhz4wb76m/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688671165/profile_images/qdq7bnpm9lqqbo3ufmc9.jpg?_s=public-apps")
    const [role, setRole] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [coverpic, setCoverPic] = useState("https://notepd.s3.amazonaws.com/default-cover.png")
    const navigate = useNavigate()
    //!signup function for client
    const handleSingUpClient = () => {
        axios.post("http://localhost:3000/client/signup", { firstname, lastname, username, email, password, profilepic, role, phoneNumber, coverpic })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    //!signup function for seller
    const handleSingUpSeller = () => {
        axios.post("http://localhost:3000/seller/signup", { firstname, lastname, username, email, password, profilepic, role, phoneNumber, coverpic })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }

    return (
        <div className="sign-up-sp">
            <div className="sign-up-child-sp" />
            <div className="rectangle-parent-sp">
                <div className="group-child-sp" />
                <b className="begin-your-meta-sp">Begin your BMW  journey here</b>
                <div
                    className="already-a-member-container-sp"
                    onClick={() => navigate("/")}
                >
                    <span>
                        <span>Already a Member?</span>
                        <span className="span-sp" >{` `}</span>
                    </span>
                    <span className="span-sp">
                        <span className="sign-in1-sp">Sign In</span>
                    </span>
                </div>
                <div className="group-parent-sp">
                    <div className="full-name-parent-sp2">
                        <div className="group">
                            <input type="text" required onChange={(e) => setEmail(e.target.value)} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Email</label>
                        </div>
                    </div>
                    <div className="last-name-parent-sp2">
                        <div className="group">
                            <input type="text" required onChange={(e) => setUsername(e.target.value)} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Username</label>
                        </div>
                    </div>
                </div>
                <div className="vector-parent-sp">
                    <div className="group">
                        <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Password</label>
                    </div>
                </div>
                <div className="vector-parent-sp2">
                    <div className="group">
                        <input type="text" required onChange={(e) => setPhoneNumber(e.target.value)} />
                        <span className="highlight"></span>
                        <span className="bar"></span>
                        <label>Phone Number</label>
                    </div>
                </div>
                <div className="group-parent-sp">
                    <div className="full-name-parent-sp">
                        <div className="group">
                            <input type="text" required onChange={(e) => setFirstname(e.target.value)} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>First Name</label>
                        </div>
                    </div>
                    <div className="last-name-parent-sp">
                        <div className="group">
                            <input type="text" required onChange={(e) => setLastName(e.target.value)} />
                            <span className="highlight"></span>
                            <span className="bar"></span>
                            <label>Last Name</label>
                        </div>

                    </div>
                </div>
                <div className="selectdiv">
                    <select onChange={(e) => { setRole(e.target.value); }} >
                        <option selected disabled> Select Account Type </option>
                        <option defaultValue="client">Client</option>
                        <option defaultValue="seller">Seller</option>
                    </select>

                </div>
                <div className="create-account-wrapper-sp" onClick={() => {
                    if (role === "Client") {
                        handleSingUpClient()
                        navigate("/")
                    } else {
                        handleSingUpSeller()
                        navigate("/")
                    }
                }}>
                    <div className="create-account-sp">Create Account</div>
                </div>
            </div>
            <img className="image-8-icon-sp" alt="" src="https://res.cloudinary.com/dhz4wb76m/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689289934/bmw_logo_kp6bvt.jpg?_s=public-apps" />
            <div className="sign-up1-sp">Sign Up</div>
        </div >
    );
};

export default SignUp