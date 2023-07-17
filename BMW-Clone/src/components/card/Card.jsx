import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import './Card.css';

const Cards = (props) => {
    const { brand, price, category, color, year, image, mileage, model, transmission, hp, carburant, rate } = props;

    return (
        <div>
            <Card className='card-wrap' sx={{ maxWidth: 389 }}>
                <CardContent>
                    <Typography className='img-container' gutterBottom variant="h5" component="div">
                        <img id="prod-img" src={image} alt={brand} />
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        <div className='card-left-content-info'>
                            <span>{category}</span>
                            <span>{price}</span>
                        </div>
                        <div className='card-left-content-details'>
                            <span>{brand}</span>
                            <span>{price}DT</span>
                        </div>
                    </Typography>
                </CardContent>
                <div className='btn-container'>
                    {/* <button className="btn-1" >Explore now!</button> */}
                        
                </div>
            </Card>
        </div>
    );
};

export default Cards;
