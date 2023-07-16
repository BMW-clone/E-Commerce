import React, { useState } from 'react'
import axios from 'axios'


function UpdateSeller({id}) {
  const[username,setUsername] = useState("")
  const [profilepic,setProfilePc] = useState("")
  const [coverpic,setCoverPic] = useState("")




  const info={
    username:username,
    profilepic:profilepic,
    coverpic:coverpic
  }

  const handleSubmit = async () => {
    try {
      await axios.put(`http://localhost:3000/seller/update/${id}`, info);
    } catch (err) {
      console.log(err);
    }
  };


  const handleImageUpload = (file) => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'bmwclone');
       axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/image/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => setImage(res.data.secure_url))
      .catch((err)=>{
        console.log(err);
      })
  }

  return (
    <div>
      


    </div>
  )
}

export default UpdateSeller