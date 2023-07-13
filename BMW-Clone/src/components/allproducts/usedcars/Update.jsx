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
    const [category,setCategory]=useState('')
    const [color,setColor]=useState('')
    const [year,setYear]=useState(null)
    const [image,setImage]=useState('')
    const [mileage,setMileAge]=useState('')
    const [model,setModel]=useState('')
    const [transmition,setTransmition]=useState('')
    const [hp,setHp]=useState('')
    const [carburant,setCarburant]=useState('')
    const [rate,setRate]=useState('')
    const [status,setsSatus]=useState('')


    const handleSubmit = async () => {
        setTrigger(true);
        try {
          await axios.put(`http://localhost:3000/blogs/${postId}`, info);
          navigation("/blog");
        } catch (err) {
          console.log(err);
        }
      };


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
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField autoFocus margin="dense"  id="name"  label="price"         variant="standard"  onChange={(e) => setPrice(e.target.value)} />
          <TextField autoFocus margin="dense"  id="name"  label="category"      variant="standard" />
          <TextField autoFocus margin="dense"  id="name"  label="color"         variant="standard"/>
          <TextField autoFocus margin="dense"  id="name"  label="year"          variant="standard"/>  
          <TextField autoFocus margin="dense"  id="name"  label="mileage"       variant="standard" />
          <TextField autoFocus margin="dense"  id="name"  label="model"         variant="standard"/>
          <TextField autoFocus margin="dense"  id="name"  label="transmition"   variant="standard" />
          <TextField autoFocus margin="dense"  id="name"  label="hp"            variant="standard" />
          <TextField autoFocus margin="dense"  id="name"  label="carburant"     variant="standard"/>
          <TextField autoFocus margin="dense"  id="name"  label="rate"          variant="standard"/>
          <TextField autoFocus margin="dense"  id="name"  label="status"        variant="standard"  />
          <button    autoFocus margin="dense"  id="name"  label="image"         > image </button>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClose}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  )}