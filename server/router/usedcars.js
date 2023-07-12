const router = require('express').Router()
const CarsInfo= require('../controller/usedcars')

router.get('/getall',CarsInfo.getAll)
router.post('/post',CarsInfo.postCar)
router.delete('/delete/:id',CarsInfo.deleteCar)
router.put('/update/:id',CarsInfo.updateCar)

module.exports = router