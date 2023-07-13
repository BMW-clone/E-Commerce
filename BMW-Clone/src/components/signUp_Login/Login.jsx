import React from 'react'
import axios from 'axios'
import jwtDecoder from "jwt-decode";
import Cookies from "universal-cookie";
import { useState } from 'react';
const Login = () => {
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
                //!decoding token
                const decoded = jwtDecoder(res.data)
                //!setting data to logged user
                setUser(decoded)
                //! setting data to cookie
                cookies.set("jwt-token", res.data, {
                    expires: new Date(decoded.exp * 1000)
                })
            })
    }
    return (
        <div><input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={login}>login</button>
            <button onClick={logout}>logout</button></div>
    )
}

export default Login