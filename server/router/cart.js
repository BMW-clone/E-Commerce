const router = require('express').Router()
const cart= require('../controller/cart')

router.get("/",cart.getOne)

module.exports=router