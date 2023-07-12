const router = require('express').Router();
const seller= require('../controller/seller')

//! login
router.get("/getOne",seller.getOne)

module.exports=router