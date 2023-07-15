const router = require('express').Router()
const admin= require('../controller/admin')

//! login
router.post("/login",admin.getOne)
//!add new admin(this is not a signup. admin should be a dummy data so we add it only using thunder or posteman just to hash the password)
router.post("/add",admin.Add)
//!get one admin data 
router.post("/findOne",admin.getOneUser)

module.exports=router