import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import './usedcars.css'
import React, { useEffect,useState } from 'react'
import axios from 'axios';



export default function FormDialog() {
    const [price,setPrice]=useState(null)
    const [image,setImage]=useState('')
    const [rate,setRate]=useState('')

    const handleSubmit = async () => {
        setTrigger(true);
        try {
          await axios.put(`http://localhost:3000/usedcars/update/${postId}`, info);
          navigation("/blog");
        } catch (err) {
          console.log(err);
        }
      };

      const handleImageUpload = () => {
        const form = new FormData();
        form.append('file', file);
        form.append('upload_preset', 'bmwclone');
        axios.post('https://api.cloudinary.com/v1_1/dhz4wb76m/image/upload', form)
            .then((res) => console.log(res))
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
          <TextField autoFocus margin="dense"  id="name"  label="rate"          variant="standard"  onChange={(e) => setRate(e.target.value)}/>
          <input type='file' onChange={(e) => setImage(e.target.files[0])} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>    
      </Dialog>
    </div>
  )}