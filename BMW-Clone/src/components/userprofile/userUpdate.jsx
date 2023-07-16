import React from "react";
import "./profile.css"
import Box from '@mui/material/Box'
import Input from '@mui/material/Input'

const ariaLabel ={'aria-label':'description'}


const userUpdate = () => {
  return (
    <Box    component="form"
    sx={{
      '& > :not(style)': { m: 1 },
    }}
    noValidate
    autoComplete="off"
  >
    
    <Input
      type="text"
      className="firstname1"
      name="firstname"
      placeholder="first name"
      inputProps={ariaLabel}
    />
 
      <Input
        type="text"
        className="lastname1"
        name="lastname"
        placeholder="last name"
        inputProps={ariaLabel}
      />
      <Input
        type="email"
        className="email1"
        name="email"
        placeholder="email"
        inputProps={ariaLabel}
      />
      
      <Input
        type="text"
        className="profilepic1"
        name="profilepic"
        placeholder="^rofile pic link"
        inputProps={ariaLabel}
      />

      <Input
        type="tel"
        className="phonenumber1"
        name="phonenumber"
        placeholder="phone number"
        inputProps={ariaLabel}
      />

      <Input
        type="text"
        className="coverpic1"
        name="coverpic"
        placeholder="cover pic "
        inputProps={ariaLabel}
      />

      <button type="submit">Save Changes</button>
    </Box>
  )
}

export default userUpdate;
