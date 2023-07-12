const router = require('express').Router()
const newCars   = require('../controller/usedcars')

router.post('/add',newCars.addNewCar)
router.delete('/delete/:id',newCars.deleteNewCar)
router.put('/update/:id',newCars.updateNewCar)