const router = require('express').Router()
const Cars= require('../controller/newcars')

router.get('/',Cars.getAll)
router.post('/add',Cars.addCar)
router.delete('/delete/:id',Cars.deleteCar)
router.put('/update/:id',Cars.updateCar)
router.post('/filterByCategory', Cars.filterCarsByCategory);
router.post('/filterCarsByTransmition', Cars.filterCarsByTransmition);
router.post('/filterCarsByPrice', Cars.filterCarsByPrice);



module.exports = router