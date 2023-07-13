const router = require('express').Router()
const client= require('../controller/client')

//!login
router.post("/login",client.getOne)
router.post("/signup",client.Add)

module.exports=router