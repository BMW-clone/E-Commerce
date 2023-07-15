import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Card from '../../card/Card.jsx';
import axios from 'axios';

import '../newcars/newcars.css';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const Newcars = () => {
    const [newcars, setNewcars] = useState([]);
    const [categoryFilter, setCategoryFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [transmition, setTransmission] = useState('');



    const getCars = () => {
        axios
            .get('http://localhost:3000/newcars')
            .then((res) => {
                setNewcars(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    useEffect(() => {
        getCars();
    }, []);

    const handleCategoryFilterChange = (event) => {
        const filterValue = event.target.value;
        setCategoryFilter(filterValue);

        if (filterValue === '') {
            getCars();
        } else {
            applyCategoryFilter(filterValue);
        }
    };

    const handlePriceFilterChange = (event) => {
        const filterValue = event.target.value;
        setPriceFilter(filterValue);
        if (filterValue === '') {
            getCars();
        } else {
            applyPriceFilter(filterValue);
        }
    };
    const handleTransmissionFilterChange = (event) => {
        const filterValue = event.target.value;
        setTransmission(filterValue);
        if (filterValue === '') {
            getCars();
        } else {
            applyTransmitionFilter(filterValue);
        }
    };

    const applyCategoryFilter = (filterValue) => {
        axios
            .post('http://localhost:3000/newcars/filterByCategory', { category: filterValue })
            .then((res) => {
                setNewcars(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const applyPriceFilter = (price) => {
        axios
            .post('http://localhost:3000/newcars/filterCarsByPrice', { price })
            .then((res) => {
                setNewcars(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const applyTransmitionFilter = (searchValue) => {
        axios
            .post('http://localhost:3000/newcars/filterCarsByTransmition', { transmition: searchValue })
            .then((res) => {
                setNewcars(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <Grid container spacing={2} className='allProduct-wrap'>
            <Grid item xs={12} md={2}>
                <div className='sideBar'>
                    <div className='sideBar-list'>
                        <FormControl fullWidth>
                            <InputLabel id="category">Categories</InputLabel>
                            <Select
                                labelId="category"
                                id="category"
                                value={categoryFilter} onChange={handleCategoryFilterChange}>
                                <MenuItem value=''>All</MenuItem>
                                <MenuItem value='SUV'>SUV</MenuItem>
                                <MenuItem value='COUPE'>Coupe</MenuItem>
                                <MenuItem value='SEDAN'>Sedan</MenuItem>
                                <MenuItem value='CABRIOLET'>Cabriolet</MenuItem>
                            </Select>



                        </FormControl>



                        <FormControl>
                            <InputLabel id="Price">Price</InputLabel>
                            <Select
                                labelId="Price"
                                id="Price"
                                value={priceFilter} onChange={handlePriceFilterChange}>
                                <MenuItem value=''>All</MenuItem>
                                <MenuItem value='lessThan50000'>Less than 50,000</MenuItem>
                                <MenuItem value='greaterThan50000'>Greater than 50,000</MenuItem>
                            </Select>
                        </FormControl>

                        <FormControl>
                            <InputLabel id="Transmition">Transmition</InputLabel>
                            <Select
                                labelId="Transmition"
                                id="Transmition"
                                value={transmition} onChange={handleTransmissionFilterChange}>
                                <MenuItem value=''>All</MenuItem>
                                <MenuItem value='MANUAL'>Manual</MenuItem>
                                <MenuItem value='AUTOMATIC'>Automatic</MenuItem>
                            </Select>
                        </FormControl>




                    </div>
                </div>
            </Grid>
            <Grid item xs={12} md={10}>
                <div className='card-columns'>
                    {newcars.map((car) => (
                        <Card
                            key={car.id}
                            brand={car.brand}
                            price={car.price}
                            category={car.category}
                            color={car.color}
                            year={car.year}
                            image={car.image}
                            mileage={car.mileage}
                            model={car.model}
                            transmission={car.transmission}
                            hp={car.hp}
                            carburant={car.carburant}
                            rate={car.rate}
                        />
                    ))}
                </div>
            </Grid>
        </Grid>
    );
};

export default Newcars;
