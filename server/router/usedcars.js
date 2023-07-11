const express = require('express');
const router = express.Router();
const usedCars= require('../database/model/usedcars')

router.get('/usedcars',usedCars)