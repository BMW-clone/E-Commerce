import React, { useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function UpdateSeller({id}) {
  console.log(id)
  const[firstname,setFirstName] = useState("")
  const[lastname,setLastName] = useState("")
  const[profilepic,setProfilepic] = useState("")
  const[coverpic,setCoverPic] = useState("")

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const info={
    firstname:firstname,
    lastname:lastname,
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



  const handleProfileImage = (file) => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'bmwclone');
       axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/image/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => setProfilepic(res.data.secure_url))
      .catch((err)=>{
        console.log(err);
      })
  }


  const handleCoverImage = (file) => {
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', 'bmwclone');
       axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/image/upload', form, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((res) => setCoverPic(res.data.secure_url))
      .catch((err)=>{
        console.log(err);
      })
  }


  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit profile
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name"  label="firstName"  type="email"  fullWidth  variant="standard" onChange={(e) => setFirstName(e.target.value)}/>
          <TextField  autoFocus  margin="dense"  id="name"  label="lastName"  type="email" fullWidth  variant="standard" onChange={(e) => setLastName(e.target.value)}/>
          <input type='file' onChange={(e) => handleProfileImage(e.target.files[0])} />
          <input type='file' onChange={(e) => handleCoverImage(e.target.files[0])} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { handleSubmit(); handleClose(); }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default UpdateSeller