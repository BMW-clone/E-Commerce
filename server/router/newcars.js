const router = require('express').Router()
const Cars= require('../controller/newcars')

router.get('/',Cars.getAll)
router.post('/add',Cars.addCar)
router.delete('/delete/:id',Cars.deleteCar)
router.put('/update/:id',Cars.updateCar)


module.exports = router