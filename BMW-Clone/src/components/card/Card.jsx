import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './Card.css'
const Cards = () => {
  return (
    <div className="padding">
    <Card className='card-wrap' sx={{ maxWidth: 389 }}>

    <CardContent>
      <Typography className='img-container' gutterBottom variant="h5" component="div" >
        <img id="prod-img"src="https://www.freepnglogos.com/uploads/bmw-png/white-bmw-car-png-image-pngpix-26.png" alt="bmw"/>
      </Typography>
      <Typography variant="body2" color="text.secondary">
       <div className='card-left-content-info'>
       <span>@user</span>
       <span>price</span>

       </div>
       <div className='card-left-content-details'>
       <span>productName</span>
       <span>20000DT</span>

       </div>
      </Typography>
    </CardContent>
    <div className='btn-container'>
    {/* <button className="btn-1" >Explore now!</button> */}
          <button  className="btn-2">Order Now</button>
    </div>
  </Card>
 </div>


  )
}

export default Cards