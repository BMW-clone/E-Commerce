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
    console.log("user", user);
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
                console.log("res", res);
                if (res.data) {
                    //!decoding token
                    const decoded = jwtDecoder(res.data)
                    //!setting data to logged user
                    setUser(decoded)
                    //! setting data to cookie
                    cookies.set("jwt-token", res.data, {
                        expires: new Date(decoded.exp * 1000)
                    })
                }
            })
            .catch((err) => {
                if (err.response.data === "user not found") {
                    axios.post("http://localhost:3000/seller/login", { username, password })
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
            <div className="sign-in">
                <div className="sign-in-child" />
                <div className="rectangle-parent">
                    <div className="group-child" />
                    <b className="explore-the-world">Explore the world of BMW</b>
                    <div
                        className="new-user-create-container"
                        onClick={() => navigate("/SignUp")}
                    >
                        <span>New user?</span>
                        <span className="create-an-account"> Create an account</span>
                    </div>
                    <div className="email-address-parent">
                        <div class="group">
                            <input type="text" required onChange={(e) => setUsername(e.target.value)} />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Username</label>
                        </div>

                        <div class="group">
                            <input type="password" required onChange={(e) => setPassword(e.target.value)} />
                            <span class="highlight"></span>
                            <span class="bar"></span>
                            <label>Password</label>
                        </div>
                    </div>
                </div>
                <img className="image-8-icon" alt="" src="https://res.cloudinary.com/dhz4wb76m/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1689289934/bmw_logo_kp6bvt.jpg?_s=public-apps" />
                <div className="sign-in1">Sign In</div>
                <div className="continue-wrapper" onClick={() => {
                    login()
                    if (user) {
                        if (user.role === 'client') {
                            navigate("/home")
                        } else if (user.role === 'seller') {
                            navigate("/sellerProfile")
                        } else {
                            navigate("/AdminDashboard")
                        }

                    } else {
                        alert("Username or password wrong")
                    }
                }}>
                    <div className="continue">Continue</div>
                </div>
            </div>
        </div>
    )
}

export default Login