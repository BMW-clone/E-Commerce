import React, { useState } from 'react'
import axios from 'axios'
const SignUp = () => {
    // const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilepic, setProfilePic] = useState("https://res.cloudinary.com/dhz4wb76m/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1688671165/profile_images/qdq7bnpm9lqqbo3ufmc9.jpg?_s=public-apps")
    const [role, setRole] = useState("")
    const [phoneNumber, setPhoneNumber] = useState("")
    const [coverpic, setCoverPic] = useState("https://notepd.s3.amazonaws.com/default-cover.png")

    //!signup function for client
    const handleSingUpClient = () => {
        axios.post("http://localhost:3000/client/signup", { username, email, password, profilepic, role, phoneNumber, coverpic })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    //!signup function for seller
    const handleSingUpSeller = () => {
        axios.post("http://localhost:3000/seller/signup", { username, email, password, profilepic, role, phoneNumber, coverpic })
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
    }
    console.log(role);
    return (
        <div><input type="text" placeholder='username' onChange={(e) => setUsername(e.target.value)} />
            <br />
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} />
            <br />
            <input type="text" placeholder='password' onChange={(e) => setPassword(e.target.value)} />
            <br />
            <input type="checkbox" value="client" onChange={(e) => setRole(e.target.value)} /> client
            <input type="checkbox" value="seller" onChange={(e) => setRole(e.target.value)} /> seller

            <br />
            <input type="text" placeholder='phone number' onChange={(e) => setPhoneNumber(e.target.value)} />
            <br />
            <button onClick={() => {
                if (role === "client") {
                    handleSingUpClient()
                } else {
                    handleSingUpSeller()
                }
            }}>SignUp</button>
        </div >
    )
}

export default SignUp