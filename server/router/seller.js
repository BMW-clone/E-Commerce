const router = require('express').Router()
const seller= require('../controller/seller')

//! login
router.get("/login",seller.getOne)
//!signup 
router.post("/signup",seller.Add)

module.exports=router