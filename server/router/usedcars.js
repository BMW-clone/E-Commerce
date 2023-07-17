const router = require('express').Router()
const CarsInfo= require('../controller/usedcars')

router.get('/getall',CarsInfo.getAll)

router.get('/getall/:idSeller',CarsInfo.getAllSeller)

router.post('/post',CarsInfo.postCar)
router.delete('/delete/:id',CarsInfo.deleteCar)
router.put('/update/:id',CarsInfo.updateCar)
router.post('/filterCarsByCategory', CarsInfo.filterCarsByCategory);
router.post('/filterCarsByTransmition', CarsInfo.filterCarsByTransmition);
router.post('/filterCarsByPrice', CarsInfo.filterCarsByPrice);

module.exports = router