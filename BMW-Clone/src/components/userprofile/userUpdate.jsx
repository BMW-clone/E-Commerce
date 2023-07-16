import React, { useState } from "react"
import axios from "axios";
import "./profile.css";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

const userUpdate = () => {
  const ariaLabel = { 'aria-label': 'description' }
  const [form, setForm] = useState({
    firstname: '',
    lastname: '',
    email: '',
    profilepic: '',
    phonenumber: '',
    coverpic: '',
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const { username,firstname, lastname, email, profilepic, phonenumber, coverpic } = form
    axios.put(`http://localhost:3000/client/update`, {username,firstname,lastname,email,profilepic,phonenumber,coverpic})
      .then((res) => {
        console.log("res ", res)
      })
      .catch((err) => {
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
        value={form.username}
        onChange={handleChange}
        inputProps={ariaLabel}
      />
      <Input
        type="text"
        className="firstname1"
        name="firstname"
        placeholder="first name"
        value={form.firstname}
        onChange={handleChange}
        inputProps={ariaLabel}
      />

      <Input
        type="text"
        className="lastname1"
        name="lastname"
        placeholder="last name"
        value={form.lastname}
        onChange={handleChange}
        inputProps={ariaLabel}
      />

      <Input
        type="email"
        className="email1"
        name="email"
        placeholder="email"
        value={form.email}
        onChange={handleChange}
        inputProps={ariaLabel}
      />

      <Input
        type="text"
        className="profilepic1"
        name="profilepic"
        placeholder="profile pic link"
        value={form.profilepic}
        onChange={handleChange}
        inputProps={ariaLabel}
      />

      <Input
        type="tel"
        className="phonenumber1"
        name="phonenumber"
        placeholder="phone number"
        value={form.phonenumber}
        onChange={handleChange}
        inputProps={ariaLabel}
      />

      <Input
        type="text"
        className="coverpic1"
        name="coverpic"
        placeholder="cover pic"
        value={form.coverpic}
        onChange={handleChange}
        inputProps={ariaLabel}
      />

      <button type="submit">Save Changes</button>
    </Box>
  )
}

export default userUpdate
