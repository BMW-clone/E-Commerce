import React, { useState } from "react"
import axios from "axios"
import "./profile.css"
import Box from "@mui/material/Box"
import Input from "@mui/material/Input";

const userUpdate = () => {
  const ariaLabel = { 'aria-label': 'description' }
  const [profilepic,setProfilePic] = useState(null)
  const [coverpic,setCoverPic] = useState(null)
  const [email,setEmail] = useState(null)
  const [firstname,setFirstname]=useState(null)
  const [lastname,setLastname]=useState(null)
  const [phoneNumber,setPhoneNumber]=useState(null)
  const [username,setUsername]=useState(null)
  


  const handleSubmit = () => {
    axios.put(`http://localhost:3000/client/update`, {username,firstname,lastname,email,profilepic,phoneNumber,coverpic})
      .then((res) => {
        console.log("res ", res)
      })
      .catch((err) => {
        console.log(err)
      })
  }


  const handleImageUpload = (file) => {
    const form = new FormData()
    form.append('file', file)
    form.append('upload_preset', 'bmwclone')
       axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => setProfilePic(res.data.secure_url))
      .catch((err)=>{
        console.log(err)
      })
  }
  const handleImageUpload1 = (file) => {
    const form = new FormData()
    form.append('file', file)
    form.append('upload_preset', 'bmwclone')
       axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => setCoverPic(res.data.secure_url))
      .catch((err)=>{
        console.log(err)
      })
  }
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit} 
    >
         <Input
        type="text"
        className="username1"
        name="username"
        placeholder="user name"
        onChange={((e)=>{setUsername(e.target.value)})}
        inputProps={ariaLabel}
      />
      <Input
        type="text"
        className="firstname1"
        name="firstname"
        placeholder="first name"
        onChange={((e)=>{setFirstname(e.target.value)})}
        inputProps={ariaLabel}
      />

      <Input
        type="text"
        className="lastname1"
        name="lastname"
        placeholder="last name"
        onChange={((e)=>{setLastname(e.target.value)})}
        inputProps={ariaLabel}
      />

      <Input
        type="email"
        className="email1"
        name="email"
        placeholder="email"
        onChange={((e)=>{setEmail(e.target.value)})}
        inputProps={ariaLabel}
      />
          <Input
        type="tel"
        className="phonenumber1"
        name="phonenumber"
        placeholder="phone number"
        onChange={((e)=>{setPhoneNumber(e.target.value)})}
        inputProps={ariaLabel}
      />


<input
        type="file"
        onChange={(e) => handleImageUpload(e.target.files[0])}
      />

<input
        type="file"
        onChange={(e) => handleImageUpload1(e.target.files[0])}
      />
      <button type="button" onClick={()=>handleSubmit()} >Save Changes</button>
    </Box>  
  )
}

export default userUpdate
