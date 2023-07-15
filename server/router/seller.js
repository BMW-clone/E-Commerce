const router = require('express').Router();
const seller= require('../controller/seller')

//! login
router.post("/login",seller.getOne)
//!signup 
router.post("/signup",seller.Add)
//! get one user data
router.post("/findOne",seller.getOneUser)

module.exports=router