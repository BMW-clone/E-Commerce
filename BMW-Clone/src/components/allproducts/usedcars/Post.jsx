import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
function Post({ setTrigger }) {
  const [price, setPrice] = useState(null)
  const [category, setCategory] = useState('')
  const [color, setColor] = useState('')
  const [year, setYear] = useState(null)
  const [image, setImage] = useState(null)
  const [mileage, setMileAge] = useState('')
  const [model, setModel] = useState('')
  const [transmition, setTransmition] = useState('')
  const [hp, setHp] = useState(null)
  const [carburant, setCarburant] = useState('')

  const [open, setOpen] = useState(false);

  const info = {
    price: Number(price),
    category: category,
    color: color,
    year: Number(year),
    image: image,
    mileage: mileage,
    model: model,
    transmition: transmition,
    hp: Number(hp),
    carburant: carburant,

  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
      .catch((err) => {
        console.log(err);
      })
  }


  //!submit car 
  const handleSubmit = () => {
    // setTrigger(true);
    axios
      .post("http://localhost:3000/usedcars/post", info)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Button className='postB' variant="outlined" onClick={() => handleClickOpen()}>
        Post
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField autoFocus margin="dense" id="name" label="price" variant="standard" onChange={(e) => setPrice(e.target.value)} />
          <TextField autoFocus margin="dense" id="name" label="category" variant="standard" onChange={(e) => setCategory(e.target.value)} />
          <TextField autoFocus margin="dense" id="name" label="color" variant="standard" onChange={(e) => setColor(e.target.value)} />
          <TextField autoFocus margin="dense" id="name" label="year" variant="standard" onChange={(e) => setYear(e.target.value)} />
          <TextField autoFocus margin="dense" id="name" label="mileage" variant="standard" onChange={(e) => setMileAge(e.target.value)} />
          <TextField autoFocus margin="dense" id="name" label="model" variant="standard" onChange={(e) => setModel(e.target.value)} />
          <TextField autoFocus margin="dense" id="name" label="transmition" variant="standard" onChange={(e) => setTransmition(e.target.value)} />
          <TextField autoFocus margin="dense" id="name" label="hp" variant="standard" onChange={(e) => setHp(e.target.value)} />
          <TextField autoFocus margin="dense" id="name" label="carburant" variant="standard" onChange={(e) => setCarburant(e.target.value)} />
          <input type='file' onChange={(e) => handleImageUpload(e.target.files[0])} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={() => { handleSubmit(); handleClose() }}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Post
