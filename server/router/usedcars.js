const router = require('express').Router()

const CarsInfo= require('../controller/usedcars')

router.get('/getall',CarsInfo.getAll)
router.post('/post',CarsInfo.postCar)
router.delete('/post',CarsInfo.deleteCar)
router.put('/post',CarsInfo.updateCar)

module.exports = router