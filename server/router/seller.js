const router = require('express').Router();
const seller= require('../controller/seller')

//! login
router.post("/login",seller.getOne)
//!signup 
router.post("/signup",seller.Add)

//get all seller
router.get('/',seller.getAllSeller)

//delete seller
router.delete('/delete/:id',seller.deleteSeller)

module.exports=router