const router = require('express').Router()
const client= require('../controller/client')

//!login
router.post("/login",client.getOne)
//!! signup
router.post("/signup",client.Add)
//! update
router.put("/update",client.update)
//!get one user data
router.post("/findOne",client.getOneUser)

module.exports=router