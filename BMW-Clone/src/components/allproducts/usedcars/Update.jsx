
import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import './usedcars.css'
import axios from 'axios';

export default function Update ({setTrigger , postId}) {
    const [price,setPrice]=useState(null)
    const [image,setImage]=useState(null)
    const [color,setColor]=useState('')

    const info = { price: Number(price),
      color: color,
      image: image
      };
  
  const handleSubmit = async () => {
    
    // setTrigger(true);
    try {
      await axios.put(`http://localhost:3000/usedcars/update/${postId}`, info);
    } catch (err) {
      console.log(err);
    }
  };

  // const handleImageUpload = (file) => {
  //   const form = new FormData();
  //   form.append('file', file);
  //   form.append('upload_preset', 'bmwclone');
  //   axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/image/upload', form)
  //     .then((res) => console.log(res))
  // }

  // const setFileTobse = (file) => {
  //   const reader = new FileReader();
  //   reader.readAsDataURL(file);
  //   reader.onloadend = () => {
  //    setImage(reader.result);
  //   };
  // };
  
  // const handleImage = (image) => { 
  //   setFileTobse(image);
  // };

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

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  
  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>

          <TextField autoFocus margin="dense"  id="name"  label="price"         variant="standard"  onChange={(e) => setPrice(e.target.value)} />
          <TextField autoFocus margin="dense"  id="name"  label="color"          variant="standard"  onChange={(e) => setColor(e.target.value)}/>
          {/* <input type='file' onChange={(e) => handleImageUpload(e.target.files[0])} /> */}
          <input type='file' onChange={(e) => handleImageUpload(e.target.files[0])} />
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { handleSubmit(); handleClose(); }}>Submit</Button>
        </DialogActions>    
        </DialogContent>
      </Dialog>
    </div>
  )}




   //   const handleImageUpload = () => {
    //     const form = new FormData();
    //     form.append('file', image);
    //     form.append('upload_preset', 'bmwclone');
    //     axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/image/upload', form)
    //         .then((res) => console.log(res))
    // }

    


