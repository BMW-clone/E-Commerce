import React from 'react'
import axios from 'axios'
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import { useState } from 'react';
import { useNavigate } from "react-router-dom"
import "./SignIn.css";
const Login = () => {
    const navigate = useNavigate()
    //! initialize cookies
    const cookies = new Cookies()
    //!logged user info
    const [user, setUser] = useState(null)
    //!entered login info
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    //!logout function
    const logout = () => {
        setUser(null)
        cookies.remove("jwt-token")
    }
    //!login function
    const login = () => {
        axios.post("http://localhost:3000/client/login", { username, password })
            .then((res) => {
                console.log("res", res.data);
                if (res.data) {
                    //!decoding token
                    const decoded = jwtDecoder(res.data)
                    //!setting data to logged user
                    setUser(decoded)
                    //! setting data to cookie
                    cookies.set("jwt-token", res.data, {
                        expires: new Date(decoded.exp * 1000)

                    })
                    navigate("/UserProfile")
                }
            }).catch((err) => {
                if (err.response.data === "user not found") {
                    axios.post("http://localhost:3000/seller/login", { username, password })
                        .then((res) => {
                            console.log("data", res.data);
                            if (res.data) {
                                //!decoding token
                                const decoded = jwtDecoder(res.data)
                                console.log("decoded", decoded);
                                //!setting data to logged user
                                setUser(decoded)
                                //! setting data to cookie
                                cookies.set("jwt-token", res.data, {
                                    expires: new Date(decoded.exp * 1000)
                                })
                                navigate("/SellerProfile")
                            }
                        }).catch((err) => {
                            if (err.response.data === "user not found") {

                                axios.post("http://localhost:3000/admin/login", { username, password })
                                    .then((res) => {
                                        if (res.data) {
                                            //!decoding token
                                            const decoded = jwtDecoder(res.data)
                                            //!setting data to logged user
                                            setUser(decoded)
                                            //! setting data to cookie
                                            cookies.set("jwt-token", res.data, {
                                                expires: new Date(decoded.exp * 1000)
                                            })
                                            navigate("/AdminDashboard")
                                        }
                                    }).catch((err) => {
                                        console.log(err)
                                    })
                            }
                        })
                }
            })
    }
    return (
        <div>
            <div className="sign-in-si">
                <div className="sign-in-child-si" />
                <div className="rectangle-parent-si">
                    <div className="group-child-si" />
                    <b className="explore-the-world-si">Explore the world of BMW</b>
                    <div
                        className="new-user-create-container-si"
                        onClick={() => navigate("/SignUp")}
                    >
                        <span>New user?</span>
                        <span className="create-an-account-si"> Create an account</span>
                    </div>
                    <div className="email-address-parent-si">
                        <div className="group-si">
                            <input type="text" required onChange={(e) => setUsername(e.target.value)} />
                            <span class="highlight-si"></span>
                            <span class="bar-si"></span>
                            <label>Username</label>
                        </div>
                        <div class="group-si">
                            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                            <span class="highlight-si"></span>
                            <span class="bar-si"></span>
                            <label>Password</label>
                        </div>
                    </div>
                </div>
                <img className="image-8-icon-si" alt="" src="https://res.cloudinary.com/dhz4wb76m/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689289934/bmw_logo_kp6bvt.jpg?_s=public-apps" />
                <div className="sign-in1-si">Sign In</div>
                <div className="continue-wrapper-si" onClick={() => {
                    login()
                }}>
                    <div className="continue-si">Continue</div>
                </div>
            </div>
        </div>
    )
}

export default Login